"use client"

import { useEffect, useState } from "react"

export default function IndexedDBDemo() {
  const [isSupported] = useState("indexedDB" in window)
  const [isDBOpen, setIsDBOpen] = useState(false)
  const [dbName] = useState("DemoDB")
  const [dbVersion] = useState(1)
  const [dbEvents, setDbEvents] = useState([])
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState({ title: "", content: "", color: "#ffffff" })
  const [searchTerm, setSearchTerm] = useState("")
  const [stats, setStats] = useState({ count: 0, size: 0 })

  // Initialiser la base de données
  useEffect(() => {
    if (!isSupported) return

    const openDB = () => {
      const request = indexedDB.open(dbName, dbVersion)

      request.onerror = (event) => {
        addDbEvent("❌ Erreur", `Impossible d'ouvrir la base de données: ${event.target.error}`, "error")
      }

      request.onsuccess = (event) => {
        addDbEvent("✅ Succès", `Base de données "${dbName}" ouverte`, "success")
        setIsDBOpen(true)
        loadNotes()
      }

      request.onupgradeneeded = (event) => {
        const db = event.target.result

        // Créer un object store pour les notes
        if (!db.objectStoreNames.contains("notes")) {
          const notesStore = db.createObjectStore("notes", { keyPath: "id", autoIncrement: true })

          // Créer des index pour la recherche
          notesStore.createIndex("title", "title", { unique: false })
          notesStore.createIndex("content", "content", { unique: false })
          notesStore.createIndex("timestamp", "timestamp", { unique: false })

          addDbEvent("🔄 Mise à jour", `Schéma de base de données créé (v${dbVersion})`, "info")
        }
      }
    }

    openDB()
  }, [isSupported, dbName, dbVersion])

  const addDbEvent = (action, details, status = "info") => {
    setDbEvents((prev) => [
      {
        id: Date.now(),
        action,
        details,
        status,
        timestamp: new Date().toLocaleTimeString(),
      },
      ...prev.slice(0, 19),
    ])
  }

  const loadNotes = (filter = "") => {
    if (!isDBOpen) return

    const request = indexedDB.open(dbName)

    request.onsuccess = (event) => {
      const db = event.target.result
      const transaction = db.transaction(["notes"], "readonly")
      const notesStore = transaction.objectStore("notes")
      const allNotesRequest = notesStore.getAll()

      allNotesRequest.onsuccess = () => {
        let allNotes = allNotesRequest.result

        // Filtrer si nécessaire
        if (filter) {
          const filterLower = filter.toLowerCase()
          allNotes = allNotes.filter(
            (note) =>
              note.title.toLowerCase().includes(filterLower) || note.content.toLowerCase().includes(filterLower),
          )
        }

        // Trier par date décroissante
        allNotes.sort((a, b) => b.timestamp - a.timestamp)

        setNotes(allNotes)

        // Calculer les statistiques
        const totalSize = allNotes.reduce((size, note) => {
          return size + JSON.stringify(note).length
        }, 0)

        setStats({
          count: allNotes.length,
          size: totalSize,
        })

        if (filter) {
          addDbEvent("🔍 Recherche", `${allNotes.length} notes trouvées pour "${filter}"`, "info")
        } else {
          addDbEvent("📋 Chargement", `${allNotes.length} notes chargées`, "info")
        }
      }

      allNotesRequest.onerror = (event) => {
        addDbEvent("❌ Erreur", `Chargement échoué: ${event.target.error}`, "error")
      }
    }
  }

  const addNote = () => {
    if (!isDBOpen || !newNote.title.trim()) return

    const request = indexedDB.open(dbName)

    request.onsuccess = (event) => {
      const db = event.target.result
      const transaction = db.transaction(["notes"], "readwrite")
      const notesStore = transaction.objectStore("notes")

      const note = {
        ...newNote,
        timestamp: Date.now(),
      }

      const addRequest = notesStore.add(note)

      addRequest.onsuccess = () => {
        addDbEvent("✅ Ajout", `Note "${note.title}" ajoutée`, "success")
        setNewNote({ title: "", content: "", color: "#ffffff" })
        loadNotes()
      }

      addRequest.onerror = (event) => {
        addDbEvent("❌ Erreur", `Ajout échoué: ${event.target.error}`, "error")
      }
    }
  }

  const deleteNote = (id, title) => {
    if (!isDBOpen) return

    const request = indexedDB.open(dbName)

    request.onsuccess = (event) => {
      const db = event.target.result
      const transaction = db.transaction(["notes"], "readwrite")
      const notesStore = transaction.objectStore("notes")

      const deleteRequest = notesStore.delete(id)

      deleteRequest.onsuccess = () => {
        addDbEvent("🗑️ Suppression", `Note "${title}" supprimée`, "warning")
        loadNotes(searchTerm)
      }

      deleteRequest.onerror = (event) => {
        addDbEvent("❌ Erreur", `Suppression échouée: ${event.target.error}`, "error")
      }
    }
  }

  const clearAllNotes = () => {
    if (!isDBOpen) return

    if (!confirm("Êtes-vous sûr de vouloir supprimer toutes les notes ?")) return

    const request = indexedDB.open(dbName)

    request.onsuccess = (event) => {
      const db = event.target.result
      const transaction = db.transaction(["notes"], "readwrite")
      const notesStore = transaction.objectStore("notes")

      const clearRequest = notesStore.clear()

      clearRequest.onsuccess = () => {
        addDbEvent("🗑️ Suppression", "Toutes les notes ont été supprimées", "warning")
        loadNotes()
      }

      clearRequest.onerror = (event) => {
        addDbEvent("❌ Erreur", `Suppression échouée: ${event.target.error}`, "error")
      }
    }
  }

  const handleSearch = () => {
    loadNotes(searchTerm)
  }

  const clearSearch = () => {
    setSearchTerm("")
    loadNotes("")
  }

  const clearEvents = () => {
    setDbEvents([])
  }

  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
  }

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString()
  }

  if (!isSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">💾 IndexedDB API</h2>
          <p className="demo-description">Base de données locale du navigateur.</p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">❌ IndexedDB API non supportée</div>
          <p style={{ marginTop: "1rem", color: "#666" }}>Cette API n'est pas supportée sur ce navigateur.</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="demo-header">
        <h2 className="demo-title">💾 IndexedDB API</h2>
        <p className="demo-description">
          Stockez et interrogez des données complexes localement. Base de données NoSQL complète dans le navigateur avec
          support de transactions.
        </p>
      </div>

      <div className="demo-section">
        <h3>État de la Base de Données</h3>
        <div className="grid grid-3">
          <div className="card">
            <h4>📊 Statut</h4>
            <div className={`status-indicator ${isDBOpen ? "online" : "offline"}`}>
              {isDBOpen ? "✅ Connecté" : "❌ Déconnecté"}
            </div>
          </div>
          <div className="card">
            <h4>📝 Notes</h4>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#667eea" }}>{stats.count}</p>
          </div>
          <div className="card">
            <h4>💾 Taille</h4>
            <p style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#4CAF50" }}>{formatSize(stats.size)}</p>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Ajouter une Note</h3>
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "1rem",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        >
          <div className="input-group">
            <label>Titre:</label>
            <input
              type="text"
              value={newNote.title}
              onChange={(e) => setNewNote((prev) => ({ ...prev, title: e.target.value }))}
              placeholder="Titre de la note"
            />
          </div>

          <div className="input-group">
            <label>Contenu:</label>
            <textarea
              value={newNote.content}
              onChange={(e) => setNewNote((prev) => ({ ...prev, content: e.target.value }))}
              placeholder="Contenu de la note"
              rows={3}
            />
          </div>

          <div className="input-group">
            <label>Couleur:</label>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <input
                type="color"
                value={newNote.color}
                onChange={(e) => setNewNote((prev) => ({ ...prev, color: e.target.value }))}
                style={{ width: "50px", height: "30px" }}
              />
              <span>{newNote.color}</span>
            </div>
          </div>

          <button
            className="btn success"
            onClick={addNote}
            disabled={!newNote.title.trim()}
            style={{ marginTop: "1rem" }}
          >
            💾 Sauvegarder Note
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h3>Rechercher des Notes</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher par titre ou contenu"
            style={{ flex: 1 }}
          />
          <button className="btn" onClick={handleSearch}>
            🔍 Rechercher
          </button>
          <button className="btn" onClick={clearSearch}>
            ❌ Effacer
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h3>Notes Enregistrées</h3>
        <div className="demo-controls">
          <button className="btn" onClick={() => loadNotes()}>
            🔄 Rafraîchir
          </button>
          <button className="btn danger" onClick={clearAllNotes}>
            🗑️ Supprimer Tout
          </button>
        </div>

        <div style={{ marginTop: "1rem" }}>
          {notes.length === 0 ? (
            <div
              style={{
                padding: "2rem",
                textAlign: "center",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                border: "1px dashed #ddd",
              }}
            >
              <p style={{ color: "#666", fontStyle: "italic" }}>
                {searchTerm ? "Aucune note ne correspond à votre recherche" : "Aucune note enregistrée"}
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "1rem",
              }}
            >
              {notes.map((note) => (
                <div
                  key={note.id}
                  style={{
                    backgroundColor: note.color,
                    padding: "1rem",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    position: "relative",
                    minHeight: "150px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h4 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>{note.title}</h4>
                  <p
                    style={{
                      margin: "0 0 1rem",
                      fontSize: "0.9rem",
                      flex: 1,
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {note.content}
                  </p>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#666",
                      borderTop: "1px solid rgba(0,0,0,0.1)",
                      paddingTop: "0.5rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>{formatDate(note.timestamp)}</span>
                    <button
                      onClick={() => deleteNote(note.id, note.title)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#f44336",
                        fontSize: "1rem",
                      }}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="demo-section">
        <h3>Historique des Opérations</h3>
        <div className="demo-controls">
          <button className="btn danger" onClick={clearEvents}>
            🗑️ Effacer Historique
          </button>
        </div>

        <div
          style={{
            maxHeight: "300px",
            overflowY: "auto",
            border: "2px solid #ddd",
            borderRadius: "12px",
            padding: "1rem",
            backgroundColor: "#f8f9fa",
            marginTop: "1rem",
          }}
        >
          {dbEvents.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
              Utilisez les contrôles pour voir l'historique
            </p>
          ) : (
            dbEvents.map((event) => (
              <div
                key={event.id}
                style={{
                  padding: "0.75rem",
                  margin: "0.5rem 0",
                  borderRadius: "8px",
                  backgroundColor:
                    event.status === "success"
                      ? "#e8f5e8"
                      : event.status === "error"
                        ? "#ffebee"
                        : event.status === "warning"
                          ? "#fff3e0"
                          : "#fff",
                  border: `1px solid ${
                    event.status === "success"
                      ? "#c8e6c8"
                      : event.status === "error"
                        ? "#ffcdd2"
                        : event.status === "warning"
                          ? "#ffcc02"
                          : "#ddd"
                  }`,
                  animation: "slideIn 0.3s ease",
                }}
              >
                <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>{event.action}</div>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>
                  {event.details} | {event.timestamp}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="demo-section">
        <h3>Fonctionnalités et Capacités</h3>
        <div className="demo-output">
          {`💾 Caractéristiques d'IndexedDB:
- Stockage NoSQL orienté objet
- Capacité de stockage importante (plusieurs GB)
- Transactions ACID complètes
- Indexation et recherche avancée
- API asynchrone basée sur les événements

🔑 Concepts clés:
- Database: Container principal
- Object Store: Collection d'objets (comme une table)
- Index: Pour recherche rapide
- Transaction: Groupe d'opérations atomiques
- Cursor: Pour parcourir les résultats

💡 Avantages vs localStorage:
- Stockage structuré d'objets complexes
- Performances supérieures pour grandes quantités
- Transactions et requêtes avancées
- Meilleure gestion de la mémoire`}
        </div>
      </div>

      <div className="demo-section">
        <h3>Applications Pratiques</h3>
        <div className="grid">
          <div className="card">
            <h4>📱 Mode Hors-ligne</h4>
            <p>Applications fonctionnelles sans connexion</p>
          </div>
          <div className="card">
            <h4>⚡ Performance</h4>
            <p>Cache local pour données fréquemment utilisées</p>
          </div>
          <div className="card">
            <h4>📊 Données Utilisateur</h4>
            <p>Préférences et paramètres persistants</p>
          </div>
          <div className="card">
            <h4>🔄 Synchronisation</h4>
            <p>Stockage temporaire avant envoi au serveur</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}

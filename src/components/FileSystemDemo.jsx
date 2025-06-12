"use client"

import { useState } from "react"

export default function FileSystemDemo() {
  const [isSupported] = useState("showOpenFilePicker" in window)
  const [fileHandle, setFileHandle] = useState(null)
  const [fileContent, setFileContent] = useState("")
  const [fileName, setFileName] = useState("")
  const [fileSize, setFileSize] = useState(0)
  const [fileType, setFileType] = useState("")
  const [operationHistory, setOperationHistory] = useState([])

  const addToHistory = (operation, details) => {
    setOperationHistory((prev) => [
      {
        id: Date.now(),
        operation,
        details,
        timestamp: new Date().toLocaleTimeString(),
      },
      ...prev.slice(0, 9),
    ])
  }

  const openFile = async () => {
    if (!isSupported) {
      addToHistory("❌ Erreur", "File System Access API non supportée")
      return
    }

    try {
      const [handle] = await window.showOpenFilePicker({
        types: [
          {
            description: "Fichiers texte",
            accept: {
              "text/plain": [".txt"],
              "text/javascript": [".js"],
              "text/html": [".html"],
              "application/json": [".json"],
              "text/css": [".css"],
              "text/markdown": [".md"],
            },
          },
        ],
      })

      const file = await handle.getFile()
      const content = await file.text()

      setFileHandle(handle)
      setFileContent(content)
      setFileName(file.name)
      setFileSize(file.size)
      setFileType(file.type)

      addToHistory("📂 Fichier ouvert", `${file.name} (${(file.size / 1024).toFixed(2)} KB)`)
    } catch (err) {
      if (err.name !== "AbortError") {
        addToHistory("❌ Erreur", `Impossible d'ouvrir le fichier: ${err.message}`)
      }
    }
  }

  const saveFile = async () => {
    if (!fileHandle) {
      addToHistory("❌ Erreur", "Aucun fichier ouvert")
      return
    }

    try {
      const writable = await fileHandle.createWritable()
      await writable.write(fileContent)
      await writable.close()

      addToHistory("💾 Fichier sauvegardé", fileName)
    } catch (err) {
      addToHistory("❌ Erreur", `Impossible de sauvegarder: ${err.message}`)
    }
  }

  const saveAsFile = async () => {
    if (!isSupported) {
      addToHistory("❌ Erreur", "File System Access API non supportée")
      return
    }

    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: fileName || "nouveau-fichier.txt",
        types: [
          {
            description: "Fichiers texte",
            accept: {
              "text/plain": [".txt"],
              "text/javascript": [".js"],
              "text/html": [".html"],
              "application/json": [".json"],
            },
          },
        ],
      })

      const writable = await handle.createWritable()
      await writable.write(fileContent)
      await writable.close()

      setFileHandle(handle)
      setFileName(handle.name)

      addToHistory("💾 Fichier sauvegardé sous", handle.name)
    } catch (err) {
      if (err.name !== "AbortError") {
        addToHistory("❌ Erreur", `Impossible de sauvegarder: ${err.message}`)
      }
    }
  }

  const createNewFile = () => {
    setFileHandle(null)
    setFileContent("// Nouveau fichier\n// Commencez à taper votre contenu ici...")
    setFileName("nouveau-fichier.txt")
    setFileSize(0)
    setFileType("text/plain")

    addToHistory("📄 Nouveau fichier", "Fichier créé en mémoire")
  }

  const openDirectory = async () => {
    if (!("showDirectoryPicker" in window)) {
      addToHistory("❌ Erreur", "Directory Picker non supporté")
      return
    }

    try {
      const dirHandle = await window.showDirectoryPicker()
      let fileCount = 0

      for await (const [name, handle] of dirHandle.entries()) {
        fileCount++
        if (fileCount > 10) break // Limiter l'affichage
      }

      addToHistory("📁 Dossier ouvert", `${dirHandle.name} (${fileCount}+ fichiers)`)
    } catch (err) {
      if (err.name !== "AbortError") {
        addToHistory("❌ Erreur", `Impossible d'ouvrir le dossier: ${err.message}`)
      }
    }
  }

  const clearHistory = () => {
    setOperationHistory([])
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 B"
    const k = 1024
    const sizes = ["B", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  if (!isSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">📁 File System Access API</h2>
          <p className="demo-description">Accès direct au système de fichiers.</p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">❌ File System Access API non supportée</div>
          <p style={{ marginTop: "1rem", color: "#666" }}>
            Cette API est supportée sur Chrome/Edge 86+ et nécessite HTTPS.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="demo-header">
        <h2 className="demo-title">📁 File System Access API</h2>
        <p className="demo-description">
          Accédez directement aux fichiers locaux. Ouvrez, modifiez et sauvegardez des fichiers comme une application
          native.
        </p>
      </div>

      <div className="demo-section">
        <h3>Opérations sur les Fichiers</h3>
        <div className="demo-controls">
          <button className="btn success" onClick={openFile}>
            📂 Ouvrir Fichier
          </button>
          <button className="btn" onClick={createNewFile}>
            📄 Nouveau Fichier
          </button>
          <button className="btn" onClick={saveFile} disabled={!fileHandle}>
            💾 Sauvegarder
          </button>
          <button className="btn" onClick={saveAsFile}>
            💾 Sauvegarder Sous...
          </button>
          <button className="btn" onClick={openDirectory}>
            📁 Ouvrir Dossier
          </button>
        </div>
      </div>

      {fileName && (
        <div className="demo-section">
          <h3>Informations du Fichier</h3>
          <div className="grid grid-2">
            <div className="card">
              <h4>📄 Détails</h4>
              <p>
                <strong>Nom:</strong> {fileName}
              </p>
              <p>
                <strong>Taille:</strong> {formatFileSize(fileSize)}
              </p>
              <p>
                <strong>Type:</strong> {fileType || "Non défini"}
              </p>
            </div>
            <div className="card">
              <h4>📊 État</h4>
              <div className={`status-indicator ${fileHandle ? "online" : "loading"}`}>
                {fileHandle ? "💾 Lié au fichier" : "📝 En mémoire"}
              </div>
              <p style={{ fontSize: "0.8rem", color: "#666", marginTop: "0.5rem" }}>
                {fileHandle
                  ? "Modifications sauvegardées directement"
                  : "Utilisez 'Sauvegarder Sous' pour créer le fichier"}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="demo-section">
        <h3>Éditeur de Fichier</h3>
        <div className="input-group">
          <label>Contenu du fichier:</label>
          <textarea
            value={fileContent}
            onChange={(e) => {
              setFileContent(e.target.value)
              setFileSize(new Blob([e.target.value]).size)
            }}
            rows={12}
            style={{
              fontFamily: "Monaco, Menlo, monospace",
              fontSize: "0.9rem",
            }}
            placeholder="Ouvrez un fichier ou créez-en un nouveau pour commencer l'édition..."
          />
        </div>

        {fileContent && (
          <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#666" }}>
            📊 Statistiques: {fileContent.length} caractères, {fileContent.split("\n").length} lignes
          </div>
        )}
      </div>

      <div className="demo-section">
        <h3>Historique des Opérations</h3>
        <div className="demo-controls">
          <button className="btn danger" onClick={clearHistory}>
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
          {operationHistory.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
              Effectuez des opérations pour voir l'historique
            </p>
          ) : (
            operationHistory.map((op) => (
              <div
                key={op.id}
                style={{
                  padding: "0.75rem",
                  margin: "0.5rem 0",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
                  animation: "slideIn 0.3s ease",
                }}
              >
                <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>{op.operation}</div>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>
                  {op.details} | {op.timestamp}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="demo-section">
        <h3>Capacités de l'API</h3>
        <div className="demo-output">
          {`📁 Fonctionnalités disponibles:
- Ouverture de fichiers avec sélecteur natif
- Sauvegarde directe (sans téléchargement)
- Accès aux dossiers et navigation
- Permissions persistantes
- Support des types de fichiers

🔒 Sécurité:
- Permissions explicites de l'utilisateur
- Accès limité aux fichiers sélectionnés
- Pas d'accès arbitraire au système
- Fonctionne uniquement en HTTPS

💡 Avantages vs input[type="file"]:
- Sauvegarde directe sans téléchargement
- Modification de fichiers existants
- Accès aux métadonnées complètes
- Expérience utilisateur native`}
        </div>
      </div>

      <div className="demo-section">
        <h3>Applications Pratiques</h3>
        <div className="grid">
          <div className="card">
            <h4>📝 Éditeurs de Code</h4>
            <p>IDE et éditeurs de texte dans le navigateur</p>
          </div>
          <div className="card">
            <h4>🎨 Outils Créatifs</h4>
            <p>Éditeurs d'images, audio, vidéo</p>
          </div>
          <div className="card">
            <h4>📊 Productivité</h4>
            <p>Tableurs, traitements de texte</p>
          </div>
          <div className="card">
            <h4>🔧 Outils Dev</h4>
            <p>Gestionnaires de projets, build tools</p>
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

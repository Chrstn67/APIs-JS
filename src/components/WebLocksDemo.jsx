"use client"

import { useState } from "react"

export default function WebLocksDemo() {
  const [isSupported] = useState("locks" in navigator)
  const [activeLocks, setActiveLocks] = useState([])
  const [lockHistory, setLockHistory] = useState([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [sharedResource, setSharedResource] = useState(0)

  const addToHistory = (operation, details, status = "info") => {
    setLockHistory((prev) => [
      {
        id: Date.now(),
        operation,
        details,
        status,
        timestamp: new Date().toLocaleTimeString(),
      },
      ...prev.slice(0, 19),
    ])
  }

  const updateActiveLocks = async () => {
    if (!isSupported) return

    try {
      const locks = await navigator.locks.query()
      setActiveLocks(locks.held.concat(locks.pending))
    } catch (err) {
      console.error("Erreur lors de la requête des locks:", err)
    }
  }

  const acquireExclusiveLock = async (resourceName = "shared-resource") => {
    if (!isSupported) {
      addToHistory("❌ Erreur", "Web Locks API non supportée", "error")
      return
    }

    setIsProcessing(true)
    addToHistory("🔒 Demande", `Lock exclusif sur "${resourceName}"`, "info")

    try {
      await navigator.locks.request(resourceName, async (lock) => {
        addToHistory("✅ Acquis", `Lock exclusif "${resourceName}" obtenu`, "success")
        await updateActiveLocks()

        // Simuler une opération critique
        for (let i = 0; i < 5; i++) {
          await new Promise((resolve) => setTimeout(resolve, 1000))
          setSharedResource((prev) => prev + 1)
          addToHistory("🔄 Traitement", `Opération ${i + 1}/5 sur ressource partagée`, "info")
        }

        await new Promise((resolve) => setTimeout(resolve, 1000))
        addToHistory("🔓 Libéré", `Lock exclusif "${resourceName}" libéré`, "success")
      })
    } catch (err) {
      addToHistory("❌ Erreur", `Échec du lock: ${err.message}`, "error")
    } finally {
      setIsProcessing(false)
      await updateActiveLocks()
    }
  }

  const acquireSharedLock = async (resourceName = "shared-read-resource") => {
    if (!isSupported) {
      addToHistory("❌ Erreur", "Web Locks API non supportée", "error")
      return
    }

    addToHistory("🔒 Demande", `Lock partagé sur "${resourceName}"`, "info")

    try {
      await navigator.locks.request(resourceName, { mode: "shared" }, async (lock) => {
        addToHistory("✅ Acquis", `Lock partagé "${resourceName}" obtenu`, "success")
        await updateActiveLocks()

        // Simuler une opération de lecture
        await new Promise((resolve) => setTimeout(resolve, 3000))
        addToHistory("📖 Lecture", `Lecture de la ressource "${resourceName}"`, "info")

        addToHistory("🔓 Libéré", `Lock partagé "${resourceName}" libéré`, "success")
      })
    } catch (err) {
      addToHistory("❌ Erreur", `Échec du lock partagé: ${err.message}`, "error")
    } finally {
      await updateActiveLocks()
    }
  }

  const tryLockWithTimeout = async (resourceName = "timeout-resource") => {
    if (!isSupported) {
      addToHistory("❌ Erreur", "Web Locks API non supportée", "error")
      return
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => {
      controller.abort()
      addToHistory("⏰ Timeout", `Lock "${resourceName}" abandonné après 3s`, "warning")
    }, 3000)

    addToHistory("🔒 Demande", `Lock avec timeout sur "${resourceName}"`, "info")

    try {
      await navigator.locks.request(resourceName, { signal: controller.signal }, async (lock) => {
        clearTimeout(timeoutId)
        addToHistory("✅ Acquis", `Lock avec timeout "${resourceName}" obtenu`, "success")
        await updateActiveLocks()

        await new Promise((resolve) => setTimeout(resolve, 2000))
        addToHistory("🔓 Libéré", `Lock avec timeout "${resourceName}" libéré`, "success")
      })
    } catch (err) {
      clearTimeout(timeoutId)
      if (err.name === "AbortError") {
        addToHistory("⏰ Timeout", `Lock "${resourceName}" abandonné`, "warning")
      } else {
        addToHistory("❌ Erreur", `Échec du lock: ${err.message}`, "error")
      }
    } finally {
      await updateActiveLocks()
    }
  }

  const simulateDeadlockPrevention = async () => {
    if (!isSupported) return

    addToHistory("🔄 Simulation", "Prévention de deadlock avec ordre des ressources", "info")

    // Acquérir les locks dans un ordre déterministe pour éviter les deadlocks
    const resources = ["resource-a", "resource-b"].sort()

    try {
      await navigator.locks.request(resources[0], async (lockA) => {
        addToHistory("🔒 Lock A", `Ressource ${resources[0]} verrouillée`, "success")
        await updateActiveLocks()

        await new Promise((resolve) => setTimeout(resolve, 1000))

        await navigator.locks.request(resources[1], async (lockB) => {
          addToHistory("🔒 Lock B", `Ressource ${resources[1]} verrouillée`, "success")
          await updateActiveLocks()

          await new Promise((resolve) => setTimeout(resolve, 2000))
          addToHistory("⚡ Opération", "Opération critique sur les deux ressources", "info")

          addToHistory("🔓 Lock B", `Ressource ${resources[1]} libérée`, "success")
        })

        addToHistory("🔓 Lock A", `Ressource ${resources[0]} libérée`, "success")
      })
    } catch (err) {
      addToHistory("❌ Erreur", `Simulation échouée: ${err.message}`, "error")
    } finally {
      await updateActiveLocks()
    }
  }

  const queryLocks = async () => {
    if (!isSupported) return

    try {
      const locks = await navigator.locks.query()
      addToHistory("📊 Requête", `${locks.held.length} locks actifs, ${locks.pending.length} en attente`, "info")
      setActiveLocks(locks.held.concat(locks.pending))
    } catch (err) {
      addToHistory("❌ Erreur", `Requête échouée: ${err.message}`, "error")
    }
  }

  const clearHistory = () => {
    setLockHistory([])
  }

  const resetResource = () => {
    setSharedResource(0)
    addToHistory("🔄 Reset", "Ressource partagée remise à zéro", "info")
  }

  if (!isSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">🔐 Web Locks API</h2>
          <p className="demo-description">Synchronisation et verrouillage de ressources.</p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">❌ Web Locks API non supportée</div>
          <p style={{ marginTop: "1rem", color: "#666" }}>
            Cette API est supportée sur Chrome/Edge 69+ et Firefox 96+.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="demo-header">
        <h2 className="demo-title">🔐 Web Locks API</h2>
        <p className="demo-description">
          Synchronisez l'accès aux ressources partagées entre onglets et workers. Prévenez les conditions de course et
          les deadlocks.
        </p>
      </div>

      <div className="demo-section">
        <h3>État des Ressources</h3>
        <div className="grid grid-3">
          <div className="card">
            <h4>📊 Locks Actifs</h4>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#667eea" }}>{activeLocks.length}</p>
          </div>
          <div className="card">
            <h4>🔄 Traitement</h4>
            <div className={`status-indicator ${isProcessing ? "loading" : "online"}`}>
              {isProcessing ? "🔄 En cours..." : "⏸️ Inactif"}
            </div>
          </div>
          <div className="card">
            <h4>📈 Ressource Partagée</h4>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#4CAF50" }}>{sharedResource}</p>
            <button className="btn" onClick={resetResource} style={{ marginTop: "0.5rem", fontSize: "0.8rem" }}>
              🔄 Reset
            </button>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Types de Verrouillage</h3>
        <div className="demo-controls">
          <button className="btn success" onClick={() => acquireExclusiveLock()} disabled={isProcessing}>
            🔒 Lock Exclusif
          </button>
          <button className="btn" onClick={() => acquireSharedLock()} disabled={isProcessing}>
            🔓 Lock Partagé
          </button>
          <button className="btn warning" onClick={() => tryLockWithTimeout()} disabled={isProcessing}>
            ⏰ Lock avec Timeout
          </button>
          <button className="btn" onClick={simulateDeadlockPrevention} disabled={isProcessing}>
            🔄 Prévention Deadlock
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h3>Gestion des Locks</h3>
        <div className="demo-controls">
          <button className="btn" onClick={queryLocks}>
            📊 Interroger Locks
          </button>
          <button className="btn danger" onClick={clearHistory}>
            🗑️ Effacer Historique
          </button>
        </div>
      </div>

      {activeLocks.length > 0 && (
        <div className="demo-section">
          <h3>Locks Actifs</h3>
          <div
            style={{
              border: "2px solid #ddd",
              borderRadius: "12px",
              padding: "1rem",
              backgroundColor: "#f8f9fa",
            }}
          >
            {activeLocks.map((lock, index) => (
              <div
                key={index}
                style={{
                  padding: "0.75rem",
                  margin: "0.5rem 0",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
                }}
              >
                <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>🔒 {lock.name}</div>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>
                  Mode: {lock.mode || "exclusive"} | Client: {lock.clientId}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="demo-section">
        <h3>Historique des Opérations</h3>
        <div
          style={{
            maxHeight: "400px",
            overflowY: "auto",
            border: "2px solid #ddd",
            borderRadius: "12px",
            padding: "1rem",
            backgroundColor: "#f8f9fa",
          }}
        >
          {lockHistory.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
              Effectuez des opérations pour voir l'historique
            </p>
          ) : (
            lockHistory.map((event) => (
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
                <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>{event.operation}</div>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>
                  {event.details} | {event.timestamp}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="demo-section">
        <h3>Concepts Clés</h3>
        <div className="demo-output">
          {`🔐 Types de locks:
- Exclusif: Un seul holder à la fois
- Partagé: Plusieurs holders simultanés pour lecture

⚡ Fonctionnalités:
- Locks nommés pour identifier les ressources
- Support des timeouts et annulation
- Requêtes pour lister les locks actifs
- Prévention automatique des deadlocks

🛡️ Cas d'usage:
- Synchronisation entre onglets
- Accès exclusif aux ressources partagées
- Coordination entre Service Workers
- Prévention des conditions de course

💡 Bonnes pratiques:
- Utiliser des noms de ressources cohérents
- Acquérir les locks dans un ordre déterministe
- Implémenter des timeouts appropriés
- Libérer les locks rapidement`}
        </div>
      </div>

      <div className="demo-section">
        <h3>Applications Pratiques</h3>
        <div className="grid">
          <div className="card">
            <h4>💾 Bases de Données</h4>
            <p>Synchronisation d'accès aux données locales</p>
          </div>
          <div className="card">
            <h4>📁 Fichiers</h4>
            <p>Accès exclusif aux fichiers en édition</p>
          </div>
          <div className="card">
            <h4>🔄 Synchronisation</h4>
            <p>Coordination entre onglets et workers</p>
          </div>
          <div className="card">
            <h4>⚡ Performance</h4>
            <p>Éviter les opérations concurrentes coûteuses</p>
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

"use client"

import { useEffect, useRef, useState } from "react"

export default function FullscreenDemo() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const imageRef = useRef(null)
  const [isFullscreenSupported, setIsFullscreenSupported] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [fullscreenElement, setFullscreenElement] = useState(null)
  const [fullscreenEvents, setFullscreenEvents] = useState([])

  useEffect(() => {
    // Vérifier le support du Fullscreen API
    const fullscreenEnabled =
      document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled

    setIsFullscreenSupported(fullscreenEnabled)

    // Fonction pour détecter les changements de mode plein écran
    const handleFullscreenChange = () => {
      const isDocumentFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement

      setIsFullscreen(!!isDocumentFullscreen)

      if (isDocumentFullscreen) {
        let elementType = "inconnu"
        if (isDocumentFullscreen === containerRef.current) elementType = "conteneur"
        else if (isDocumentFullscreen === videoRef.current) elementType = "vidéo"
        else if (isDocumentFullscreen === imageRef.current) elementType = "image"

        setFullscreenElement(elementType)
        addFullscreenEvent("✅ Entrée", `Mode plein écran activé (${elementType})`)
      } else {
        setFullscreenElement(null)
        addFullscreenEvent("❌ Sortie", "Mode plein écran désactivé")
      }
    }

    // Ajouter les écouteurs d'événements pour tous les préfixes
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange)
    document.addEventListener("mozfullscreenchange", handleFullscreenChange)
    document.addEventListener("MSFullscreenChange", handleFullscreenChange)

    return () => {
      // Nettoyer les écouteurs
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange)
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange)
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange)
    }
  }, [])

  const addFullscreenEvent = (action, details) => {
    setFullscreenEvents((prev) => [
      {
        id: Date.now(),
        action,
        details,
        timestamp: new Date().toLocaleTimeString(),
      },
      ...prev.slice(0, 9),
    ])
  }

  const requestFullscreen = (element) => {
    if (!element) return

    try {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      }

      addFullscreenEvent("🔄 Action", `Demande de plein écran pour ${element.tagName.toLowerCase()}`)
    } catch (error) {
      addFullscreenEvent("❌ Erreur", `Plein écran échoué: ${error.message}`)
    }
  }

  const exitFullscreen = () => {
    try {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }

      addFullscreenEvent("🔄 Action", "Sortie manuelle du plein écran")
    } catch (error) {
      addFullscreenEvent("❌ Erreur", `Sortie échouée: ${error.message}`)
    }
  }

  const toggleFullscreen = (element) => {
    if (isFullscreen) {
      exitFullscreen()
    } else {
      requestFullscreen(element)
    }
  }

  const clearEvents = () => {
    setFullscreenEvents([])
  }

  if (!isFullscreenSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">⛶ Fullscreen API</h2>
          <p className="demo-description">Affichage en plein écran.</p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">❌ Fullscreen API non supportée</div>
          <p style={{ marginTop: "1rem", color: "#666" }}>
            Cette API n'est pas supportée sur ce navigateur ou est désactivée.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="demo-header">
        <h2 className="demo-title">⛶ Fullscreen API</h2>
        <p className="demo-description">
          Affichez n'importe quel élément en plein écran. Créez des présentations, galeries et expériences immersives.
        </p>
      </div>

      <div className="demo-section">
        <h3>État Actuel</h3>
        <div className="grid grid-2">
          <div className="card">
            <h4>📊 Mode Plein Écran</h4>
            <div className={`status-indicator ${isFullscreen ? "online" : "offline"}`}>
              {isFullscreen ? "✅ Actif" : "❌ Inactif"}
            </div>
          </div>
          <div className="card">
            <h4>🎯 Élément Actif</h4>
            <p style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#667eea" }}>
              {isFullscreen ? fullscreenElement : "Aucun"}
            </p>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Conteneur Personnalisé</h3>
        <div
          ref={containerRef}
          style={{
            position: "relative",
            padding: "2rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "12px",
            border: "2px solid #ddd",
            textAlign: "center",
          }}
        >
          <h4>Conteneur avec Contenu Personnalisé</h4>
          <p>Ce conteneur entier peut être affiché en plein écran.</p>
          <p>En mode plein écran, tous les éléments à l'intérieur seront visibles.</p>

          <div style={{ marginTop: "1rem" }}>
            <button className="btn success" onClick={() => toggleFullscreen(containerRef.current)}>
              {isFullscreen && fullscreenElement === "conteneur" ? "❌ Quitter Plein Écran" : "⛶ Plein Écran"}
            </button>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Éléments Multimédias</h3>
        <div className="grid grid-2">
          <div className="card">
            <h4>🎬 Vidéo</h4>
            <video
              ref={videoRef}
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }}
              controls
              controlsList="nodownload"
              poster="/placeholder.svg?height=200&width=400"
            />
            <button className="btn" onClick={() => toggleFullscreen(videoRef.current)}>
              ⛶ Plein Écran Vidéo
            </button>
          </div>
          <div className="card">
            <h4>🖼️ Image</h4>
            <img
              ref={imageRef}
              src="/placeholder.svg?height=200&width=400"
              alt="Image de démonstration"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }}
            />
            <button className="btn" onClick={() => toggleFullscreen(imageRef.current)}>
              ⛶ Plein Écran Image
            </button>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Contrôles Globaux</h3>
        <div className="demo-controls">
          {isFullscreen ? (
            <button className="btn danger" onClick={exitFullscreen}>
              ❌ Quitter le Mode Plein Écran
            </button>
          ) : (
            <>
              <button className="btn success" onClick={() => requestFullscreen(containerRef.current)}>
                ⛶ Conteneur en Plein Écran
              </button>
              <button className="btn" onClick={() => requestFullscreen(videoRef.current)}>
                ⛶ Vidéo en Plein Écran
              </button>
              <button className="btn" onClick={() => requestFullscreen(imageRef.current)}>
                ⛶ Image en Plein Écran
              </button>
            </>
          )}
          <button className="btn" onClick={clearEvents}>
            🗑️ Effacer Historique
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h3>Historique des Événements</h3>
        <div
          style={{
            maxHeight: "300px",
            overflowY: "auto",
            border: "2px solid #ddd",
            borderRadius: "12px",
            padding: "1rem",
            backgroundColor: "#f8f9fa",
          }}
        >
          {fullscreenEvents.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
              Utilisez les contrôles pour voir l'historique
            </p>
          ) : (
            fullscreenEvents.map((event) => (
              <div
                key={event.id}
                style={{
                  padding: "0.75rem",
                  margin: "0.5rem 0",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
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
        <h3>Fonctionnalités et Limitations</h3>
        <div className="demo-output">
          {`⛶ Capacités du mode plein écran:
- Affichage de n'importe quel élément HTML
- Contrôle programmatique (entrée/sortie)
- Détection des changements d'état
- Styles CSS spécifiques au plein écran

🔒 Restrictions de sécurité:
- Doit être déclenché par une action utilisateur
- Certains éléments peuvent être bloqués (iframes)
- Peut nécessiter des permissions
- Comportement différent selon les navigateurs

💡 Conseils d'utilisation:
- Utilisez ::backdrop pour styliser l'arrière-plan
- Gérez l'orientation sur mobile
- Proposez toujours une sortie facile
- Testez sur différents navigateurs`}
        </div>
      </div>

      <div className="demo-section">
        <h3>Applications Pratiques</h3>
        <div className="grid">
          <div className="card">
            <h4>🎮 Jeux</h4>
            <p>Expérience immersive sans distractions</p>
          </div>
          <div className="card">
            <h4>📊 Présentations</h4>
            <p>Diaporamas et présentations professionnelles</p>
          </div>
          <div className="card">
            <h4>🖼️ Galeries</h4>
            <p>Visualisation d'images en plein écran</p>
          </div>
          <div className="card">
            <h4>📱 Applications</h4>
            <p>Mode immersif pour applications web</p>
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

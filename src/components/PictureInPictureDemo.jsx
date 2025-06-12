"use client"

import { useEffect, useRef, useState } from "react"

export default function PictureInPictureDemo() {
  const videoRef = useRef(null)
  const [isPipSupported, setIsPipSupported] = useState(false)
  const [isPipActive, setIsPipActive] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [pipEvents, setPipEvents] = useState([])
  const [videoSource, setVideoSource] = useState(
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  )
  const [customControls, setCustomControls] = useState(false)

  useEffect(() => {
    // Vérifier le support de Picture-in-Picture
    const isPipSupported =
      document.pictureInPictureEnabled ||
      document.pictureInPictureElement !== undefined ||
      "pictureInPictureEnabled" in document

    setIsPipSupported(isPipSupported)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    const handleEnterPip = () => {
      setIsPipActive(true)
      addPipEvent("✅ Entrée", "Mode Picture-in-Picture activé")
    }

    const handleExitPip = () => {
      setIsPipActive(false)
      addPipEvent("❌ Sortie", "Mode Picture-in-Picture désactivé")
    }

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("enterpictureinpicture", handleEnterPip)
    video.addEventListener("leavepictureinpicture", handleExitPip)

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("enterpictureinpicture", handleEnterPip)
      video.removeEventListener("leavepictureinpicture", handleExitPip)
    }
  }, [])

  const addPipEvent = (action, details) => {
    setPipEvents((prev) => [
      {
        id: Date.now(),
        action,
        details,
        timestamp: new Date().toLocaleTimeString(),
      },
      ...prev.slice(0, 9),
    ])
  }

  const togglePictureInPicture = async () => {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture()
        addPipEvent("🔄 Action", "Sortie manuelle du mode PiP")
      } else if (videoRef.current) {
        await videoRef.current.requestPictureInPicture()
        addPipEvent("🔄 Action", "Entrée manuelle en mode PiP")
      }
    } catch (error) {
      addPipEvent("❌ Erreur", `PiP échoué: ${error.message}`)
    }
  }

  const togglePlayPause = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      addPipEvent("▶️ Lecture", "Vidéo démarrée")
    } else {
      video.pause()
      addPipEvent("⏸️ Pause", "Vidéo mise en pause")
    }
  }

  const changeVideoSource = (source) => {
    const video = videoRef.current
    if (!video) return

    const wasPlaying = !video.paused

    setVideoSource(source)
    addPipEvent("🎞️ Source", `Changement de vidéo: ${source.split("/").pop()}`)

    // Redémarrer la lecture si nécessaire
    if (wasPlaying) {
      video.onloadeddata = () => {
        video.play()
        video.onloadeddata = null
      }
    }
  }

  const clearEvents = () => {
    setPipEvents([])
  }

  const toggleCustomControls = () => {
    setCustomControls((prev) => !prev)
    addPipEvent("🎛️ Contrôles", customControls ? "Contrôles standards activés" : "Contrôles personnalisés activés")
  }

  if (!isPipSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">📺 Picture-in-Picture API</h2>
          <p className="demo-description">Lecture vidéo en fenêtre flottante.</p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">❌ Picture-in-Picture API non supportée</div>
          <p style={{ marginTop: "1rem", color: "#666" }}>
            Cette API est supportée sur la plupart des navigateurs modernes, mais pas sur ce navigateur.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="demo-header">
        <h2 className="demo-title">📺 Picture-in-Picture API</h2>
        <p className="demo-description">
          Affichez une vidéo dans une fenêtre flottante qui reste visible même en naviguant sur d'autres onglets ou
          applications.
        </p>
      </div>

      <div className="demo-section">
        <h3>Lecteur Vidéo</h3>
        <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}>
          <video
            ref={videoRef}
            src={videoSource}
            style={{ width: "100%", borderRadius: "8px" }}
            controls={!customControls}
            controlsList="nodownload"
            poster="/placeholder.svg?height=400&width=800"
          />

          {customControls && (
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                padding: "1rem",
                background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <button className="btn" onClick={togglePlayPause} style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                {isPlaying ? "⏸️" : "▶️"}
              </button>
              <button
                className="btn"
                onClick={togglePictureInPicture}
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                {isPipActive ? "📺 Quitter PiP" : "📺 Activer PiP"}
              </button>
            </div>
          )}
        </div>

        <div className="demo-controls" style={{ marginTop: "1rem" }}>
          <button className={`btn ${isPipActive ? "danger" : "success"}`} onClick={togglePictureInPicture}>
            {isPipActive ? "📺 Quitter PiP" : "📺 Activer PiP"}
          </button>
          <button className={`btn ${isPlaying ? "danger" : "success"}`} onClick={togglePlayPause}>
            {isPlaying ? "⏸️ Pause" : "▶️ Lecture"}
          </button>
          <button className={`btn ${customControls ? "success" : "warning"}`} onClick={toggleCustomControls}>
            🎛️ {customControls ? "Contrôles Standards" : "Contrôles Personnalisés"}
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h3>Sources Vidéo</h3>
        <div className="demo-controls">
          <button
            className="btn"
            onClick={() =>
              changeVideoSource("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
            }
          >
            🎬 Big Buck Bunny
          </button>
          <button
            className="btn"
            onClick={() =>
              changeVideoSource("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4")
            }
          >
            🎬 Elephants Dream
          </button>
          <button
            className="btn"
            onClick={() =>
              changeVideoSource("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4")
            }
          >
            🎬 Tears of Steel
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h3>État Actuel</h3>
        <div className="grid grid-3">
          <div className="card">
            <h4>📊 Mode PiP</h4>
            <div className={`status-indicator ${isPipActive ? "online" : "offline"}`}>
              {isPipActive ? "✅ Actif" : "❌ Inactif"}
            </div>
          </div>
          <div className="card">
            <h4>▶️ Lecture</h4>
            <div className={`status-indicator ${isPlaying ? "loading" : "offline"}`}>
              {isPlaying ? "▶️ En cours" : "⏸️ En pause"}
            </div>
          </div>
          <div className="card">
            <h4>🎛️ Contrôles</h4>
            <p>{customControls ? "Personnalisés" : "Standards"}</p>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Historique des Événements</h3>
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
          {pipEvents.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
              Utilisez les contrôles pour voir l'historique
            </p>
          ) : (
            pipEvents.map((event) => (
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
        <h3>Fonctionnalités Avancées</h3>
        <div className="demo-output">
          {`📺 Capacités du mode PiP:
- Reste visible lors du changement d'onglet
- Fenêtre redimensionnable par l'utilisateur
- Contrôles de lecture intégrés
- Personnalisation possible des contrôles

🎛️ Contrôles personnalisés:
- Ajout de boutons personnalisés
- Styles et disposition sur mesure
- Intégration avec d'autres APIs
- Réponse aux événements spécifiques

💡 Conseils d'utilisation:
- Testez en changeant d'onglet ou d'application
- Essayez de redimensionner la fenêtre PiP
- Vérifiez le comportement sur différents OS
- Utilisez avec des vidéos de conférence ou tutoriels`}
        </div>
      </div>

      <div className="demo-section">
        <h3>Applications Pratiques</h3>
        <div className="grid">
          <div className="card">
            <h4>📹 Vidéoconférence</h4>
            <p>Garder la vidéo visible pendant la prise de notes</p>
          </div>
          <div className="card">
            <h4>🎓 E-learning</h4>
            <p>Suivre un tutoriel tout en pratiquant</p>
          </div>
          <div className="card">
            <h4>🎬 Streaming</h4>
            <p>Regarder une vidéo tout en naviguant</p>
          </div>
          <div className="card">
            <h4>🎮 Gaming</h4>
            <p>Suivre un stream tout en jouant</p>
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

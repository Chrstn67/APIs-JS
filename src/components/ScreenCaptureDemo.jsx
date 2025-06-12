"use client"

import { useEffect, useRef, useState } from "react"

export default function ScreenCaptureDemo() {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const [isSupported] = useState("mediaDevices" in navigator && "getDisplayMedia" in navigator.mediaDevices)
  const [isCapturing, setIsCapturing] = useState(false)
  const [captureType, setCaptureType] = useState(null)
  const [captureEvents, setCaptureEvents] = useState([])
  const [screenshots, setScreenshots] = useState([])
  const [mediaStream, setMediaStream] = useState(null)
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [videoSettings, setVideoSettings] = useState({
    width: 0,
    height: 0,
    frameRate: 0,
  })

  useEffect(() => {
    // Nettoyer le stream lors du démontage du composant
    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [mediaStream])

  const addCaptureEvent = (action, details, status = "info") => {
    setCaptureEvents((prev) => [
      {
        id: Date.now(),
        action,
        details,
        status,
        timestamp: new Date().toLocaleTimeString(),
      },
      ...prev.slice(0, 9),
    ])
  }

  const startCapture = async (type) => {
    if (!isSupported) {
      addCaptureEvent("❌ Erreur", "Screen Capture API non supportée", "error")
      return
    }

    try {
      // Arrêter tout stream existant
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop())
      }

      // Options de capture
      const displayMediaOptions = {
        video: {
          cursor: "always",
        },
        audio: audioEnabled,
      }

      // Ajouter des contraintes spécifiques selon le type
      if (type === "screen") {
        displayMediaOptions.video.displaySurface = "monitor"
      } else if (type === "window") {
        displayMediaOptions.video.displaySurface = "window"
      } else if (type === "tab") {
        displayMediaOptions.video.displaySurface = "browser"
      }

      // Demander l'accès à l'écran
      const stream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions)
      setMediaStream(stream)

      // Configurer la vidéo
      const video = videoRef.current
      video.srcObject = stream
      video.onloadedmetadata = () => {
        video.play()

        // Récupérer les paramètres vidéo
        const videoTrack = stream.getVideoTracks()[0]
        const settings = videoTrack.getSettings()

        setVideoSettings({
          width: settings.width || 0,
          height: settings.height || 0,
          frameRate: settings.frameRate || 0,
        })
      }

      // Gérer la fin du partage
      stream.getVideoTracks()[0].onended = () => {
        stopCapture()
      }

      setIsCapturing(true)
      setCaptureType(type)
      addCaptureEvent("✅ Démarré", `Capture ${type} démarrée`, "success")
    } catch (err) {
      if (err.name === "NotAllowedError") {
        addCaptureEvent("❌ Refusé", "Permission refusée par l'utilisateur", "error")
      } else {
        addCaptureEvent("❌ Erreur", `Capture échouée: ${err.message}`, "error")
      }
    }
  }

  const stopCapture = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop())
      setMediaStream(null)
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null
    }

    setIsCapturing(false)
    setCaptureType(null)
    setVideoSettings({
      width: 0,
      height: 0,
      frameRate: 0,
    })

    addCaptureEvent("⏹️ Arrêté", "Capture arrêtée", "info")
  }

  const takeScreenshot = () => {
    if (!isCapturing || !videoRef.current) {
      addCaptureEvent("❌ Erreur", "Impossible de prendre une capture d'écran", "error")
      return
    }

    const video = videoRef.current
    const canvas = canvasRef.current

    // Ajuster la taille du canvas à celle de la vidéo
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    // Dessiner la frame actuelle sur le canvas
    const ctx = canvas.getContext("2d")
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    // Convertir en URL de données
    try {
      const dataUrl = canvas.toDataURL("image/png")

      // Ajouter à la liste des captures
      setScreenshots((prev) => [
        {
          id: Date.now(),
          dataUrl,
          timestamp: new Date().toLocaleTimeString(),
          width: canvas.width,
          height: canvas.height,
        },
        ...prev.slice(0, 4), // Garder les 5 dernières captures
      ])

      addCaptureEvent("📸 Capture", `Screenshot ${canvas.width}x${canvas.height} pris`, "success")
    } catch (err) {
      addCaptureEvent("❌ Erreur", `Capture échouée: ${err.message}`, "error")
    }
  }

  const downloadScreenshot = (dataUrl, index) => {
    const a = document.createElement("a")
    a.href = dataUrl
    a.download = `screenshot-${Date.now()}.png`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    addCaptureEvent("💾 Téléchargement", `Screenshot ${index + 1} téléchargé`, "info")
  }

  const clearEvents = () => {
    setCaptureEvents([])
  }

  const clearScreenshots = () => {
    setScreenshots([])
    addCaptureEvent("🗑️ Nettoyage", "Captures d'écran effacées", "info")
  }

  const toggleAudio = () => {
    setAudioEnabled((prev) => !prev)
    addCaptureEvent("🔊 Audio", audioEnabled ? "Audio désactivé" : "Audio activé", "info")
  }

  if (!isSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">📹 Screen Capture API</h2>
          <p className="demo-description">Capture d'écran et enregistrement.</p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">❌ Screen Capture API non supportée</div>
          <p style={{ marginTop: "1rem", color: "#666" }}>Cette API nécessite un navigateur moderne et HTTPS.</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="demo-header">
        <h2 className="demo-title">📹 Screen Capture API</h2>
        <p className="demo-description">
          Capturez l'écran, une fenêtre ou un onglet spécifique. Idéal pour les enregistrements, tutoriels et partages
          d'écran.
        </p>
      </div>

      <div className="demo-section">
        <h3>Options de Capture</h3>
        <div className="demo-controls">
          {!isCapturing ? (
            <>
              <button className="btn success" onClick={() => startCapture("screen")}>
                🖥️ Capturer Écran
              </button>
              <button className="btn success" onClick={() => startCapture("window")}>
                🪟 Capturer Fenêtre
              </button>
              <button className="btn success" onClick={() => startCapture("tab")}>
                📑 Capturer Onglet
              </button>
              <button className={`btn ${audioEnabled ? "warning" : ""}`} onClick={toggleAudio}>
                {audioEnabled ? "🔊 Audio Activé" : "🔇 Audio Désactivé"}
              </button>
            </>
          ) : (
            <>
              <button className="btn danger" onClick={stopCapture}>
                ⏹️ Arrêter Capture
              </button>
              <button className="btn" onClick={takeScreenshot}>
                📸 Prendre Screenshot
              </button>
            </>
          )}
        </div>
      </div>

      <div className="demo-section">
        <h3>État Actuel</h3>
        <div className="grid grid-3">
          <div className="card">
            <h4>📊 Statut</h4>
            <div className={`status-indicator ${isCapturing ? "loading" : "offline"}`}>
              {isCapturing ? "📹 En cours" : "⏹️ Arrêté"}
            </div>
          </div>
          <div className="card">
            <h4>🎯 Type</h4>
            <p style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#667eea" }}>
              {captureType ? `${captureType.charAt(0).toUpperCase() + captureType.slice(1)}` : "Aucun"}
            </p>
          </div>
          <div className="card">
            <h4>🔊 Audio</h4>
            <p>{audioEnabled ? "Activé" : "Désactivé"}</p>
          </div>
        </div>
      </div>

      {isCapturing && (
        <div className="demo-section">
          <h3>Aperçu de Capture</h3>
          <div
            style={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
              border: "2px solid #ddd",
              backgroundColor: "#000",
            }}
          >
            <video
              ref={videoRef}
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "contain",
              }}
              muted
            />

            <div
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "4px",
                fontSize: "0.8rem",
              }}
            >
              {videoSettings.width}x{videoSettings.height} @ {videoSettings.frameRate.toFixed(1)} FPS
            </div>
          </div>

          {/* Canvas caché pour les captures d'écran */}
          <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>
      )}

      {screenshots.length > 0 && (
        <div className="demo-section">
          <h3>Captures d'Écran</h3>
          <div className="demo-controls">
            <button className="btn danger" onClick={clearScreenshots}>
              🗑️ Effacer Captures
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={screenshot.dataUrl || "/placeholder.svg"}
                  alt={`Capture d'écran ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "0.5rem" }}>
                  <p style={{ margin: "0 0 0.5rem", fontSize: "0.8rem", color: "#666" }}>
                    {screenshot.width}x{screenshot.height} | {screenshot.timestamp}
                  </p>
                  <button
                    className="btn"
                    onClick={() => downloadScreenshot(screenshot.dataUrl, index)}
                    style={{ width: "100%", fontSize: "0.8rem" }}
                  >
                    💾 Télécharger
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

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
          {captureEvents.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
              Utilisez les contrôles pour voir l'historique
            </p>
          ) : (
            captureEvents.map((event) => (
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
        <h3>Fonctionnalités et Limitations</h3>
        <div className="demo-output">
          {`📹 Capacités de capture:
- Écran entier (un ou plusieurs moniteurs)
- Fenêtre spécifique d'application
- Onglet de navigateur
- Capture avec ou sans audio
- Contrôle du curseur et des animations

🔒 Restrictions de sécurité:
- Nécessite une permission explicite de l'utilisateur
- Fonctionne uniquement en HTTPS
- Indicateur de partage toujours visible
- Certains contenus protégés peuvent être bloqués (DRM)

💡 Conseils d'utilisation:
- Gérer les différentes résolutions d'écran
- Optimiser la qualité/performance selon les cas
- Proposer des options de capture adaptées
- Combiner avec MediaRecorder pour l'enregistrement`}
        </div>
      </div>

      <div className="demo-section">
        <h3>Applications Pratiques</h3>
        <div className="grid">
          <div className="card">
            <h4>🎓 Tutoriels</h4>
            <p>Création de guides et démonstrations</p>
          </div>
          <div className="card">
            <h4>👥 Collaboration</h4>
            <p>Partage d'écran pour travail à distance</p>
          </div>
          <div className="card">
            <h4>🎮 Gaming</h4>
            <p>Streaming et enregistrement de gameplay</p>
          </div>
          <div className="card">
            <h4>🐞 Support</h4>
            <p>Assistance technique avec visualisation</p>
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

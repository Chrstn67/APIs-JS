"use client"

import { useEffect, useState } from "react"

export default function ScreenOrientationDemo() {
  const [orientation, setOrientation] = useState(null)
  const [isSupported] = useState("screen" in window && "orientation" in window.screen)
  const [lockStatus, setLockStatus] = useState("")
  const [orientationHistory, setOrientationHistory] = useState([])

  useEffect(() => {
    if (!isSupported) return

    const updateOrientation = () => {
      const currentOrientation = {
        type: screen.orientation.type,
        angle: screen.orientation.angle,
        timestamp: new Date().toLocaleTimeString(),
      }

      setOrientation(currentOrientation)

      setOrientationHistory((prev) => [
        currentOrientation,
        ...prev.slice(0, 9), // Garder les 10 dernières
      ])
    }

    updateOrientation()
    screen.orientation.addEventListener("change", updateOrientation)

    return () => {
      screen.orientation.removeEventListener("change", updateOrientation)
    }
  }, [isSupported])

  const lockOrientation = async (orientationType) => {
    if (!isSupported) {
      setLockStatus("❌ API non supportée")
      return
    }

    try {
      await screen.orientation.lock(orientationType)
      setLockStatus(`🔒 Orientation verrouillée en ${orientationType}`)
    } catch (err) {
      setLockStatus(`❌ Impossible de verrouiller: ${err.message}`)
    }

    setTimeout(() => setLockStatus(""), 5000)
  }

  const unlockOrientation = () => {
    if (!isSupported) return

    try {
      screen.orientation.unlock()
      setLockStatus("🔓 Orientation déverrouillée")
    } catch (err) {
      setLockStatus(`❌ Erreur de déverrouillage: ${err.message}`)
    }

    setTimeout(() => setLockStatus(""), 5000)
  }

  const getOrientationIcon = (type) => {
    if (type?.includes("portrait")) return "📱"
    if (type?.includes("landscape")) return "📲"
    return "📱"
  }

  const getOrientationDescription = (type) => {
    switch (type) {
      case "portrait-primary":
        return "Portrait principal (normal)"
      case "portrait-secondary":
        return "Portrait secondaire (inversé)"
      case "landscape-primary":
        return "Paysage principal"
      case "landscape-secondary":
        return "Paysage secondaire (inversé)"
      default:
        return "Orientation inconnue"
    }
  }

  if (!isSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">📱 Screen Orientation API</h2>
          <p className="demo-description">Contrôle et détection de l'orientation de l'écran.</p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">❌ Screen Orientation API non supportée</div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="demo-header">
        <h2 className="demo-title">📱 Screen Orientation API</h2>
        <p className="demo-description">
          Détectez et contrôlez l'orientation de l'écran. Verrouillez l'orientation pour les jeux, vidéos ou
          applications spécifiques.
        </p>
      </div>

      <div className="demo-section">
        <h3>Orientation Actuelle</h3>
        {orientation && (
          <div className="grid grid-3">
            <div className="card">
              <h4>{getOrientationIcon(orientation.type)} Type</h4>
              <p style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#667eea" }}>{orientation.type}</p>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>{getOrientationDescription(orientation.type)}</p>
            </div>
            <div className="card">
              <h4>🔄 Angle</h4>
              <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#4CAF50" }}>{orientation.angle}°</p>
            </div>
            <div className="card">
              <h4>⏰ Dernière MAJ</h4>
              <p>{orientation.timestamp}</p>
            </div>
          </div>
        )}
      </div>

      <div className="demo-section">
        <h3>Verrouillage d'Orientation</h3>
        <div className="demo-controls">
          <button className="btn" onClick={() => lockOrientation("portrait-primary")}>
            📱 Portrait
          </button>
          <button className="btn" onClick={() => lockOrientation("landscape-primary")}>
            📲 Paysage
          </button>
          <button className="btn" onClick={() => lockOrientation("portrait")}>
            📱 Portrait (Any)
          </button>
          <button className="btn" onClick={() => lockOrientation("landscape")}>
            📲 Paysage (Any)
          </button>
          <button className="btn danger" onClick={unlockOrientation}>
            🔓 Déverrouiller
          </button>
        </div>

        {lockStatus && (
          <div className="demo-output" style={{ marginTop: "1rem" }}>
            {lockStatus}
          </div>
        )}
      </div>

      <div className="demo-section">
        <h3>Historique des Changements</h3>
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
          {orientationHistory.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
              Tournez votre appareil pour voir les changements d'orientation
            </p>
          ) : (
            orientationHistory.map((item, index) => (
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
                <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                  {getOrientationIcon(item.type)} {item.type} - {item.angle}°
                </div>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>{item.timestamp}</div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="demo-section">
        <h3>Applications Pratiques</h3>
        <div className="grid">
          <div className="card">
            <h4>🎮 Jeux</h4>
            <p>Verrouiller en paysage pour les jeux d'action</p>
          </div>
          <div className="card">
            <h4>📺 Vidéos</h4>
            <p>Forcer le mode paysage pour le visionnage</p>
          </div>
          <div className="card">
            <h4>📖 Lecture</h4>
            <p>Maintenir le portrait pour les articles</p>
          </div>
          <div className="card">
            <h4>📊 Dashboards</h4>
            <p>Adapter l'interface selon l'orientation</p>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"

export default function DeviceMotionDemo() {
  const [motionData, setMotionData] = useState(null)
  const [isSupported] = useState("DeviceMotionEvent" in window)
  const [isListening, setIsListening] = useState(false)
  const [shakeCount, setShakeCount] = useState(0)
  const [motionHistory, setMotionHistory] = useState([])
  const [permission, setPermission] = useState("unknown")

  useEffect(() => {
    // Vérifier les permissions sur iOS 13+
    if (typeof DeviceMotionEvent !== "undefined" && typeof DeviceMotionEvent.requestPermission === "function") {
      setPermission("required")
    } else {
      setPermission("granted")
    }
  }, [])

  const requestPermission = async () => {
    if (typeof DeviceMotionEvent.requestPermission === "function") {
      try {
        const response = await DeviceMotionEvent.requestPermission()
        setPermission(response)
        if (response === "granted") {
          startListening()
        }
      } catch (err) {
        setPermission("denied")
      }
    }
  }

  const startListening = () => {
    if (!isSupported || permission === "denied") return

    const handleMotion = (event) => {
      const data = {
        acceleration: {
          x: event.acceleration?.x?.toFixed(2) || 0,
          y: event.acceleration?.y?.toFixed(2) || 0,
          z: event.acceleration?.z?.toFixed(2) || 0,
        },
        accelerationIncludingGravity: {
          x: event.accelerationIncludingGravity?.x?.toFixed(2) || 0,
          y: event.accelerationIncludingGravity?.y?.toFixed(2) || 0,
          z: event.accelerationIncludingGravity?.z?.toFixed(2) || 0,
        },
        rotationRate: {
          alpha: event.rotationRate?.alpha?.toFixed(2) || 0,
          beta: event.rotationRate?.beta?.toFixed(2) || 0,
          gamma: event.rotationRate?.gamma?.toFixed(2) || 0,
        },
        interval: event.interval,
        timestamp: new Date().toLocaleTimeString(),
      }

      setMotionData(data)

      // Détection de secousse
      const totalAcceleration = Math.sqrt(
        Math.pow(event.accelerationIncludingGravity?.x || 0, 2) +
          Math.pow(event.accelerationIncludingGravity?.y || 0, 2) +
          Math.pow(event.accelerationIncludingGravity?.z || 0, 2),
      )

      if (totalAcceleration > 20) {
        setShakeCount((prev) => prev + 1)
        setMotionHistory((prev) => [
          { type: "shake", value: totalAcceleration.toFixed(2), timestamp: data.timestamp },
          ...prev.slice(0, 9),
        ])
      }
    }

    window.addEventListener("devicemotion", handleMotion)
    setIsListening(true)

    return () => {
      window.removeEventListener("devicemotion", handleMotion)
      setIsListening(false)
    }
  }

  const stopListening = () => {
    window.removeEventListener("devicemotion", () => {})
    setIsListening(false)
  }

  const resetCounters = () => {
    setShakeCount(0)
    setMotionHistory([])
  }

  const getMotionIntensity = (value) => {
    const abs = Math.abs(value)
    if (abs > 10) return { level: "Forte", color: "#f44336" }
    if (abs > 5) return { level: "Moyenne", color: "#FF9800" }
    if (abs > 1) return { level: "Faible", color: "#4CAF50" }
    return { level: "Statique", color: "#666" }
  }

  if (!isSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">📲 Device Motion API</h2>
          <p className="demo-description">Détection des mouvements de l'appareil.</p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">❌ Device Motion API non supportée</div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="demo-header">
        <h2 className="demo-title">📲 Device Motion API</h2>
        <p className="demo-description">
          Détectez les mouvements, secousses et rotations de l'appareil. Parfait pour les jeux, interfaces gestuelles et
          applications fitness.
        </p>
      </div>

      <div className="demo-section">
        <h3>Contrôles</h3>
        <div className="demo-controls">
          {permission === "required" && (
            <button className="btn success" onClick={requestPermission}>
              🔐 Demander Permission
            </button>
          )}
          {permission === "granted" && !isListening && (
            <button className="btn success" onClick={startListening}>
              ▶️ Démarrer Écoute
            </button>
          )}
          {isListening && (
            <button className="btn danger" onClick={stopListening}>
              ⏹️ Arrêter Écoute
            </button>
          )}
          <button className="btn" onClick={resetCounters}>
            🔄 Reset Compteurs
          </button>
        </div>

        <div className="grid grid-2" style={{ marginTop: "1rem" }}>
          <div className="card">
            <h4>📊 État</h4>
            <div className={`status-indicator ${isListening ? "online" : "offline"}`}>
              {isListening ? "👂 En écoute" : "⏸️ Arrêté"}
            </div>
          </div>
          <div className="card">
            <h4>📳 Secousses Détectées</h4>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#667eea" }}>{shakeCount}</p>
          </div>
        </div>
      </div>

      {motionData && (
        <div className="demo-section">
          <h3>Données de Mouvement en Temps Réel</h3>

          <h4>🏃 Accélération (sans gravité)</h4>
          <div className="grid grid-3">
            <div className="card">
              <h4>📐 X (Gauche/Droite)</h4>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: getMotionIntensity(motionData.acceleration.x).color,
                }}
              >
                {motionData.acceleration.x} m/s²
              </p>
              <p style={{ fontSize: "0.8rem", color: "#666" }}>{getMotionIntensity(motionData.acceleration.x).level}</p>
            </div>
            <div className="card">
              <h4>📐 Y (Avant/Arrière)</h4>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: getMotionIntensity(motionData.acceleration.y).color,
                }}
              >
                {motionData.acceleration.y} m/s²
              </p>
              <p style={{ fontSize: "0.8rem", color: "#666" }}>{getMotionIntensity(motionData.acceleration.y).level}</p>
            </div>
            <div className="card">
              <h4>📐 Z (Haut/Bas)</h4>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: getMotionIntensity(motionData.acceleration.z).color,
                }}
              >
                {motionData.acceleration.z} m/s²
              </p>
              <p style={{ fontSize: "0.8rem", color: "#666" }}>{getMotionIntensity(motionData.acceleration.z).level}</p>
            </div>
          </div>

          <h4>🌍 Accélération (avec gravité)</h4>
          <div className="grid grid-3">
            <div className="card">
              <h4>📐 X</h4>
              <p style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#667eea" }}>
                {motionData.accelerationIncludingGravity.x} m/s²
              </p>
            </div>
            <div className="card">
              <h4>📐 Y</h4>
              <p style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#667eea" }}>
                {motionData.accelerationIncludingGravity.y} m/s²
              </p>
            </div>
            <div className="card">
              <h4>📐 Z</h4>
              <p style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#667eea" }}>
                {motionData.accelerationIncludingGravity.z} m/s²
              </p>
            </div>
          </div>

          <h4>🔄 Vitesse de Rotation</h4>
          <div className="grid grid-3">
            <div className="card">
              <h4>🔄 Alpha (Z)</h4>
              <p style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#4CAF50" }}>
                {motionData.rotationRate.alpha}°/s
              </p>
            </div>
            <div className="card">
              <h4>🔄 Beta (X)</h4>
              <p style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#4CAF50" }}>
                {motionData.rotationRate.beta}°/s
              </p>
            </div>
            <div className="card">
              <h4>🔄 Gamma (Y)</h4>
              <p style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#4CAF50" }}>
                {motionData.rotationRate.gamma}°/s
              </p>
            </div>
          </div>
        </div>
      )}

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
          {motionHistory.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
              Secouez votre appareil pour voir les événements
            </p>
          ) : (
            motionHistory.map((event, index) => (
              <div
                key={index}
                style={{
                  padding: "0.75rem",
                  margin: "0.5rem 0",
                  borderRadius: "8px",
                  backgroundColor: "#fff3cd",
                  border: "1px solid #ffeaa7",
                }}
              >
                <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                  📳 Secousse détectée - Intensité: {event.value} m/s²
                </div>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>{event.timestamp}</div>
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
            <p>Contrôles gestuels et détection de secousses</p>
          </div>
          <div className="card">
            <h4>🏃 Fitness</h4>
            <p>Compteur de pas et détection d'activité</p>
          </div>
          <div className="card">
            <h4>🚨 Sécurité</h4>
            <p>Détection de chute ou d'urgence</p>
          </div>
          <div className="card">
            <h4>🎨 Créatif</h4>
            <p>Interfaces artistiques basées sur le mouvement</p>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Guide des Axes</h3>
        <div className="demo-output">
          {`📐 Système de coordonnées:
- X: Gauche (-) / Droite (+)
- Y: Arrière (-) / Avant (+)  
- Z: Bas (-) / Haut (+)

🔄 Rotations:
- Alpha: Rotation autour de Z (boussole)
- Beta: Rotation autour de X (tangage)
- Gamma: Rotation autour de Y (roulis)

📱 Conseils d'utilisation:
- Testez sur appareil mobile réel
- Calibrez selon l'orientation
- Filtrez les petites variations
- Gérez les permissions iOS 13+`}
        </div>
      </div>
    </div>
  )
}

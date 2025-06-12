"use client"

import { useState } from "react"

export default function VibrationDemo() {
  const [isSupported] = useState("vibrate" in navigator)
  const [vibrationLog, setVibrationLog] = useState([])
  const [customPattern, setCustomPattern] = useState("200,100,200")
  const [isVibrating, setIsVibrating] = useState(false)

  const addVibrationLog = (message) => {
    setVibrationLog((prev) => [
      {
        id: Date.now(),
        message,
        timestamp: new Date().toLocaleTimeString(),
      },
      ...prev.slice(0, 9), // Garder les 10 dernières
    ])
  }

  const vibrate = (pattern, description) => {
    if (!isSupported) {
      addVibrationLog("❌ Vibration non supportée sur cet appareil")
      return
    }

    try {
      const result = navigator.vibrate(pattern)
      if (result) {
        addVibrationLog(`📳 ${description}`)
        setIsVibrating(true)

        // Calculer la durée totale pour l'indicateur
        const totalDuration = Array.isArray(pattern)
          ? pattern.reduce((sum, val, index) => (index % 2 === 0 ? sum + val : sum), 0)
          : pattern

        setTimeout(() => setIsVibrating(false), totalDuration)
      } else {
        addVibrationLog("❌ Vibration refusée ou échouée")
      }
    } catch (err) {
      addVibrationLog("❌ Erreur lors de la vibration")
    }
  }

  const stopVibration = () => {
    if (!isSupported) return

    navigator.vibrate(0)
    setIsVibrating(false)
    addVibrationLog("⏹️ Vibration arrêtée")
  }

  const parseCustomPattern = () => {
    try {
      const pattern = customPattern
        .split(",")
        .map((val) => Number.parseInt(val.trim()))
        .filter((val) => !isNaN(val) && val >= 0)
      if (pattern.length === 0) {
        addVibrationLog("❌ Pattern invalide")
        return
      }
      return pattern
    } catch (err) {
      addVibrationLog("❌ Erreur de parsing du pattern")
      return null
    }
  }

  const vibrateCustomPattern = () => {
    const pattern = parseCustomPattern()
    if (pattern) {
      vibrate(pattern, `Pattern personnalisé: [${pattern.join(", ")}]`)
    }
  }

  const clearLog = () => {
    setVibrationLog([])
  }

  // Patterns prédéfinis
  const presetPatterns = [
    { name: "Court", pattern: 100, description: "Vibration courte (100ms)" },
    { name: "Moyen", pattern: 300, description: "Vibration moyenne (300ms)" },
    { name: "Long", pattern: 1000, description: "Vibration longue (1000ms)" },
    { name: "Double Tap", pattern: [100, 100, 100], description: "Double vibration" },
    { name: "Triple Tap", pattern: [100, 50, 100, 50, 100], description: "Triple vibration" },
    {
      name: "SOS",
      pattern: [100, 30, 100, 30, 100, 200, 200, 30, 200, 30, 200, 200, 100, 30, 100, 30, 100],
      description: "Pattern SOS (morse)",
    },
    { name: "Heartbeat", pattern: [100, 30, 100, 300], description: "Battement de cœur" },
    { name: "Notification", pattern: [200, 100, 200, 100, 200], description: "Pattern notification" },
    { name: "Alerte", pattern: [300, 200, 300, 200, 300], description: "Pattern d'alerte" },
    { name: "Succès", pattern: [50, 50, 50, 50, 200], description: "Pattern de succès" },
  ]

  if (!isSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">📳 Vibration API</h2>
          <p className="demo-description">Contrôle de la vibration des appareils mobiles.</p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">❌ Vibration API non supportée sur cet appareil</div>
          <p style={{ marginTop: "1rem", color: "#666" }}>
            Cette API fonctionne principalement sur les appareils mobiles (smartphones, tablettes) avec un moteur de
            vibration.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="demo-header">
        <h2 className="demo-title">📳 Vibration API</h2>
        <p className="demo-description">
          Contrôlez la vibration de l'appareil avec des patterns personnalisés. Idéal pour les notifications, jeux et
          retour haptique.
        </p>
      </div>

      <div className="demo-section">
        <h3>État de la Vibration</h3>
        <div className="grid grid-2">
          <div className="card">
            <h4>📱 Support Appareil</h4>
            <div className="status-indicator online">✅ Vibration API supportée</div>
          </div>
          <div className="card">
            <h4>📳 État Actuel</h4>
            <div className={`status-indicator ${isVibrating ? "loading" : "online"}`}>
              {isVibrating ? "📳 En vibration..." : "⏸️ Inactif"}
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Vibrations Simples</h3>
        <div className="demo-controls">
          <button className="btn" onClick={() => vibrate(100, "Vibration courte (100ms)")}>
            📳 Court (100ms)
          </button>
          <button className="btn" onClick={() => vibrate(300, "Vibration moyenne (300ms)")}>
            📳 Moyen (300ms)
          </button>
          <button className="btn" onClick={() => vibrate(1000, "Vibration longue (1000ms)")}>
            📳 Long (1000ms)
          </button>
          <button className="btn danger" onClick={stopVibration}>
            ⏹️ Arrêter
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h3>Patterns Prédéfinis</h3>
        <div className="demo-controls">
          {presetPatterns.slice(0, 6).map((preset, index) => (
            <button
              key={index}
              className="btn"
              onClick={() => vibrate(preset.pattern, preset.description)}
              title={preset.description}
            >
              📳 {preset.name}
            </button>
          ))}
        </div>

        <div className="demo-controls" style={{ marginTop: "1rem" }}>
          {presetPatterns.slice(6).map((preset, index) => (
            <button
              key={index + 6}
              className="btn"
              onClick={() => vibrate(preset.pattern, preset.description)}
              title={preset.description}
            >
              📳 {preset.name}
            </button>
          ))}
        </div>
      </div>

      <div className="demo-section">
        <h3>Pattern Personnalisé</h3>
        <div className="input-group">
          <label>Pattern (vibration,pause,vibration,pause...) en millisecondes:</label>
          <input
            type="text"
            value={customPattern}
            onChange={(e) => setCustomPattern(e.target.value)}
            placeholder="200,100,200,100,500"
          />
          <small style={{ color: "#666", marginTop: "0.5rem", display: "block" }}>
            Exemple: "200,100,200" = vibrer 200ms, pause 100ms, vibrer 200ms
          </small>
        </div>
        <div className="demo-controls">
          <button className="btn success" onClick={vibrateCustomPattern}>
            📳 Tester Pattern Personnalisé
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h3>Exemples d'Usage</h3>
        <div className="demo-controls">
          <button className="btn success" onClick={() => vibrate([50, 50, 50], "Notification de succès")}>
            ✅ Succès
          </button>
          <button className="btn warning" onClick={() => vibrate([200, 100, 200], "Notification d'avertissement")}>
            ⚠️ Avertissement
          </button>
          <button className="btn danger" onClick={() => vibrate([300, 200, 300, 200, 300], "Notification d'erreur")}>
            ❌ Erreur
          </button>
          <button className="btn" onClick={() => vibrate([25, 25, 25, 25, 25, 25, 25, 25], "Vibration de jeu")}>
            🎮 Jeu (Tir)
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h3>Journal des Vibrations ({vibrationLog.length})</h3>
        <div className="demo-controls">
          <button className="btn danger" onClick={clearLog}>
            🗑️ Effacer Journal
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
          {vibrationLog.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
              Aucune vibration testée. Utilisez les boutons ci-dessus !
            </p>
          ) : (
            vibrationLog.map((log) => (
              <div
                key={log.id}
                style={{
                  padding: "0.75rem",
                  margin: "0.5rem 0",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
                  animation: "slideIn 0.3s ease",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "#666", marginBottom: "0.25rem" }}>[{log.timestamp}]</div>
                <div style={{ fontSize: "0.9rem" }}>{log.message}</div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="demo-section">
        <h3>Guide des Patterns</h3>
        <div className="demo-output">
          {`📳 Format des patterns:
- Nombre simple: durée de vibration en ms (ex: 200)
- Tableau: [vibration, pause, vibration, pause...] (ex: [200, 100, 200])

⏱️ Exemples de patterns:
- Court: 100
- Notification: [200, 100, 200]
- SOS: [100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]
- Heartbeat: [100, 30, 100, 300]

🎯 Bonnes pratiques:
- Vibrations courtes pour les notifications
- Patterns distinctifs pour différents types d'alertes
- Éviter les vibrations trop longues (économie batterie)
- Tester sur différents appareils

⚠️ Limitations:
- Fonctionne uniquement sur mobile
- Peut être désactivé par l'utilisateur
- Certains navigateurs limitent la durée max
- Nécessite une interaction utilisateur sur certains navigateurs`}
        </div>
      </div>

      <div className="demo-section">
        <h3>Applications Pratiques</h3>
        <div className="grid">
          <div className="card">
            <h4>🎮 Jeux</h4>
            <p>Retour haptique pour les actions de jeu</p>
          </div>
          <div className="card">
            <h4>📱 Notifications</h4>
            <p>Alertes discrètes avec patterns distinctifs</p>
          </div>
          <div className="card">
            <h4>⏰ Alarmes</h4>
            <p>Réveils et rappels avec vibrations</p>
          </div>
          <div className="card">
            <h4>♿ Accessibilité</h4>
            <p>Feedback tactile pour utilisateurs malvoyants</p>
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

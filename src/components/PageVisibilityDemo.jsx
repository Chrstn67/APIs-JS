"use client"

import { useEffect, useState } from "react"

export default function PageVisibilityDemo() {
  const [visibilityState, setVisibilityState] = useState("visible")
  const [isHidden, setIsHidden] = useState(false)
  const [visibilityHistory, setVisibilityHistory] = useState([])
  const [timeSpent, setTimeSpent] = useState(0)
  const [sessionStart] = useState(Date.now())
  const [isSupported] = useState("visibilityState" in document)

  useEffect(() => {
    if (!isSupported) return

    const updateVisibility = () => {
      const state = document.visibilityState
      const hidden = document.hidden

      setVisibilityState(state)
      setIsHidden(hidden)

      const event = {
        state,
        hidden,
        timestamp: new Date().toLocaleTimeString(),
        action: hidden ? "Page cachée" : "Page visible",
      }

      setVisibilityHistory((prev) => [
        event,
        ...prev.slice(0, 19), // Garder les 20 dernières
      ])
    }

    // État initial
    updateVisibility()

    document.addEventListener("visibilitychange", updateVisibility)

    // Timer pour le temps passé
    const timer = setInterval(() => {
      if (!document.hidden) {
        setTimeSpent(Date.now() - sessionStart)
      }
    }, 1000)

    return () => {
      document.removeEventListener("visibilitychange", updateVisibility)
      clearInterval(timer)
    }
  }, [isSupported, sessionStart])

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)

    if (hours > 0) {
      return `${hours}h ${minutes % 60}m ${seconds % 60}s`
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`
    } else {
      return `${seconds}s`
    }
  }

  const simulateBackgroundTask = () => {
    if (document.hidden) {
      console.log("🔄 Tâche en arrière-plan suspendue")
      setVisibilityHistory((prev) => [
        {
          state: "background-task",
          hidden: true,
          timestamp: new Date().toLocaleTimeString(),
          action: "🔄 Tâche suspendue (page cachée)",
        },
        ...prev.slice(0, 19),
      ])
    } else {
      console.log("▶️ Tâche en cours d'exécution")
      setVisibilityHistory((prev) => [
        {
          state: "background-task",
          hidden: false,
          timestamp: new Date().toLocaleTimeString(),
          action: "▶️ Tâche active (page visible)",
        },
        ...prev.slice(0, 19),
      ])
    }
  }

  const clearHistory = () => {
    setVisibilityHistory([])
  }

  if (!isSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">👀 Page Visibility API</h2>
          <p className="demo-description">Détection de la visibilité de la page.</p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">❌ Page Visibility API non supportée</div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="demo-header">
        <h2 className="demo-title">👀 Page Visibility API</h2>
        <p className="demo-description">
          Détectez quand l'utilisateur change d'onglet ou minimise la fenêtre. Optimisez les performances et
          l'expérience utilisateur.
        </p>
      </div>

      <div className="demo-section">
        <h3>État Actuel de la Page</h3>
        <div className="grid grid-3">
          <div className="card">
            <h4>👁️ Visibilité</h4>
            <div className={`status-indicator ${isHidden ? "offline" : "online"}`}>
              {isHidden ? "👁️‍🗨️ Cachée" : "👀 Visible"}
            </div>
          </div>
          <div className="card">
            <h4>📊 État</h4>
            <p style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#667eea" }}>{visibilityState}</p>
          </div>
          <div className="card">
            <h4>⏱️ Temps Actif</h4>
            <p style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#4CAF50" }}>{formatTime(timeSpent)}</p>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Test d'Optimisation</h3>
        <div className="demo-controls">
          <button className="btn" onClick={simulateBackgroundTask}>
            🔄 Tester Tâche en Arrière-plan
          </button>
          <button className="btn danger" onClick={clearHistory}>
            🗑️ Effacer Historique
          </button>
        </div>
        <p style={{ marginTop: "1rem", color: "#666", fontSize: "0.9rem" }}>
          💡 Changez d'onglet ou minimisez la fenêtre pour voir l'API en action
        </p>
      </div>

      <div className="demo-section">
        <h3>Historique de Visibilité</h3>
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
          {visibilityHistory.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
              Changez d'onglet pour voir l'historique des événements
            </p>
          ) : (
            visibilityHistory.map((event, index) => (
              <div
                key={index}
                style={{
                  padding: "0.75rem",
                  margin: "0.5rem 0",
                  borderRadius: "8px",
                  backgroundColor: event.hidden ? "#ffebee" : "#e8f5e8",
                  border: `1px solid ${event.hidden ? "#ffcdd2" : "#c8e6c8"}`,
                  animation: "slideIn 0.3s ease",
                }}
              >
                <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>{event.action}</div>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>
                  État: {event.state} | {event.timestamp}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="demo-section">
        <h3>Optimisations Recommandées</h3>
        <div className="demo-output">
          {`🎯 Quand la page est cachée:
- Suspendre les animations CSS/JS
- Réduire la fréquence des requêtes API
- Arrêter les timers non essentiels
- Suspendre la lecture vidéo/audio
- Sauvegarder l'état de l'application

⚡ Quand la page redevient visible:
- Reprendre les animations
- Synchroniser les données
- Relancer les timers
- Reprendre la lecture média
- Actualiser le contenu si nécessaire

📊 États possibles:
- "visible": Page complètement visible
- "hidden": Page complètement cachée
- "prerender": Page en pré-rendu (rare)`}
        </div>
      </div>

      <div className="demo-section">
        <h3>Applications Pratiques</h3>
        <div className="grid">
          <div className="card">
            <h4>🎮 Jeux</h4>
            <p>Pause automatique quand l'utilisateur change d'onglet</p>
          </div>
          <div className="card">
            <h4>📹 Vidéos</h4>
            <p>Suspendre la lecture pour économiser la bande passante</p>
          </div>
          <div className="card">
            <h4>📊 Analytics</h4>
            <p>Mesurer le temps réel passé sur la page</p>
          </div>
          <div className="card">
            <h4>💬 Chat</h4>
            <p>Réduire la fréquence de polling des messages</p>
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

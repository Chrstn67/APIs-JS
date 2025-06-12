"use client"

import { useEffect, useState } from "react"

export default function MediaSessionDemo() {
  const [isSupported] = useState("mediaSession" in navigator)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [position, setPosition] = useState(0)
  const [duration, setDuration] = useState(180) // 3 minutes
  const [volume, setVolume] = useState(0.7)
  const [actionHistory, setActionHistory] = useState([])

  const tracks = [
    {
      title: "Démo Track 1",
      artist: "Artiste Demo",
      album: "Album Demo",
      artwork: [
        { src: "/placeholder.svg?height=96&width=96", sizes: "96x96", type: "image/svg+xml" },
        { src: "/placeholder.svg?height=128&width=128", sizes: "128x128", type: "image/svg+xml" },
        { src: "/placeholder.svg?height=192&width=192", sizes: "192x192", type: "image/svg+xml" },
        { src: "/placeholder.svg?height=256&width=256", sizes: "256x256", type: "image/svg+xml" },
      ],
    },
    {
      title: "Démo Track 2",
      artist: "Autre Artiste",
      album: "Autre Album",
      artwork: [
        { src: "/placeholder.svg?height=96&width=96", sizes: "96x96", type: "image/svg+xml" },
        { src: "/placeholder.svg?height=128&width=128", sizes: "128x128", type: "image/svg+xml" },
      ],
    },
    {
      title: "Démo Track 3",
      artist: "Troisième Artiste",
      album: "Troisième Album",
      artwork: [{ src: "/placeholder.svg?height=96&width=96", sizes: "96x96", type: "image/svg+xml" }],
    },
  ]

  const addToHistory = (action, details) => {
    setActionHistory((prev) => [
      {
        id: Date.now(),
        action,
        details,
        timestamp: new Date().toLocaleTimeString(),
      },
      ...prev.slice(0, 9),
    ])
  }

  useEffect(() => {
    if (!isSupported) return

    // Configurer les métadonnées du média
    const track = tracks[currentTrack]
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: track.artist,
      album: track.album,
      artwork: track.artwork,
    })

    // Configurer les actions disponibles
    const actionHandlers = {
      play: () => {
        setIsPlaying(true)
        addToHistory("▶️ Play", "Lecture démarrée via contrôles système")
      },
      pause: () => {
        setIsPlaying(false)
        addToHistory("⏸️ Pause", "Lecture mise en pause via contrôles système")
      },
      previoustrack: () => {
        const newTrack = currentTrack > 0 ? currentTrack - 1 : tracks.length - 1
        setCurrentTrack(newTrack)
        setPosition(0)
        addToHistory("⏮️ Previous", `Piste précédente: ${tracks[newTrack].title}`)
      },
      nexttrack: () => {
        const newTrack = currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
        setCurrentTrack(newTrack)
        setPosition(0)
        addToHistory("⏭️ Next", `Piste suivante: ${tracks[newTrack].title}`)
      },
      seekbackward: (details) => {
        const seekTime = details.seekOffset || 10
        const newPosition = Math.max(0, position - seekTime)
        setPosition(newPosition)
        addToHistory("⏪ Seek Back", `Retour de ${seekTime}s`)
      },
      seekforward: (details) => {
        const seekTime = details.seekOffset || 10
        const newPosition = Math.min(duration, position + seekTime)
        setPosition(newPosition)
        addToHistory("⏩ Seek Forward", `Avance de ${seekTime}s`)
      },
      seekto: (details) => {
        if (details.seekTime !== undefined) {
          setPosition(details.seekTime)
          addToHistory("🎯 Seek To", `Position: ${Math.round(details.seekTime)}s`)
        }
      },
      stop: () => {
        setIsPlaying(false)
        setPosition(0)
        addToHistory("⏹️ Stop", "Lecture arrêtée via contrôles système")
      },
    }

    // Enregistrer les gestionnaires d'actions
    Object.entries(actionHandlers).forEach(([action, handler]) => {
      try {
        navigator.mediaSession.setActionHandler(action, handler)
      } catch (error) {
        console.log(`Action ${action} non supportée:`, error)
      }
    })

    return () => {
      // Nettoyer les gestionnaires
      Object.keys(actionHandlers).forEach((action) => {
        try {
          navigator.mediaSession.setActionHandler(action, null)
        } catch (error) {
          // Ignorer les erreurs de nettoyage
        }
      })
    }
  }, [currentTrack, position, duration, isSupported])

  useEffect(() => {
    if (!isSupported) return

    // Mettre à jour la position de lecture
    navigator.mediaSession.setPositionState({
      duration: duration,
      playbackRate: 1.0,
      position: position,
    })
  }, [position, duration, isSupported])

  // Simuler la progression de la lecture
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= duration) {
          // Passer à la piste suivante
          const nextTrack = currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
          setCurrentTrack(nextTrack)
          addToHistory("🔄 Auto Next", `Piste suivante automatique: ${tracks[nextTrack].title}`)
          return 0
        }
        return prev + 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlaying, duration, currentTrack, tracks])

  const togglePlayPause = () => {
    const newState = !isPlaying
    setIsPlaying(newState)
    addToHistory(newState ? "▶️ Play" : "⏸️ Pause", "Action depuis l'interface web")
  }

  const previousTrack = () => {
    const newTrack = currentTrack > 0 ? currentTrack - 1 : tracks.length - 1
    setCurrentTrack(newTrack)
    setPosition(0)
    addToHistory("⏮️ Previous", `Interface web: ${tracks[newTrack].title}`)
  }

  const nextTrack = () => {
    const newTrack = currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
    setCurrentTrack(newTrack)
    setPosition(0)
    addToHistory("⏭️ Next", `Interface web: ${tracks[newTrack].title}`)
  }

  const seekTo = (newPosition) => {
    setPosition(newPosition)
    addToHistory("🎯 Seek", `Position: ${Math.round(newPosition)}s`)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const clearHistory = () => {
    setActionHistory([])
  }

  if (!isSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">🎬 Media Session API</h2>
          <p className="demo-description">Contrôles média système intégrés.</p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">❌ Media Session API non supportée</div>
        </div>
      </div>
    )
  }

  const track = tracks[currentTrack]

  return (
    <div>
      <div className="demo-header">
        <h2 className="demo-title">🎬 Media Session API</h2>
        <p className="demo-description">
          Intégrez vos contrôles média avec le système. Affichez les métadonnées dans les notifications et contrôlez
          depuis les raccourcis clavier.
        </p>
      </div>

      <div className="demo-section">
        <h3>Lecteur Média</h3>
        <div className="card" style={{ textAlign: "center", padding: "2rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Album artwork"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </div>

          <h3 style={{ margin: "0.5rem 0", fontSize: "1.5rem" }}>{track.title}</h3>
          <p style={{ margin: "0.5rem 0", color: "#666" }}>{track.artist}</p>
          <p style={{ margin: "0.5rem 0", color: "#888", fontSize: "0.9rem" }}>{track.album}</p>

          <div style={{ margin: "1.5rem 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.9rem", color: "#666" }}>{formatTime(position)}</span>
              <input
                type="range"
                min="0"
                max={duration}
                value={position}
                onChange={(e) => seekTo(Number(e.target.value))}
                style={{ flex: 1 }}
              />
              <span style={{ fontSize: "0.9rem", color: "#666" }}>{formatTime(duration)}</span>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <button className="btn" onClick={previousTrack} style={{ fontSize: "1.2rem" }}>
              ⏮️
            </button>
            <button
              className={`btn ${isPlaying ? "danger" : "success"}`}
              onClick={togglePlayPause}
              style={{ fontSize: "1.2rem", width: "60px" }}
            >
              {isPlaying ? "⏸️" : "▶️"}
            </button>
            <button className="btn" onClick={nextTrack} style={{ fontSize: "1.2rem" }}>
              ⏭️
            </button>
          </div>

          <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.9rem", color: "#666" }}>🔈</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              style={{ width: "100px" }}
            />
            <span style={{ fontSize: "0.9rem", color: "#666" }}>🔊</span>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Contrôles Système</h3>
        <div className="demo-output">
          {`🎮 Contrôles disponibles:
- ▶️/⏸️ Play/Pause: Contrôles système, raccourcis média
- ⏮️/⏭️ Précédent/Suivant: Boutons physiques, notifications
- ⏪/⏩ Retour/Avance rapide: Raccourcis clavier
- 🎯 Seek: Barre de progression système

📱 Où les trouver:
- Centre de contrôle iOS/Android
- Écran de verrouillage
- Barre des tâches Windows/macOS
- Notifications système
- Raccourcis clavier média

💡 Conseil: Testez avec les touches média de votre clavier ou le centre de contrôle de votre appareil mobile`}
        </div>
      </div>

      <div className="demo-section">
        <h3>Historique des Actions</h3>
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
          {actionHistory.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
              Utilisez les contrôles pour voir l'historique
            </p>
          ) : (
            actionHistory.map((event) => (
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
        <h3>Applications Pratiques</h3>
        <div className="grid">
          <div className="card">
            <h4>🎵 Streaming Audio</h4>
            <p>Contrôles système pour services de musique</p>
          </div>
          <div className="card">
            <h4>🎞️ Vidéo</h4>
            <p>Contrôle de lecture vidéo depuis le système</p>
          </div>
          <div className="card">
            <h4>🎙️ Podcasts</h4>
            <p>Navigation facile dans les épisodes</p>
          </div>
          <div className="card">
            <h4>📚 Audiobooks</h4>
            <p>Contrôle de la narration depuis l'écran de verrouillage</p>
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

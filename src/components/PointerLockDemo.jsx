"use client"

import { useEffect, useRef, useState } from "react"

export default function PointerLockDemo() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const [isSupported, setIsSupported] = useState(false)
  const [isLocked, setIsLocked] = useState(false)
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 })
  const [pointerMovement, setPointerMovement] = useState({ x: 0, y: 0 })
  const [lockEvents, setLockEvents] = useState([])
  const [gameActive, setGameActive] = useState(false)
  const [gameScore, setGameScore] = useState(0)
  const [targets, setTargets] = useState([])

  // Vérifier le support de l'API
  useEffect(() => {
    const isPointerLockSupported =
      "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document

    setIsSupported(isPointerLockSupported)
  }, [])

  // Gérer les événements de verrouillage du pointeur
  useEffect(() => {
    if (!isSupported) return

    const handlePointerLockChange = () => {
      const lockElement =
        document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement

      const isCurrentlyLocked = lockElement === canvasRef.current
      setIsLocked(isCurrentlyLocked)

      if (isCurrentlyLocked) {
        addLockEvent("✅ Verrouillé", "Pointeur verrouillé sur le canvas")
        if (!gameActive) startGame()
      } else {
        addLockEvent("❌ Déverrouillé", "Pointeur libéré")
        if (gameActive) stopGame()
      }
    }

    const handlePointerLockError = () => {
      addLockEvent("❌ Erreur", "Impossible de verrouiller le pointeur")
      setIsLocked(false)
    }

    document.addEventListener("pointerlockchange", handlePointerLockChange)
    document.addEventListener("mozpointerlockchange", handlePointerLockChange)
    document.addEventListener("webkitpointerlockchange", handlePointerLockChange)

    document.addEventListener("pointerlockerror", handlePointerLockError)
    document.addEventListener("mozpointerlockerror", handlePointerLockError)
    document.addEventListener("webkitpointerlockerror", handlePointerLockError)

    return () => {
      document.removeEventListener("pointerlockchange", handlePointerLockChange)
      document.removeEventListener("mozpointerlockchange", handlePointerLockChange)
      document.removeEventListener("webkitpointerlockchange", handlePointerLockChange)

      document.removeEventListener("pointerlockerror", handlePointerLockError)
      document.removeEventListener("mozpointerlockerror", handlePointerLockError)
      document.removeEventListener("webkitpointerlockerror", handlePointerLockError)
    }
  }, [isSupported, gameActive])

  // Gérer les mouvements de la souris
  useEffect(() => {
    if (!isLocked) return

    const handleMouseMove = (e) => {
      const movementX = e.movementX || e.mozMovementX || e.webkitMovementX || 0
      const movementY = e.movementY || e.mozMovementY || e.webkitMovementY || 0

      setPointerMovement({ x: movementX, y: movementY })

      // Mettre à jour la position du pointeur dans le canvas
      setPointerPosition((prev) => {
        const canvas = canvasRef.current
        if (!canvas) return prev

        const newX = Math.max(0, Math.min(canvas.width, prev.x + movementX))
        const newY = Math.max(0, Math.min(canvas.height, prev.y + movementY))

        return { x: newX, y: newY }
      })
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isLocked])

  // Dessiner sur le canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Définir la taille du canvas
    const resizeCanvas = () => {
      const container = containerRef.current
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = 400

        // Réinitialiser la position du pointeur au centre
        setPointerPosition({
          x: canvas.width / 2,
          y: canvas.height / 2,
        })
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Fonction de rendu
    const render = () => {
      // Effacer le canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dessiner l'arrière-plan
      ctx.fillStyle = "#f8f9fa"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Dessiner les cibles
      targets.forEach((target) => {
        ctx.fillStyle = target.color
        ctx.beginPath()
        ctx.arc(target.x, target.y, target.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Dessiner le curseur
      if (isLocked) {
        ctx.fillStyle = "#4CAF50"
        ctx.beginPath()
        ctx.arc(pointerPosition.x, pointerPosition.y, 10, 0, Math.PI * 2)
        ctx.fill()

        // Dessiner le viseur
        ctx.strokeStyle = "#000"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(pointerPosition.x - 15, pointerPosition.y)
        ctx.lineTo(pointerPosition.x + 15, pointerPosition.y)
        ctx.moveTo(pointerPosition.x, pointerPosition.y - 15)
        ctx.lineTo(pointerPosition.x, pointerPosition.y + 15)
        ctx.stroke()
      }

      // Afficher le score
      if (gameActive) {
        ctx.fillStyle = "#000"
        ctx.font = "20px Arial"
        ctx.textAlign = "left"
        ctx.fillText(`Score: ${gameScore}`, 20, 30)
      }

      // Afficher les instructions
      if (!isLocked) {
        ctx.fillStyle = "#000"
        ctx.font = "20px Arial"
        ctx.textAlign = "center"
        ctx.fillText("Cliquez pour verrouiller le pointeur et commencer", canvas.width / 2, canvas.height / 2)
      }

      requestAnimationFrame(render)
    }

    const animationId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [isLocked, pointerPosition, targets, gameActive, gameScore])

  // Gérer le jeu
  useEffect(() => {
    if (!gameActive) return

    // Vérifier les collisions
    const checkCollisions = () => {
      const newTargets = targets.filter((target) => {
        const dx = target.x - pointerPosition.x
        const dy = target.y - pointerPosition.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < target.radius + 10) {
          // Collision détectée
          setGameScore((prev) => prev + target.points)
          addLockEvent("🎯 Cible", `+${target.points} points`)
          return false
        }
        return true
      })

      setTargets(newTargets)
    }

    // Ajouter des cibles périodiquement
    const addTarget = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const radius = Math.random() * 20 + 10
      const x = Math.random() * (canvas.width - radius * 2) + radius
      const y = Math.random() * (canvas.height - radius * 2) + radius

      // Couleurs et points inversement proportionnels à la taille
      let color, points
      if (radius < 15) {
        color = "#f44336" // Rouge pour les petites cibles
        points = 10
      } else if (radius < 25) {
        color = "#FF9800" // Orange pour les moyennes
        points = 5
      } else {
        color = "#4CAF50" // Vert pour les grandes
        points = 2
      }

      setTargets((prev) => [...prev, { x, y, radius, color, points }])
    }

    const collisionInterval = setInterval(checkCollisions, 100)
    const targetInterval = setInterval(addTarget, 1000)

    return () => {
      clearInterval(collisionInterval)
      clearInterval(targetInterval)
    }
  }, [gameActive, pointerPosition, targets])

  const addLockEvent = (action, details) => {
    setLockEvents((prev) => [
      {
        id: Date.now(),
        action,
        details,
        timestamp: new Date().toLocaleTimeString(),
      },
      ...prev.slice(0, 9),
    ])
  }

  const requestPointerLock = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    try {
      if (canvas.requestPointerLock) {
        canvas.requestPointerLock()
      } else if (canvas.mozRequestPointerLock) {
        canvas.mozRequestPointerLock()
      } else if (canvas.webkitRequestPointerLock) {
        canvas.webkitRequestPointerLock()
      }

      addLockEvent("🔄 Action", "Demande de verrouillage du pointeur")
    } catch (error) {
      addLockEvent("❌ Erreur", `Verrouillage échoué: ${error.message}`)
    }
  }

  const exitPointerLock = () => {
    try {
      if (document.exitPointerLock) {
        document.exitPointerLock()
      } else if (document.mozExitPointerLock) {
        document.mozExitPointerLock()
      } else if (document.webkitExitPointerLock) {
        document.webkitExitPointerLock()
      }

      addLockEvent("🔄 Action", "Sortie manuelle du verrouillage")
    } catch (error) {
      addLockEvent("❌ Erreur", `Sortie échouée: ${error.message}`)
    }
  }

  const startGame = () => {
    setGameActive(true)
    setGameScore(0)
    setTargets([])
    addLockEvent("🎮 Jeu", "Démarrage du jeu")
  }

  const stopGame = () => {
    setGameActive(false)
    addLockEvent("🎮 Jeu", `Fin du jeu - Score final: ${gameScore}`)
  }

  const clearEvents = () => {
    setLockEvents([])
  }

  if (!isSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">🖱️ Pointer Lock API</h2>
          <p className="demo-description">Verrouillage du pointeur de la souris.</p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">❌ Pointer Lock API non supportée</div>
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
        <h2 className="demo-title">🖱️ Pointer Lock API</h2>
        <p className="demo-description">
          Verrouillez le pointeur de la souris pour les jeux et applications immersives. Contrôlez la caméra sans
          limites de mouvement.
        </p>
      </div>

      <div className="demo-section">
        <h3>Zone de Démonstration</h3>
        <div
          ref={containerRef}
          style={{
            position: "relative",
            borderRadius: "12px",
            overflow: "hidden",
            border: "2px solid #ddd",
          }}
        >
          <canvas
            ref={canvasRef}
            onClick={isLocked ? undefined : requestPointerLock}
            style={{
              display: "block",
              cursor: isLocked ? "none" : "pointer",
            }}
          />

          {gameActive && (
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                padding: "5px 10px",
                borderRadius: "4px",
              }}
            >
              <p style={{ margin: 0, fontWeight: "bold" }}>Échap pour quitter</p>
            </div>
          )}
        </div>
      </div>

      <div className="demo-section">
        <h3>État Actuel</h3>
        <div className="grid grid-3">
          <div className="card">
            <h4>🔒 Verrouillage</h4>
            <div className={`status-indicator ${isLocked ? "online" : "offline"}`}>
              {isLocked ? "✅ Verrouillé" : "❌ Déverrouillé"}
            </div>
          </div>
          <div className="card">
            <h4>🎮 Jeu</h4>
            <div className={`status-indicator ${gameActive ? "loading" : "offline"}`}>
              {gameActive ? "🎮 En cours" : "⏸️ Inactif"}
            </div>
          </div>
          <div className="card">
            <h4>🏆 Score</h4>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#4CAF50" }}>{gameScore}</p>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Données du Pointeur</h3>
        <div className="grid grid-2">
          <div className="card">
            <h4>📍 Position</h4>
            <p>X: {Math.round(pointerPosition.x)}</p>
            <p>Y: {Math.round(pointerPosition.y)}</p>
          </div>
          <div className="card">
            <h4>🔄 Mouvement</h4>
            <p>ΔX: {pointerMovement.x}</p>
            <p>ΔY: {pointerMovement.y}</p>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Contrôles</h3>
        <div className="demo-controls">
          {isLocked ? (
            <button className="btn danger" onClick={exitPointerLock}>
              🔓 Déverrouiller Pointeur
            </button>
          ) : (
            <button className="btn success" onClick={requestPointerLock}>
              🔒 Verrouiller Pointeur
            </button>
          )}
          <button className="btn" onClick={clearEvents}>
            🗑️ Effacer Historique
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h3>Instructions du Jeu</h3>
        <div className="demo-output">
          {`🎯 Objectif:
- Cliquez sur le canvas pour verrouiller le pointeur
- Déplacez la souris pour viser les cibles
- Touchez les cibles pour marquer des points
- Appuyez sur Échap pour quitter

💰 Points:
- Petites cibles rouges: 10 points
- Cibles moyennes orange: 5 points
- Grandes cibles vertes: 2 points`}
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
          {lockEvents.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
              Utilisez les contrôles pour voir l'historique
            </p>
          ) : (
            lockEvents.map((event) => (
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
          {`🖱️ Capacités du verrouillage de pointeur:
- Mouvements illimités de la souris
- Accès aux données de mouvement brutes
- Masquage du curseur système
- Contrôle total de l'expérience utilisateur

🔒 Restrictions de sécurité:
- Doit être déclenché par une action utilisateur
- L'utilisateur peut toujours quitter avec Échap
- Nécessite HTTPS sur certains navigateurs
- Permissions requises sur certains systèmes

💡 Conseils d'utilisation:
- Fournir des instructions claires
- Indiquer comment quitter le mode
- Gérer les différences entre navigateurs
- Combiner avec Fullscreen API pour immersion totale`}
        </div>
      </div>

      <div className="demo-section">
        <h3>Applications Pratiques</h3>
        <div className="grid">
          <div className="card">
            <h4>🎮 Jeux FPS</h4>
            <p>Contrôle de caméra à la souris sans limites</p>
          </div>
          <div className="card">
            <h4>🌐 3D/VR</h4>
            <p>Navigation dans des environnements virtuels</p>
          </div>
          <div className="card">
            <h4>🎨 Créatif</h4>
            <p>Outils de dessin et modélisation précis</p>
          </div>
          <div className="card">
            <h4>🎬 Simulateurs</h4>
            <p>Contrôles réalistes pour simulateurs</p>
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

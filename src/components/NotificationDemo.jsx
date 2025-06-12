"use client"

import { useState, useEffect } from "react"

export default function NotificationDemo() {
  const [permission, setPermission] = useState("default")
  const [isSupported] = useState("Notification" in window)
  const [notifications, setNotifications] = useState([])
  const [notificationSettings, setNotificationSettings] = useState({
    title: "Notification de Test",
    body: "Ceci est une notification de démonstration !",
    icon: "🔔",
    tag: "demo-notification",
    requireInteraction: false,
    silent: false,
  })

  useEffect(() => {
    if (isSupported) {
      setPermission(Notification.permission)
    }
  }, [isSupported])

  const requestPermission = async () => {
    if (!isSupported) return

    try {
      const result = await Notification.requestPermission()
      setPermission(result)

      if (result === "granted") {
        addNotificationLog("✅ Permission accordée pour les notifications")
      } else if (result === "denied") {
        addNotificationLog("❌ Permission refusée pour les notifications")
      }
    } catch (err) {
      addNotificationLog("❌ Erreur lors de la demande de permission")
    }
  }

  const addNotificationLog = (message) => {
    setNotifications((prev) => [
      {
        id: Date.now(),
        message,
        timestamp: new Date().toLocaleTimeString(),
      },
      ...prev.slice(0, 9), // Garder les 10 dernières
    ])
  }

  const showBasicNotification = () => {
    if (permission !== "granted") {
      addNotificationLog("❌ Permission requise pour afficher les notifications")
      return
    }

    const notification = new Notification(notificationSettings.title, {
      body: notificationSettings.body,
      icon: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" fontSize="90">${notificationSettings.icon}</text></svg>`,
      tag: notificationSettings.tag,
      requireInteraction: notificationSettings.requireInteraction,
      silent: notificationSettings.silent,
    })

    notification.onclick = () => {
      addNotificationLog("👆 Notification cliquée")
      window.focus()
      notification.close()
    }

    notification.onshow = () => {
      addNotificationLog("👁️ Notification affichée")
    }

    notification.onclose = () => {
      addNotificationLog("❌ Notification fermée")
    }

    notification.onerror = () => {
      addNotificationLog("⚠️ Erreur lors de l'affichage")
    }

    addNotificationLog(`🔔 Notification envoyée: "${notificationSettings.title}"`)
  }

  const showAdvancedNotification = () => {
    if (permission !== "granted") {
      addNotificationLog("❌ Permission requise pour afficher les notifications")
      return
    }

    const notification = new Notification("Notification Avancée", {
      body: "Cette notification a des options avancées",
      icon: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" fontSize="90">⚡</text></svg>`,
      badge: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" fontSize="90">🔥</text></svg>`,
      tag: "advanced-notification",
      requireInteraction: true,
      silent: false,
      timestamp: Date.now(),
      data: {
        url: window.location.href,
        action: "demo",
      },
    })

    notification.onclick = () => {
      addNotificationLog("👆 Notification avancée cliquée")
      console.log("Données de la notification:", notification.data)
      window.focus()
      notification.close()
    }

    addNotificationLog("⚡ Notification avancée envoyée")
  }

  const showTimedNotification = () => {
    if (permission !== "granted") {
      addNotificationLog("❌ Permission requise pour afficher les notifications")
      return
    }

    const notification = new Notification("Notification Temporisée", {
      body: "Cette notification se fermera automatiquement dans 5 secondes",
      icon: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" fontSize="90">⏰</text></svg>`,
      tag: "timed-notification",
    })

    setTimeout(() => {
      notification.close()
      addNotificationLog("⏰ Notification fermée automatiquement")
    }, 5000)

    addNotificationLog("⏰ Notification temporisée (5s) envoyée")
  }

  const showProgressNotification = () => {
    if (permission !== "granted") {
      addNotificationLog("❌ Permission requise pour afficher les notifications")
      return
    }

    let progress = 0
    const updateProgress = () => {
      progress += 10

      const notification = new Notification(`Progression: ${progress}%`, {
        body: `Téléchargement en cours... ${progress}% terminé`,
        icon: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" fontSize="90">📥</text></svg>`,
        tag: "progress-notification", // Même tag pour remplacer la précédente
        silent: true,
      })

      if (progress < 100) {
        setTimeout(updateProgress, 1000)
      } else {
        setTimeout(() => {
          const finalNotification = new Notification("Téléchargement Terminé!", {
            body: "Le fichier a été téléchargé avec succès",
            icon: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" fontSize="90">✅</text></svg>`,
            tag: "progress-notification",
          })
          addNotificationLog("✅ Téléchargement simulé terminé")
        }, 1000)
      }
    }

    updateProgress()
    addNotificationLog("📥 Simulation de progression démarrée")
  }

  const clearNotifications = () => {
    setNotifications([])
  }

  const getPermissionStatus = () => {
    switch (permission) {
      case "granted":
        return { text: "✅ Accordée", color: "#4CAF50" }
      case "denied":
        return { text: "❌ Refusée", color: "#f44336" }
      default:
        return { text: "⏳ Non demandée", color: "#FF9800" }
    }
  }

  if (!isSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">🔔 Notification API</h2>
          <p className="demo-description">Affichage de notifications système natives.</p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">❌ Notification API non supportée</div>
        </div>
      </div>
    )
  }

  const permissionStatus = getPermissionStatus()

  return (
    <div>
      <div className="demo-header">
        <h2 className="demo-title">🔔 Notification API</h2>
        <p className="demo-description">
          Créez des notifications système natives avec options avancées, gestion des permissions et interactions
          utilisateur.
        </p>
      </div>

      <div className="demo-section">
        <h3>État des Permissions</h3>
        <div className="grid grid-2">
          <div className="card">
            <h4>🔐 Permission Actuelle</h4>
            <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: permissionStatus.color }}>
              {permissionStatus.text}
            </p>
            {permission !== "granted" && (
              <button className="btn success" onClick={requestPermission} style={{ marginTop: "1rem" }}>
                🔔 Demander Permission
              </button>
            )}
          </div>
          <div className="card">
            <h4>📊 Support Navigateur</h4>
            <div className="status-indicator online">✅ Notification API supportée</div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Configuration de Notification</h3>
        <div className="grid grid-2">
          <div className="input-group">
            <label>Titre:</label>
            <input
              type="text"
              value={notificationSettings.title}
              onChange={(e) => setNotificationSettings((prev) => ({ ...prev, title: e.target.value }))}
            />
          </div>
          <div className="input-group">
            <label>Icône (Emoji):</label>
            <input
              type="text"
              value={notificationSettings.icon}
              onChange={(e) => setNotificationSettings((prev) => ({ ...prev, icon: e.target.value }))}
              maxLength={2}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Message:</label>
          <textarea
            value={notificationSettings.body}
            onChange={(e) => setNotificationSettings((prev) => ({ ...prev, body: e.target.value }))}
            rows={2}
          />
        </div>

        <div className="grid grid-2">
          <div className="input-group">
            <label>
              <input
                type="checkbox"
                checked={notificationSettings.requireInteraction}
                onChange={(e) => setNotificationSettings((prev) => ({ ...prev, requireInteraction: e.target.checked }))}
                style={{ marginRight: "0.5rem" }}
              />
              Nécessite une interaction
            </label>
          </div>
          <div className="input-group">
            <label>
              <input
                type="checkbox"
                checked={notificationSettings.silent}
                onChange={(e) => setNotificationSettings((prev) => ({ ...prev, silent: e.target.checked }))}
                style={{ marginRight: "0.5rem" }}
              />
              Mode silencieux
            </label>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Types de Notifications</h3>
        <div className="demo-controls">
          <button className="btn success" onClick={showBasicNotification} disabled={permission !== "granted"}>
            🔔 Notification Basique
          </button>
          <button className="btn" onClick={showAdvancedNotification} disabled={permission !== "granted"}>
            ⚡ Notification Avancée
          </button>
          <button className="btn" onClick={showTimedNotification} disabled={permission !== "granted"}>
            ⏰ Notification Temporisée
          </button>
          <button className="btn" onClick={showProgressNotification} disabled={permission !== "granted"}>
            📥 Simulation Progression
          </button>
        </div>

        {permission !== "granted" && (
          <p style={{ marginTop: "1rem", color: "#666", fontStyle: "italic" }}>
            💡 Accordez la permission pour tester les notifications
          </p>
        )}
      </div>

      <div className="demo-section">
        <h3>Journal des Notifications ({notifications.length})</h3>
        <div className="demo-controls">
          <button className="btn danger" onClick={clearNotifications}>
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
          {notifications.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
              Aucune notification envoyée. Testez les boutons ci-dessus !
            </p>
          ) : (
            notifications.map((notif) => (
              <div
                key={notif.id}
                style={{
                  padding: "0.75rem",
                  margin: "0.5rem 0",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
                  animation: "slideIn 0.3s ease",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "#666", marginBottom: "0.25rem" }}>[{notif.timestamp}]</div>
                <div style={{ fontSize: "0.9rem" }}>{notif.message}</div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="demo-section">
        <h3>Fonctionnalités Avancées</h3>
        <div className="demo-output">
          {`🔔 Options disponibles:
- title: Titre de la notification
- body: Contenu du message
- icon: Icône personnalisée (URL ou emoji)
- badge: Badge pour les notifications groupées
- tag: Identifiant pour remplacer/grouper
- requireInteraction: Notification persistante
- silent: Mode silencieux (pas de son)
- timestamp: Horodatage personnalisé
- data: Données personnalisées

🎯 Événements gérés:
- onclick: Clic sur la notification
- onshow: Notification affichée
- onclose: Notification fermée
- onerror: Erreur d'affichage

💡 Bonnes pratiques:
- Demander la permission au bon moment
- Utiliser des tags pour éviter le spam
- Fournir des actions claires
- Respecter les préférences utilisateur`}
        </div>
      </div>

      <div className="demo-section">
        <h3>Applications Pratiques</h3>
        <div className="grid">
          <div className="card">
            <h4>💬 Messagerie</h4>
            <p>Notifications de nouveaux messages en temps réel</p>
          </div>
          <div className="card">
            <h4>📧 Email</h4>
            <p>Alertes pour nouveaux emails importants</p>
          </div>
          <div className="card">
            <h4>📅 Calendrier</h4>
            <p>Rappels de rendez-vous et événements</p>
          </div>
          <div className="card">
            <h4>🛒 E-commerce</h4>
            <p>Notifications de commandes et promotions</p>
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

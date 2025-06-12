"use client"

import { useEffect, useState } from "react"

export default function NetworkInfoDemo() {
  const [networkInfo, setNetworkInfo] = useState(null)
  const [isSupported] = useState("connection" in navigator)
  const [networkHistory, setNetworkHistory] = useState([])

  useEffect(() => {
    if (!isSupported) return

    const updateNetworkInfo = () => {
      const connection = navigator.connection
      const info = {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData,
        timestamp: new Date().toLocaleTimeString(),
      }

      setNetworkInfo(info)

      setNetworkHistory((prev) => [
        info,
        ...prev.slice(0, 9), // Garder les 10 dernières
      ])
    }

    updateNetworkInfo()

    navigator.connection.addEventListener("change", updateNetworkInfo)

    return () => {
      navigator.connection.removeEventListener("change", updateNetworkInfo)
    }
  }, [isSupported])

  const getConnectionIcon = (type) => {
    switch (type) {
      case "4g":
        return "📶"
      case "3g":
        return "📶"
      case "2g":
        return "📶"
      case "slow-2g":
        return "📶"
      default:
        return "📶"
    }
  }

  const getConnectionColor = (type) => {
    switch (type) {
      case "4g":
        return "#4CAF50"
      case "3g":
        return "#FF9800"
      case "2g":
        return "#f44336"
      case "slow-2g":
        return "#9C27B0"
      default:
        return "#666"
    }
  }

  const getSpeedDescription = (downlink) => {
    if (downlink >= 10) return "Très rapide"
    if (downlink >= 1.5) return "Rapide"
    if (downlink >= 0.5) return "Moyen"
    return "Lent"
  }

  const adaptContentForNetwork = () => {
    if (!networkInfo) return

    const recommendations = []

    if (networkInfo.saveData) {
      recommendations.push("🔋 Mode économie de données activé")
    }

    if (networkInfo.effectiveType === "slow-2g" || networkInfo.effectiveType === "2g") {
      recommendations.push("📱 Charger version allégée")
      recommendations.push("🖼️ Réduire qualité des images")
      recommendations.push("📺 Désactiver autoplay vidéo")
    } else if (networkInfo.effectiveType === "3g") {
      recommendations.push("📱 Charger version standard")
      recommendations.push("🖼️ Images qualité moyenne")
    } else {
      recommendations.push("📱 Charger version complète")
      recommendations.push("🖼️ Images haute qualité")
      recommendations.push("📺 Autoplay vidéo autorisé")
    }

    return recommendations
  }

  if (!isSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">📶 Network Information API</h2>
          <p className="demo-description">Informations sur la connexion réseau.</p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">❌ Network Information API non supportée</div>
          <p style={{ marginTop: "1rem", color: "#666" }}>
            Cette API est principalement supportée sur Chrome/Edge mobile.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="demo-header">
        <h2 className="demo-title">📶 Network Information API</h2>
        <p className="demo-description">
          Adaptez votre contenu selon la qualité de connexion. Optimisez l'expérience utilisateur en fonction du réseau.
        </p>
      </div>

      {networkInfo && (
        <div className="demo-section">
          <h3>Informations Réseau Actuelles</h3>
          <div className="grid">
            <div className="card">
              <h4>{getConnectionIcon(networkInfo.effectiveType)} Type de Connexion</h4>
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: getConnectionColor(networkInfo.effectiveType),
                }}
              >
                {networkInfo.effectiveType?.toUpperCase()}
              </p>
            </div>
            <div className="card">
              <h4>⬇️ Débit Descendant</h4>
              <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#667eea" }}>{networkInfo.downlink} Mbps</p>
              <p style={{ fontSize: "0.8rem", color: "#666" }}>{getSpeedDescription(networkInfo.downlink)}</p>
            </div>
            <div className="card">
              <h4>⏱️ Latence (RTT)</h4>
              <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#4CAF50" }}>{networkInfo.rtt}ms</p>
            </div>
            <div className="card">
              <h4>🔋 Économie de Données</h4>
              <div className={`status-indicator ${networkInfo.saveData ? "loading" : "online"}`}>
                {networkInfo.saveData ? "🔋 Activée" : "📶 Désactivée"}
              </div>
            </div>
          </div>
        </div>
      )}

      {networkInfo && (
        <div className="demo-section">
          <h3>Recommandations d'Adaptation</h3>
          <div className="demo-output">
            {adaptContentForNetwork()?.join("\n") || "Aucune recommandation disponible"}
          </div>
        </div>
      )}

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
          {networkHistory.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
              Changez de réseau pour voir l'historique
            </p>
          ) : (
            networkHistory.map((info, index) => (
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
                  {getConnectionIcon(info.effectiveType)} {info.effectiveType?.toUpperCase()} - {info.downlink} Mbps
                </div>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>
                  RTT: {info.rtt}ms | Économie: {info.saveData ? "Oui" : "Non"} | {info.timestamp}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="demo-section">
        <h3>Stratégies d'Optimisation</h3>
        <div className="demo-output">
          {`📶 Adaptation par type de connexion:

🚀 4G/WiFi rapide:
- Images haute résolution
- Vidéos en autoplay
- Préchargement de contenu
- Animations fluides

📱 3G:
- Images qualité moyenne
- Vidéos sur demande
- Chargement progressif
- Animations réduites

🐌 2G/Slow-2G:
- Images compressées
- Pas de vidéo autoplay
- Contenu textuel prioritaire
- Interface simplifiée

🔋 Mode économie de données:
- Désactiver images non essentielles
- Réduire fréquence de sync
- Compresser les requêtes
- Avertir avant gros téléchargements`}
        </div>
      </div>

      <div className="demo-section">
        <h3>Applications Pratiques</h3>
        <div className="grid">
          <div className="card">
            <h4>📱 Apps Mobiles</h4>
            <p>Adapter la qualité selon la connexion</p>
          </div>
          <div className="card">
            <h4>📺 Streaming</h4>
            <p>Ajuster automatiquement la résolution vidéo</p>
          </div>
          <div className="card">
            <h4>🛒 E-commerce</h4>
            <p>Optimiser le chargement des images produits</p>
          </div>
          <div className="card">
            <h4>📰 Médias</h4>
            <p>Proposer versions allégées des articles</p>
          </div>
        </div>
      </div>
    </div>
  )
}

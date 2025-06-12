"use client"

import { useState } from "react"

export default function CredentialDemo() {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" })
  const [isSupported, setIsSupported] = useState("credentials" in navigator)
  const [authStatus, setAuthStatus] = useState("")
  const [savedCredentials, setSavedCredentials] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!loginForm.username || !loginForm.password) {
      setAuthStatus("❌ Veuillez remplir tous les champs")
      return
    }

    try {
      // Simuler une connexion réussie
      setAuthStatus("🔄 Connexion en cours...")

      // Simulation d'une requête de connexion
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simuler une réponse positive
      const userData = {
        displayName: `Utilisateur ${loginForm.username}`,
        avatar: `https://ui-avatars.com/api/?name=${loginForm.username}&background=667eea&color=fff`,
      }

      setAuthStatus("✅ Connexion réussie !")

      // Proposer de sauvegarder les identifiants
      if (isSupported) {
        try {
          const credential = new PasswordCredential({
            id: loginForm.username,
            password: loginForm.password,
            name: userData.displayName,
            iconURL: userData.avatar,
          })

          await navigator.credentials.store(credential)
          setAuthStatus("✅ Connexion réussie ! Identifiants sauvegardés.")
          setSavedCredentials({
            username: loginForm.username,
            displayName: userData.displayName,
          })
        } catch (err) {
          setAuthStatus("✅ Connexion réussie ! (Sauvegarde des identifiants échouée)")
          console.error("Erreur sauvegarde:", err)
        }
      }
    } catch (err) {
      setAuthStatus("❌ Erreur de connexion")
      console.error("Erreur:", err)
    }

    setTimeout(() => setAuthStatus(""), 5000)
  }

  const autoLogin = async () => {
    if (!isSupported) {
      setAuthStatus("❌ API non supportée")
      return
    }

    try {
      setAuthStatus("🔄 Recherche d'identifiants sauvegardés...")

      const credential = await navigator.credentials.get({
        password: true,
        mediation: "optional", // 'required' forcerait une sélection utilisateur
      })

      if (credential && credential.type === "password") {
        setLoginForm({
          username: credential.id,
          password: credential.password || "••••••••",
        })

        setAuthStatus("🔑 Identifiants récupérés ! Connexion automatique...")

        // Simuler la connexion automatique
        setTimeout(() => {
          setAuthStatus("✅ Connexion automatique réussie !")
          setSavedCredentials({
            username: credential.id,
            displayName: credential.name || credential.id,
          })
        }, 1000)
      } else {
        setAuthStatus("ℹ️ Aucun identifiant sauvegardé trouvé")
      }
    } catch (err) {
      if (err.name === "NotAllowedError") {
        setAuthStatus("❌ Accès aux identifiants refusé par l'utilisateur")
      } else {
        setAuthStatus("❌ Erreur lors de la récupération des identifiants")
      }
      console.error("Erreur auto-login:", err)
    }

    setTimeout(() => setAuthStatus(""), 5000)
  }

  const clearCredentials = () => {
    setLoginForm({ username: "", password: "" })
    setSavedCredentials(null)
    setAuthStatus("🗑️ Formulaire effacé")
    setTimeout(() => setAuthStatus(""), 3000)
  }

  const simulateLogout = () => {
    setSavedCredentials(null)
    setLoginForm({ username: "", password: "" })
    setAuthStatus("👋 Déconnexion simulée")
    setTimeout(() => setAuthStatus(""), 3000)
  }

  return (
    <div className="demo-container">
      <div className="demo-header">
        <h2 className="demo-title">🔒 Credential Management API</h2>
        <p className="demo-description">
          Intègre avec le gestionnaire de mots de passe du navigateur pour une expérience de connexion fluide et
          sécurisée.
        </p>
      </div>

      <div className="demo-section">
        <h3>Support de l'API</h3>
        <div className={`status-indicator ${isSupported ? "online" : "offline"}`}>
          {isSupported ? "✅ Credential Management API supportée" : "❌ API non supportée"}
        </div>
        {!isSupported && (
          <p style={{ marginTop: "1rem", color: "#666" }}>
            Cette API est principalement supportée sur Chrome/Edge. La démonstration reste fonctionnelle.
          </p>
        )}
      </div>

      {savedCredentials && (
        <div className="demo-section">
          <h3>Session Actuelle</h3>
          <div className="card" style={{ background: "#e8f5e8" }}>
            <h4>👤 Utilisateur Connecté</h4>
            <p>
              <strong>Nom d'utilisateur:</strong> {savedCredentials.username}
            </p>
            <p>
              <strong>Nom d'affichage:</strong> {savedCredentials.displayName}
            </p>
            <button className="btn danger" onClick={simulateLogout} style={{ marginTop: "1rem" }}>
              🚪 Se Déconnecter
            </button>
          </div>
        </div>
      )}

      <div className="demo-section">
        <h3>Connexion Automatique</h3>
        <div className="demo-controls">
          <button className="btn success" onClick={autoLogin} disabled={!isSupported}>
            🔑 Connexion Automatique
          </button>
        </div>
        <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}>
          Tente de récupérer les identifiants sauvegardés pour une connexion automatique.
        </p>
      </div>

      <div className="demo-section">
        <h3>Connexion Manuelle</h3>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Nom d'utilisateur:</label>
            <input
              type="text"
              value={loginForm.username}
              onChange={(e) => setLoginForm((prev) => ({ ...prev, username: e.target.value }))}
              placeholder="Entrez votre nom d'utilisateur"
              autoComplete="username"
            />
          </div>
          <div className="input-group">
            <label>Mot de passe:</label>
            <input
              type="password"
              value={loginForm.password}
              onChange={(e) => setLoginForm((prev) => ({ ...prev, password: e.target.value }))}
              placeholder="Entrez votre mot de passe"
              autoComplete="current-password"
            />
          </div>
          <div className="demo-controls">
            <button type="submit" className="btn success">
              🔐 Se Connecter
            </button>
            <button type="button" className="btn" onClick={clearCredentials}>
              🗑️ Effacer
            </button>
          </div>
        </form>
      </div>

      <div className="demo-section">
        <h3>Statut de l'Authentification</h3>
        <div className="demo-output">{authStatus || "Aucune action récente"}</div>
      </div>

      <div className="demo-section">
        <h3>Comment ça Fonctionne</h3>
        <div className="demo-output">
          {`🔐 Processus de sauvegarde:
1. L'utilisateur se connecte avec succès
2. Un objet PasswordCredential est créé
3. navigator.credentials.store() sauvegarde les identifiants
4. Le navigateur propose de sauvegarder (selon les paramètres)

🔑 Processus de récupération:
1. navigator.credentials.get() demande les identifiants
2. Le navigateur peut afficher un sélecteur d'identifiants
3. Les identifiants sont récupérés automatiquement
4. Connexion automatique possible

⚙️ Options de médiation:
- 'silent': Récupération silencieuse (pas d'UI)
- 'optional': UI optionnelle selon le contexte
- 'required': Force l'affichage de l'UI de sélection`}
        </div>
      </div>

      <div className="demo-section">
        <h3>Avantages pour l'UX</h3>
        <div className="grid">
          <div className="card">
            <h4>🚀 Connexion Rapide</h4>
            <p>Connexion en un clic avec les identifiants sauvegardés</p>
          </div>
          <div className="card">
            <h4>🔒 Sécurité Renforcée</h4>
            <p>Intégration avec les gestionnaires de mots de passe</p>
          </div>
          <div className="card">
            <h4>📱 Multi-Plateforme</h4>
            <p>Synchronisation des identifiants entre appareils</p>
          </div>
          <div className="card">
            <h4>♿ Accessibilité</h4>
            <p>Facilite l'accès pour les utilisateurs avec handicaps</p>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Considérations de Sécurité</h3>
        <div className="demo-output">
          {`🛡️ Bonnes pratiques:
- Toujours valider les identifiants côté serveur
- Utiliser HTTPS obligatoirement
- Implémenter une authentification à deux facteurs
- Gérer les cas d'erreur gracieusement
- Respecter les préférences utilisateur

⚠️ Limitations:
- Support navigateur limité (principalement Chromium)
- Nécessite une interaction utilisateur
- Peut être désactivé par les politiques d'entreprise`}
        </div>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"

export default function SpeechSynthesisDemo() {
  const [isSupported] = useState("speechSynthesis" in window)
  const [voices, setVoices] = useState([])
  const [selectedVoice, setSelectedVoice] = useState(null)
  const [text, setText] = useState("Bonjour ! Ceci est une démonstration de synthèse vocale.")
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [speechSettings, setSpeechSettings] = useState({
    rate: 1,
    pitch: 1,
    volume: 1,
  })
  const [speechHistory, setSpeechHistory] = useState([])

  useEffect(() => {
    if (!isSupported) return

    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices()
      setVoices(availableVoices)

      // Sélectionner une voix française par défaut
      const frenchVoice = availableVoices.find(
        (voice) => voice.lang.startsWith("fr") || voice.name.toLowerCase().includes("french"),
      )
      setSelectedVoice(frenchVoice || availableVoices[0])
    }

    loadVoices()
    speechSynthesis.addEventListener("voiceschanged", loadVoices)

    return () => {
      speechSynthesis.removeEventListener("voiceschanged", loadVoices)
      speechSynthesis.cancel()
    }
  }, [isSupported])

  const addToHistory = (message) => {
    setSpeechHistory((prev) => [
      {
        id: Date.now(),
        message,
        timestamp: new Date().toLocaleTimeString(),
      },
      ...prev.slice(0, 9),
    ])
  }

  const speak = (textToSpeak = text) => {
    if (!isSupported || !selectedVoice) return

    // Arrêter toute synthèse en cours
    speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(textToSpeak)
    utterance.voice = selectedVoice
    utterance.rate = speechSettings.rate
    utterance.pitch = speechSettings.pitch
    utterance.volume = speechSettings.volume

    utterance.onstart = () => {
      setIsSpeaking(true)
      addToHistory(`🗣️ Début: "${textToSpeak.substring(0, 50)}${textToSpeak.length > 50 ? "..." : ""}"`)
    }

    utterance.onend = () => {
      setIsSpeaking(false)
      addToHistory("✅ Synthèse terminée")
    }

    utterance.onerror = (event) => {
      setIsSpeaking(false)
      addToHistory(`❌ Erreur: ${event.error}`)
    }

    speechSynthesis.speak(utterance)
  }

  const stopSpeaking = () => {
    speechSynthesis.cancel()
    setIsSpeaking(false)
    addToHistory("⏹️ Synthèse arrêtée")
  }

  const pauseSpeaking = () => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause()
      addToHistory("⏸️ Synthèse en pause")
    }
  }

  const resumeSpeaking = () => {
    if (speechSynthesis.paused) {
      speechSynthesis.resume()
      addToHistory("▶️ Synthèse reprise")
    }
  }

  const speakPreset = (presetText, description) => {
    setText(presetText)
    speak(presetText)
    addToHistory(`📝 Preset: ${description}`)
  }

  const clearHistory = () => {
    setSpeechHistory([])
  }

  const getVoiceFlag = (lang) => {
    const flags = {
      fr: "🇫🇷",
      en: "🇺🇸",
      es: "🇪🇸",
      de: "🇩🇪",
      it: "🇮🇹",
      pt: "🇵🇹",
      ja: "🇯🇵",
      ko: "🇰🇷",
      zh: "🇨🇳",
      ru: "🇷🇺",
      ar: "🇸🇦",
    }
    const langCode = lang.split("-")[0]
    return flags[langCode] || "🌍"
  }

  const presetTexts = [
    {
      text: "Bonjour et bienvenue dans cette démonstration de synthèse vocale !",
      description: "Salutation française",
    },
    {
      text: "Hello and welcome to this speech synthesis demonstration!",
      description: "Salutation anglaise",
    },
    {
      text: "Les nombres : un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix.",
      description: "Nombres en français",
    },
    {
      text: "Ceci est un test de vitesse de parole avec différents paramètres.",
      description: "Test de vitesse",
    },
    {
      text: "La synthèse vocale permet de convertir du texte en parole naturelle.",
      description: "Explication technique",
    },
  ]

  if (!isSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">🗣️ Speech Synthesis API</h2>
          <p className="demo-description">Synthèse vocale text-to-speech.</p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">❌ Speech Synthesis API non supportée</div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="demo-header">
        <h2 className="demo-title">🗣️ Speech Synthesis API</h2>
        <p className="demo-description">
          Convertissez du texte en parole naturelle avec contrôle de la voix, vitesse, tonalité et volume. Support
          multilingue.
        </p>
      </div>

      <div className="demo-section">
        <h3>Configuration de la Voix</h3>
        <div className="grid grid-2">
          <div className="input-group">
            <label>Voix disponibles ({voices.length}):</label>
            <select
              value={selectedVoice?.name || ""}
              onChange={(e) => {
                const voice = voices.find((v) => v.name === e.target.value)
                setSelectedVoice(voice)
              }}
            >
              {voices.map((voice, index) => (
                <option key={index} value={voice.name}>
                  {getVoiceFlag(voice.lang)} {voice.name} ({voice.lang})
                </option>
              ))}
            </select>
          </div>
          <div className="card">
            <h4>🎭 Voix Sélectionnée</h4>
            {selectedVoice ? (
              <div>
                <p>
                  <strong>Nom:</strong> {selectedVoice.name}
                </p>
                <p>
                  <strong>Langue:</strong> {getVoiceFlag(selectedVoice.lang)} {selectedVoice.lang}
                </p>
                <p>
                  <strong>Local:</strong> {selectedVoice.localService ? "Oui" : "Non"}
                </p>
              </div>
            ) : (
              <p>Aucune voix sélectionnée</p>
            )}
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Paramètres de Synthèse</h3>
        <div className="grid grid-3">
          <div className="input-group">
            <label>Vitesse: {speechSettings.rate}x</label>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={speechSettings.rate}
              onChange={(e) => setSpeechSettings((prev) => ({ ...prev, rate: Number.parseFloat(e.target.value) }))}
            />
          </div>
          <div className="input-group">
            <label>Tonalité: {speechSettings.pitch}</label>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={speechSettings.pitch}
              onChange={(e) => setSpeechSettings((prev) => ({ ...prev, pitch: Number.parseFloat(e.target.value) }))}
            />
          </div>
          <div className="input-group">
            <label>Volume: {Math.round(speechSettings.volume * 100)}%</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={speechSettings.volume}
              onChange={(e) => setSpeechSettings((prev) => ({ ...prev, volume: Number.parseFloat(e.target.value) }))}
            />
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Texte à Synthétiser</h3>
        <div className="input-group">
          <label>Votre texte:</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            placeholder="Entrez le texte que vous voulez faire lire..."
          />
        </div>
      </div>

      <div className="demo-section">
        <h3>Contrôles de Lecture</h3>
        <div className="demo-controls">
          <button className="btn success" onClick={() => speak()} disabled={isSpeaking || !text.trim()}>
            🗣️ Lire le Texte
          </button>
          <button className="btn warning" onClick={pauseSpeaking} disabled={!isSpeaking}>
            ⏸️ Pause
          </button>
          <button className="btn" onClick={resumeSpeaking} disabled={!speechSynthesis.paused}>
            ▶️ Reprendre
          </button>
          <button className="btn danger" onClick={stopSpeaking} disabled={!isSpeaking}>
            ⏹️ Arrêter
          </button>
        </div>

        <div className="card" style={{ marginTop: "1rem" }}>
          <h4>📊 État de la Synthèse</h4>
          <div className={`status-indicator ${isSpeaking ? "loading" : "online"}`}>
            {isSpeaking ? "🗣️ En cours de lecture..." : "⏸️ Arrêté"}
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Textes Prédéfinis</h3>
        <div className="demo-controls">
          {presetTexts.map((preset, index) => (
            <button
              key={index}
              className="btn"
              onClick={() => speakPreset(preset.text, preset.description)}
              disabled={isSpeaking}
              title={preset.text}
            >
              🗣️ {preset.description}
            </button>
          ))}
        </div>
      </div>

      <div className="demo-section">
        <h3>Historique des Synthèses</h3>
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
          {speechHistory.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
              Utilisez les contrôles pour voir l'historique
            </p>
          ) : (
            speechHistory.map((event) => (
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
                <div style={{ fontSize: "0.9rem" }}>{event.message}</div>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>{event.timestamp}</div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="demo-section">
        <h3>Paramètres Avancés</h3>
        <div className="demo-output">
          {`🎛️ Contrôles disponibles:
- Vitesse: 0.1x à 3x (normal = 1x)
- Tonalité: 0 à 2 (normal = 1)
- Volume: 0% à 100%

🗣️ Types de voix:
- Voix locales: Plus rapides, toujours disponibles
- Voix en ligne: Plus naturelles, nécessitent internet
- Support multilingue selon le système

⚙️ Événements gérés:
- onstart: Début de la synthèse
- onend: Fin de la synthèse
- onpause: Mise en pause
- onresume: Reprise
- onerror: Gestion des erreurs`}
        </div>
      </div>

      <div className="demo-section">
        <h3>Applications Pratiques</h3>
        <div className="grid">
          <div className="card">
            <h4>♿ Accessibilité</h4>
            <p>Lecture d'écran pour utilisateurs malvoyants</p>
          </div>
          <div className="card">
            <h4>📚 E-learning</h4>
            <p>Narration de cours et contenus éducatifs</p>
          </div>
          <div className="card">
            <h4>🤖 Assistants</h4>
            <p>Réponses vocales d'assistants virtuels</p>
          </div>
          <div className="card">
            <h4>📱 Apps Mobiles</h4>
            <p>Navigation vocale et notifications parlées</p>
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

"use client"

import { useEffect, useState } from "react"

export default function SpeechRecognitionDemo() {
  const [isSupported] = useState("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [finalTranscript, setFinalTranscript] = useState("")
  const [recognition, setRecognition] = useState(null)
  const [language, setLanguage] = useState("fr-FR")
  const [confidence, setConfidence] = useState(0)
  const [speechHistory, setSpeechHistory] = useState([])

  useEffect(() => {
    if (!isSupported) return

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognitionInstance = new SpeechRecognition()

    recognitionInstance.continuous = true
    recognitionInstance.interimResults = true
    recognitionInstance.lang = language

    recognitionInstance.onstart = () => {
      setIsListening(true)
      addToHistory("🎤 Écoute démarrée")
    }

    recognitionInstance.onend = () => {
      setIsListening(false)
      addToHistory("⏹️ Écoute arrêtée")
    }

    recognitionInstance.onresult = (event) => {
      let interimTranscript = ""
      let finalText = ""

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i]
        if (result.isFinal) {
          finalText += result[0].transcript
          setConfidence(result[0].confidence)
          addToHistory(`✅ "${result[0].transcript}" (${Math.round(result[0].confidence * 100)}%)`)
        } else {
          interimTranscript += result[0].transcript
        }
      }

      setTranscript(interimTranscript)
      if (finalText) {
        setFinalTranscript((prev) => prev + finalText + " ")
      }
    }

    recognitionInstance.onerror = (event) => {
      addToHistory(`❌ Erreur: ${event.error}`)
      setIsListening(false)
    }

    setRecognition(recognitionInstance)

    return () => {
      if (recognitionInstance) {
        recognitionInstance.stop()
      }
    }
  }, [language, isSupported])

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

  const startListening = () => {
    if (recognition && !isListening) {
      recognition.start()
    }
  }

  const stopListening = () => {
    if (recognition && isListening) {
      recognition.stop()
    }
  }

  const clearTranscripts = () => {
    setTranscript("")
    setFinalTranscript("")
    setConfidence(0)
  }

  const clearHistory = () => {
    setSpeechHistory([])
  }

  const executeVoiceCommand = (text) => {
    const lowerText = text.toLowerCase()

    if (lowerText.includes("effacer") || lowerText.includes("clear")) {
      clearTranscripts()
      addToHistory("🗑️ Commande: Transcription effacée")
    } else if (lowerText.includes("arrêter") || lowerText.includes("stop")) {
      stopListening()
      addToHistory("⏹️ Commande: Arrêt de l'écoute")
    } else if (lowerText.includes("bonjour") || lowerText.includes("hello")) {
      addToHistory("👋 Commande: Salutation détectée")
    } else if (lowerText.includes("merci") || lowerText.includes("thank")) {
      addToHistory("🙏 Commande: Remerciement détecté")
    }
  }

  useEffect(() => {
    if (finalTranscript) {
      executeVoiceCommand(finalTranscript)
    }
  }, [finalTranscript])

  const languages = [
    { code: "fr-FR", name: "Français (France)" },
    { code: "en-US", name: "English (US)" },
    { code: "en-GB", name: "English (UK)" },
    { code: "es-ES", name: "Español (España)" },
    { code: "de-DE", name: "Deutsch (Deutschland)" },
    { code: "it-IT", name: "Italiano (Italia)" },
    { code: "pt-BR", name: "Português (Brasil)" },
    { code: "ja-JP", name: "日本語 (Japon)" },
    { code: "ko-KR", name: "한국어 (Corée)" },
    { code: "zh-CN", name: "中文 (Chine)" },
  ]

  if (!isSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">🎤 Speech Recognition API</h2>
          <p className="demo-description">Reconnaissance vocale en temps réel.</p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">❌ Speech Recognition API non supportée</div>
          <p style={{ marginTop: "1rem", color: "#666" }}>Cette API est principalement supportée sur Chrome/Edge.</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="demo-header">
        <h2 className="demo-title">🎤 Speech Recognition API</h2>
        <p className="demo-description">
          Reconnaissance vocale en temps réel avec support multilingue. Convertissez la parole en texte et créez des
          interfaces vocales.
        </p>
      </div>

      <div className="demo-section">
        <h3>Configuration</h3>
        <div className="grid grid-2">
          <div className="input-group">
            <label>Langue de reconnaissance:</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} disabled={isListening}>
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div className="card">
            <h4>🎯 Confiance</h4>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#4CAF50" }}>{Math.round(confidence * 100)}%</p>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Contrôles Vocaux</h3>
        <div className="demo-controls">
          <button className="btn success" onClick={startListening} disabled={isListening}>
            🎤 Démarrer Écoute
          </button>
          <button className="btn danger" onClick={stopListening} disabled={!isListening}>
            ⏹️ Arrêter Écoute
          </button>
          <button className="btn" onClick={clearTranscripts}>
            🗑️ Effacer Texte
          </button>
          <button className="btn" onClick={clearHistory}>
            🗑️ Effacer Historique
          </button>
        </div>

        <div className="grid grid-2" style={{ marginTop: "1rem" }}>
          <div className="card">
            <h4>📊 État</h4>
            <div className={`status-indicator ${isListening ? "loading" : "online"}`}>
              {isListening ? "🎤 En écoute..." : "⏸️ Arrêté"}
            </div>
          </div>
          <div className="card">
            <h4>🌍 Langue</h4>
            <p>{languages.find((l) => l.code === language)?.name}</p>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Transcription en Temps Réel</h3>
        <div className="input-group">
          <label>Texte en cours (temporaire):</label>
          <textarea
            value={transcript}
            readOnly
            rows={2}
            style={{
              backgroundColor: "#fff3cd",
              border: "2px solid #ffeaa7",
              fontStyle: transcript ? "normal" : "italic",
            }}
            placeholder="Parlez pour voir la transcription en temps réel..."
          />
        </div>

        <div className="input-group">
          <label>Transcription finale:</label>
          <textarea
            value={finalTranscript}
            readOnly
            rows={4}
            style={{
              backgroundColor: "#e8f5e8",
              border: "2px solid #c8e6c8",
            }}
            placeholder="Le texte final apparaîtra ici..."
          />
        </div>
      </div>

      <div className="demo-section">
        <h3>Commandes Vocales Reconnues</h3>
        <div className="demo-output">
          {`🗣️ Commandes disponibles:
- "Effacer" / "Clear" → Efface la transcription
- "Arrêter" / "Stop" → Arrête l'écoute
- "Bonjour" / "Hello" → Salutation
- "Merci" / "Thank you" → Remerciement

💡 Conseils pour une meilleure reconnaissance:
- Parlez clairement et distinctement
- Évitez les bruits de fond
- Utilisez un microphone de qualité
- Faites des pauses entre les phrases`}
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
          {speechHistory.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
              Commencez à parler pour voir l'historique
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
        <h3>Applications Pratiques</h3>
        <div className="grid">
          <div className="card">
            <h4>💬 Assistants Vocaux</h4>
            <p>Interfaces conversationnelles et chatbots vocaux</p>
          </div>
          <div className="card">
            <h4>♿ Accessibilité</h4>
            <p>Navigation vocale pour utilisateurs handicapés</p>
          </div>
          <div className="card">
            <h4>📝 Dictée</h4>
            <p>Saisie de texte par reconnaissance vocale</p>
          </div>
          <div className="card">
            <h4>🎮 Jeux</h4>
            <p>Commandes vocales dans les jeux</p>
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

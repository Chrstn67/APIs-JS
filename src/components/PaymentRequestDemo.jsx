"use client"

import { useState } from "react"

export default function PaymentRequestDemo() {
  const [isSupported] = useState("PaymentRequest" in window)
  const [paymentMethods, setPaymentMethods] = useState([])
  const [paymentResult, setPaymentResult] = useState(null)
  const [paymentHistory, setPaymentHistory] = useState([])
  const [orderDetails, setOrderDetails] = useState({
    total: 29.99,
    currency: "EUR",
    items: [
      { label: "Produit Premium", amount: 24.99 },
      { label: "Livraison", amount: 5.0 },
    ],
  })

  const addToHistory = (operation, details, status = "info") => {
    setPaymentHistory((prev) => [
      {
        id: Date.now(),
        operation,
        details,
        status,
        timestamp: new Date().toLocaleTimeString(),
      },
      ...prev.slice(0, 9),
    ])
  }

  const checkPaymentMethods = async () => {
    if (!isSupported) {
      addToHistory("❌ Erreur", "Payment Request API non supportée", "error")
      return
    }

    const supportedMethods = [
      {
        supportedMethods: "basic-card",
        data: {
          supportedNetworks: ["visa", "mastercard", "amex"],
          supportedTypes: ["debit", "credit"],
        },
      },
      {
        supportedMethods: "https://google.com/pay",
        data: {
          environment: "TEST",
          merchantId: "demo-merchant",
          paymentMethodTokenizationParameters: {
            tokenizationType: "PAYMENT_GATEWAY",
            parameters: {
              gateway: "example",
              gatewayMerchantId: "demo-gateway-merchant-id",
            },
          },
        },
      },
    ]

    const details = {
      total: {
        label: "Total",
        amount: {
          currency: orderDetails.currency,
          value: orderDetails.total.toFixed(2),
        },
      },
      displayItems: orderDetails.items.map((item) => ({
        label: item.label,
        amount: {
          currency: orderDetails.currency,
          value: item.amount.toFixed(2),
        },
      })),
    }

    try {
      const request = new PaymentRequest(supportedMethods, details)

      // Vérifier les méthodes supportées
      const canMakePayment = await request.canMakePayment()

      if (canMakePayment) {
        setPaymentMethods(supportedMethods)
        addToHistory("✅ Vérification", "Méthodes de paiement disponibles", "success")
      } else {
        addToHistory("⚠️ Avertissement", "Aucune méthode de paiement disponible", "warning")
      }
    } catch (err) {
      addToHistory("❌ Erreur", `Vérification échouée: ${err.message}`, "error")
    }
  }

  const initiatePayment = async () => {
    if (!isSupported) {
      addToHistory("❌ Erreur", "Payment Request API non supportée", "error")
      return
    }

    const supportedMethods = [
      {
        supportedMethods: "basic-card",
        data: {
          supportedNetworks: ["visa", "mastercard", "amex"],
          supportedTypes: ["debit", "credit"],
        },
      },
    ]

    const details = {
      total: {
        label: "Total à payer",
        amount: {
          currency: orderDetails.currency,
          value: orderDetails.total.toFixed(2),
        },
      },
      displayItems: orderDetails.items.map((item) => ({
        label: item.label,
        amount: {
          currency: orderDetails.currency,
          value: item.amount.toFixed(2),
        },
      })),
      shippingOptions: [
        {
          id: "standard",
          label: "Livraison standard (5-7 jours)",
          amount: { currency: orderDetails.currency, value: "5.00" },
          selected: true,
        },
        {
          id: "express",
          label: "Livraison express (1-2 jours)",
          amount: { currency: orderDetails.currency, value: "15.00" },
        },
      ],
    }

    const options = {
      requestPayerName: true,
      requestPayerEmail: true,
      requestPayerPhone: true,
      requestShipping: true,
    }

    try {
      const request = new PaymentRequest(supportedMethods, details, options)

      addToHistory("🔄 Traitement", "Ouverture de l'interface de paiement", "info")

      const response = await request.show()

      // Simuler la validation du paiement
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Compléter le paiement
      await response.complete("success")

      setPaymentResult({
        methodName: response.methodName,
        details: response.details,
        payerName: response.payerName,
        payerEmail: response.payerEmail,
        payerPhone: response.payerPhone,
        shippingAddress: response.shippingAddress,
        shippingOption: response.shippingOption,
      })

      addToHistory("✅ Succès", `Paiement de ${orderDetails.total}€ accepté`, "success")
    } catch (err) {
      if (err.name === "AbortError") {
        addToHistory("❌ Annulé", "Paiement annulé par l'utilisateur", "warning")
      } else {
        addToHistory("❌ Erreur", `Paiement échoué: ${err.message}`, "error")
      }
    }
  }

  const updateOrderTotal = (newItems) => {
    const total = newItems.reduce((sum, item) => sum + item.amount, 0)
    setOrderDetails((prev) => ({
      ...prev,
      items: newItems,
      total,
    }))
  }

  const addItem = () => {
    const newItem = { label: "Nouvel article", amount: 10.0 }
    updateOrderTotal([...orderDetails.items, newItem])
    addToHistory("➕ Article", "Article ajouté au panier", "info")
  }

  const removeItem = (index) => {
    const newItems = orderDetails.items.filter((_, i) => i !== index)
    updateOrderTotal(newItems)
    addToHistory("➖ Article", "Article retiré du panier", "info")
  }

  const clearHistory = () => {
    setPaymentHistory([])
  }

  const clearPaymentResult = () => {
    setPaymentResult(null)
  }

  if (!isSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">💳 Payment Request API</h2>
          <p className="demo-description">Interface de paiement native du navigateur.</p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">❌ Payment Request API non supportée</div>
          <p style={{ marginTop: "1rem", color: "#666" }}>
            Cette API est supportée sur Chrome, Edge et Safari avec des méthodes de paiement configurées.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="demo-header">
        <h2 className="demo-title">💳 Payment Request API</h2>
        <p className="demo-description">
          Interface de paiement native et sécurisée. Intégrez Apple Pay, Google Pay et cartes bancaires facilement.
        </p>
      </div>

      <div className="demo-section">
        <h3>Commande Actuelle</h3>
        <div className="grid grid-2">
          <div className="card">
            <h4>🛒 Articles</h4>
            {orderDetails.items.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                  padding: "0.5rem",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "4px",
                }}
              >
                <span>{item.label}</span>
                <div>
                  <span style={{ fontWeight: "bold" }}>{item.amount.toFixed(2)}€</span>
                  <button
                    onClick={() => removeItem(index)}
                    style={{
                      marginLeft: "0.5rem",
                      background: "none",
                      border: "none",
                      color: "#f44336",
                      cursor: "pointer",
                    }}
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))}
            <button className="btn" onClick={addItem} style={{ marginTop: "0.5rem" }}>
              ➕ Ajouter Article
            </button>
          </div>

          <div className="card">
            <h4>💰 Total</h4>
            <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#4CAF50" }}>
              {orderDetails.total.toFixed(2)} {orderDetails.currency}
            </p>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>{orderDetails.items.length} article(s)</div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>Actions de Paiement</h3>
        <div className="demo-controls">
          <button className="btn" onClick={checkPaymentMethods}>
            🔍 Vérifier Méthodes
          </button>
          <button className="btn success" onClick={initiatePayment}>
            💳 Payer Maintenant
          </button>
          {paymentResult && (
            <button className="btn" onClick={clearPaymentResult}>
              🗑️ Effacer Résultat
            </button>
          )}
        </div>
      </div>

      {paymentResult && (
        <div className="demo-section">
          <h3>Résultat du Paiement</h3>
          <div className="card" style={{ backgroundColor: "#e8f5e8" }}>
            <h4>✅ Paiement Réussi</h4>
            <div className="grid grid-2">
              <div>
                <p>
                  <strong>Méthode:</strong> {paymentResult.methodName}
                </p>
                <p>
                  <strong>Nom:</strong> {paymentResult.payerName || "Non fourni"}
                </p>
                <p>
                  <strong>Email:</strong> {paymentResult.payerEmail || "Non fourni"}
                </p>
                <p>
                  <strong>Téléphone:</strong> {paymentResult.payerPhone || "Non fourni"}
                </p>
              </div>
              <div>
                <p>
                  <strong>Livraison:</strong> {paymentResult.shippingOption || "Non sélectionnée"}
                </p>
                {paymentResult.shippingAddress && (
                  <div>
                    <p>
                      <strong>Adresse:</strong>
                    </p>
                    <p style={{ fontSize: "0.9rem", color: "#666" }}>
                      {paymentResult.shippingAddress.addressLine?.[0]}
                      <br />
                      {paymentResult.shippingAddress.city}, {paymentResult.shippingAddress.postalCode}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="demo-section">
        <h3>Historique des Transactions</h3>
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
          {paymentHistory.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
              Effectuez des actions pour voir l'historique
            </p>
          ) : (
            paymentHistory.map((event) => (
              <div
                key={event.id}
                style={{
                  padding: "0.75rem",
                  margin: "0.5rem 0",
                  borderRadius: "8px",
                  backgroundColor:
                    event.status === "success"
                      ? "#e8f5e8"
                      : event.status === "error"
                        ? "#ffebee"
                        : event.status === "warning"
                          ? "#fff3e0"
                          : "#fff",
                  border: `1px solid ${
                    event.status === "success"
                      ? "#c8e6c8"
                      : event.status === "error"
                        ? "#ffcdd2"
                        : event.status === "warning"
                          ? "#ffcc02"
                          : "#ddd"
                  }`,
                  animation: "slideIn 0.3s ease",
                }}
              >
                <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>{event.operation}</div>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>
                  {event.details} | {event.timestamp}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="demo-section">
        <h3>Méthodes de Paiement Supportées</h3>
        <div className="demo-output">
          {`💳 Types de paiement:
- Cartes bancaires (Visa, Mastercard, Amex)
- Apple Pay (Safari sur iOS/macOS)
- Google Pay (Chrome avec compte Google)
- Samsung Pay (navigateurs Samsung)
- Portefeuilles numériques tiers

🔒 Sécurité:
- Tokenisation des données sensibles
- Pas de stockage des numéros de carte
- Authentification biométrique
- Conformité PCI DSS automatique

⚡ Avantages:
- Interface native du système
- Expérience utilisateur optimisée
- Réduction de l'abandon de panier
- Intégration simplifiée pour les développeurs`}
        </div>
      </div>

      <div className="demo-section">
        <h3>Applications Pratiques</h3>
        <div className="grid">
          <div className="card">
            <h4>🛒 E-commerce</h4>
            <p>Checkout rapide et sécurisé</p>
          </div>
          <div className="card">
            <h4>📱 Apps Mobiles</h4>
            <p>Paiements in-app natifs</p>
          </div>
          <div className="card">
            <h4>🎫 Billetterie</h4>
            <p>Achat rapide de tickets et réservations</p>
          </div>
          <div className="card">
            <h4>💰 Services</h4>
            <p>Abonnements et paiements récurrents</p>
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

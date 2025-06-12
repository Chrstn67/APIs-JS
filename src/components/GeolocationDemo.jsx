"use client";

import { useEffect, useState } from "react";

import ApiCodeExamples from "./ApiCodeExamples";

export default function GeolocationDemo() {
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState(null);
  const [isTracking, setIsTracking] = useState(false);
  const [watchId, setWatchId] = useState(null);
  const [locationHistory, setLocationHistory] = useState([]);
  const [error, setError] = useState("");
  const [isSupported] = useState("geolocation" in navigator);
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);

  const reverseGeocode = async (lat, lng) => {
    setIsLoadingAddress(true);
    try {
      // Utiliser l'API de géocodage inverse de Nominatim (OpenStreetMap)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
        {
          headers: {
            "User-Agent": "Modern-JS-APIs-Demo/1.0",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        const addressInfo = {
          fullAddress: data.display_name,
          street:
            data.address?.road ||
            data.address?.pedestrian ||
            data.address?.path,
          houseNumber: data.address?.house_number,
          city:
            data.address?.city ||
            data.address?.town ||
            data.address?.village ||
            data.address?.municipality,
          postcode: data.address?.postcode,
          country: data.address?.country,
          countryCode: data.address?.country_code,
          state: data.address?.state || data.address?.region,
          suburb: data.address?.suburb || data.address?.neighbourhood,
          formatted: formatAddress(data.address),
        };

        setAddress(addressInfo);
      } else {
        setAddress({ error: "Impossible de récupérer l'adresse" });
      }
    } catch (err) {
      console.error("Erreur géocodage:", err);
      setAddress({ error: "Erreur lors du géocodage inverse" });
    } finally {
      setIsLoadingAddress(false);
    }
  };

  const formatAddress = (addr) => {
    if (!addr) return "Adresse non disponible";

    const parts = [];

    if (addr.house_number && addr.road) {
      parts.push(`${addr.house_number} ${addr.road}`);
    } else if (addr.road) {
      parts.push(addr.road);
    } else if (addr.pedestrian) {
      parts.push(addr.pedestrian);
    }

    if (addr.suburb || addr.neighbourhood) {
      parts.push(addr.suburb || addr.neighbourhood);
    }

    if (addr.postcode && (addr.city || addr.town || addr.village)) {
      parts.push(`${addr.postcode} ${addr.city || addr.town || addr.village}`);
    } else if (addr.city || addr.town || addr.village) {
      parts.push(addr.city || addr.town || addr.village);
    }

    if (addr.country) {
      parts.push(addr.country);
    }

    return parts.join(", ") || "Adresse non disponible";
  };

  const getCurrentPosition = () => {
    if (!isSupported) {
      setError("Géolocalisation non supportée");
      return;
    }

    setError("");
    setAddress(null);

    const options = {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 300000, // 5 minutes
    };

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newPosition = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
          altitude: pos.coords.altitude,
          altitudeAccuracy: pos.coords.altitudeAccuracy,
          heading: pos.coords.heading,
          speed: pos.coords.speed,
          timestamp: new Date(pos.timestamp).toLocaleTimeString(),
        };
        setPosition(newPosition);
        setError("");

        // Récupérer l'adresse
        reverseGeocode(newPosition.latitude, newPosition.longitude);
      },
      (err) => {
        let errorMessage = "";
        switch (err.code) {
          case err.PERMISSION_DENIED:
            errorMessage = "Permission de géolocalisation refusée";
            break;
          case err.POSITION_UNAVAILABLE:
            errorMessage = "Position non disponible";
            break;
          case err.TIMEOUT:
            errorMessage = "Timeout de géolocalisation (15s)";
            break;
          default:
            errorMessage = "Erreur de géolocalisation inconnue";
        }
        setError(errorMessage);
      },
      options
    );
  };

  const startTracking = () => {
    if (!isSupported) {
      setError("Géolocalisation non supportée");
      return;
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 60000, // 1 minute
    };

    const id = navigator.geolocation.watchPosition(
      (pos) => {
        const newPosition = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
          altitude: pos.coords.altitude,
          altitudeAccuracy: pos.coords.altitudeAccuracy,
          heading: pos.coords.heading,
          speed: pos.coords.speed,
          timestamp: new Date(pos.timestamp).toLocaleTimeString(),
        };

        setPosition(newPosition);

        // Ajouter à l'historique si la position a changé significativement
        setLocationHistory((prev) => {
          const lastPos = prev[prev.length - 1];
          if (!lastPos || calculateDistance(lastPos, newPosition) > 10) {
            const newHistory = [...prev.slice(-9), newPosition]; // Garder les 10 dernières
            return newHistory;
          }
          return prev;
        });

        // Mettre à jour l'adresse seulement si on s'est déplacé significativement
        if (!address || calculateDistance(position, newPosition) > 50) {
          reverseGeocode(newPosition.latitude, newPosition.longitude);
        }

        setError("");
      },
      (err) => {
        setError(`Erreur de suivi: ${err.message}`);
      },
      options
    );

    setWatchId(id);
    setIsTracking(true);
  };

  const stopTracking = () => {
    if (watchId) {
      navigator.geolocation.clearWatch(watchId);
      setWatchId(null);
      setIsTracking(false);
    }
  };

  const calculateDistance = (pos1, pos2) => {
    if (!pos1 || !pos2) return 0;

    const R = 6371000; // Rayon de la Terre en mètres
    const dLat = ((pos2.latitude - pos1.latitude) * Math.PI) / 180;
    const dLng = ((pos2.longitude - pos1.longitude) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((pos1.latitude * Math.PI) / 180) *
        Math.cos((pos2.latitude * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const clearHistory = () => {
    setLocationHistory([]);
  };

  const openInMaps = () => {
    if (position) {
      const url = `https://www.google.com/maps?q=${position.latitude},${position.longitude}`;
      window.open(url, "_blank");
    }
  };

  const copyCoordinates = () => {
    if (position) {
      const coords = `${position.latitude}, ${position.longitude}`;
      navigator.clipboard.writeText(coords);
    }
  };

  useEffect(() => {
    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [watchId]);

  if (!isSupported) {
    return (
      <div>
        <div className="demo-header">
          <h2 className="demo-title">🌍 Geolocation API</h2>
          <p className="demo-description">
            Géolocalisation avancée avec adresse complète.
          </p>
        </div>

        <div className="demo-section">
          <div className="status-indicator offline">
            ❌ Geolocation API non supportée
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="demo-header">
        <h2 className="demo-title">🌍 Geolocation API Avancée</h2>
        <p className="demo-description">
          Géolocalisation précise avec adresse complète, ville, rue et suivi de
          position en temps réel.
        </p>
      </div>

      <div className="demo-section">
        <h3>Contrôles de Géolocalisation</h3>
        <div className="demo-controls">
          <button className="btn success" onClick={getCurrentPosition}>
            📍 Position Actuelle
          </button>
          {!isTracking ? (
            <button className="btn" onClick={startTracking}>
              🎯 Démarrer le Suivi
            </button>
          ) : (
            <button className="btn danger" onClick={stopTracking}>
              ⏹️ Arrêter le Suivi
            </button>
          )}
          {position && (
            <>
              <button className="btn" onClick={openInMaps}>
                🗺️ Ouvrir dans Maps
              </button>
              <button className="btn" onClick={copyCoordinates}>
                📋 Copier Coordonnées
              </button>
            </>
          )}
        </div>
      </div>

      {error && (
        <div className="demo-section">
          <div className="status-indicator offline">❌ {error}</div>
        </div>
      )}

      {position && (
        <div className="demo-section">
          <h3>Position et Adresse</h3>
          <div className="grid grid-2">
            <div className="card">
              <h4>📍 Coordonnées GPS</h4>
              <p>
                <strong>Latitude:</strong> {position.latitude.toFixed(6)}°
              </p>
              <p>
                <strong>Longitude:</strong> {position.longitude.toFixed(6)}°
              </p>
              <p>
                <strong>Précision:</strong> ±{Math.round(position.accuracy)}m
              </p>
              <p>
                <strong>Dernière MAJ:</strong> {position.timestamp}
              </p>
            </div>

            <div className="card">
              <h4>🏠 Adresse Complète</h4>
              {isLoadingAddress ? (
                <div className="status-indicator loading">
                  🔄 Recherche d'adresse...
                </div>
              ) : address ? (
                address.error ? (
                  <p style={{ color: "#f44336" }}>{address.error}</p>
                ) : (
                  <div>
                    {address.street && address.houseNumber && (
                      <p>
                        <strong>Adresse:</strong> {address.houseNumber}{" "}
                        {address.street}
                      </p>
                    )}
                    {address.street && !address.houseNumber && (
                      <p>
                        <strong>Rue:</strong> {address.street}
                      </p>
                    )}
                    {address.suburb && (
                      <p>
                        <strong>Quartier:</strong> {address.suburb}
                      </p>
                    )}
                    {address.city && (
                      <p>
                        <strong>Ville:</strong> {address.city}
                      </p>
                    )}
                    {address.postcode && (
                      <p>
                        <strong>Code postal:</strong> {address.postcode}
                      </p>
                    )}
                    {address.state && (
                      <p>
                        <strong>Région:</strong> {address.state}
                      </p>
                    )}
                    {address.country && (
                      <p>
                        <strong>Pays:</strong> {address.country}
                      </p>
                    )}
                  </div>
                )
              ) : (
                <p style={{ color: "#666", fontStyle: "italic" }}>
                  Cliquez sur "Position Actuelle" pour obtenir l'adresse
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {position && (
        <div className="demo-section">
          <h3>Informations Détaillées</h3>
          <div className="grid grid-3">
            <div className="card">
              <h4>🎯 Précision</h4>
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#667eea",
                }}
              >
                ±{Math.round(position.accuracy)}m
              </p>
              <p style={{ fontSize: "0.8rem", color: "#666" }}>
                {position.accuracy < 10
                  ? "Excellente"
                  : position.accuracy < 50
                  ? "Bonne"
                  : position.accuracy < 100
                  ? "Moyenne"
                  : "Approximative"}
              </p>
            </div>

            <div className="card">
              <h4>🏔️ Altitude</h4>
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#4CAF50",
                }}
              >
                {position.altitude !== null
                  ? `${Math.round(position.altitude)}m`
                  : "N/A"}
              </p>
              {position.altitudeAccuracy && (
                <p style={{ fontSize: "0.8rem", color: "#666" }}>
                  ±{Math.round(position.altitudeAccuracy)}m
                </p>
              )}
            </div>

            <div className="card">
              <h4>🧭 Mouvement</h4>
              <p>
                <strong>Direction:</strong>{" "}
                {position.heading !== null
                  ? `${Math.round(position.heading)}°`
                  : "N/A"}
              </p>
              <p>
                <strong>Vitesse:</strong>{" "}
                {position.speed !== null
                  ? `${Math.round(position.speed * 3.6)} km/h`
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      )}

      {address && address.formatted && (
        <div className="demo-section">
          <h3>Adresse Formatée</h3>
          <div className="demo-output">{address.formatted}</div>
        </div>
      )}

      {locationHistory.length > 0 && (
        <div className="demo-section">
          <h3>Historique des Positions ({locationHistory.length})</h3>
          <div className="demo-controls">
            <button className="btn danger" onClick={clearHistory}>
              🗑️ Effacer l'Historique
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
            {locationHistory.map((pos, index) => (
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
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    marginBottom: "0.25rem",
                  }}
                >
                  📍 Position #{index + 1} - {pos.timestamp}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>
                  {pos.latitude.toFixed(6)}, {pos.longitude.toFixed(6)} (±
                  {Math.round(pos.accuracy)}m)
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="demo-section">
        <h3>Applications Pratiques</h3>
        <div className="grid">
          <div className="card">
            <h4>🚚 Livraison</h4>
            <p>Suivi en temps réel avec adresse exacte</p>
          </div>
          <div className="card">
            <h4>🏪 Store Locator</h4>
            <p>Trouver les magasins les plus proches</p>
          </div>
          <div className="card">
            <h4>🚗 Navigation</h4>
            <p>GPS avec adresses complètes</p>
          </div>
          <div className="card">
            <h4>🌤️ Météo Locale</h4>
            <p>Prévisions pour votre ville exacte</p>
          </div>
        </div>
      </div>
      <ApiCodeExamples apiName="Geolocation" />
    </div>
  );
}

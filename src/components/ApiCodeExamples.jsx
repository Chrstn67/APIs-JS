"use client";

import { useState } from "react";

export default function ApiCodeExamples({ apiName }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    const code = codeExamples[apiName] || "";
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Si l'API n'est pas disponible dans les exemples
  if (!codeExamples[apiName]) {
    return null;
  }

  return (
    <div className="demo-section">
      <h3>💻 Code d'exemple</h3>
      <p className="code-description">
        Voici un exemple concret que vous pouvez copier et utiliser dans votre
        projet :
      </p>

      <div className="code-container">
        <div className="code-header">
          <span className="code-title">{apiName}.js</span>
          <button
            className="copy-button"
            onClick={copyCode}
            aria-label="Copier le code"
          >
            {copied ? "✅ Copié !" : "📋 Copier"}
          </button>
        </div>
        <pre className="code-block">{codeExamples[apiName]}</pre>
      </div>

      <style jsx>{`
        .code-description {
          margin-bottom: 1rem;
          color: var(--text-secondary);
        }

        .code-container {
          background: rgba(5, 5, 8, 0.9);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 10px;
          margin: 1rem 0;
          overflow: hidden;
        }

        .code-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          background: rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid rgba(0, 255, 255, 0.3);
        }

        .code-title {
          font-family: "Orbitron", monospace;
          color: var(--primary-cyan);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .copy-button {
          background: transparent;
          border: 1px solid rgba(0, 255, 255, 0.3);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }

        .copy-button:hover {
          background: rgba(0, 255, 255, 0.1);
          color: var(--primary-cyan);
          border-color: var(--primary-cyan);
        }

        .code-block {
          padding: 1rem;
          overflow-x: auto;
          font-family: "Courier New", monospace;
          font-size: 0.85rem;
          line-height: 1.5;
          color: var(--secondary-green);
          white-space: pre;
          max-height: 400px;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
}

// Banque d'exemples de code pour chaque API
const codeExamples = {
  // Intersection Observer
  IntersectionObserver: `// Exemple d'utilisation de l'Intersection Observer API
const options = {
  root: null, // null = viewport
  rootMargin: '0px',
  threshold: 0.5 // déclencher quand 50% de l'élément est visible
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element visible !', entry.target);
      
      // Exemple : ajouter une classe pour animer l'élément
      entry.target.classList.add('visible');
      
      // Exemple : charger une image lazy
      if (entry.target.dataset.src) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target); // arrêter d'observer après chargement
      }
    } else {
      console.log('Element non visible', entry.target);
    }
  });
};

// Créer l'observer
const observer = new IntersectionObserver(callback, options);

// Observer plusieurs éléments
document.querySelectorAll('.observe-me').forEach(el => {
  observer.observe(el);
});

// Exemple d'implémentation de lazy loading d'images
document.querySelectorAll('img[data-src]').forEach(img => {
  observer.observe(img);
});

// Exemple d'implémentation d'infinite scroll
const loadMoreContent = () => {
  // Charger plus de contenu via fetch/AJAX
  fetch('/api/more-content')
    .then(res => res.json())
    .then(data => {
      // Ajouter le contenu à la page
      const container = document.querySelector('.content-container');
      
      data.items.forEach(item => {
        const el = document.createElement('div');
        el.textContent = item.text;
        container.appendChild(el);
      });
      
      // Réobserver le sentinel pour le prochain chargement
      observer.observe(document.querySelector('.sentinel'));
    });
};

// Observer un élément "sentinel" en bas de page
const sentinel = document.querySelector('.sentinel');
const infiniteScrollObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    loadMoreContent();
  }
});
infiniteScrollObserver.observe(sentinel);`,

  // Resize Observer
  ResizeObserver: `// Exemple d'utilisation de l'API ResizeObserver
const resizeCallback = entries => {
  for (const entry of entries) {
    // Récupérer les nouvelles dimensions
    const { width, height } = entry.contentRect;
    console.log('Element redimensionné:', entry.target);
    console.log(\`Nouvelles dimensions: \${Math.round(width)}px × \${Math.round(height)}px\`);
    
    // Exemple : Adapter le contenu selon la largeur
    if (width < 400) {
      entry.target.classList.add('compact');
      entry.target.classList.remove('expanded');
    } else {
      entry.target.classList.add('expanded');
      entry.target.classList.remove('compact');
    }
    
    // Exemple : Ajuster la taille de police
    let fontSize = '16px';
    if (width < 300) fontSize = '12px';
    else if (width < 600) fontSize = '18px';
    else fontSize = '24px';
    
    entry.target.style.fontSize = fontSize;
  }
};

// Créer l'observer
const resizeObserver = new ResizeObserver(resizeCallback);

// Observer un élément
const elementToObserve = document.querySelector('.resize-me');
resizeObserver.observe(elementToObserve);

// Observer plusieurs éléments
document.querySelectorAll('.responsive-element').forEach(el => {
  resizeObserver.observe(el);
});

// Arrêter d'observer un élément
// resizeObserver.unobserve(elementToObserve);

// Arrêter d'observer tous les éléments
// resizeObserver.disconnect();

// Cas pratique: Graphique responsive avec redimensionnement automatique
const chart = document.querySelector('#chart');
const redrawChart = (width, height) => {
  // Logique pour redessiner le graphique avec les nouvelles dimensions
  console.log(\`Redessiner le graphique: \${width}×\${height}\`);
};

resizeObserver.observe(chart);`,

  // Clipboard
  Clipboard: `// Exemples d'utilisation de l'API Clipboard

// 1. Copier du texte vers le presse-papier
async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Texte copié avec succès !');
    return true;
  } catch (err) {
    console.error('Erreur lors de la copie :', err);
    return false;
  }
}

// Exemple d'utilisation
document.querySelector('#copy-button').addEventListener('click', () => {
  const textToCopy = document.querySelector('#text-to-copy').value;
  copyTextToClipboard(textToCopy)
    .then(success => {
      if (success) {
        showNotification('✅ Copié avec succès !');
      } else {
        showNotification('❌ Échec de la copie');
      }
    });
});

// 2. Lire du texte depuis le presse-papier
async function readTextFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    console.log('Texte lu depuis le presse-papier:', text);
    return text;
  } catch (err) {
    console.error('Erreur lors de la lecture :', err);
    return null;
  }
}

// Exemple d'utilisation
document.querySelector('#paste-button').addEventListener('click', async () => {
  const text = await readTextFromClipboard();
  if (text) {
    document.querySelector('#paste-target').textContent = text;
    showNotification('📋 Texte collé !');
  } else {
    showNotification('❌ Impossible de lire le presse-papier');
  }
});

// Fonction utilitaire pour afficher une notification
function showNotification(message, duration = 3000) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = \`
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 5px;
    z-index: 1000;
  \`;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.5s';
    setTimeout(() => notification.remove(), 500);
  }, duration);
}

// Exemple plus avancé : Bouton de copie pour les blocs de code
document.querySelectorAll('.code-block').forEach(block => {
  const copyBtn = document.createElement('button');
  copyBtn.textContent = 'Copier';
  copyBtn.className = 'copy-code-btn';
  
  copyBtn.addEventListener('click', async () => {
    const code = block.querySelector('code').textContent;
    const success = await copyTextToClipboard(code);
    
    if (success) {
      copyBtn.textContent = 'Copié !';
      setTimeout(() => { copyBtn.textContent = 'Copier'; }, 2000);
    }
  });
  
  block.appendChild(copyBtn);
});`,

  // WebShare
  WebShare: `// Exemples d'utilisation de l'API Web Share

// Vérifier si l'API est supportée
function isWebShareSupported() {
  return navigator.share !== undefined;
}

// Fonction de partage basique
async function shareContent(data) {
  if (!isWebShareSupported()) {
    console.log('Web Share API n'est pas supportée sur ce navigateur');
    return false;
  }
  
  try {
    await navigator.share(data);
    console.log('Contenu partagé avec succès');
    return true;
  } catch (err) {
    if (err.name !== 'AbortError') {
      console.error('Erreur lors du partage:', err);
    } else {
      console.log('Partage annulé par l'utilisateur');
    }
    return false;
  }
}

// Exemple: Partage de texte simple
document.querySelector('#share-text').addEventListener('click', () => {
  shareContent({
    title: 'Mon super article',
    text: 'Découvrez cet article incroyable sur les APIs JavaScript modernes !',
    url: window.location.href
  });
});

// Exemple: Partage avec fallback pour les navigateurs non supportés
function shareWithFallback(data) {
  if (isWebShareSupported()) {
    return shareContent(data);
  } else {
    // Fallback: ouvrir une fenêtre popup avec des liens vers les réseaux sociaux
    const text = encodeURIComponent(data.text || '');
    const url = encodeURIComponent(data.url || window.location.href);
    const title = encodeURIComponent(data.title || document.title);
    
    const twitterUrl = \`https://twitter.com/intent/tweet?text=\${title}&url=\${url}\`;
    const facebookUrl = \`https://www.facebook.com/sharer/sharer.php?u=\${url}\`;
    const linkedinUrl = \`https://www.linkedin.com/sharing/share-offsite/?url=\${url}\`;
    
    // Créer la modal de partage personnalisée
    const modal = document.createElement('div');
    modal.innerHTML = \`
      <div class="share-modal">
        <h3>Partager sur</h3>
        <div class="share-buttons">
          <a href="\${twitterUrl}" target="_blank">Twitter</a>
          <a href="\${facebookUrl}" target="_blank">Facebook</a>
          <a href="\${linkedinUrl}" target="_blank">LinkedIn</a>
          <a href="mailto:?subject=\${title}&body=\${text}%20\${url}">Email</a>
        </div>
        <button id="close-share-modal">Fermer</button>
      </div>
    \`;
    
    document.body.appendChild(modal);
    document.getElementById('close-share-modal').addEventListener('click', () => {
      modal.remove();
    });
    
    return true;
  }
}

// Utilisation de la fonction avec fallback
document.querySelector('#share-with-fallback').addEventListener('click', () => {
  shareWithFallback({
    title: 'Partage avec fallback',
    text: 'Contenu partageable sur tous les navigateurs !',
    url: window.location.href
  });
});

// Exemple avancé: Partage de fichiers
async function shareFiles(title, files) {
  if (!navigator.canShare || !navigator.canShare({ files })) {
    console.log('Le partage de fichiers n'est pas pris en charge sur ce navigateur');
    return false;
  }
  
  try {
    await navigator.share({
      title: title,
      files: files
    });
    console.log('Fichiers partagés avec succès');
    return true;
  } catch (err) {
    console.error('Erreur lors du partage de fichiers:', err);
    return false;
  }
}

// Exemple d'utilisation
document.querySelector('#share-image').addEventListener('click', async () => {
  // Récupérer une image (par exemple depuis un canvas)
  const canvas = document.querySelector('#my-canvas');
  
  if (canvas) {
    // Convertir le canvas en blob
    canvas.toBlob(async blob => {
      // Créer un fichier à partir du blob
      const file = new File([blob], 'image.png', { type: 'image/png' });
      
      // Partager le fichier
      await shareFiles('Mon image', [file]);
    }, 'image/png');
  }
});`,

  // MutationObserver
  MutationObserver: `// Exemples d'utilisation de l'API MutationObserver

// Configuration de l'observer
const config = {
  childList: true,     // Observer les ajouts/suppressions d'enfants
  attributes: true,    // Observer les changements d'attributs
  characterData: true, // Observer les modifications de contenu textuel
  subtree: true,       // Observer également tous les descendants
  attributeOldValue: true,    // Conserver l'ancienne valeur des attributs
  characterDataOldValue: true // Conserver l'ancienne valeur du contenu
};

// Callback exécuté à chaque mutation
const callback = function(mutationsList, observer) {
  console.log('Mutations détectées:', mutationsList.length);
  
  for (const mutation of mutationsList) {
    // Gestion des ajouts/suppressions d'éléments
    if (mutation.type === 'childList') {
      if (mutation.addedNodes.length > 0) {
        console.log('Nœuds ajoutés:', mutation.addedNodes);
        
        // Exemple: Traiter les nouveaux éléments
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Faire quelque chose avec le nouvel élément
            node.classList.add('new-element');
            
            // Exemple: Initialiser des tooltips sur les nouveaux éléments
            if (node.dataset.tooltip) {
              initTooltip(node);
            }
          }
        });
      }
      
      if (mutation.removedNodes.length > 0) {
        console.log('Nœuds supprimés:', mutation.removedNodes);
        
        // Exemple: Nettoyer les ressources pour les éléments supprimés
        mutation.removedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE && node._cleanup) {
            node._cleanup();
          }
        });
      }
    }
    
    // Gestion des changements d'attributs
    else if (mutation.type === 'attributes') {
      console.log(
        \`L'attribut "\${mutation.attributeName}" a été modifié\`,
        \`Ancienne valeur: \${mutation.oldValue}\`,
        \`Nouvelle valeur: \${mutation.target.getAttribute(mutation.attributeName)}\`
      );
      
      // Exemple: Réagir aux changements de classe
      if (mutation.attributeName === 'class') {
        if (mutation.target.classList.contains('highlight')) {
          // L'élément a reçu la classe highlight
          animateHighlight(mutation.target);
        }
      }
      
      // Exemple: Synchroniser les attributs data avec l'état interne
      if (mutation.attributeName.startsWith('data-')) {
        updateElementState(mutation.target);
      }
    }
    
    // Gestion des modifications de contenu textuel
    else if (mutation.type === 'characterData') {
      console.log(
        'Le contenu textuel a été modifié',
        \`Ancienne valeur: "\${mutation.oldValue}"\`,
        \`Nouvelle valeur: "\${mutation.target.textContent}"\`
      );
      
      // Exemple: Mise à jour automatique de compteurs
      updateCharacterCounter(mutation.target);
    }
  }
};

// Créer l'observer
const observer = new MutationObserver(callback);

// Cibler l'élément à observer
const targetNode = document.getElementById('content-container');

// Démarrer l'observation
observer.observe(targetNode, config);

// Arrêter l'observation plus tard si nécessaire
// observer.disconnect();

// Exemple d'optimisation pour éviter les surcharges
function createOptimizedObserver(targetElement) {
  // Utiliser un debounce pour limiter les appels de la fonction
  let timeout = null;
  
  const processChanges = (mutations) => {
    clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      console.log('Traitement des mutations par lots');
      // Traitement groupé des mutations
      processBatchMutations(mutations);
    }, 100); // Délai en ms
  };
  
  const batchObserver = new MutationObserver(processChanges);
  
  // Configuration avec seulement les options nécessaires
  batchObserver.observe(targetElement, {
    childList: true,
    subtree: false,      // Limité à l'élément parent seulement
    attributes: true,
    attributeFilter: ['class', 'style'], // Limité aux attributs spécifiques
    characterData: false  // Désactivé si pas nécessaire
  });
  
  return batchObserver;
}

// Utilisation de l'observer optimisé
const dynamicList = document.getElementById('dynamic-list');
const optimizedObserver = createOptimizedObserver(dynamicList);`,

  // IdleCallback
  IdleCallback: `// Exemples d'utilisation de requestIdleCallback

// Fonction à exécuter pendant les périodes d'inactivité
function doIdleWork(deadline) {
  // Vérifier combien de temps est disponible
  console.log(\`Temps restant: \${deadline.timeRemaining()} ms\`);
  
  // Vérifier si l'exécution est urgente
  console.log(\`Tâche urgente: \${deadline.didTimeout ? 'oui' : 'non'}\`);
  
  // Continuer tant qu'il reste du temps et qu'il y a du travail à faire
  while (deadline.timeRemaining() > 0 && tasksQueue.length > 0) {
    const task = tasksQueue.shift();
    task();
  }
  
  // S'il reste des tâches, planifier à nouveau
  if (tasksQueue.length > 0) {
    requestIdleCallback(doIdleWork, { timeout: 1000 });
  }
}

// File d'attente pour les tâches à exécuter pendant les périodes d'inactivité
const tasksQueue = [];

// Ajouter des tâches à la file
function addIdleTask(task) {
  tasksQueue.push(task);
  
  // Si c'est la première tâche, démarrer le traitement
  if (tasksQueue.length === 1) {
    requestIdleCallback(doIdleWork, { timeout: 2000 });
  }
}

// Exemples de tâches à ajouter
function calculatePrimes(limit) {
  return () => {
    console.log(\`Calcul des nombres premiers jusqu'à \${limit}\`);
    const primes = [];
    
    for (let i = 2; i <= limit; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
    
    console.log(\`Terminé: \${primes.length} nombres premiers trouvés\`);
    return primes;
  };
}

function preprocessData(data) {
  return () => {
    console.log('Prétraitement des données');
    // Simuler un traitement lourd
    const processed = data.map(item => {
      // Traitement complexe...
      return item * 2;
    });
    
    console.log('Prétraitement terminé');
    return processed;
  };
}

// Utilisation
document.getElementById('add-task-button').addEventListener('click', () => {
  addIdleTask(calculatePrimes(10000));
  addIdleTask(preprocessData(Array(5000).fill(1)));
});

// Polyfill pour les navigateurs qui ne supportent pas requestIdleCallback
if (!window.requestIdleCallback) {
  window.requestIdleCallback = function(callback, options) {
    const start = Date.now();
    return setTimeout(function() {
      callback({
        didTimeout: false,
        timeRemaining: function() {
          return Math.max(0, 50 - (Date.now() - start));
        }
      });
    }, 1);
  };
  
  window.cancelIdleCallback = function(id) {
    clearTimeout(id);
  };
}

// Utilisation pratique: chargement d'images en arrière-plan
function loadImagesInIdle() {
  const lazyImages = Array.from(document.querySelectorAll('img[data-src]'));
  
  function loadImage(image) {
    return () => {
      if (!image.dataset.src) return;
      
      image.src = image.dataset.src;
      image.onload = () => {
        image.removeAttribute('data-src');
        image.classList.add('loaded');
      };
    };
  }
  
  lazyImages.forEach(img => {
    addIdleTask(loadImage(img));
  });
}

// Charger les images quand la page est complètement chargée
window.addEventListener('load', loadImagesInIdle);`,

  // Battery
  Battery: `// Exemples d'utilisation de l'API Battery Status

// Fonction principale pour accéder à l'API Battery
async function getBatteryInfo() {
  // Vérifier si l'API est supportée
  if (!('getBattery' in navigator)) {
    console.log('Battery API non supportée sur ce navigateur');
    return null;
  }
  
  try {
    // Accéder à l'objet BatteryManager
    const battery = await navigator.getBattery();
    
    // Récupérer les informations actuelles
    const batteryInfo = {
      level: battery.level * 100,           // Niveau en pourcentage
      charging: battery.charging,           // En cours de charge ou non
      chargingTime: battery.chargingTime,   // Temps restant pour charger (en secondes)
      dischargingTime: battery.dischargingTime // Temps restant d'autonomie (en secondes)
    };
    
    console.log('Informations batterie:', batteryInfo);
    
    // Ajouter des écouteurs d'événements pour suivre les changements
    battery.addEventListener('levelchange', () => {
      console.log(\`Niveau de batterie modifié: \${battery.level * 100}%\`);
      updateBatteryUI(battery);
    });
    
    battery.addEventListener('chargingchange', () => {
      console.log(\`État de charge modifié: \${battery.charging ? 'En charge' : 'Sur batterie'}\`);
      updateBatteryUI(battery);
    });
    
    battery.addEventListener('chargingtimechange', () => {
      console.log(\`Temps de charge restant modifié: \${formatTime(battery.chargingTime)}\`);
      updateBatteryUI(battery);
    });
    
    battery.addEventListener('dischargingtimechange', () => {
      console.log(\`Temps de décharge restant modifié: \${formatTime(battery.dischargingTime)}\`);
      updateBatteryUI(battery);
    });
    
    return battery;
    
  } catch (error) {
    console.error('Erreur lors de l\'accès à l\'API Battery:', error);
    return null;
  }
}

// Fonction pour formater le temps en heures/minutes
function formatTime(seconds) {
  if (seconds === Infinity || seconds === 0) {
    return 'Inconnu';
  }
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  if (hours > 0) {
    return \`\${hours}h \${minutes}min\`;
  }
  return \`\${minutes}min\`;
}

// Fonction pour mettre à jour l'interface utilisateur
function updateBatteryUI(battery) {
  const batteryLevel = document.getElementById('battery-level');
  const chargingStatus = document.getElementById('charging-status');
  const remainingTime = document.getElementById('remaining-time');
  
  if (batteryLevel) {
    batteryLevel.textContent = \`\${Math.round(battery.level * 100)}%\`;
    batteryLevel.style.width = \`\${battery.level * 100}%\`;
  }
  
  if (chargingStatus) {
    chargingStatus.textContent = battery.charging ? 'En charge' : 'Sur batterie';
    chargingStatus.className = battery.charging ? 'charging' : 'discharging';
  }
  
  if (remainingTime) {
    const time = battery.charging ? battery.chargingTime : battery.dischargingTime;
    remainingTime.textContent = formatTime(time);
  }
  
  // Activer le mode économie d'énergie si niveau faible
  if (battery.level < 0.2 && !battery.charging) {
    enablePowerSaveMode();
  } else {
    disablePowerSaveMode();
  }
}

// Fonctions pour optimiser la consommation d'énergie
function enablePowerSaveMode() {
  console.log('Activation du mode économie d\'énergie');
  
  // Réduire les animations
  document.body.classList.add('power-save-mode');
  
  // Réduire la fréquence des requêtes
  window.powerSaveModeEnabled = true;
  
  // Réduire la qualité des médias
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.setAttribute('data-original-quality', video.quality || 'high');
    video.quality = 'low';
  });
}

function disablePowerSaveMode() {
  if (document.body.classList.contains('power-save-mode')) {
    console.log('Désactivation du mode économie d\'énergie');
    
    document.body.classList.remove('power-save-mode');
    window.powerSaveModeEnabled = false;
    
    // Restaurer la qualité des médias
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.quality = video.getAttribute('data-original-quality') || 'high';
    });
  }
}

// Initialiser et suivre l'état de la batterie
document.addEventListener('DOMContentLoaded', () => {
  getBatteryInfo().then(battery => {
    if (battery) {
      updateBatteryUI(battery);
    }
  });
});`,

  // Performance
  Performance: `// Exemples d'utilisation de l'API Performance et PerformanceObserver

// 1. Mesurer le temps d'exécution avec performance.now()
function mesureExecutionTime(callback) {
  const startTime = performance.now();
  callback();
  const endTime = performance.now();
  
  console.log(\`Temps d'exécution: \${endTime - startTime} ms\`);
  return endTime - startTime;
}

// Exemple d'utilisation
mesureExecutionTime(() => {
  // Code à mesurer
  for (let i = 0; i < 1000000; i++) {
    Math.sqrt(i);
  }
});

// 2. Créer des marques et mesures personnalisées
function complexOperation() {
  // Marque de début
  performance.mark('operation-start');
  
  // Première étape
  performance.mark('step1-start');
  for (let i = 0; i < 500000; i++) {
    Math.sqrt(i);
  }
  performance.mark('step1-end');
  
  // Deuxième étape
  performance.mark('step2-start');
  let array = Array(100000).fill(0).map((_, i) => i);
  array.sort(() => Math.random() - 0.5);
  performance.mark('step2-end');
  
  // Troisième étape
  performance.mark('step3-start');
  array.reduce((sum, val) => sum + val, 0);
  performance.mark('step3-end');
  
  // Marque de fin
  performance.mark('operation-end');
  
  // Créer des mesures à partir des marques
  performance.measure('Opération complète', 'operation-start', 'operation-end');
  performance.measure('Étape 1 (Racines carrées)', 'step1-start', 'step1-end');
  performance.measure('Étape 2 (Tri)', 'step2-start', 'step2-end');
  performance.measure('Étape 3 (Réduction)', 'step3-start', 'step3-end');
  
  // Afficher les résultats
  const measures = performance.getEntriesByType('measure');
  measures.forEach(measure => {
    console.log(\`\${measure.name}: \${measure.duration.toFixed(2)} ms\`);
  });
}

complexOperation();

// 3. Utiliser PerformanceObserver pour surveiller automatiquement
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(\`[Observer] \${entry.name}: \${entry.duration.toFixed(2)} ms\`);
  });
});

// Configurer l'observer pour surveiller les mesures et les ressources
observer.observe({ entryTypes: ['measure', 'resource', 'navigation', 'paint'] });

// 4. Mesurer les ressources chargées
function analyzeResourcePerformance() {
  const resources = performance.getEntriesByType('resource');
  
  const results = resources.map(resource => ({
    name: resource.name.split('/').pop(),
    type: resource.initiatorType,
    size: resource.transferSize,
    duration: resource.duration,
    startTime: resource.startTime
  }));
  
  // Trier par durée de chargement
  results.sort((a, b) => b.duration - a.duration);
  
  // Afficher les ressources les plus lentes
  console.log('Ressources les plus lentes:');
  results.slice(0, 5).forEach(res => {
    console.log(\`\${res.name} (\${res.type}): \${res.duration.toFixed(2)} ms, \${(res.size/1024).toFixed(2)} KB\`);
  });
  
  // Calculer des statistiques
  const totalSize = results.reduce((sum, res) => sum + res.size, 0) / 1024; // KB
  const totalTime = Math.max(...results.map(res => res.startTime + res.duration));
  
  console.log(\`\nTotal: \${results.length} ressources, \${totalSize.toFixed(2)} KB, \${totalTime.toFixed(2)} ms\`);
}

// Exécuter l'analyse au chargement complet de la page
window.addEventListener('load', () => {
  // Attendre un peu pour que toutes les ressources soient comptabilisées
  setTimeout(analyzeResourcePerformance, 500);
});

// 5. Navigation Timing API
function analyzePageLoad() {
  const timing = performance.getEntriesByType('navigation')[0];
  
  if (timing) {
    // Temps de chargement total
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    
    // Temps de requête DNS
    const dnsTime = timing.domainLookupEnd - timing.domainLookupStart;
    
    // Temps de connexion TCP
    const tcpTime = timing.connectEnd - timing.connectStart;
    
    // Temps jusqu'au premier octet (TTFB)
    const ttfb = timing.responseStart - timing.requestStart;
    
    // Temps de téléchargement de la page
    const downloadTime = timing.responseEnd - timing.responseStart;
    
    // Temps de traitement DOM
    const domProcessingTime = timing.domComplete - timing.domInteractive;
    
    console.log(\`
Performance de chargement de page:
-----------------------------------
Temps de chargement total: \${loadTime.toFixed(2)} ms
Recherche DNS: \${dnsTime.toFixed(2)} ms
Connexion TCP: \${tcpTime.toFixed(2)} ms
Temps jusqu'au premier octet (TTFB): \${ttfb.toFixed(2)} ms
Téléchargement de la réponse: \${downloadTime.toFixed(2)} ms
Traitement du DOM: \${domProcessingTime.toFixed(2)} ms
\`);
  } else {
    console.log('Navigation Timing API non supportée ou données non disponibles.');
  }
}

window.addEventListener('load', analyzePageLoad);`,

  // BroadcastChannel
  BroadcastChannel: `// Exemples d'utilisation de l'API BroadcastChannel

// 1. Créer un canal de communication
function createChannel(channelName) {
  // Vérifier le support de l'API
  if (!('BroadcastChannel' in window)) {
    console.error('BroadcastChannel API non supportée par ce navigateur');
    return null;
  }
  
  try {
    // Créer une instance du canal
    const channel = new BroadcastChannel(channelName);
    console.log(\`Canal "\${channelName}" créé avec succès\`);
    return channel;
  } catch (error) {
    console.error(\`Erreur lors de la création du canal "\${channelName}":, error\`);
    return null;
  }
}

// 2. Envoyer des messages simples
function sendMessage(channel, message) {
  if (!channel) return false;
  
  try {
    channel.postMessage(message);
    console.log('Message envoyé:', message);
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return false;
  }
}

// 3. Écouter les messages reçus
function listenForMessages(channel, callback) {
  if (!channel) return false;
  
  try {
    channel.onmessage = (event) => {
      console.log('Message reçu:', event.data);
      callback(event.data);
    };
    
    return true;
  } catch (error) {
    console.error('Erreur lors de la configuration de l\'écouteur de messages:', error);
    return false;
  }
}

// 4. Gérer les erreurs
function handleChannelErrors(channel) {
  if (!channel) return;
  
  channel.onmessageerror = (event) => {
    console.error('Erreur de réception du message:', event);
  };
}

// 5. Fermer le canal proprement
function closeChannel(channel) {
  if (!channel) return;
  
  try {
    channel.close();
    console.log('Canal fermé');
  } catch (error) {
    console.error('Erreur lors de la fermeture du canal:', error);
  }
}

// Exemple d'implémentation complète
document.addEventListener('DOMContentLoaded', () => {
  // Créer un canal pour la synchronisation
  const syncChannel = createChannel('app-sync');
  
  if (syncChannel) {
    // Configurer l'écouteur
    listenForMessages(syncChannel, (data) => {
      // Traiter différents types de messages
      if (typeof data === 'object' && data !== null) {
        switch (data.type) {
          case 'CART_UPDATE':
            updateCartUI(data.items);
            break;
            
          case 'NOTIFICATION':
            showNotification(data.message);
            break;
            
          case 'USER_STATUS':
            updateUserStatus(data.status);
            break;
            
          case 'SYNC_REQUEST':
            // Répondre avec l'état actuel
            syncChannel.postMessage({
              type: 'SYNC_RESPONSE',
              state: getCurrentState(),
              timestamp: Date.now()
            });
            break;
        }
      }
    });
    
    handleChannelErrors(syncChannel);
    
    // Exemples d'envoi de messages
    document.getElementById('update-button').addEventListener('click', () => {
      sendMessage(syncChannel, {
        type: 'CART_UPDATE',
        items: getCartItems(),
        timestamp: Date.now()
      });
    });
    
    document.getElementById('notify-button').addEventListener('click', () => {
      sendMessage(syncChannel, {
        type: 'NOTIFICATION',
        message: 'Ceci est une notification en temps réel !',
        timestamp: Date.now()
      });
    });
    
    // Annoncer notre présence
    sendMessage(syncChannel, {
      type: 'TAB_OPENED',
      tabId: generateUniqueTabId(),
      timestamp: Date.now()
    });
    
    // Nettoyer lors de la fermeture
    window.addEventListener('beforeunload', () => {
      sendMessage(syncChannel, {
        type: 'TAB_CLOSED',
        tabId: generateUniqueTabId(),
        timestamp: Date.now()
      });
      
      closeChannel(syncChannel);
    });
  }
  
  // Fonctions utilitaires
  function generateUniqueTabId() {
    return \`tab-\${Date.now()}-\${Math.random().toString(36).substr(2, 9)}\`;
  }
  
  function getCurrentState() {
    // Récupérer l'état actuel de l'application
    return {
      cart: getCartItems(),
      userPrefs: getUserPreferences(),
      lastUpdate: new Date().toISOString()
    };
  }
});`,

  // Geolocation
  Geolocation: `// Exemples d'utilisation de l'API Geolocation

// 1. Vérifier la prise en charge de l'API
function isGeolocationSupported() {
  if ('geolocation' in navigator) {
    console.log('Géolocalisation supportée !');
    return true;
  } else {
    console.log('La géolocalisation n\'est pas prise en charge par votre navigateur');
    return false;
  }
}

// 2. Obtenir la position actuelle
function getCurrentPosition() {
  if (!isGeolocationSupported()) {
    return Promise.reject(new Error('Géolocalisation non supportée'));
  }
  
  const options = {
    enableHighAccuracy: true,  // Meilleure précision (GPS sur mobile)
    timeout: 5000,            // Délai maximum (5 secondes)
    maximumAge: 0             // Ne pas utiliser de résultat en cache
  };
  
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Position obtenue !', position.coords);
        resolve(position);
      },
      (error) => {
        console.error('Erreur de géolocalisation:', getErrorMessage(error));
        reject(error);
      },
      options
    );
  });
}

// 3. Suivre la position en temps réel
function watchPosition(successCallback, errorCallback) {
  if (!isGeolocationSupported()) {
    errorCallback(new Error('Géolocalisation non supportée'));
    return null;
  }
  
  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 30000  // Accepte des résultats de moins de 30 secondes
  };
  
  const watchId = navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude, accuracy, altitude, heading, speed } = position.coords;
      
      console.log(\`Position mise à jour: \${latitude}, \${longitude} (précision: \${accuracy}m)\`);
      
      // Informations supplémentaires
      if (altitude) console.log(\`Altitude: \${altitude}m\`);
      if (heading) console.log(\`Direction: \${heading}° du nord\`);
      if (speed) console.log(\`Vitesse: \${speed * 3.6} km/h\`);  // m/s → km/h
      
      successCallback(position);
    },
    (error) => {
      console.error('Erreur de suivi:', getErrorMessage(error));
      errorCallback(error);
    },
    options
  );
  
  return watchId;
}

// 4. Arrêter le suivi de position
function stopWatching(watchId) {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    console.log('Suivi de position arrêté');
  }
}

// 5. Obtenir une adresse à partir de coordonnées (géocodage inverse)
async function reverseGeocode(latitude, longitude) {
  try {
    // Utiliser l'API Nominatim d'OpenStreetMap (gratuite)
    const response = await fetch(
      \`https://nominatim.openstreetmap.org/reverse?format=json&lat=\${latitude}&lon=\${longitude}&zoom=18&addressdetails=1\`,
      {
        headers: {
          'User-Agent': 'MonApplication/1.0', // Respecter les conditions d'utilisation
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(\`Erreur HTTP: \${response.status}\`);
    }
    
    const data = await response.json();
    console.log('Adresse trouvée:', data.display_name);
    
    return {
      fullAddress: data.display_name,
      street: data.address?.road,
      houseNumber: data.address?.house_number,
      city: data.address?.city || data.address?.town || data.address?.village,
      postcode: data.address?.postcode,
      country: data.address?.country,
      countryCode: data.address?.country_code
    };
    
  } catch (error) {
    console.error('Erreur de géocodage inverse:', error);
    throw error;
  }
}

// 6. Calculer la distance entre deux points (formule de Haversine)
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Rayon de la Terre en mètres
  
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;
  
  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
           Math.cos(φ1) * Math.cos(φ2) *
           Math.sin(Δλ/2) * Math.sin(Δλ/2);
           
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  
  return distance; // en mètres
}

// 7. Formater un message d'erreur
function getErrorMessage(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      return "L'utilisateur a refusé l'accès à la géolocalisation.";
    case error.POSITION_UNAVAILABLE:
      return "Les informations de position ne sont pas disponibles.";
    case error.TIMEOUT:
      return "La demande de géolocalisation a expiré.";
    default:
      return \`Erreur inconnue (\${error.code}): \${error.message}\`;
  }
}

// Exemple d'utilisation complet
document.addEventListener('DOMContentLoaded', () => {
  // Obtenir la position et l'adresse
  document.getElementById('get-location-btn').addEventListener('click', async () => {
    try {
      // Afficher un indicateur de chargement
      document.getElementById('location-status').textContent = "Recherche de votre position...";
      
      // Obtenir la position
      const position = await getCurrentPosition();
      const { latitude, longitude, accuracy } = position.coords;
      
      // Afficher les coordonnées
      document.getElementById('coordinates').textContent = 
        \`\${latitude.toFixed(6)}, \${longitude.toFixed(6)} (±\${Math.round(accuracy)}m)\`;
      
      // Obtenir l'adresse
      document.getElementById('location-status').textContent = "Recherche de l'adresse...";
      const address = await reverseGeocode(latitude, longitude);
      
      // Afficher l'adresse
      document.getElementById('address').textContent = address.fullAddress;
      
      // Créer un lien Google Maps
      const mapLink = document.getElementById('map-link');
      mapLink.href = \`https://www.google.com/maps?q=\${latitude},\${longitude}\`;
      mapLink.textContent = "Voir sur Google Maps";
      mapLink.style.display = "block";
      
      document.getElementById('location-status').textContent = "Localisation terminée";
      
    } catch (error) {
      document.getElementById('location-status').textContent = \`Erreur: \${getErrorMessage(error)}\`;
    }
  });
  
  // Suivre la position
  let trackingId = null;
  document.getElementById('track-location-btn').addEventListener('click', () => {
    if (trackingId) {
      stopWatching(trackingId);
      trackingId = null;
      document.getElementById('tracking-status').textContent = "Suivi arrêté";
      document.getElementById('track-location-btn').textContent = "Démarrer le suivi";
    } else {
      document.getElementById('tracking-status').textContent = "Démarrage du suivi...";
      
      trackingId = watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          const historyList = document.getElementById('position-history');
          const listItem = document.createElement('li');
          listItem.textContent = \`\${new Date().toLocaleTimeString()}: \${latitude.toFixed(6)}, \${longitude.toFixed(6)}\`;
          historyList.prepend(listItem);
          
          document.getElementById('tracking-status').textContent = "Suivi actif";
        },
        (error) => {
          document.getElementById('tracking-status').textContent = \`Erreur: \${getErrorMessage(error)}\`;
          trackingId = null;
          document.getElementById('track-location-btn').textContent = "Démarrer le suivi";
        }
      );
      
      document.getElementById('track-location-btn').textContent = "Arrêter le suivi";
    }
  });
});`,

  // WebAudio
  WebAudio: `// Exemples d'utilisation de l'API Web Audio

// 1. Création du contexte audio
function createAudioContext() {
  // Le constructeur peut être préfixé sur les anciens navigateurs
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  
  if (!AudioContext) {
    console.error('Web Audio API non supportée par ce navigateur');
    return null;
  }
  
  try {
    const context = new AudioContext();
    console.log(\`Contexte audio créé - fréquence d'échantillonnage: \${context.sampleRate}Hz\`);
    return context;
  } catch (err) {
    console.error('Erreur lors de la création du contexte audio:', err);
    return null;
  }
}

// 2. Gestion de l'état du contexte audio
function handleAudioContext(audioContext) {
  if (!audioContext) return;
  
  // Reprise du contexte audio (nécessite une interaction utilisateur)
  if (audioContext.state === 'suspended') {
    audioContext.resume().then(() => {
      console.log('Contexte audio repris');
    });
  }
  
  // Afficher l'état actuel du contexte audio
  console.log(\`État du contexte audio: \${audioContext.state}\`);
  
  // Écouter les changements d'état
  audioContext.addEventListener('statechange', () => {
    console.log(\`Nouvel état du contexte audio: \${audioContext.state}\`);
  });
}

// 3. Synthèse sonore simple avec un oscillateur
function createSimpleOscillator(audioContext, options = {}) {
  if (!audioContext) return null;
  
  // Valeurs par défaut
  const defaults = {
    type: 'sine',          // Type d'onde: sine, square, sawtooth, triangle
    frequency: 440,        // La 440Hz
    detune: 0,             // Désaccordage en cents
    volume: 0.5,           // Volume (0-1)
    duration: 1,           // Durée en secondes
  };
  
  const config = { ...defaults, ...options };
  
  // Créer l'oscillateur
  const oscillator = audioContext.createOscillator();
  oscillator.type = config.type;
  oscillator.frequency.value = config.frequency;
  oscillator.detune.value = config.detune;
  
  // Créer un nœud de gain pour contrôler le volume
  const gainNode = audioContext.createGain();
  gainNode.gain.value = config.volume;
  
  // Connecter les nœuds
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Fonction pour jouer l'oscillateur
  const play = (startTime = audioContext.currentTime, endTime = startTime + config.duration) => {
    oscillator.start(startTime);
    oscillator.stop(endTime);
  };
  
  return {
    oscillator,
    gainNode,
    play,
    // Fonctions de contrôle
    setFrequency: (value) => oscillator.frequency.value = value,
    setDetune: (value) => oscillator.detune.value = value,
    setVolume: (value) => gainNode.gain.value = value,
    setType: (value) => oscillator.type = value,
  };
}

// 4. Charger et jouer des fichiers audio
async function loadAudioFile(audioContext, url) {
  if (!audioContext) return null;
  
  try {
    // Télécharger le fichier audio
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`Erreur HTTP: \${response.status}\`);
    }
    
    // Convertir en ArrayBuffer
    const arrayBuffer = await response.arrayBuffer();
    
    // Décoder l'audio
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    console.log(\`Fichier audio chargé: \${audioBuffer.duration.toFixed(2)}s, \${audioBuffer.numberOfChannels} canaux\`);
    
    return audioBuffer;
  } catch (err) {
    console.error('Erreur de chargement du fichier audio:', err);
    return null;
  }
}

function playAudioBuffer(audioContext, audioBuffer, options = {}) {
  if (!audioContext || !audioBuffer) return null;
  
  const defaults = {
    volume: 1,
    loop: false,
    playbackRate: 1,
    startTime: 0,
    offset: 0
  };
  
  const config = { ...defaults, ...options };
  
  // Créer une source à partir du buffer
  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.loop = config.loop;
  source.playbackRate.value = config.playbackRate;
  
  // Créer un nœud de gain pour le volume
  const gainNode = audioContext.createGain();
  gainNode.gain.value = config.volume;
  
  // Connecter les nœuds
  source.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Démarrer la lecture
  source.start(config.startTime, config.offset);
  
  return {
    source,
    gainNode,
    stop: (time = audioContext.currentTime) => source.stop(time),
    setVolume: (value) => gainNode.gain.value = value,
    setPlaybackRate: (value) => source.playbackRate.value = value
  };
}

// 5. Créer un égaliseur simple
function createEqualizer(audioContext, bands = [60, 170, 350, 1000, 3500, 10000]) {
  if (!audioContext) return null;
  
  const filters = bands.map(frequency => {
    const filter = audioContext.createBiquadFilter();
    filter.type = 'peaking';  // Filtre de type peak
    filter.frequency.value = frequency;
    filter.Q.value = 1;       // Facteur de qualité
    filter.gain.value = 0;    // Gain neutre (dB)
    return filter;
  });
  
  // Connecter les filtres en série
  for (let i = 0; i < filters.length - 1; i++) {
    filters[i].connect(filters[i + 1]);
  }
  
  // Fonctions de contrôle
  function setGain(bandIndex, gainValue) {
    if (bandIndex >= 0 && bandIndex < filters.length) {
      filters[bandIndex].gain.value = gainValue;
    }
  }
  
  return {
    filters,
    setGain,
    input: filters[0],
    output: filters[filters.length - 1],
    connectSource: (source) => source.connect(filters[0]),
    connectDestination: (destination) => filters[filters.length - 1].connect(destination)
  };
}

// 6. Analyse et visualisation audio
function createAnalyser(audioContext, options = {}) {
  if (!audioContext) return null;
  
  const defaults = {
    fftSize: 2048,
    smoothingTimeConstant: 0.8,
    minDecibels: -100,
    maxDecibels: -30
  };
  
  const config = { ...defaults, ...options };
  
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = config.fftSize;
  analyser.smoothingTimeConstant = config.smoothingTimeConstant;
  analyser.minDecibels = config.minDecibels;
  analyser.maxDecibels = config.maxDecibels;
  
  // Créer les tableaux pour stocker les données
  const frequencyData = new Uint8Array(analyser.frequencyBinCount);
  const timeData = new Uint8Array(analyser.fftSize);
  
  // Fonction pour récupérer les données fréquentielles
  function getFrequencyData() {
    analyser.getByteFrequencyData(frequencyData);
    return frequencyData;
  }
  
  // Fonction pour récupérer les données temporelles
  function getTimeData() {
    analyser.getByteTimeDomainData(timeData);
    return timeData;
  }
  
  return {
    analyser,
    frequencyData,
    timeData,
    getFrequencyData,
    getTimeData,
    bins: analyser.frequencyBinCount,
    connect: (destination) => analyser.connect(destination)
  };
}

// 7. Visualisation sur Canvas
function visualizeAudio(analyser, canvas, options = {}) {
  if (!analyser || !canvas) return null;
  
  const defaults = {
    type: 'frequency',  // 'frequency' ou 'waveform'
    barWidth: 2,
    barGap: 1,
    barColor: 'rgb(0, 255, 255)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    gradientColors: ['rgb(0, 0, 255)', 'rgb(0, 255, 255)', 'rgb(0, 255, 0)']
  };
  
  const config = { ...defaults, ...options };
  
  const ctx = canvas.getContext('2d');
  let animationId = null;
  
  function draw() {
    // Dimensions du canvas
    const width = canvas.width;
    const height = canvas.height;
    
    // Effacer le canvas
    ctx.fillStyle = config.backgroundColor;
    ctx.fillRect(0, 0, width, height);
    
    // Choisir le type de données et de visualisation
    if (config.type === 'frequency') {
      // Récupérer les données de fréquence
      const data = analyser.getFrequencyData();
      const barCount = Math.min(data.length, Math.floor(width / (config.barWidth + config.barGap)));
      
      // Créer un gradient si spécifié
      if (config.gradientColors.length > 1) {
        const gradient = ctx.createLinearGradient(0, height, 0, 0);
        config.gradientColors.forEach((color, index) => {
          gradient.addColorStop(index / (config.gradientColors.length - 1), color);
        });
        ctx.fillStyle = gradient;
      } else {
        ctx.fillStyle = config.barColor;
      }
      
      // Dessiner les barres de fréquence
      for (let i = 0; i < barCount; i++) {
        const barHeight = (data[i] / 255) * height;
        const x = i * (config.barWidth + config.barGap);
        const y = height - barHeight;
        
        ctx.fillRect(x, y, config.barWidth, barHeight);
      }
    } else if (config.type === 'waveform') {
      // Récupérer les données temporelles
      const data = analyser.getTimeData();
      
      ctx.strokeStyle = config.barColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      const sliceWidth = width / data.length;
      let x = 0;
      
      for (let i = 0; i < data.length; i++) {
        const v = data[i] / 128.0;
        const y = v * height / 2;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        
        x += sliceWidth;
      }
      
      ctx.stroke();
    }
    
    // Continuer l'animation
    animationId = requestAnimationFrame(draw);
  }
  
  // Démarrer l'animation
  draw();
  
  return {
    stop: () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }
  };
}

// Exemple d'utilisation complète
document.addEventListener('DOMContentLoaded', () => {
  let audioContext = null;
  let currentSound = null;
  let analyser = null;
  let visualization = null;
  
  // Initialiser le contexte audio
  document.getElementById('init-audio').addEventListener('click', () => {
    audioContext = createAudioContext();
    if (audioContext) {
      handleAudioContext(audioContext);
      
      // Créer l'analyseur pour la visualisation
      analyser = createAnalyser(audioContext);
      
      // Connecter l'analyseur à la destination
      analyser.connect(audioContext.destination);
      
      // Démarrer la visualisation
      const canvas = document.getElementById('audio-canvas');
      if (canvas && analyser) {
        visualization = visualizeAudio(analyser, canvas);
      }
    }
  });
  
  // Jouer un oscillateur
  document.getElementById('play-oscillator').addEventListener('click', () => {
    if (!audioContext) return;
    
    const sound = createSimpleOscillator(audioContext, {
      type: 'sine',
      frequency: 440,
      volume: 0.3,
      duration: 2
    });
    
    if (sound && analyser) {
      sound.gainNode.connect(analyser.analyser);
      sound.play();
    }
  });
  
  // Charger et jouer un fichier audio
  document.getElementById('load-audio').addEventListener('click', async () => {
    if (!audioContext) return;
    
    const url = 'path/to/your/audio/file.mp3'; // Remplacer par votre fichier
    const audioBuffer = await loadAudioFile(audioContext, url);
    
    if (audioBuffer && analyser) {
      currentSound = playAudioBuffer(audioContext, audioBuffer);
      currentSound.gainNode.connect(analyser.analyser);
    }
  });
});`,

  // Gamepad
  Gamepad: `// Exemples d'utilisation de l'API Gamepad

// 1. Vérifier la prise en charge de l'API
function isGamepadSupported() {
  if ('getGamepads' in navigator) {
    console.log('API Gamepad supportée !');
    return true;
  } else {
    console.log('API Gamepad non supportée par ce navigateur');
    return false;
  }
}

// 2. Détecter la connexion/déconnexion de manettes
function setupGamepadEvents() {
  if (!isGamepadSupported()) return;
  
  window.addEventListener('gamepadconnected', (event) => {
    const gamepad = event.gamepad;
    console.log(\`Manette connectée: \${gamepad.id} (index: \${gamepad.index})\`);
    console.log(\`Nombre de boutons: \${gamepad.buttons.length}\`);
    console.log(\`Nombre d'axes: \${gamepad.axes.length}\`);
    
    // Afficher les informations dans l'interface
    updateGamepadInfo(gamepad);
    
    // Démarrer la boucle de lecture si c'est la première manette
    if (!gamepadLoop.isRunning) {
      startGamepadLoop();
    }
  });
  
  window.addEventListener('gamepaddisconnected', (event) => {
    const gamepad = event.gamepad;
    console.log(\`Manette déconnectée: \${gamepad.id} (index: \${gamepad.index})\`);
    
    // Arrêter la boucle si plus de manettes
    const gamepads = navigator.getGamepads();
    const connectedGamepads = Array.from(gamepads).filter(gp => gp !== null);
    
    if (connectedGamepads.length === 0) {
      stopGamepadLoop();
    }
  });
}

// 3. Boucle de lecture des manettes
const gamepadLoop = {
  isRunning: false,
  animationId: null,
  
  start() {
    if (this.isRunning) return;
    
    this.isRunning = true;
    console.log('Démarrage de la boucle de lecture des manettes');
    
    const loop = () => {
      if (!this.isRunning) return;
      
      // Lire l'état de toutes les manettes connectées
      const gamepads = navigator.getGamepads();
      
      for (let i = 0; i < gamepads.length; i++) {
        const gamepad = gamepads[i];
        if (gamepad) {
          processGamepadInput(gamepad);
        }
      }
      
      this.animationId = requestAnimationFrame(loop);
    };
    
    loop();
  },
  
  stop() {
    if (!this.isRunning) return;
    
    this.isRunning = false;
    console.log('Arrêt de la boucle de lecture des manettes');
    
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
};

function startGamepadLoop() {
  gamepadLoop.start();
}

function stopGamepadLoop() {
  gamepadLoop.stop();
}

// 4. Traitement des entrées de la manette
function processGamepadInput(gamepad) {
  // État précédent pour détecter les changements
  if (!gamepad.previousState) {
    gamepad.previousState = {
      buttons: gamepad.buttons.map(b => ({ pressed: b.pressed, value: b.value })),
      axes: [...gamepad.axes]
    };
    return;
  }
  
  // Traitement des boutons
  gamepad.buttons.forEach((button, index) => {
    const wasPressed = gamepad.previousState.buttons[index].pressed;
    const isPressed = button.pressed;
    
    // Détection des pressions/relâchements
    if (isPressed && !wasPressed) {
      onButtonPressed(gamepad.index, index, button.value);
    } else if (!isPressed && wasPressed) {
      onButtonReleased(gamepad.index, index);
    } else if (isPressed) {
      onButtonHeld(gamepad.index, index, button.value);
    }
    
    // Mettre à jour l'état précédent
    gamepad.previousState.buttons[index] = { pressed: isPressed, value: button.value };
  });
  
  // Traitement des axes (joysticks)
  gamepad.axes.forEach((axisValue, index) => {
    const previousValue = gamepad.previousState.axes[index];
    
    // Seuil de zone morte pour éviter les micro-mouvements
    const deadZone = 0.1;
    const currentValue = Math.abs(axisValue) > deadZone ? axisValue : 0;
    const prevValue = Math.abs(previousValue) > deadZone ? previousValue : 0;
    
    if (currentValue !== prevValue) {
      onAxisChanged(gamepad.index, index, currentValue, prevValue);
    }
    
    gamepad.previousState.axes[index] = axisValue;
  });
}

// 5. Gestionnaires d'événements pour les boutons
function onButtonPressed(gamepadIndex, buttonIndex, value) {
  console.log(\`Manette \${gamepadIndex} - Bouton \${buttonIndex} pressé (valeur: \${value.toFixed(2)})\`);
  
  // Mappage des boutons standards (Xbox/PlayStation)
  const buttonNames = [
    'A/X', 'B/Cercle', 'X/Carré', 'Y/Triangle',
    'LB/L1', 'RB/R1', 'LT/L2', 'RT/R2',
    'Select/Share', 'Start/Options', 'Stick gauche', 'Stick droit',
    'Haut', 'Bas', 'Gauche', 'Droite'
  ];
  
  const buttonName = buttonNames[buttonIndex] || \`Bouton \${buttonIndex}\`;
  
  // Actions spécifiques selon le bouton
  switch (buttonIndex) {
    case 0: // A/X
      console.log('Action: Saut/Validation');
      break;
    case 1: // B/Cercle
      console.log('Action: Annuler/Retour');
      break;
    case 2: // X/Carré
      console.log('Action: Attaque/Action');
      break;
    case 3: // Y/Triangle
      console.log('Action: Interaction');
      break;
    case 12: // Haut
      console.log('Direction: Haut');
      break;
    case 13: // Bas
      console.log('Direction: Bas');
      break;
    case 14: // Gauche
      console.log('Direction: Gauche');
      break;
    case 15: // Droite
      console.log('Direction: Droite');
      break;
  }
  
  // Mettre à jour l'interface
  updateButtonDisplay(gamepadIndex, buttonIndex, true, value);
}

function onButtonReleased(gamepadIndex, buttonIndex) {
  console.log(\`Manette \${gamepadIndex} - Bouton \${buttonIndex} relâché\`);
  updateButtonDisplay(gamepadIndex, buttonIndex, false, 0);
}

function onButtonHeld(gamepadIndex, buttonIndex, value) {
  // Traitement pour les boutons maintenus (ex: gâchettes analogiques)
  if (buttonIndex === 6 || buttonIndex === 7) { // LT/RT
    console.log(\`Gâchette \${buttonIndex === 6 ? 'gauche' : 'droite'}: \${(value * 100).toFixed(0)}%\`);
  }
}

// 6. Gestionnaire pour les axes (joysticks)
function onAxisChanged(gamepadIndex, axisIndex, currentValue, previousValue) {
  console.log(\`Manette \${gamepadIndex} - Axe \${axisIndex}: \${currentValue.toFixed(2)} (était: \${previousValue.toFixed(2)})\`);
  
  // Mappage des axes standards
  const axisNames = ['Stick gauche X', 'Stick gauche Y', 'Stick droit X', 'Stick droit Y'];
  const axisName = axisNames[axisIndex] || \`Axe \${axisIndex}\`;
  
  // Traitement selon l'axe
  if (axisIndex === 0 || axisIndex === 1) {
    // Stick gauche - mouvement du personnage
    const x = axisIndex === 0 ? currentValue : previousValue;
    const y = axisIndex === 1 ? currentValue : previousValue;
    
    if (Math.abs(x) > 0.1 || Math.abs(y) > 0.1) {
      console.log(\`Mouvement: X=\${x.toFixed(2)}, Y=\${y.toFixed(2)}\`);
      // movePlayer(x, y);
    }
  } else if (axisIndex === 2 || axisIndex === 3) {
    // Stick droit - caméra/visée
    const x = axisIndex === 2 ? currentValue : previousValue;
    const y = axisIndex === 3 ? currentValue : previousValue;
    
    if (Math.abs(x) > 0.1 || Math.abs(y) > 0.1) {
      console.log(\`Caméra: X=\${x.toFixed(2)}, Y=\${y.toFixed(2)}\`);
      // rotateCamera(x, y);
    }
  }
  
  // Mettre à jour l'interface
  updateAxisDisplay(gamepadIndex, axisIndex, currentValue);
}

// 7. Fonctions utilitaires pour l'interface
function updateGamepadInfo(gamepad) {
  const infoElement = document.getElementById('gamepad-info');
  if (infoElement) {
    infoElement.innerHTML = \`
      <h3>Manette connectée</h3>
      <p><strong>ID:</strong> \${gamepad.id}</p>
      <p><strong>Index:</strong> \${gamepad.index}</p>
      <p><strong>Boutons:</strong> \${gamepad.buttons.length}</p>
      <p><strong>Axes:</strong> \${gamepad.axes.length}</p>
      <p><strong>Timestamp:</strong> \${gamepad.timestamp}</p>
    \`;
  }
}

function updateButtonDisplay(gamepadIndex, buttonIndex, pressed, value) {
  const buttonElement = document.getElementById(\`button-\${gamepadIndex}-\${buttonIndex}\`);
  if (buttonElement) {
    buttonElement.style.backgroundColor = pressed ? '#00ff00' : '#333';
    buttonElement.style.opacity = pressed ? value : 0.3;
    buttonElement.textContent = \`B\${buttonIndex} (\${(value * 100).toFixed(0)}%)\`;
  }
}

function updateAxisDisplay(gamepadIndex, axisIndex, value) {
  const axisElement = document.getElementById(\`axis-\${gamepadIndex}-\${axisIndex}\`);
  if (axisElement) {
    const percentage = (value * 100).toFixed(0);
    axisElement.textContent = \`Axe \${axisIndex}: \${percentage}%\`;
    axisElement.style.color = Math.abs(value) > 0.5 ? '#ff0000' : '#ffffff';
  }
}

// 8. Vibration (si supportée)
function vibrateGamepad(gamepadIndex, duration = 200, strongMagnitude = 1.0, weakMagnitude = 0.5) {
  const gamepads = navigator.getGamepads();
  const gamepad = gamepads[gamepadIndex];
  
  if (gamepad && gamepad.vibrationActuator) {
    gamepad.vibrationActuator.playEffect('dual-rumble', {
      duration: duration,
      strongMagnitude: strongMagnitude,
      weakMagnitude: weakMagnitude
    }).then(() => {
      console.log(\`Vibration de la manette \${gamepadIndex} terminée\`);
    }).catch(err => {
      console.error('Erreur de vibration:', err);
    });
  } else {
    console.log(\`Vibration non supportée pour la manette \${gamepadIndex}\`);
  }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  setupGamepadEvents();
  
  // Bouton de test de vibration
  document.getElementById('vibrate-btn')?.addEventListener('click', () => {
    vibrateGamepad(0, 500, 0.8, 0.4);
  });
  
  // Afficher les manettes déjà connectées
  const gamepads = navigator.getGamepads();
  for (let i = 0; i < gamepads.length; i++) {
    if (gamepads[i]) {
      updateGamepadInfo(gamepads[i]);
      if (!gamepadLoop.isRunning) {
        startGamepadLoop();
      }
    }
  }
});`,
};

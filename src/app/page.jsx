"use client"

import { useState } from "react"
import "./globals.css"
import TechBackground from "../components/TechBackground"
import TechMobileMenu from "../components/TechMobileMenu"
import ResizeObserverDemo from "../components/ResizeObserverDemo"
import IntersectionObserverDemo from "../components/IntersectionObserverDemo"
import ClipboardDemo from "../components/ClipboardDemo"
import WebShareDemo from "../components/WebShareDemo"
import MutationObserverDemo from "../components/MutationObserverDemo"
import IdleCallbackDemo from "../components/IdleCallbackDemo"
import BatteryDemo from "../components/BatteryDemo"
import PerformanceDemo from "../components/PerformanceDemo"
import BroadcastChannelDemo from "../components/BroadcastChannelDemo"
import CredentialDemo from "../components/CredentialDemo"
import GeolocationDemo from "../components/GeolocationDemo"
import WebAudioDemo from "../components/WebAudioDemo"
import GamepadDemo from "../components/GamepadDemo"
import NotificationDemo from "../components/NotificationDemo"
import VibrationDemo from "../components/VibrationDemo"
import ScreenOrientationDemo from "../components/ScreenOrientationDemo"
import PageVisibilityDemo from "../components/PageVisibilityDemo"
import NetworkInfoDemo from "../components/NetworkInfoDemo"
import DeviceMotionDemo from "../components/DeviceMotionDemo"
import SpeechRecognitionDemo from "../components/SpeechRecognitionDemo"
import SpeechSynthesisDemo from "../components/SpeechSynthesisDemo"
import FileSystemDemo from "../components/FileSystemDemo"
import PaymentRequestDemo from "../components/PaymentRequestDemo"
import WebLocksDemo from "../components/WebLocksDemo"
import MediaSessionDemo from "../components/MediaSessionDemo"
import PictureInPictureDemo from "../components/PictureInPictureDemo"
import FullscreenDemo from "../components/FullscreenDemo"
import PointerLockDemo from "../components/PointerLockDemo"
import ScreenCaptureDemo from "../components/ScreenCaptureDemo"
import IndexedDBDemo from "../components/IndexedDBDemo"

const apis = [
  { id: "resize", name: "ResizeObserver", icon: "🔍", category: "Observer" },
  { id: "intersection", name: "IntersectionObserver", icon: "👁️", category: "Observer" },
  { id: "mutation", name: "MutationObserver", icon: "🔄", category: "Observer" },
  { id: "performance", name: "PerformanceObserver", icon: "📊", category: "Observer" },
  { id: "clipboard", name: "Clipboard API", icon: "📋", category: "System" },
  { id: "webshare", name: "Web Share API", icon: "🌐", category: "System" },
  { id: "notification", name: "Notification API", icon: "🔔", category: "System" },
  { id: "vibration", name: "Vibration API", icon: "📳", category: "System" },
  { id: "idle", name: "requestIdleCallback", icon: "⚡", category: "Performance" },
  { id: "battery", name: "Battery Status API", icon: "🔋", category: "Device" },
  { id: "geolocation", name: "Geolocation API", icon: "🌍", category: "Device" },
  { id: "screenorientation", name: "Screen Orientation", icon: "📱", category: "Device" },
  { id: "networkinfo", name: "Network Information", icon: "📶", category: "Device" },
  { id: "devicemotion", name: "Device Motion", icon: "📲", category: "Device" },
  { id: "pagevisibility", name: "Page Visibility", icon: "👀", category: "Browser" },
  { id: "broadcast", name: "Broadcast Channel", icon: "📡", category: "Communication" },
  { id: "credential", name: "Credential Management", icon: "🔒", category: "Security" },
  { id: "webaudio", name: "Web Audio API", icon: "🎵", category: "Media" },
  { id: "gamepad", name: "Gamepad API", icon: "🎮", category: "Input" },
  { id: "speechrecognition", name: "Speech Recognition", icon: "🎤", category: "AI" },
  { id: "speechsynthesis", name: "Speech Synthesis", icon: "🗣️", category: "AI" },
  { id: "filesystem", name: "File System Access", icon: "📁", category: "Storage" },
  { id: "indexeddb", name: "IndexedDB", icon: "🗄️", category: "Storage" },
  { id: "paymentrequest", name: "Payment Request", icon: "💳", category: "Commerce" },
  { id: "weblocks", name: "Web Locks API", icon: "🔐", category: "Concurrency" },
  { id: "mediasession", name: "Media Session", icon: "🎬", category: "Media" },
  { id: "pictureinpicture", name: "Picture-in-Picture", icon: "📺", category: "Media" },
  { id: "fullscreen", name: "Fullscreen API", icon: "⛶", category: "Display" },
  { id: "pointerlock", name: "Pointer Lock", icon: "🖱️", category: "Input" },
  { id: "screencapture", name: "Screen Capture", icon: "📹", category: "Media" },
]

const categories = [
  "Tous",
  "Observer",
  "System",
  "Performance",
  "Device",
  "Browser",
  "Communication",
  "Security",
  "Media",
  "Input",
  "AI",
  "Storage",
  "Commerce",
  "Concurrency",
  "Display",
]

export default function App() {
  const [activeApi, setActiveApi] = useState("resize")
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredApis = apis.filter((api) => {
    const matchesCategory = activeCategory === "Tous" || api.category === activeCategory
    const matchesSearch = api.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const renderDemo = () => {
    switch (activeApi) {
      case "resize":
        return <ResizeObserverDemo />
      case "intersection":
        return <IntersectionObserverDemo />
      case "clipboard":
        return <ClipboardDemo />
      case "webshare":
        return <WebShareDemo />
      case "mutation":
        return <MutationObserverDemo />
      case "idle":
        return <IdleCallbackDemo />
      case "battery":
        return <BatteryDemo />
      case "performance":
        return <PerformanceDemo />
      case "broadcast":
        return <BroadcastChannelDemo />
      case "credential":
        return <CredentialDemo />
      case "geolocation":
        return <GeolocationDemo />
      case "webaudio":
        return <WebAudioDemo />
      case "gamepad":
        return <GamepadDemo />
      case "notification":
        return <NotificationDemo />
      case "vibration":
        return <VibrationDemo />
      case "screenorientation":
        return <ScreenOrientationDemo />
      case "pagevisibility":
        return <PageVisibilityDemo />
      case "networkinfo":
        return <NetworkInfoDemo />
      case "devicemotion":
        return <DeviceMotionDemo />
      case "speechrecognition":
        return <SpeechRecognitionDemo />
      case "speechsynthesis":
        return <SpeechSynthesisDemo />
      case "filesystem":
        return <FileSystemDemo />
      case "paymentrequest":
        return <PaymentRequestDemo />
      case "weblocks":
        return <WebLocksDemo />
      case "mediasession":
        return <MediaSessionDemo />
      case "pictureinpicture":
        return <PictureInPictureDemo />
      case "fullscreen":
        return <FullscreenDemo />
      case "pointerlock":
        return <PointerLockDemo />
      case "screencapture":
        return <ScreenCaptureDemo />
      case "indexeddb":
        return <IndexedDBDemo />
      default:
        return <ResizeObserverDemo />
    }
  }

  return (
    <div className="app">
      <TechBackground />

      <header className="tech-header">
        <div className="header-content">
          <div className="header-title">
            <h1>JS TECH APIS</h1>
            <p className="header-subtitle">EXPLORE {apis.length} CUTTING-EDGE WEB TECHNOLOGIES</p>
          </div>

          <div className="header-controls">
            <div className="tech-search-box">
              <input
                type="text"
                placeholder="Search APIs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="tech-search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
          </div>
        </div>
      </header>

      <nav className="tech-navbar">
        <div className="navbar-content">
          <div className="tech-category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`tech-category-btn ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="tech-api-tabs">
        <div className="api-tabs-container">
          {filteredApis.map((api) => (
            <button
              key={api.id}
              className={`tech-api-tab ${activeApi === api.id ? "active" : ""}`}
              onClick={() => setActiveApi(api.id)}
              title={api.name}
            >
              <span className="api-icon">{api.icon}</span>
              <span className="api-name">{api.name}</span>
              <span className="api-category">{api.category}</span>
            </button>
          ))}
        </div>
      </div>

      <main className="tech-main-content">
        <div className="tech-demo-container">{renderDemo()}</div>
      </main>

      <TechMobileMenu
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        apis={apis}
        activeApi={activeApi}
        setActiveApi={setActiveApi}
      />
    </div>
  )
}

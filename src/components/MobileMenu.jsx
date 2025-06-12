"use client"

import { useState, useEffect } from "react"

export default function MobileMenu({ categories, activeCategory, setActiveCategory, apis, activeApi, setActiveApi }) {
  const [isOpen, setIsOpen] = useState(false)

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".mobile-menu") && !event.target.closest(".burger-button")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  // Fermer le menu après sélection sur mobile
  const handleApiSelect = (apiId) => {
    setActiveApi(apiId)
    setIsOpen(false)
  }

  const handleCategorySelect = (category) => {
    setActiveCategory(category)
    setIsOpen(false)
  }

  return (
    <>
      <button
        className={`burger-button ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu mobile"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <h3>Catégories</h3>
        </div>
        <div className="mobile-menu-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`mobile-category-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mobile-menu-header">
          <h3>APIs</h3>
        </div>
        <div className="mobile-menu-apis">
          {apis
            .filter((api) => activeCategory === "Tous" || api.category === activeCategory)
            .map((api) => (
              <button
                key={api.id}
                className={`mobile-api-btn ${activeApi === api.id ? "active" : ""}`}
                onClick={() => handleApiSelect(api.id)}
              >
                <span className="mobile-api-icon">{api.icon}</span>
                <span className="mobile-api-name">{api.name}</span>
              </button>
            ))}
        </div>
      </div>
    </>
  )
}

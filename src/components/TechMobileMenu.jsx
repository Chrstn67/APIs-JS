"use client"

import { useState, useEffect } from "react"

export default function TechMobileMenu({
  categories,
  activeCategory,
  setActiveCategory,
  apis,
  activeApi,
  setActiveApi,
}) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".tech-mobile-menu") && !event.target.closest(".tech-burger-button")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

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
        className={`tech-burger-button ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu mobile"
        aria-expanded={isOpen}
      >
        <div className="burger-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="burger-glow"></div>
      </button>

      <div className={`tech-mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-header">
          <div className="header-line"></div>
          <h3>CATEGORIES</h3>
          <div className="header-line"></div>
        </div>

        <div className="menu-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`tech-category-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => handleCategorySelect(category)}
            >
              <span className="btn-text">{category}</span>
              <div className="btn-glow"></div>
            </button>
          ))}
        </div>

        <div className="menu-header">
          <div className="header-line"></div>
          <h3>APIS</h3>
          <div className="header-line"></div>
        </div>

        <div className="menu-apis">
          {apis
            .filter((api) => activeCategory === "Tous" || api.category === activeCategory)
            .map((api) => (
              <button
                key={api.id}
                className={`tech-api-btn ${activeApi === api.id ? "active" : ""}`}
                onClick={() => handleApiSelect(api.id)}
              >
                <span className="api-icon">{api.icon}</span>
                <span className="api-name">{api.name}</span>
                <div className="btn-glow"></div>
              </button>
            ))}
        </div>
      </div>
    </>
  )
}

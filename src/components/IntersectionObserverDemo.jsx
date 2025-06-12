"use client"

import { useRef, useEffect, useState } from "react"
import ApiCodeExamples from "./ApiCodeExamples"

const IntersectionObserverDemo = () => {
  const [isVisible, setIsVisible] = useState(false)
  const targetRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target) // Stop observing after it becomes visible
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% of the target is visible
      },
    )

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current)
      }
    }
  }, [])

  return (
    <div style={{ padding: "20px" }}>
      <h1>Intersection Observer Demo</h1>
      <p>Scroll down to see the element become visible.</p>

      <div
        ref={targetRef}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: isVisible ? "green" : "red",
          transition: "background-color 0.5s ease",
          marginTop: "500px",
          marginBottom: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "20px",
        }}
      >
        {isVisible ? "Visible!" : "Not Visible"}
      </div>

      <ApiCodeExamples apiName="IntersectionObserver" />
    </div>
  )
}

export default IntersectionObserverDemo

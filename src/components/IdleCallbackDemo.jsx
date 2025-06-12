"use client"

import { useState, useEffect } from "react"
import ApiCodeExamples from "./ApiCodeExamples"

function IdleCallbackDemo() {
  const [message, setMessage] = useState("IdleCallback not yet triggered.")
  const [isIdle, setIsIdle] = useState(false)

  useEffect(() => {
    let idleCallbackId

    const handleIdle = (deadline) => {
      while (deadline.timeRemaining() > 0 && !isIdle) {
        // Simulate some work
        console.log("Performing idle work...")
        setMessage("IdleCallback triggered and performing work.")
        setIsIdle(true)
      }

      if (!isIdle) {
        idleCallbackId = requestIdleCallback(handleIdle)
      } else {
        setMessage("IdleCallback completed.")
      }
    }

    idleCallbackId = requestIdleCallback(handleIdle)

    return () => {
      cancelIdleCallback(idleCallbackId)
    }
  }, [isIdle])

  return (
    <div style={{ padding: "20px" }}>
      <h2>IdleCallback Demo</h2>
      <p>{message}</p>
      <ApiCodeExamples apiName="IdleCallback" />
    </div>
  )
}

export default IdleCallbackDemo

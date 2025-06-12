"use client"

import { useState, useEffect } from "react"
import ApiCodeExamples from "./ApiCodeExamples"

const GamepadDemo = () => {
  const [gamepads, setGamepads] = useState([])

  useEffect(() => {
    const handleGamepadConnected = (event) => {
      console.log("Gamepad connected:", event.gamepad)
      updateGamepads()
    }

    const handleGamepadDisconnected = (event) => {
      console.log("Gamepad disconnected:", event.gamepad)
      updateGamepads()
    }

    window.addEventListener("gamepadconnected", handleGamepadConnected)
    window.addEventListener("gamepaddisconnected", handleGamepadDisconnected)

    updateGamepads()

    return () => {
      window.removeEventListener("gamepadconnected", handleGamepadConnected)
      window.removeEventListener("gamepaddisconnected", handleGamepadDisconnected)
    }
  }, [])

  const updateGamepads = () => {
    const gamepadList = navigator.getGamepads
      ? navigator.getGamepads()
      : navigator.webkitGetGamepads
        ? navigator.webkitGetGamepads()
        : []
    setGamepads(Array.from(gamepadList).filter((gamepad) => gamepad !== null))
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gamepad API Demo</h1>
      <p>Connect a gamepad to your computer and see its data displayed below.</p>

      {gamepads.length === 0 ? (
        <p>No gamepads connected.</p>
      ) : (
        gamepads.map((gamepad) => (
          <div key={gamepad.index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h3>
              Gamepad {gamepad.index}: {gamepad.id}
            </h3>
            <p>
              Axes:{" "}
              {gamepad.axes.map((axis, index) => (
                <span key={index}>
                  {index}: {axis.toFixed(2)}{" "}
                </span>
              ))}
            </p>
            <p>
              Buttons:{" "}
              {gamepad.buttons.map((button, index) => (
                <span key={index}>
                  {index}: {button.pressed ? "Pressed" : "Not Pressed"} (Value: {button.value.toFixed(2)})
                </span>
              ))}
            </p>
          </div>
        ))
      )}
      <ApiCodeExamples apiName="Gamepad" />
    </div>
  )
}

export default GamepadDemo

"use client"

import { useState, useEffect } from "react"
import ApiCodeExamples from "./ApiCodeExamples"

function BatteryDemo() {
  const [batteryLevel, setBatteryLevel] = useState(null)
  const [isCharging, setIsCharging] = useState(null)
  const [chargingTime, setChargingTime] = useState(null)
  const [dischargingTime, setDischargingTime] = useState(null)

  useEffect(() => {
    const getBatteryInfo = async () => {
      try {
        if ("getBattery" in navigator) {
          const battery = await navigator.getBattery()
          setBatteryLevel(battery.level)
          setIsCharging(battery.charging)
          setChargingTime(battery.chargingTime)
          setDischargingTime(battery.dischargingTime)

          battery.addEventListener("levelchange", () => {
            setBatteryLevel(battery.level)
          })

          battery.addEventListener("chargingchange", () => {
            setIsCharging(battery.charging)
          })

          battery.addEventListener("chargingtimechange", () => {
            setChargingTime(battery.chargingTime)
          })

          battery.addEventListener("dischargingtimechange", () => {
            setDischargingTime(battery.dischargingTime)
          })
        } else {
          console.log("Battery Status API is not supported in this browser.")
        }
      } catch (error) {
        console.error("Error getting battery info:", error)
      }
    }

    getBatteryInfo()
  }, [])

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px", maxWidth: "600px", margin: "0 auto" }}
    >
      <h2>Battery Status Demo</h2>
      {batteryLevel !== null ? (
        <>
          <p>Battery Level: {(batteryLevel * 100).toFixed(0)}%</p>
          <p>Charging: {isCharging ? "Yes" : "No"}</p>
          {isCharging ? (
            <p>Charging Time: {chargingTime ? (chargingTime / 60).toFixed(2) + " minutes" : "Calculating..."}</p>
          ) : (
            <p>
              Discharging Time: {dischargingTime ? (dischargingTime / 60).toFixed(2) + " minutes" : "Calculating..."}
            </p>
          )}
        </>
      ) : (
        <p>Getting battery information...</p>
      )}
      <ApiCodeExamples apiName="Battery" />
    </div>
  )
}

export default BatteryDemo

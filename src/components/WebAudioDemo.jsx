"use client"

import { useState, useEffect, useRef } from "react"
import ApiCodeExamples from "./ApiCodeExamples"

const WebAudioDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioContext = useRef(null)
  const oscillator = useRef(null)

  useEffect(() => {
    return () => {
      if (oscillator.current) {
        oscillator.current.stop()
      }
      if (audioContext.current) {
        audioContext.current.close()
      }
    }
  }, [])

  const handlePlayPause = () => {
    if (!audioContext.current) {
      audioContext.current = new (window.AudioContext || window.webkitAudioContext)()
    }

    if (!oscillator.current) {
      oscillator.current = audioContext.current.createOscillator()
      oscillator.current.type = "sine"
      oscillator.current.frequency.setValueAtTime(440, audioContext.current.currentTime) // A4 note
      oscillator.current.connect(audioContext.current.destination)
    }

    if (isPlaying) {
      oscillator.current.stop()
      oscillator.current = null
      setIsPlaying(false)
    } else {
      oscillator.current = audioContext.current.createOscillator()
      oscillator.current.type = "sine"
      oscillator.current.frequency.setValueAtTime(440, audioContext.current.currentTime) // A4 note
      oscillator.current.connect(audioContext.current.destination)
      oscillator.current.start()
      setIsPlaying(true)
    }
  }

  return (
    <div>
      <h1>Web Audio API Demo</h1>
      <button onClick={handlePlayPause}>{isPlaying ? "Stop" : "Play"} A4 (440Hz)</button>
      <ApiCodeExamples apiName="WebAudio" />
    </div>
  )
}

export default WebAudioDemo

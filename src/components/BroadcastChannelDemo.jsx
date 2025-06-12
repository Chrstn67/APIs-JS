"use client"

import { useState, useEffect } from "react"
import ApiCodeExamples from "./ApiCodeExamples"

function BroadcastChannelDemo() {
  const [message, setMessage] = useState("")
  const [receivedMessages, setReceivedMessages] = useState([])
  const [channel, setChannel] = useState(null)

  useEffect(() => {
    const bc = new BroadcastChannel("my-channel")
    setChannel(bc)

    bc.onmessage = (event) => {
      setReceivedMessages((prevMessages) => [...prevMessages, event.data])
    }

    return () => {
      bc.close()
    }
  }, [])

  const sendMessage = () => {
    if (channel && message) {
      channel.postMessage(message)
      setMessage("")
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>BroadcastChannel Demo</h1>
      <p>Open this page in multiple tabs to see the BroadcastChannel in action.</p>

      <div>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter message" />
        <button onClick={sendMessage}>Send Message</button>
      </div>

      <div>
        <h2>Received Messages:</h2>
        <ul>
          {receivedMessages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
      <ApiCodeExamples apiName="BroadcastChannel" />
    </div>
  )
}

export default BroadcastChannelDemo

"use client"
import ApiCodeExamples from "./ApiCodeExamples"

const WebShareDemo = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Web Share API Demo",
          text: "Check out this cool website!",
          url: "https://example.com",
        })
        console.log("Successfully shared!")
      } catch (error) {
        console.error("Error sharing:", error)
      }
    } else {
      console.log("Web Share API not supported.")
    }
  }

  return (
    <div className="container">
      <h1>Web Share API Demo</h1>
      <p>Click the button below to share this page.</p>
      <button onClick={handleShare} disabled={!navigator.share}>
        Share
      </button>
      {!navigator.share && <p>Web Share API is not supported in this browser.</p>}
      <ApiCodeExamples apiName="WebShare" />
    </div>
  )
}

export default WebShareDemo

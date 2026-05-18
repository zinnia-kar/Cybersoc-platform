import { useState } from "react"

export default function CSRFLab() {

  const [message, setMessage] =
    useState("")

  const simulateCSRF = () => {

    setMessage(
      "⚠️ Forged request executed"
    )
  }

  return (

    <div style={{ padding: "40px" }}>

      <div
        className="glass-card"

        style={{
          padding: "30px"
        }}
      >

        <h1>CSRF Lab 🔄</h1>

        <p>
          Simulate forged authenticated requests
        </p>

        <button
          className="cyber-button"
          onClick={simulateCSRF}
        >
          Launch CSRF Attack
        </button>

        {
          message && (

            <h3
              style={{
                marginTop: "20px"
              }}
            >
              {message}
            </h3>
          )
        }

      </div>

    </div>
  )
}
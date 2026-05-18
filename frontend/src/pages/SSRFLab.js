import { useState } from "react"

export default function SSRFLab() {

  const [url, setUrl] =
    useState("")

  const [response, setResponse] =
    useState("")

  const testSSRF = () => {

    if (
      url.includes("localhost") ||
      url.includes("127.0.0.1")
    ) {

      setResponse(
        "⚠️ Internal resource accessed"
      )

    } else {

      setResponse(
        "✅ External request simulated"
      )
    }
  }

  return (

    <div style={{ padding: "40px" }}>

      <div
        className="glass-card"
        style={{ padding: "30px" }}
      >

        <h1>SSRF Lab 🌐</h1>

        <p
          style={{
            color: "#94a3b8"
          }}
        >
          Simulate Server-Side Request Forgery attacks
        </p>

        <input

          type="text"

          placeholder="Enter URL"

          value={url}

          onChange={(e)=>
            setUrl(e.target.value)
          }
        />

        <button
          className="cyber-button"
          onClick={testSSRF}
        >
          Send Request
        </button>

        {
          response && (

            <div
              className="glass-card"
              style={{
                padding: "20px",
                marginTop: "25px"
              }}
            >

              <h3>Response</h3>

              <p>{response}</p>

            </div>
          )
        }

      </div>

    </div>
  )
}
import React, { useState } from "react"

export default function AuthenticationLab() {

  const [username, setUsername] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [result, setResult] =
    useState("")

  const testAuth = () => {

    if (
      username === "admin" &&
      password === "admin123"
    ) {

      setResult(
        "⚠️ Weak Credentials Accepted"
      )

    } else {

      setResult(
        "❌ Invalid Credentials"
      )
    }
  }

  return (

    <div className="lab-container">

      <div
        className="glass-card"
        style={{
          width: "100%",
          maxWidth: "900px"
        }}
      >

        <h1
          style={{
            marginBottom: "10px"
          }}
        >
          Authentication Lab 🔐
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px"
          }}
        >
          Test weak authentication
          vulnerabilities
        </p>

        <input
          type="text"

          placeholder="Enter Username"

          value={username}

          onChange={(e)=>
            setUsername(e.target.value)
          }

          className="cyber-input"
        />

        <input
          type="password"

          placeholder="Enter Password"

          value={password}

          onChange={(e)=>
            setPassword(e.target.value)
          }

          className="cyber-input"
        />

        <button
          className="cyber-button"
          onClick={testAuth}
        >
          Test Authentication
        </button>

        {
          result && (

            <div className="output-box">

              <h2
                style={{
                  marginBottom: "10px"
                }}
              >
                Result
              </h2>

              <p>{result}</p>

            </div>
          )
        }

      </div>

    </div>
  )
}
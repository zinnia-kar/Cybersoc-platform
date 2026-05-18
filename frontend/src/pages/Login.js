import React, { useState } from "react"

import axios from "axios"

import {
  Link,
  useNavigate
} from "react-router-dom"

export default function Login() {

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [error, setError] =
    useState("")

  const navigate =
    useNavigate()

  const login = async () => {

    try {

      const res =
        await axios.post(

          "http://localhost:5000/api/auth/login",

          {
            email,
            password
          }
        )

      localStorage.setItem(
        "token",
        res.data.token
      )

      navigate("/dashboard")

    } catch (err) {

      setError(

        err.response?.data?.message ||

        "Login Failed"
      )
    }
  }

  return (

    <div className="lab-container">

      <div
        className="glass-card"
        style={{
          width: "100%",
          maxWidth: "500px"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px"
          }}
        >
          Login 🔐
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "30px"
          }}
        >
          Access CyberSOC Platform
        </p>

        {
          error && (

            <div
              className="output-box"
              style={{
                marginBottom: "20px",
                padding: "14px"
              }}
            >

              <p>{error}</p>

            </div>
          )
        }

        <input
          type="email"

          placeholder="Enter Email"

          value={email}

          onChange={(e)=>
            setEmail(e.target.value)
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
          onClick={login}
        >
          Login
        </button>

        <p
          style={{
            marginTop: "25px",
            textAlign: "center",
            color: "#94a3b8"
          }}
        >

          Don't have an account?

          {" "}

          <Link to="/register">
            Register
          </Link>

        </p>

      </div>

    </div>
  )
}
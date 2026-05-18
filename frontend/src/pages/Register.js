import React, { useState } from "react"

import axios from "axios"

import {
  Link,
  useNavigate
} from "react-router-dom"

export default function Register() {

  const [name, setName] =
    useState("")

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [message, setMessage] =
    useState("")

  const navigate =
    useNavigate()

  const register = async () => {

    try {

      const res =
        await axios.post(

          "http://localhost:5000/api/auth/register",

          {
            name,
            email,
            password
          }
        )

      setMessage(
        res.data.message
      )

      setTimeout(() => {

        navigate("/")

      }, 1500)

    } catch (err) {

      setMessage(

        err.response?.data?.message ||

        "Registration Failed"
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
          Register 🛡️
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "30px"
          }}
        >
          Create Your CyberSOC Account
        </p>

        {
          message && (

            <div
              className="output-box"
              style={{
                marginBottom: "20px",
                padding: "14px"
              }}
            >

              <p>{message}</p>

            </div>
          )
        }

        <input
          type="text"

          placeholder="Enter Name"

          value={name}

          onChange={(e)=>
            setName(e.target.value)
          }

          className="cyber-input"
        />

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
          onClick={register}
        >
          Register
        </button>

        <p
          style={{
            marginTop: "25px",
            textAlign: "center",
            color: "#94a3b8"
          }}
        >

          Already have an account?

          {" "}

          <Link to="/">
            Login
          </Link>

        </p>

      </div>

    </div>
  )
}
import { useState } from "react"

export default function IDORLab() {

  const [userId, setUserId] =
    useState("")

  const [data, setData] =
    useState("")

  const fetchData = () => {

    if (userId !== "1001") {

      setData(
        "⚠️ Unauthorized data exposure detected"
      )

    } else {

      setData(
        "✅ Authorized access"
      )
    }
  }

  return (

    <div style={{ padding: "40px" }}>

      <div
        className="glass-card"

        style={{
          padding: "30px"
        }}
      >

        <h1>IDOR Lab 🔓</h1>

        <input

          type="text"

          placeholder="Enter User ID"

          value={userId}

          onChange={(e)=>
            setUserId(e.target.value)
          }
        />

        <button
          className="cyber-button"
          onClick={fetchData}
        >
          Fetch Data
        </button>

        <h3
          style={{
            marginTop: "20px"
          }}
        >
          {data}
        </h3>

      </div>

    </div>
  )
}
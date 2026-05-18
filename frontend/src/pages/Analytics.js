import React from "react"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
}
from "recharts"

const data = [

  {
    attack: "XSS",
    attacks: 14
  },

  {
    attack: "SQLi",
    attacks: 9
  },

  {
    attack: "CSRF",
    attacks: 5
  },

  {
    attack: "IDOR",
    attacks: 11
  }
]

const anomalies = [

  {
    title:
      "Abnormal SQL Injection Spike",

    risk:
      "Critical"
  },

  {
    title:
      "Repeated XSS Payloads",

    risk:
      "High"
  },

  {
    title:
      "Suspicious File Uploads",

    risk:
      "Medium"
  }
]

export default function Analytics() {

  return (

    <div style={{ padding: "40px" }}>

      <h1
        style={{
          fontSize: "42px"
        }}
      >
        AI Threat Analytics 🤖
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "30px"
        }}
      >
        AI-powered anomaly detection engine
      </p>

      <div
        className="glass-card"

        style={{
          padding: "25px",
          marginBottom: "35px"
        }}
      >

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <BarChart data={data}>

            <XAxis dataKey="attack" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="attacks" />

          </BarChart>

        </ResponsiveContainer>

      </div>

      <h2
        style={{
          marginBottom: "20px"
        }}
      >
        AI Detected Threats 🚨
      </h2>

      <div className="cyber-grid">

        {
          anomalies.map((item,index)=>(

            <div
              key={index}

              className="glass-card"

              style={{
                padding: "20px"
              }}
            >

              <h3>
                {item.title}
              </h3>

              <p
                style={{
                  color:

                    item.risk ===
                    "Critical"

                    ? "#ff1744"

                    :

                    item.risk ===
                    "High"

                    ? "#ff9100"

                    : "#22c55e",

                  fontWeight: "bold"
                }}
              >
                {item.risk}
              </p>

            </div>
          ))
        }

      </div>

    </div>
  )
}


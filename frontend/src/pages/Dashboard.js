import React from "react"

import { Link } from "react-router-dom"

export default function Dashboard() {

  const labs = [

    {
      title: "XSS Lab ⚠️",
      route: "/xss"
    },

    {
      title: "SQL Injection Lab 💉",
      route: "/sql"
    },

    {
      title: "CSRF Lab 🔄",
      route: "/csrf"
    },

    {
      title: "IDOR Lab 🔓",
      route: "/idor"
    },

    {
      title: "File Upload Lab 📤",
      route: "/upload"
    },

    {
      title: "SSRF Lab 🌐",
      route: "/ssrf"
    },

    {
      title: "Path Traversal Lab 📂",
      route: "/path"
    },

    {
      title: "Authentication Lab 🔐",
      route: "/auth"
    },

    {
      title: "MITRE ATT&CK Mapping 🛡️",
      route: "/mitre"
    },

    {
      title: "Live Threat Feed 🚨",
      route: "/threat-feed"
    },

    {
      title: "Analytics Dashboard 📊",
      route: "/analytics"
    }
  ]

  return (

    <div className="lab-container">

      <div
        className="glass-card"
        style={{
          width: "95%",
          maxWidth: "1400px",
          padding: "35px"
        }}
      >

        {/* HEADER */}

        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            marginBottom: "30px",
            flexWrap: "wrap",
            gap: "20px"
          }}
        >

          <div>

            <h1
              style={{
                fontSize: "48px",
                marginBottom: "10px"
              }}
            >
              CyberSOC Dashboard 🛡️
            </h1>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "18px"
              }}
            >
              Interactive Cybersecurity
              Simulation Platform
            </p>

          </div>

          <button

            className="cyber-button"

            style={{
              padding: "10px 18px",
              fontSize: "14px"
            }}

            onClick={() => {

              localStorage.removeItem(
                "token"
              )

              window.location.href = "/"
            }}
          >
            Logout
          </button>

        </div>

        {/* LABS */}

        <h2
          style={{
            marginBottom: "25px"
          }}
        >
          Cyber Labs ⚡
        </h2>

        <div
          style={{

            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",

            gap: "25px"
          }}
        >

          {
            labs.map(
              (lab, index)=>(

                <div

                  key={index}

                  className="log-card"

                  style={{
                    padding: "25px"
                  }}
                >

                  <h2
                    style={{
                      marginBottom: "20px",
                      minHeight: "60px"
                    }}
                  >
                    {lab.title}
                  </h2>

                  <Link to={lab.route}>

                    <button
                      className="cyber-button"
                    >
                      Open Lab
                    </button>

                  </Link>

                </div>
              )
            )
          }

        </div>

        {/* COLOURED THREAT HEATMAP */}

        <div
          className="log-card"
          style={{
            padding: "25px",
            marginTop: "45px"
          }}
        >

          <h2
            style={{
              marginBottom: "20px"
            }}
          >
            Threat Heatmap 🔥
          </h2>

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fit, minmax(120px, 1fr))",

              gap: "18px"
            }}
          >

            <div
              className="threat-card"
              style={{
                background:
                  "linear-gradient(135deg,#ff4d4f,#7f1d1d)",

                padding: "25px",

                borderRadius: "18px",

                textAlign: "center"
              }}
            >

              <h3>XSS</h3>

              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold"
                }}
              >
                12
              </p>

              <span>HIGH</span>

            </div>

            <div
              className="threat-card"
              style={{
                background:
                  "linear-gradient(135deg,#f97316,#7c2d12)",

                padding: "25px",

                borderRadius: "18px",

                textAlign: "center"
              }}
            >

              <h3>SQLi</h3>

              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold"
                }}
              >
                9
              </p>

              <span>HIGH</span>

            </div>

            <div
              className="threat-card"
              style={{
                background:
                  "linear-gradient(135deg,#eab308,#713f12)",

                padding: "25px",

                borderRadius: "18px",

                textAlign: "center"
              }}
            >

              <h3>CSRF</h3>

              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold"
                }}
              >
                6
              </p>

              <span>MEDIUM</span>

            </div>

            <div
              className="threat-card"
              style={{
                background:
                  "linear-gradient(135deg,#06b6d4,#164e63)",

                padding: "25px",

                borderRadius: "18px",

                textAlign: "center"
              }}
            >

              <h3>SSRF</h3>

              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold"
                }}
              >
                4
              </p>

              <span>MEDIUM</span>

            </div>

            <div
              className="threat-card"
              style={{
                background:
                  "linear-gradient(135deg,#22c55e,#14532d)",

                padding: "25px",

                borderRadius: "18px",

                textAlign: "center"
              }}
            >

              <h3>PATH</h3>

              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold"
                }}
              >
                5
              </p>

              <span>LOW</span>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
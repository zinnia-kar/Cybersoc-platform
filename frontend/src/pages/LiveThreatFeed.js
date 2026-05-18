import { Link } from "react-router-dom"

export default function LiveThreatFeed() {

  const threats = [

    {
      attack:
        "⚠️ XSS attack detected",

      severity: "HIGH",

      route: "/xss",

      time: "2 mins ago"
    },

    {
      attack:
        "💉 SQL Injection attempt blocked",

      severity: "HIGH",

      route: "/sql",

      time: "5 mins ago"
    },

    {
      attack:
        "🌐 SSRF payload detected",

      severity: "MEDIUM",

      route: "/ssrf",

      time: "8 mins ago"
    },

    {
      attack:
        "📂 Path Traversal detected",

      severity: "HIGH",

      route: "/path",

      time: "11 mins ago"
    },

    {
      attack:
        "🔓 IDOR enumeration detected",

      severity: "MEDIUM",

      route: "/idor",

      time: "14 mins ago"
    }
  ]

  return (

    <div
      style={{
        padding: "40px"
      }}
    >

      <div
        className="glass-card"
        style={{
          padding: "30px"
        }}
      >

        <h1>
          Live Threat Feed 🚨
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px"
          }}
        >
          Real-time simulated attack monitoring
        </p>

        {
          threats.map(
            (threat, index)=>(

              <div

                key={index}

                className="log-card"

                style={{

                  marginBottom: "20px",

                  transition: "0.3s ease"
                }}
              >

                <div

                  style={{

                    display: "flex",

                    justifyContent:
                      "space-between",

                    alignItems: "center",

                    flexWrap: "wrap",

                    gap: "10px"
                  }}
                >

                  <div>

                    <h3>
                      {threat.attack}
                    </h3>

                    <p
                      style={{
                        color: "#94a3b8"
                      }}
                    >
                      {threat.time}
                    </p>

                  </div>

                  <div>

                    <span

                      style={{

                        padding:
                          "6px 12px",

                        borderRadius:
                          "10px",

                        background:

                          threat.severity
                          === "HIGH"

                            ? "#ff4d4f"

                            : "#facc15",

                        color: "white",

                        fontWeight:
                          "bold",

                        marginRight:
                          "12px"
                      }}
                    >

                      {threat.severity}

                    </span>

                    <Link
                      to={threat.route}
                    >

                      <button
                        className="
                          cyber-button
                          lab-button
                        "
                      >
                        View Lab
                      </button>

                    </Link>

                  </div>

                </div>

              </div>
            )
          )
        }

      </div>

    </div>
  )
}
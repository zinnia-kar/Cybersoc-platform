import React from "react"

export default function MitreAttack() {

  const techniques = [

    {
      tactic: "Initial Access",
      technique: "Phishing",
      id: "T1566",
      severity: "HIGH",
      color:
        "linear-gradient(135deg,#ef4444,#7f1d1d)"
    },

    {
      tactic: "Execution",
      technique: "Command Injection",
      id: "T1059",
      severity: "HIGH",
      color:
        "linear-gradient(135deg,#f97316,#7c2d12)"
    },

    {
      tactic: "Persistence",
      technique: "Valid Accounts",
      id: "T1078",
      severity: "MEDIUM",
      color:
        "linear-gradient(135deg,#eab308,#713f12)"
    },

    {
      tactic: "Credential Access",
      technique: "Brute Force",
      id: "T1110",
      severity: "LOW",
      color:
        "linear-gradient(135deg,#06b6d4,#164e63)"
    }
  ]

  return (

    <div className="lab-container">

      <div
        className="glass-card"
        style={{
          width: "100%",
          maxWidth: "1200px"
        }}
      >

        <h1
          style={{
            marginBottom: "10px"
          }}
        >
          MITRE ATT&CK Mapping 🛡️
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "35px"
          }}
        >
          Simulated ATT&CK technique
          mapping dashboard
        </p>

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",

            gap: "20px",

            marginTop: "20px"
          }}
        >

          {
            techniques.map(
              (item, index)=>(

                <div

                  key={index}

                  className="threat-card"

                  style={{
                    background: item.color,

                    padding: "25px",

                    borderRadius: "20px",

                    minHeight: "220px",

                    display: "flex",

                    flexDirection: "column",

                    justifyContent:
                      "space-between"
                  }}
                >

                  <div>

                    <h2
                      style={{
                        marginBottom: "15px"
                      }}
                    >
                      {item.tactic}
                    </h2>

                    <p
                      style={{
                        marginBottom: "10px",
                        fontSize: "18px"
                      }}
                    >
                      {item.technique}
                    </p>

                  </div>

                  <div>

                    <p
                      style={{
                        marginBottom: "8px"
                      }}
                    >
                      Technique ID:
                    </p>

                    <h3
                      style={{
                        marginBottom: "15px"
                      }}
                    >
                      {item.id}
                    </h3>

                    <span
                      style={{
                        background:
                          "rgba(255,255,255,0.18)",

                        padding:
                          "8px 14px",

                        borderRadius: "12px",

                        fontSize: "14px",

                        fontWeight: "bold"
                      }}
                    >
                      {item.severity}
                    </span>

                  </div>

                </div>
              )
            )
          }

        </div>

      </div>

    </div>
  )
}
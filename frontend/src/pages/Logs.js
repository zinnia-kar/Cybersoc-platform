import React from "react"

const attacks = [

  {
    type: "XSS",

    payload:
      "<script>alert('XSS')</script>",

    tactic:
      "Execution",

    technique:
      "T1059 Command and Scripting Interpreter",

    severity:
      "High"
  },

  {
    type: "SQL Injection",

    payload:
      "' OR '1'='1",

    tactic:
      "Credential Access",

    technique:
      "T1110 Brute Force",

    severity:
      "Critical"
  },

  {
    type: "CSRF",

    payload:
      "Forged Transfer Request",

    tactic:
      "Impact",

    technique:
      "T1499 Endpoint Denial",

    severity:
      "Medium"
  },

  {
    type: "IDOR",

    payload:
      "/api/user/1002",

    tactic:
      "Privilege Escalation",

    technique:
      "T1068 Exploitation",

    severity:
      "High"
  }
]

export default function Logs() {

  return (

    <div style={{ padding: "40px" }}>

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "10px"
        }}
      >
        MITRE ATT&CK Logs 🛡️
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "35px"
        }}
      >
        Threat intelligence and attack mapping
      </p>

      <div className="cyber-grid">

        {
          attacks.map((attack,index)=>(

            <div
              key={index}
              className="glass-card"

              style={{
                padding: "25px"
              }}
            >

              <h2
                style={{
                  color: "#00e5ff"
                }}
              >
                {attack.type}
              </h2>

              <p>
                <strong>Payload:</strong>
              </p>

              <code
                style={{
                  color: "#ff4d4f"
                }}
              >
                {attack.payload}
              </code>

              <hr
                style={{
                  margin: "20px 0",
                  opacity: 0.1
                }}
              />

              <p>
                <strong>Tactic:</strong>
                {" "}
                {attack.tactic}
              </p>

              <p>
                <strong>Technique:</strong>
                {" "}
                {attack.technique}
              </p>

              <div
                style={{
                  marginTop: "20px"
                }}
              >

                <span

                  style={{

                    padding:
                      "8px 14px",

                    borderRadius: "10px",

                    background:

                      attack.severity ===
                      "Critical"

                      ? "#ff1744"

                      :

                      attack.severity ===
                      "High"

                      ? "#ff9100"

                      : "#00c853",

                    fontWeight: "bold"
                  }}
                >
                  {attack.severity}
                </span>

              </div>

            </div>
          ))
        }

      </div>

    </div>
  )
}


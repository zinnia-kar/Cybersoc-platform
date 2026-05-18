import { useState } from "react"

export default function XSSLab() {

  const [payload, setPayload] =
    useState("")

  const [output, setOutput] =
    useState("")

  const [logs, setLogs] =
    useState([])

  const executePayload = () => {

    setOutput(payload)

    const newLog = {

      payload,

      time:
        new Date().toLocaleTimeString(),

      severity:
        payload.includes("script")
          ? "HIGH"
          : "MEDIUM"
    }

    setLogs([newLog, ...logs])
  }

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

        <h1
          style={{
            marginBottom: "10px"
          }}
        >
          XSS Lab ⚠️
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "20px"
          }}
        >
          Simulate Cross-Site Scripting attacks
        </p>

        <textarea

          rows="6"

          placeholder="Enter XSS Payload"

          value={payload}

          onChange={(e)=>
            setPayload(e.target.value)
          }

          style={{
            width: "100%",
            background: "#0f172a",
            color: "white",
            border:
              "1px solid #334155",
            borderRadius: "12px",
            padding: "15px",
            fontSize: "16px"
          }}
        />

        <button
          className="cyber-button"

          onClick={executePayload}

          style={{

            marginTop: "20px",

            padding:
              "12px 25px",

            border: "none",

            borderRadius: "10px",

            background:
              "#06b6d4",

            color: "white",

            fontWeight: "bold",

            cursor: "pointer"
          }}
        >
          Execute Payload
        </button>

        {/* OUTPUT */}

        <div

          className="glass-card"

          style={{
            marginTop: "30px",
            padding: "20px",
            minHeight: "150px"
          }}
        >

          <h3
            style={{
              marginBottom: "15px"
            }}
          >
            Rendered Output
          </h3>

          <div

            dangerouslySetInnerHTML={{
              __html: output
            }}

          />

        </div>

        {/* SAMPLE PAYLOADS */}

        <div
          style={{
            marginTop: "40px"
          }}
        >

          <h2>
            Sample Payloads 🚀
          </h2>

          <div

            className="glass-card"

            style={{
              padding: "20px",
              marginTop: "15px"
            }}
          >

            <p>
              1. HTML Injection
            </p>

            <code>
              {
                "<h1 style='color:red'>XSS SUCCESS</h1>"
              }
            </code>

            <br />
            <br />

            <p>
              2. Image Injection
            </p>

            <code>
              {
                '<img src="https://picsum.photos/200">'
              }
            </code>

            <br />
            <br />

            <p>
              3. Fake Login
            </p>

            <code>
              {
                '<input placeholder="Fake Password">'
              }
            </code>

          </div>

        </div>

        {/* ATTACK LOGS */}

        <div
          style={{
            marginTop: "40px"
          }}
        >

          <h2>
            Attack Logs 📜
          </h2>

          {
            logs.length === 0 && (

              <p
                style={{
                  color: "#94a3b8"
                }}
              >
                No attacks executed yet
              </p>
            )
          }

          {
            logs.map((log, index)=>(

              <div

                key={index}

                className="glass-card"

                style={{
                  padding: "15px",
                  marginTop: "15px"
                }}
              >

                <p>

                  <strong>
                    Payload:
                  </strong>

                  {" "}

                  {log.payload}

                </p>

                <p>

                  <strong>
                    Time:
                  </strong>

                  {" "}

                  {log.time}

                </p>

                <p>

                  <strong>
                    Severity:
                  </strong>

                  {" "}

                  <span

                    style={{

                      color:

                        log.severity ===
                        "HIGH"

                          ? "#ff4d4f"

                          : "#facc15"
                    }}
                  >

                    {log.severity}

                  </span>

                </p>

              </div>
            ))
          }

        </div>

      </div>

    </div>
  )
}
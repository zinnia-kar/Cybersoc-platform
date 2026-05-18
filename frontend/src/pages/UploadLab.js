import { useState } from "react"

export default function UploadLab() {

  const [message, setMessage] =
    useState("")

  const [fileName, setFileName] =
    useState("")

  const [severity, setSeverity] =
    useState("")

  const uploadFile = (e) => {

    const file =
      e.target.files[0]

    if (!file) return

    setFileName(file.name)

    const dangerousExtensions = [

      ".php",
      ".exe",
      ".bat",
      ".js",
      ".sh"
    ]

    const isMalicious =
      dangerousExtensions.some(
        (ext)=>
          file.name
            .toLowerCase()
            .endsWith(ext)
      )

    if (isMalicious) {

      setMessage(
        "⚠️ Malicious file detected"
      )

      setSeverity("HIGH")

    } else {

      setMessage(
        "✅ File uploaded safely"
      )

      setSeverity("LOW")
    }
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
          File Upload Lab 📁
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "20px"
          }}
        >
          Simulate insecure file upload vulnerabilities
        </p>

        <input

          type="file"

          onChange={uploadFile}
        />

        <button
          className="cyber-button"
        >
          Upload File
        </button>

        {
          fileName && (

            <div

              className="glass-card"

              style={{
                marginTop: "30px",
                padding: "20px"
              }}
            >

              <h3>
                Upload Result
              </h3>

              <p>

                <strong>
                  File:
                </strong>

                {" "}

                {fileName}

              </p>

              <p>

                <strong>
                  Status:
                </strong>

                {" "}

                {message}

              </p>

              <p>

                <strong>
                  Severity:
                </strong>

                {" "}

                <span

                  style={{

                    color:

                      severity ===
                      "HIGH"

                        ? "#ff4d4f"

                        : "#22c55e"
                  }}
                >

                  {severity}

                </span>

              </p>

            </div>
          )
        }

        {/* SAMPLE FILES */}

        <div
          style={{
            marginTop: "40px"
          }}
        >

          <h2>
            Example Test Files 🚀
          </h2>

          <div

            className="glass-card"

            style={{
              padding: "20px",
              marginTop: "15px"
            }}
          >

            <p>
              Safe:
            </p>

            <code>
              profile.png
            </code>

            <br />
            <br />

            <p>
              Malicious:
            </p>

            <code>
              shell.php
            </code>

            <br />
            <br />

            <code>
              malware.exe
            </code>

          </div>

        </div>

      </div>

    </div>
  )
}
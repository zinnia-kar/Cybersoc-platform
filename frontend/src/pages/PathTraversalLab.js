import { useState } from "react"

export default function PathTraversalLab() {

  const [path, setPath] =
    useState("")

  const [result, setResult] =
    useState("")

  const checkPath = () => {

    if (
      path.includes("../")
    ) {

      setResult(
        "⚠️ Directory Traversal Detected"
      )

    } else {

      setResult(
        "✅ Safe File Access"
      )
    }
  }

  return (

    <div style={{ padding: "40px" }}>

      <div
        className="glass-card"
        style={{ padding: "30px" }}
      >

        <h1>
          Path Traversal Lab 📂
        </h1>

        <p
          style={{
            color: "#94a3b8"
          }}
        >
          Test directory traversal vulnerabilities
        </p>

        <input

          type="text"

          placeholder="../../etc/passwd"

          value={path}

          onChange={(e)=>
            setPath(e.target.value)
          }
        />

        <button
          className="cyber-button"
          onClick={checkPath}
        >
          Access File
        </button>

        {
          result && (

            <div
              className="glass-card"
              style={{
                marginTop: "25px",
                padding: "20px"
              }}
            >

              <h3>Result</h3>

              <p>{result}</p>

            </div>
          )
        }

      </div>

    </div>
  )
}
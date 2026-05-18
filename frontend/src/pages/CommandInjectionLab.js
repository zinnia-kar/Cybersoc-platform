import { useState } from "react"

export default function CommandInjectionLab() {

  const [command, setCommand] =
    useState("")

  const [result, setResult] =
    useState("")

  const executeCommand = () => {

    if (

      command.includes("&&") ||

      command.includes(";")
    ) {

      setResult(
        "⚠️ Command Injection Detected"
      )

    } else {

      setResult(
        "✅ Command Executed"
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

        <h1>Command Injection Lab 💻</h1>

        <textarea

          rows="5"

          placeholder="Enter Command"

          value={command}

          onChange={(e)=>
            setCommand(e.target.value)
          }
        />

        <button
          className="cyber-button"
          onClick={executeCommand}
        >
          Execute
        </button>

        <h3
          style={{
            marginTop: "20px"
          }}
        >
          {result}
        </h3>

      </div>

    </div>
  )
}
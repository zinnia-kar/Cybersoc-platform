import { useState } from "react"

export default function SQLLab() {

  const [query, setQuery] =
    useState("")

  const [result, setResult] =
    useState("")

  const runQuery = () => {

    if (

      query.includes("' OR '1'='1") ||

      query.includes("DROP TABLE")
    ) {

      setResult(
        "⚠️ SQL Injection Detected"
      )

    } else {

      setResult(
        "✅ Query Executed Safely"
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

        <h1>SQL Injection Lab 💉</h1>

        <textarea

          rows="5"

          placeholder="Enter SQL Query"

          value={query}

          onChange={(e)=>
            setQuery(e.target.value)
          }
        />

        <button 
          className="cyber-button"
        
          onClick={runQuery}
        >
          Execute Query
        </button>

        <div
          style={{
            marginTop: "20px"
          }}
        >

          <h3>{result}</h3>

        </div>

      </div>

    </div>
  )
}
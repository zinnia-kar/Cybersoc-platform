const express = require("express")

const router = express.Router()

const AttackLog = require("../models/AttackLog")

// Severity Detection Function
function detectSeverity(payload) {

  const lower = payload.toLowerCase()

  if (
    lower.includes("drop table") ||
    lower.includes("<script>") ||
    lower.includes("onerror")
  ) {
    return "Critical"
  }

  if (
    lower.includes("or 1=1") ||
    lower.includes("alert")
  ) {
    return "High"
  }

  return "Medium"
}

// Save Attack Log
router.post("/", async (req, res) => {

  try {

    const { type, payload } = req.body

    const severity = detectSeverity(payload)

    const log = new AttackLog({
      type,
      payload,
      severity
    })

    await log.save()

    res.json({
      message: "Attack logged",
      severity
    })

  } catch (err) {

    console.log(err)

    res.status(500).json({
      message: "Server Error"
    })
  }
})

// Get Logs
router.get("/", async (req, res) => {

  try {

    const logs = await AttackLog
      .find()
      .sort({ timestamp: -1 })

    res.json(logs)

  } catch (err) {

    res.status(500).json({
      message: "Server Error"
    })
  }
})

module.exports = router
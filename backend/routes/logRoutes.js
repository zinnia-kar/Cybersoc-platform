const express = require("express")

const router = express.Router()

const Log =
  require("../models/Log")

/* GET LOGS */

router.get("/", async (req, res) => {

  try {

    const logs =
      await Log.find().sort({

        timestamp: -1
      })

    res.json(logs)

  } catch (err) {

    res.status(500).json({
      message: "Server Error"
    })
  }
})

/* CREATE LOG */

router.post("/", async (req, res) => {

  try {

    const {
      type,
      payload
    } = req.body

    let severity = "Medium"

    if (
      payload.includes("<script>") ||
      payload.includes("DROP")
    ) {

      severity = "Critical"
    }

    else if (
      payload.includes("SELECT")
    ) {

      severity = "High"
    }

    const log =
      new Log({

        type,
        payload,
        severity
      })

    await log.save()

    /* SOCKET EMIT */

    const io =
      req.app.get("io")

    io.emit("newAttack", log)

    res.json({
      message: "Attack Logged"
    })

  } catch (err) {

    console.log(err)

    res.status(500).json({
      message: "Server Error"
    })
  }
})

module.exports = router


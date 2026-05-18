const router = require("express").Router()
const { exec } = require("child_process")
const Log = require("../models/Log")

let comments = []

// XSS
router.post("/xss", (req, res) => {
  comments.push(req.body.comment)
  res.json(comments)
})

// SQLi (dummy vulnerable)
router.get("/sqli", (req, res) => {
  const username = req.query.username
  res.send(`Query executed: SELECT * FROM users WHERE username='${username}'`)
})

// CSRF
router.post("/transfer", (req, res) => {
  res.send("Transfer successful")
})

// IDOR
router.get("/user", (req, res) => {
  res.send(`Accessing user with id ${req.query.id}`)
})

// Command Injection
router.get("/cmd", (req, res) => {
  exec("ping " + req.query.ip, (err, stdout) => {
    res.send(stdout)
  })
})

module.exports = router
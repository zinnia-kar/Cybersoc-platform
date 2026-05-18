const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const router = express.Router()

// TEMP USER STORAGE

let users = []

// REGISTER

router.post("/register", async (req, res) => {

  try {

    const {
      username,
      email,
      password
    } = req.body

    // Check Existing User

    const existingUser = users.find(
      user => user.email === email
    )

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists"
      })
    }

    // Hash Password

    const hashedPassword =
      await bcrypt.hash(password, 10)

    // Create User

    const user = {

      id: Date.now(),

      username,

      email,

      password: hashedPassword
    }

    users.push(user)

    res.json({
      message: "Registration successful"
    })

  } catch (err) {

    console.log(err)

    res.status(500).json({
      message: "Server Error"
    })
  }
})

// LOGIN

router.post("/login", async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body

    // Find User

    const user = users.find(
      user => user.email === email
    )

    if (!user) {

      return res.status(400).json({
        message: "Invalid credentials"
      })
    }

    // Compare Password

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      )

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid credentials"
      })
    }

    // Generate JWT

    const token = jwt.sign(

      {
        id: user.id
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "1d"
      }
    )

    res.json({
      token
    })

  } catch (err) {

    console.log(err)

    res.status(500).json({
      message: "Server Error"
    })
  }
})

module.exports = router


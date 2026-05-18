const express = require("express")

const mongoose = require("mongoose")

const cors = require("cors")

const http = require("http")

const { Server } = require("socket.io")

require("dotenv").config()

const app = express()

/* HTTP SERVER */

const server =
  http.createServer(app)

/* SOCKET.IO */

const io = new Server(server, {

  cors: {
    origin: "*"
  }
})

/* MIDDLEWARE */

app.use(cors())

app.use(express.json())

/* DATABASE */

mongoose.connect(process.env.MONGO_URI)

.then(() => {

  console.log("MongoDB Connected")
})

.catch((err) => {

  console.log(err)
})

/* SOCKET CONNECTION */

io.on("connection", (socket) => {

  console.log(
    "User Connected:",
    socket.id
  )

  socket.on("disconnect", () => {

    console.log(
      "User Disconnected:",
      socket.id
    )
  })
})

/* MAKE IO GLOBAL */

app.set("io", io)

/* ROUTES */

const authRoutes =
  require("./routes/authRoutes")

const logRoutes =
  require("./routes/logRoutes")

app.use("/api/auth", authRoutes)

app.use("/api/logs", logRoutes)

/* SERVER */

const PORT =
  process.env.PORT || 5000

server.listen(PORT, () => {

  console.log(
    `Server running on ${PORT}`
  )
})


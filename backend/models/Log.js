const mongoose = require("mongoose")

const logSchema = new mongoose.Schema({

  type: String,

  payload: String,

  category: String,

  severity: String,

  timestamp: {

    type: Date,

    default: Date.now
  }
})

module.exports =
  mongoose.model("Log", logSchema)


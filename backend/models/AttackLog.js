const mongoose = require("mongoose")

const attackLogSchema = new mongoose.Schema({

  type: {
    type: String,
    required: true
  },

  payload: {
    type: String,
    required: true
  },

  severity: {
    type: String,
    default: "Low"
  },

  timestamp: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model(
  "AttackLog",
  attackLogSchema
)
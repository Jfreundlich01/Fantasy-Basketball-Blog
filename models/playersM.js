/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
const mongoose = require('./connection.js')

////////////////////////////////////////////////
// Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make Player Schema
const PlayerSchema = new Schema({
    name: String
  });

  // make models
const Player = model("Player", PlayerSchema)

module.exports = Player

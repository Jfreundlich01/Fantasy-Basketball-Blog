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
    name: String,
    nba: { 
      start: Number, 
      pro: Number, 
      name: String, 
      nickname: String},
    height: { 
      feets: String, 
      inches: String },
    weight: String,
    college: String,
    pos: String,
    jersey: Number

  });

  // make models
const Player = model("Player", PlayerSchema)

module.exports = Player

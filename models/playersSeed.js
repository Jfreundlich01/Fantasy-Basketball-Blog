/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
const mongoose = require('./connection.js')
const Player = require('./playersM.js')
const playerSeed = require('../seed.js')
///////////////////////////////////////////
// Seed Code
/////////////////////////////////////////

//get rid of duplicates
playerSeed.sort((a, b) => (a.name > b.name) ? 1 : -1)

let uniquePlayerName = []
let uniquePlayers = []

playerSeed.forEach(player =>{
  if(!uniquePlayerName.includes(player.name)){
    uniquePlayerName.push(player.name)
    uniquePlayers.push(player)
  }
})

// Save the connection in a variable
const db = mongoose.connection

//Make sure code is not run till on
db.on("open", () =>{

    // Delete all Players
    Player.deleteMany({}).then((data) => {
      // Seed Starter Players
      Player.create(uniquePlayers)
      .then((data) => {
       //log the new players to confirm their creation
       console.log(uniquePlayers)
       db.close();
      })
      .catch((error) => {
          console.log(error)
          db.close();
      });
    });
});
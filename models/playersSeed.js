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
// playerSeed.forEach(player =>{
//   if(!uniqPlayers.includes(player)){
//     uniqPlayers.push(player)
//   }
// })

// Save the connection in a variable
const db = mongoose.connection

//Make sure code is not run till on
db.on("open", () =>{

    // Delete all Players
    Player.deleteMany({}).then((data) => {
      // Seed Starter Players
      Player.create(playerSeed)
      .then((data) => {
       //log the new players to confirm their creation
       console.log(playerSeed)
       db.close();
      })
      .catch((error) => {
          console.log(error)
          db.close();
      });
    });
});
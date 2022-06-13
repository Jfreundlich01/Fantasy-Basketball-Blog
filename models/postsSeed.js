/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
const mongoose = require('./connection.js')
const Post = require('./postsM.js')

///////////////////////////////////////////
// Seed Code
/////////////////////////////////////////

//define connection

// Seed //
starterPosts = [
    {title:"Lebron James Outlook",name: "Lebron James", postOwner: "JFREUNDLICH", postBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",comments: []
    , player: [
        {
            id: 265,
            name: 'LeBron James',
            image:"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254",
            nba: { start: 2003, pro: 18, name: "Los Angeles Lakers", nickname: "LAL" },
            height: { feets: '6', inches: '6' },
            weight: '250',
            college: 'St. Vincent-St. Mary HS (OH)',
            pos: 'F',
            jersey: 6
          }
    ]
},
    {title:"Steph Curry Outlook", name: "Steph Curry" ,image: "images/headshots/StephCurry.png", postOwner: "JFREUNDLICH",postBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et pharetra. Non sodales neque sodales ut etiam. Viverra nam libero justo laoreet sit amet cursus. Dolor magna eget est lorem ipsum dolor. Sed augue lacus viverra vitae congue eu. Habitant morbi tristique senectus et netus et malesuada fames.", comments: [], player: [
        {
            id: 124,
            name: 'Stephen Curry',
            image:"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254",
            nba: { start: 2009, pro: 12, name: "Golden State Warriors", nickname: "GSW" },
            height: { feets: '6', inches: '6' },
            weight: '185',
            college: 'Davidson',
            pos: 'G',
            jersey: 30
          }
    ]
},
    {title:"Ja Morant Outlook",name: "Ja Morant", image: "images/headshots/JaMorant.png", postOwner: "BigSkipnDemon",postBody: "In metus vulputate eu scelerisque felis imperdiet. Ornare lectus sit amet est placerat in egestas erat imperdiet. Scelerisque fermentum dui faucibus in. Risus viverra adipiscing at in tellus integer. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Nam at lectus urna duis convallis. Nisl nunc mi ipsum faucibus vitae. Dictumst vestibulum rhoncus est pellentesque elit.", comments: [],player: [{
        id: 1881,
        name: 'Ja Morant',
        image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4279888.png&w=350&h=254",
        nba: { start: 2019, pro: 2, name: "Memphis Grizzlies", nickname: "MEM" },
        height: { feets: '6', inches: '6' },
        weight: '174',
        college: 'Murray State',
        pos: 'G',
        jersey: 12
      }]},
    {title:"James Harden Outlook",name: "James Harden", image: "images/headshots/JamesHarden.png", postOwner: "SaquanBarkely01",postBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut. Nec feugiat nisl pretium fusce id velit. Gravida arcu ac tortor dignissim convallis. Ac auctor augue mauris augue. Integer enim neque volutpat ac tincidunt vitae. Enim blandit volutpat maecenas volutpat blandit aliquam etiam.", comments: [], player: [{
        id: 216,
        name: 'James Harden',
        image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png&w=350&h=254",
        nba: { start: 2009, pro: 12, name: "Philadelphia 76ers", nickname: "PHI" },
        height: { feets: '6', inches: '6' },
        weight: '220',
        college: 'Arizona State',
        pos: 'G',
        jersey: 1
    }]
}
]

// Save the connection in a variable
const db = mongoose.connection

//Make sure code is not run till on
db.on("open", () =>{

    // Delete all Players
    Post.deleteMany({}).then((data) => {
      // Seed Starter Players
      Post.create(starterPosts)
      .then((data) => {
       //log the new players to confirm their creation
       console.log(starterPosts)
       db.close();
      })
      .catch((error) => {
          console.log(error)
          db.close();
      });
    });
});

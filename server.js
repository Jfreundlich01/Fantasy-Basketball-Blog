/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");
const players = require("./seed.js");
const { stringify } = require("querystring");

/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG);

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

////////////////////////////////////////////////
// Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make Player Schema
const PlayerSchema = new Schema({
  firstName: String,
  lastName: String,
});

//makle Posts Schema
const PostSchema = new Schema({
    firstName: String,
    lastNAme: String,
    PostOwner: String,
    Comments: Array,
}, {
    timestamps: true
})

// make models
const Player = model("Player", PlayerSchema)
const Post = model("Post", PostSchema);

/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = require("liquid-express-views")(express(), {root: [path.resolve(__dirname, 'views/')]})


/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

app.get("/", (req, res) => {
    res.send("you ran your route.");
  });

// Players Seed
app.get("/players/seed", (req, res) => {
    
    // Delete all Players
    Player.deleteMany({}).then((data) => {
      // Seed Starter Players
      Player.create(players).then((data) => {
        // send created players as response to confirm creation
        res.json(data);
      });
    });
  });

//Post Seed
starterPosts = [
    {firstName: "Lebron", lastName: "James", PostOwner: "JFREUNDLICH", Comments: []},
    {firstName: "Steph", lastNAme: "Curry", PostOwner: "JFREUNDLICH", Comments: []},
    {firstName: "Ja", lastNAme: "Morant", PostOwner: "BigSkipnDemon", Comments: []},
    {firstName: "James", lastNAme: "Harden", PostOwner: "SaquanBarkely01", Comments: []}
]

app.get("/posts/seed", (req, res) => {
    
    // Delete all Posts
    Post.deleteMany({}).then((data) => {
      // Seed Starter Posts
      Post.create(starterPosts).then((data) => {
        // send created posts as response to confirm creation
        res.json(data);
      });
    });
  });
 
 // new route
app.get("/new", (req, res) => {
    res.render("new");
  });
   
//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));

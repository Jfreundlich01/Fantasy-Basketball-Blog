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
    lastName: String,
    postOwner: String,
    postBody: String,
    comments: Array,
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
    {firstName: "Lebron", lastName: "James", postOwner: "JFREUNDLICH", postBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",comments: []},
    {firstName: "Steph", lastName: "Curry", postOwner: "JFREUNDLICH",postBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et pharetra. Non sodales neque sodales ut etiam. Viverra nam libero justo laoreet sit amet cursus. Dolor magna eget est lorem ipsum dolor. Sed augue lacus viverra vitae congue eu. Habitant morbi tristique senectus et netus et malesuada fames.", comments: []},
    {firstName: "Ja", lastName: "Morant", postOwner: "BigSkipnDemon",postBody: "In metus vulputate eu scelerisque felis imperdiet. Ornare lectus sit amet est placerat in egestas erat imperdiet. Scelerisque fermentum dui faucibus in. Risus viverra adipiscing at in tellus integer. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Nam at lectus urna duis convallis. Nisl nunc mi ipsum faucibus vitae. Dictumst vestibulum rhoncus est pellentesque elit.", comments: []},
    {firstName: "James", lastName: "Harden", postOwner: "SaquanBarkely01",postBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut. Nec feugiat nisl pretium fusce id velit. Gravida arcu ac tortor dignissim convallis. Ac auctor augue mauris augue. Integer enim neque volutpat ac tincidunt vitae. Enim blandit volutpat maecenas volutpat blandit aliquam etiam.", comments: []}
]

app.get("/posts/seed", (req, res) => {
    
    // Delete all Posts
    Post.deleteMany({}).then((data) => {
      // Seed Starter Posts
      Post.create(starterPosts).then((data) => {
          console.log(data)
        // send created posts as response to confirm creation
        res.json(data);
      });
    });
  });

//Index
// index route
app.get("/index", (req, res) => {
    // find all the posts
    Post.find({})
      // render a template after they are found
      .then((posts) => {
        res.render("index", {posts});
      })
      // send error as json if they aren't
      .catch((error) => {
        res.json({ error });
      });
  });

//Show
app.get("/index/:id", (req,res) => {
    let id = req.params.id
    //find the post
    Post.findById(id)
        .then((posts) => {
            console.log(posts)
            res.render("show", {posts});
        })
        .catch((error) =>{
            res.json({error})
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

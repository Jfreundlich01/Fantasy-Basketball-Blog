/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
const express = require("express")
const Post = require("../models/postsM.js")
const Player = require("../models/playersM.js")

////////////////////////////////////////////
// Create Route
///////////////////////////////////////////
const router = express.Router()


////////////////////////////////////////////
// Routes
////////////////////////////////////////////

router.get("/", (req, res) => {
    res.send("you ran your route.");
  });

//// Players Seed ////////
router.get("/players/seed", (req, res) => {
    
    // Delete all Players
    Player.deleteMany({}).then((data) => {
      // Seed Starter Players
      Player.create(players).then((data) => {
        // send created players as response to confirm creation
        res.json(data);
      });
    });
  });

// Post Seed ///////
starterPosts = [
    {title:"Lebron James Outlook",name: "Lebron James" , postOwner: "JFREUNDLICH", postBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",comments: []},
    {title:"Steph Curry Outlook", name: "Steph Curry" , postOwner: "JFREUNDLICH",postBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et pharetra. Non sodales neque sodales ut etiam. Viverra nam libero justo laoreet sit amet cursus. Dolor magna eget est lorem ipsum dolor. Sed augue lacus viverra vitae congue eu. Habitant morbi tristique senectus et netus et malesuada fames.", comments: []},
    {title:"Ja Morant Outlook",name: "Ja Morant", postOwner: "BigSkipnDemon",postBody: "In metus vulputate eu scelerisque felis imperdiet. Ornare lectus sit amet est placerat in egestas erat imperdiet. Scelerisque fermentum dui faucibus in. Risus viverra adipiscing at in tellus integer. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Nam at lectus urna duis convallis. Nisl nunc mi ipsum faucibus vitae. Dictumst vestibulum rhoncus est pellentesque elit.", comments: []},
    {title:"James Harden Outlook",name: "James Harden", postOwner: "SaquanBarkely01",postBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut. Nec feugiat nisl pretium fusce id velit. Gravida arcu ac tortor dignissim convallis. Ac auctor augue mauris augue. Integer enim neque volutpat ac tincidunt vitae. Enim blandit volutpat maecenas volutpat blandit aliquam etiam.", comments: []}
]

router.get("/posts/seed", (req, res) => {
    
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

////// index route ///////////
router.get("/index", (req, res) => {
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

//////    Show /////////////
router.get("/index/:id", (req,res) => {
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
  

 ///// new route /////////////
router.get("/new", (req, res) => {
    Player.find({})
    .then((players) => {
      //console.log(players)
      res.render("new", {players});
    })
  });

router.post("/index", (req,res) =>{
    let newPost = {
      title: `${req.body.name} Outlook`,
      name: req.body.name,
      postBody: req.body.postBody
    }
    Post.create(newPost).then((data) => {
      console.log(data)
    // send created posts as response to confirm creation
    res.redirect("/index");
  });
})

///// Edit ///////

router.get("/index/:id/edit" ,(req,res) =>{
  let id = req.params.id
  Post.findById(id)
  .then((post) => {
    
    res.render("edit", {post})
  })
})

//update route
router.put("/index/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // update the post
  Post.findByIdAndUpdate(id, req.body, { new: true })
    .then((post) => {
      // redirect to show page after updating
      res.redirect(`/index/${id}`);
    })
    // send error as json
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

//Delete
router.delete("/index/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // delete the post
  Post.findByIdAndRemove(id)
    .then((post) => {
      // redirect to main page after deleting
      res.redirect("/index");
    })
    // send error as json
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

//////////////////////////////////
// Export router
//////////////////////////////////
module.exports = router


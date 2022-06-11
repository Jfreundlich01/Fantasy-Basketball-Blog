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


////// index route ///////////
router.get("/index", (req, res) => {
    // find all the posts
    Post.find({})
      // render a template after they are found
      .then((posts) => {
        res.render("blog/index", {posts});
      })
      // send error as json if they aren't
      .catch((error) => {
        res.json({ error });
      });
  });

////// Show /////////////
router.get("/index/:id", (req,res) => {
    let id = req.params.id
    //find the post
    Post.findById(id)
        .then((post) => {
          res.render("blog/show", {post});
          console.log(post)
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
      res.render("blog/new", {players});
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
    
    res.render("blog/edit", {post})
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


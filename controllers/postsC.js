/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
const express = require("express")
const Post = require("../models/postsM.js")
const Player = require("../models/playersM.js");
const Comment = require("../models/commentsM.js")
////////////////////////////////////////////
// Create Route
///////////////////////////////////////////
const router = express.Router()

/////////////////////////////////////////
// Router Middlewar
///////////////////////////////////////
router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/");
  }
});
////////////////////////////////////////////
// Routes
////////////////////////////////////////////

////// index route ///////////
router.get("/", (req, res) => {
  let username = req.session.username
    // find all the posts
    Post.find({})
      // render a template after they are found
      .then((posts) => {
        res.render("blog/index", {posts,username});
      })
      // send error as json if they aren't
      .catch((error) => {
        res.json({ error });
      });
  });

  
  
  ///// new  /////////////
  router.get("/new", (req, res) => {
    Player.find({})
    .then((players) => {
      //console.log(players)
      res.render("blog/new", {players});
    })
  });
  
//////// Show ////////////////////
  router.get("/:id", (req,res) => {
      let username = req.session.username
      let id = req.params.id
      console.log(id)
      //find the post
      Post.findById(id)
       .populate('comments').exec(function(err, post) {
        res.render('blog/show', {post,username});
      });
          // .then((post) => {
          //   res.render("blog/show", {post,username});
          //   //console.log(post)
          // })
          // .catch((error) =>{
          //     res.json({error})
          // });
  });
  //Create new Post route
  router.post("/", (req,res) =>{
    let newPost = {
      title: `${req.body.name} Outlook`,
      name: req.body.name,
      postBody: req.body.postBody,
      postOwner: req.session.username
    }
    Post.create(newPost).then((data) => {
      //console.log(data)
    // send created posts as response to confirm creation
    res.redirect("/home");
  });
})

//new comment
router.post("/:id/comments", (req,res) =>{
  let id = req.params.id
  let newComment = {
    commentId: id,
    commentOwner: req.session.username,
    commentBody: req.body.commentBody,
    likes: 0,
    replies: []
    }
  //console.log(req.body)
  // Post.findById(id, function(err, post) {
  //   // We can push subdocs into Mongoose arrays
  //   post.comments.push(newComment);
  //   // Save any changes made to the movie doc
  //   post.save(function(err) {
  //     // Step 5:  Respond to the Request (redirect if data has been changed)
  //     res.redirect(`/home/${id}`);
  //   });
  // });
  Comment.create(newComment)
  .then((data) =>{
    //console.log(data)
    console.log(newComment)
    res.redirect(`/home/${id}`)
  })
  .catch((error) =>{
    res.json({error})
  });
})

///// Edit ///////

router.get("/:id/edit" ,(req,res) =>{
  let id = req.params.id
  Post.findById(id)
  .then((post) => {
    
    res.render("blog/edit", {post})
  })
})

//update route
router.put("/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // update the post
  Post.findByIdAndUpdate(id, req.body, { new: true })
    .then((post) => {
      // redirect to show page after updating
      res.redirect(`/home/${id}`);
    })
    // send error as json
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

//Delete
router.delete("/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // delete the post
  Post.findByIdAndRemove(id)
    .then((post) => {
      // redirect to main page after deleting
      res.redirect("/home");
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


/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
const express = require("express")
const Post = require("../models/postsM.js")
const Player = require("../models/playersM.js");
const Comment = require("../models/commentsM.js");
const User = require("../models/userM.js");
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

//user Profile

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

router.get("/search/:playername", (req,res) =>{
  let username = req.session.username
  playername = req.params.playername
  //console.log(playername)
  Post.findOne({name: new RegExp(playername, 'i')})
  .then((post) =>{
    if (!post) {
      res.send("no player found")
    } else {
      //console.log(post)
      res.render("blog/search", {post,username})
    }
  })
  .catch((error) => {
    res.json({error})
  })
})

router.post("/search/player", (req,res) =>{
  playername = req.body.name
  //console.log(playername)
  res.redirect(`/home/search/${playername}`)
})

router.get("/profile", (req,res) => {
  let username = req.session.username
  res.render("blog/profile", {username})
})



///// new  /////////////
router.get("/new", (req, res) => {
  let username = req.session.username
  Player.find({})
  .then((players) => {
    //console.log(players)
    res.render("blog/new", {players,username});
  })
});

////user
router.get("/user/:user", (req,res) =>{
  let username = req.session.username
  let user = req.params.user
  User.find({username: user})
    .populate('posts')
    .populate('comments')
    .exec(function(err, user){
      console.log(user)
      res.render('blog/profile', {user, username});
    })
})
//////// Show ////////////////////
router.get("/:id", (req,res) => {
      let username = req.session.username
      let id = req.params.id
      //console.log(id)
      //console.log(req.body.comments)
      //find the post
      Post.findById(id)
        .populate('comments')
        .exec(function(err, post) {
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
    let username = req.session.username
    let newPost = {
      title: `${req.body.name} Outlook`,
      name: req.body.name,
      postBody: req.body.postBody,
      postOwner: req.session.username
    }
    //console.log(newPost.player)
    // console.log(playerId)
    //console.log(req.body)
    Post.create(newPost)
    .then((data) => {
      Player.findOne({name: req.body.name})
        .then((newplayer) =>{
          data.player.push(newplayer)
          data.save()
          console.log(data)
         })
      User.findOneAndUpdate({username:username}, {$push: {posts: data}})
        .then((user) =>{
           console.log(user)
         })
    // send created posts as response to confirm creation
    res.redirect("/home");
  });
})
//new comment
router.post("/:id/comments", (req,res) =>{
  let username = req.session.username
  let id = req.params.id
  let newComment = {
    commentId: id,
    commentOwner: {
      username : req.session.username,
      propic : ""
    },
    commentBody: req.body.commentBody,
    likes: 0,
    replies: []
  }
  //console.log(req.body)
  Comment.create(newComment)
  .then((comment) =>{
        //console.log(data)
        User.findOne({username: username})
        .then((user) =>{
          comment.commentOwner.propic = user.image
          comment.save()
          console.log(comment)
         })
        Post.findByIdAndUpdate(id, {$push: {comments: comment}})
        .then((post) =>{
          console.log(post)
        })
        User.findOneAndUpdate({username:username}, {$push: {comments: comment}})
        .then((user) =>{
          console.log(user)
        })
        //console.log(newComment)
    res.redirect(`/home/${id}`)
  })
  .catch((error) =>{
    res.json({error})
  });
})

///// Like Comment /////////
// router.get("/:postid/:commentid/like", (req,res) => {
//   const postid = req.params.postid
//   const commentid = req.params.commentid
//   const post = Post.findById({postid})
//     .then ((post) => {
//       post.comments.forEach( comment =>{
//         console.log(comment)
//       })
//     }
//     )
// })
///// Edit ///////

router.get("/:id/edit" ,(req,res) =>{
  let username = req.session.username
  let id = req.params.id
  Post.findById(id)
  .then((post) => {
    
    res.render("blog/edit", {post, username})
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

//Delete Post
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


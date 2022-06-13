/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
const mongoose = require('./connection.js')
const Comment = require('./commentsM.js')


////////////////////////////////////////////////
// Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// Player Schema
const PlayerSchema = new Schema({
    name: String,
    image: String,
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


//makle Posts Schema
const PostSchema = new Schema({
    title: String,
    name: String,
    image: String,
    player: [PlayerSchema],
    postBody: String,
    postOwner: String,
    comments: [
        { type: Schema.Types.ObjectId, ref: 'Comment' }
    ],
}, {
    timestamps: true
})


const Post = model("Post", PostSchema);

module.exports = Post
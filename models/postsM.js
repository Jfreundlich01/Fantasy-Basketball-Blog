/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
const mongoose = require('./connection.js')
const Comment = require('./commentsM.js')
const Player = require('./playersM.js')

////////////////////////////////////////////////
// Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

//makle Posts Schema
const PostSchema = new Schema({
    title: String,
    name: String,
    image: String,
    postOwner: String,
    postBody: String,
    player: [
        { type: Schema.Types.ObjectId, ref: 'Player' }
    ],
    comments: [
        { type: Schema.Types.ObjectId, ref: 'Comment' }
    ],
}, {
    timestamps: true
})

const Post = model("Post", PostSchema);

module.exports = Post
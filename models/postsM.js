/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
const mongoose = require('./connection.js')

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
    comments: Array,
}, {
    timestamps: true
})

const Post = model("Post", PostSchema);

module.exports = Post
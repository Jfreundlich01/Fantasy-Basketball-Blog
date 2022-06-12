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
const CommentSchema = new Schema({
    commentId: String,
    commentOwner: String,
    commentBody: String,
    likes: {
        type: Number,
        default: 0
    },
    replies: Array
}, {
    timestamps: true
})

const Comment = model("Comment", CommentSchema);

module.exports = Comment
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
    commentOwner: {
      username : String,
      propic : String
    },
    commentBody: String,
    likes: {
        type: Number,
        default: 0
    },
    replies: [
        {type: Schema.Types.ObjectId, ref: 'Reply'}
      ]
}, {
    timestamps: true
})

const Comment = model("Comment", CommentSchema);

module.exports = Comment
/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
const mongoose = require('./connection.js')

////////////////////////////////////////////////
// Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;


const ReplySchema = new Schema({
    replyOwner:{
        username: String,
        propic:String
    },
    replyBody: String
})


const Reply = model("Reply", ReplySchema);

module.exports = Reply
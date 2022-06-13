//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection");

////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make user schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image:{
    type: String,
    default: "/images/defaultProPic.png"
  },
  posts: [
    { type: Schema.Types.ObjectId, ref: 'Post' }
  ],
  Comments: [
    { type: Schema.Types.ObjectId, ref: 'Comment' }
],
});

// make user model
const User = model("User", userSchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = User;

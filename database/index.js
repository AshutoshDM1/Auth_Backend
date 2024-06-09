const mongoose = require("mongoose");
// Connect to MongoDB
const mongoUrl1 = "mongodb+srv://downlodemaster1:lrlDeC7NwtO90krV@cluster0.faah1ls.mongodb.net/auth_bacnkend?retryWrites=true&w=majority&appName=Cluster0"
const mongoUrl2 = "mongodb+srv://downlodemaster2:eAGmRemCcdSQB6LO@cluster0.1d21wvg.mongodb.net/auth_bacnkend"

mongoose.connect(mongoUrl1);

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String },
});

const PostsSchema = new mongoose.Schema({
  username: {
    type: String, required: true 
  },
  message : {
    type    : String, required: true
  }
});


const User = mongoose.model("User", UserSchema);
const Post = mongoose.model("Post", PostsSchema);
module.exports = {User , Post};

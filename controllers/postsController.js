const { Post } = require("../database/index.js");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createPost = async (req, res) => {
  const { username, title, message } = req.body;
  try {
    const post = await Post.create({ username, title, message });
    console.log(post);
    res.status(200).json({
      message: "post created successfully",
      post,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteAllPosts = async (req, res) => {
  try {
    await Post.deleteMany();
    res.status(200).json({ message: "All posts deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPostById = async (req, res) => {
  let { id } = req.params;
  try {
    const post = await Post.findById({ _id: id });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updatePost = async (req, res) => {
  let { id } = req.params;
  let { message , title } = req.body;
  try {
    const post = await Post.findByIdAndUpdate(
      id,
      {
        $set: {
          message: message,
          title: title,
        },
      },
      { runValidators: true, new: true }
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deletePostById = async (req, res) => {
  let { id } = req.params;
  try {
    const post = await Post.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "post deleted successfully"});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getPosts,
  createPost,
  deleteAllPosts,
  getPostById,
  updatePost,
  deletePostById
};

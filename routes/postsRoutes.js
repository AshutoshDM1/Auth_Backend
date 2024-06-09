const { Router } = require("express");
const userValidate = require("../middleware/userValidate.js");
const {PostSchema} = require("../schemas/zodSchema.js");
const zodValidate = require("../middleware/zodValidate.js");
const router = Router();

const {
  createPost,
  getPosts,
  deleteAllPosts ,
  getPostById,
  updatePost,
  deletePostById,
} = require("../controllers/postsController.js");

router.get("/post", userValidate , getPosts);

router.post("/post", userValidate , createPost);

router.delete("/deleteAllPosts", userValidate , deleteAllPosts);

router.get("/post/:id", userValidate , getPostById);

router.put("/post/:id", userValidate , updatePost);

router.delete("/post/:id", userValidate , deletePostById);

module.exports = router;

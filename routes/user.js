const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const {User} = require("../db/index.js");
const router = Router();
const {jwtSecret} = require("../config");
const jwt = require("jsonwebtoken");

router.get("/check", async (req, res) => {
  res.status(200).json({message : "Hi welcome"})
});

router.post("/signup", async (req, res) => {
  try {
      const { username, email, password, gender } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }
    await User.create({
      username: username,
      email: email,
      password: password,
      gender: gender,
    });
    return res.status(200).json({ message: "User SignUp Successful" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});


router.post("/login", async (req, res) => {
  try {
      const { username , password } = req.body;

    const existingUser = await User.findOne({ username,password });
    if (existingUser) {
      const token = jwt.sign({
          username
      }, jwtSecret);

      res.json({
          token
      })
  } else {
      res.status(411).json({
          message: "Incorrect email and pass"
      })
  }

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.get("/console", userMiddleware,  async (req,res)=> {
  res.json({massage: "Hello World"})
})

module.exports = router;

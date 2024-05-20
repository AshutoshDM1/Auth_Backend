const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const {User} = require("../db/index.js");
const router = Router();

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

module.exports = router;

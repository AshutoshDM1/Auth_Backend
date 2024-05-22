const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { registerSchema } = require('../schemas/zodSchema');
const validate = require('../middleware/zodValidate.js');
const router = Router();

const { check, signup , login, console } = require("../controllers/userController");

router.get("/check", check);

router.post("/signup", validate(registerSchema), signup);

router.post("/login", login);

router.get("/console", userMiddleware, console);

module.exports = router;

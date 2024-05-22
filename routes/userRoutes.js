const { Router } = require("express");
const userValidate = require("../middleware/userValidate.js");
const { registerSchema, deleteUserSchema } = require('../schemas/zodSchema.js');
const zodValidate = require('../middleware/zodValidate.js');
const router = Router();

const { users, signup , login, signout } = require("../controllers/userController.js");

router.get("/users", userValidate , users);

router.post("/signup", zodValidate(registerSchema), signup);

router.post("/signout", zodValidate(deleteUserSchema), signout);

router.post("/login", login);

module.exports = router;

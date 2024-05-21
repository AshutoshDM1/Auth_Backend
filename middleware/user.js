const jwt = require("jsonwebtoken");
const {jwtSecret} = require("../config");

function userMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
      return res.status(403).json({ msg: "Authorization header missing" });
  }

  const words = authHeader.split(" ");
  if (words.length !== 2 || words[0] !== 'Bearer') {
      return res.status(403).json({ msg: "Invalid authorization format" });
  }

  const jwtToken = words[1];

  try {
      const decodedValue = jwt.verify(jwtToken, jwtSecret);
      if (decodedValue.username) {
          req.username = decodedValue.username;
          next();
      } else {
          res.status(403).json({ msg: "You are not authenticated" });
      }
  } catch (error) {
      res.status(403).json({ msg: "Invalid token" });
  }
}

module.exports = userMiddleware;
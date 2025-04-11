const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const validateToken = asyncHandler(async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    res.status(401);
    throw new Error("User is not authorized, no token provided");
  }
  // Bearer token
  if (token.startsWith("Bearer")) {
    token = token.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized, invalid token");
      }
      req.user = decoded.user;
      next();
    });
  } else {
    res.status(401);
    throw new Error("User is not authorized, no token provided");
  }
});

module.exports = validateToken;

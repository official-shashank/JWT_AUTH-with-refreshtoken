const jwt = require("jsonwebtoken");
const {
  jwtSecret,
  refreshTokenSecret,
  tokenExpiry,
  refreshTokenExpiry,
} = require("../config/config");

exports.generateAccessToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, jwtSecret, {
    expiresIn: tokenExpiry,
  });
};

exports.generateRefreshToken = (user) => {
  try {
    return jwt.sign(
      { id: user.id, username: user.username },
      refreshTokenSecret,
      { expiresIn: refreshTokenExpiry }
    );
  } catch (error) {
    console.error("Error generating refresh token:", error);
    return null; // or handle the error appropriately
  }
};

const jwt = require("jsonwebtoken");

const genarateRefreshToken = (user) => {
  jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1d" })
}

module.exports = { genarateRefreshToken } 
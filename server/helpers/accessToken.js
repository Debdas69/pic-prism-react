const jwt = require("jsonwebtoken");

const genarateAccessToken = (user)=>{
      jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"})
}

module.exports = {genarateAccessToken} 
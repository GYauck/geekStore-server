const jwt = require("jsonwebtoken");
const config = require("./secret")

const SECRET = config.SECRET


const generateToken = (payload) => {
  const token = jwt.sign({ user: payload }, SECRET, { expiresIn: "1d" });
  return token;
};

const validateToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, validateToken };
const { User } = require("../models");
const { generateToken } = require("../config/tokens");

//register
exports.register = (req, res) => {
  const userData = req.body;
  User.findOne({ where: { email: req.body.email } }).then((user) => {
    if (!user) User.create(userData).then(() => res.sendStatus(201));
    else {
      res.send({ message: "User already created" });
    }
  });
};

//login
exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        lastname: user.lastname,
        admin: user.admin,
      };
      const token = generateToken(payload);

      res.status(201).json({
        error: false,
        message: "login successfully",
        user: { ...payload, token },
      });
    });
  });
};

//validation
exports.validation = (req, res) => {
  res.send(req.user);
};

//logout
exports.logout = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

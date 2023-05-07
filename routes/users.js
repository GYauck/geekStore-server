const express = require("express");
const router = express.Router();
const { validateAuth } = require("../middleware/auth");

const { register, login, logout, validation } = require("../controllers/authController");
const { users, deleteUser, toggleAdmin} = require("../controllers/usersController")

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/me", validateAuth, validation);



router.get("/", users)

router.delete("/deleteUser/:id", deleteUser)

router.put("/toggleAdmin/:id", toggleAdmin)

module.exports = router;

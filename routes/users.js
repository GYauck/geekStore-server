const express = require("express");
const router = express.Router();
const { validateAuth } = require("../middleware/auth");

const { register, login, logout, validation } = require("../controllers/authController");
const { users, deleteUser, toggleAdmin} = require("../controllers/usersController")

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/me", validateAuth, validation);



router.get("/",validateAuth, users)

router.delete("/deleteUser/:id", validateAuth, deleteUser)

router.put("/toggleAdmin/:id",validateAuth, toggleAdmin)

module.exports = router;

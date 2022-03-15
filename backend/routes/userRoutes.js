const express = require("express");
const { registerUser,loginUser } = require("../controller/userController");
const router = express.Router();

//register
router.route('/').post(registerUser)
//for login
router.route('/login').post(loginUser)

module.exports =router;


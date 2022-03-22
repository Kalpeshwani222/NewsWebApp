const express = require("express");
// const { registerUser,loginUser } = require("../controller/userController");
const {shareNews} = require ("../controller/shareNewsController");
const {protect} = require("../middleware/authMiddleware");
const router = express.Router();


router.route('/shareNews').post(protect,shareNews)

module.exports =router;
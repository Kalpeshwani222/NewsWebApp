const express = require("express");
const { sendOtp,changePass } = require("../controller/resetPasswordController");
const router = express.Router();

router.route('/send-otp').post(sendOtp);
router.route('/change-password').post(changePass);


module.exports =router;
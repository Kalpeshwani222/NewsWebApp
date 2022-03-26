const asyncHandler = require("express-async-handler");
const User = require("../model/user");
const Otp = require("../model/otp");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
);

const sendOtp = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const response = {};

  const data = await User.findOne({ email });
  

  if (data) {
    const otpcode = Math.floor(Math.random() * 10000 + 1);

    const otpData = new Otp({
      email: req.body.email,
      code: otpcode,
      expireIn: new Date().getTime() + 300 * 1000,
    });
    const otpResponse = await otpData.save();
    //email send code

    transporter.sendMail({
      to: req.body.email,
      from: "noreply.newsapplication@gmail.com",
      subject: "Password reset",
      html: `<div
      style="
        margin: 1rem;
        padding: 1rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      "
    >
      <h2 style="margin: 0; text-align: left">
        <span style="font-size: 18px"
          >Hello <strong style="color: darkblue">${data.name}</strong>,</span
        >
      </h2>

      <div>
        <p style="margin: 1rem; font-size: 15px">
        You requested a new Password for your News Portal Account associated
        with ${req.body.email}.<br />
        No changes have been made to your account yet. <br />
        You can reset your password just by verifying the OTP. <br />

        Your OTP  - <b>${otpcode}</b><br />
        If did not requested a new Password please let us know.

        </p>
      </div>

      

     
    </div>`,
    });

    // res.status(200).json("OTP send success");
    response.message = "OTP send success";
    response.statusText = "Success";
  } else {
    // res.status(400).json("Email id Not Exists");
    response.message = "Email id Not Exists";
    response.statusText = "error";
  }
  res.status(200).json(response);
});

const changePass = asyncHandler(async (req, res) => {
  const { email, code, password } = req.body;
  const data = await Otp.findOne({ email, code });
  const response = {};

  if (data) {
    const currentTime = new Date().getTime();
    const diff = data.expireIn - currentTime;
    if (diff < 0) {
      // res.json({message:"Token Expires"});
      response.message = "Token Expires";
      response.statusText = "Error";
    } else {
      const user = await User.findOne({ email });
      user.password = req.body.password;
      user.save();
      // res.json({message:"Password Change successfully"});
      response.message = "Password Change successfully";
      response.statusText = "Success";
    }
  } else {
    // res.json({message:"Invalid OTP"});

    response.message = "Invalid OTP";
    response.statusText = "Error";
  }
  res.status(200).json(response);
});

module.exports = { sendOtp, changePass };

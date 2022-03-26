require("dotenv").config();
const asyncHandler = require("express-async-handler");
const User = require("../model/user");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
);

const shareNews = asyncHandler(async (req, res) => {
  const { email, newsUrl, fromemail } = req.body;

   const currentuser = await User.findOne({ fromemail });

console.log(currentuser.name)

  if (!email || !newsUrl) {
    res.status(400).json("all the fields are required");
  }

  if (email || newsUrl) {
    try {
      transporter.sendMail({
        to: req.body.email,
        from: "noreply.newsapplication@gmail.com",
        subject: "News Share",
        html: ` <div
      style="
        margin: 1rem;
        padding: 1rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      "
    >
      <h3 style="margin: 0; text-align: left">
        <span style="font-size: 18px"
          >Hey <strong style="color: darkblue">${email}</strong>,</span
        >
      </h3>

      <div>
        <p style="margin: 1rem; font-size: 15px">
        you have been shared the news by <strong>${currentuser.name}</strong> <br />
         <h3>News URL :  - <a href=${req.body.newsUrl}>link</a></h3>
        Hope you like it!

        </p>
      </div>

      

     
    </div>`,
      });
      res.status(200).json("Share News Successfully");
      
    } catch (error) {
      res.status(400);
      throw new Error("error Occured");
    }
  } else {
    res.status(400);
    throw new Error("error Occured");
  }
});

module.exports = { shareNews };

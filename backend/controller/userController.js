require("dotenv").config();
const asyncHandler = require("express-async-handler");
const User = require("../model/user");
const generateToken = require("../util/generateToken");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
);

//register

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    name,
    email,
    
    password,
  });

  if (user) {

    transporter.sendMail({
      to: user.email,
      from: "noreply.newsapplication@gmail.com",
      subject: "Welcome to NewsApplication",
      html:`<div
      style="
        margin: 1rem;
        padding: 1rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      "
    >
      <h2 style="margin: 0; text-align: left">
        <span style="font-size: 18px"
          >Welcome <strong style="color: red">${name}</strong>,</span
        >
      </h2>

      <div>
        <p style="margin: 1rem; font-size: 18px">
          Thank you for signing up to become a member of our Online News Portal.
          Online news Portal helps you keeping the world closer to you.<br />

          You can Read the trending news in a short words. You can use our
          features like saving the news to your account by saving the news you
          can read it whenever you want, you can also share the news to your
          friend.
        </p>
      </div>

      <div>
        <h3>Features</h3>
        <div style="font-family: sans-serif">
          <div
            style="
              font-size: 12px;
              font-family: Open Sans, Helvetica Neue, Helvetica, Arial,
                sans-serif;
              mso-line-height-alt: 21.6px;
              color: #555555;
              line-height: 1.8;
            "
          >
            <ul
              style="
                font-size: 14px;
                line-height: 1.8;
                mso-line-height-alt: 21.6px;
              "
            >
              <li>
                <span style="font-size: 16px"
                  >You can <strong>save</strong> your
                  <strong>favorite news</strong>.</span
                >
              </li>
              <li>
                <span style="font-size: 16px"
                  ><strong>Sharing</strong> the <strong>news</strong> via email
                  to friend.</span
                >
              </li>
              <li>
                <span style="font-size: 16px"
                  >You can read the todays trending news in almost
                  <strong>70-80 words</strong>.</span
                >
              </li>
              <li>
                <span style="font-size: 16px"
                  >You can <strong>filter</strong> the news as per your
                  choice</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Thank You</h3>
    </div>`,
    })


    // // transporter.sendMail({
    // //   to: user.email,
    // //   from: "noreply.newsapplication@gmail.com",
    // //   subject: "Welcome to NewsApplication",
    // //   html: `<div
    // //   style="
    // //     margin: 1rem;
    // //     padding: 1rem;
    // //     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    // //   "
    // // >
    // //   <h2 style="margin: 0; text-align: left">
    // //     <span style="font-size: 18px"
    // //       >Welcome <strong style="color: red">${name}</strong>,</span
    // //     >
    // //   </h2>

    // //   <div>
    // //     <p style="margin: 1rem; font-size: 18px">
    // //       Thank you for signing up to become a member of our Online News Portal.
    // //       Online news Portal helps you keeping the world closer to you.<br />

    // //       You can Read the trending news in a short words. You can use our
    // //       features like saving the news to your account by saving the news you
    // //       can read it whenever you want, you can also share the news to your
    // //       friend.
    // //     </p>
    // //   </div>

    // //   <div>
    // //     <h3>Features</h3>
    // //     <div style="font-family: sans-serif">
    // //       <div
    // //         style="
    // //           font-size: 12px;
    // //           font-family: Open Sans, Helvetica Neue, Helvetica, Arial,
    // //             sans-serif;
    // //           mso-line-height-alt: 21.6px;
    // //           color: #555555;
    // //           line-height: 1.8;
    // //         "
    // //       >
    // //         <ul
    // //           style="
    // //             font-size: 14px;
    // //             line-height: 1.8;
    // //             mso-line-height-alt: 21.6px;
    // //           "
    // //         >
    // //           <li>
    // //             <span style="font-size: 16px"
    // //               >You can <strong>save</strong> your
    // //               <strong>favorite news</strong>.</span
    // //             >
    // //           </li>
    // //           <li>
    // //             <span style="font-size: 16px"
    // //               ><strong>Sharing</strong> the <strong>news</strong> via email
    // //               to friend.</span
    // //             >
    // //           </li>
    // //           <li>
    // //             <span style="font-size: 16px"
    // //               >You can read the todays trending news in almost
    // //               <strong>70-80 words</strong>.</span
    // //             >
    // //           </li>
    // //           <li>
    // //             <span style="font-size: 16px"
    // //               >You can <strong>filter</strong> the news as per your
    // //               choice</span
    // //             >
    // //           </li>
    // //         </ul>
    // //       </div>
    // //     </div>
    // //   </div>

    // //   <h3>Thank You</h3>
    // // </div>`,
    // });
    

    res.status(201).json({
      _id: user.name,
      name: user.name,
      email: user.email,
      // phone: user.phone,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("error Occured");
  }
});

// login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      // phone: user.phone,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email and Passwords");
  }
});

module.exports = { registerUser, loginUser };

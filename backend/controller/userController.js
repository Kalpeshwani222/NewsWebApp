require('dotenv').config()
const asyncHandler = require("express-async-handler");
const User = require("../model/user");
const generateToken = require("../util/generateToken");
const nodemailer = require("nodemailer")
const sendgridTransport = require("nodemailer-sendgrid-transport");


const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:process.env.SENDGRID_API_KEY,
    }
})) 



//register

const registerUser = asyncHandler(async(req,res)=>{
      const { name,email,phone,password} = req.body; 
    
      const userExists = await User.findOne({email});

       if(userExists){
        res.status(400);
        throw new Error("User Already Exists");
    }

    const user = await User.create({
        name,email,phone,password,
    })

       if(user){
           transporter.sendMail({
               to:user.email,
               from:"noreply.newsapplication@gmail.com",
               subject:"SignUp Success",
               html:"<h1>Welcome to my NewsApplication</h1>"
           })


           res.status(201).json({
               _id:user.name,
               name:user.name,
               email:user.email,
               phone:user.phone,
               token: generateToken(user._id),
               })
       }else{
            res.status(400);
            throw new Error("error Occured");
       }
 
})


// login
const loginUser = asyncHandler(async(req,res) =>{
    const {email,password} = req.body;

    const user = await User.findOne({email});

       if(user && (await user.matchPassword(password))){
        res.json({
             _id:user.id,
               name:user.name,
               email:user.email,
               phone:user.phone,
               token: generateToken(user._id),
        });
    }else{
            res.status(400);
            throw new Error("Invalid Email and Passwords");
       }



})

module.exports = {registerUser,loginUser};

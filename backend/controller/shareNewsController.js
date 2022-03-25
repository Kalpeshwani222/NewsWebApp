require('dotenv').config()
const asyncHandler = require("express-async-handler");
const User = require("../model/user");
const nodemailer = require("nodemailer")
const sendgridTransport = require("nodemailer-sendgrid-transport");


const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:process.env.SENDGRID_API_KEY,
    }
}))



const shareNews = asyncHandler(async(req,res) =>{
    const {email,newsUrl} = req.body;

    if(!email || !newsUrl){
        res.status(400).json("all the fields are required");
    }


    if(email || newsUrl){
        try {
         transporter.sendMail({
               to:req.body.email,
               from:"noreply.newsapplication@gmail.com",
               subject:"Sharing news to friend testing",
               html:`
                     <h5>News link - <a href=${req.body.newsUrl}>link</a></h5>`
           })
            res.status(200).json("Share News Successfully");
    } catch (error) {
         res.status(400);
            throw new Error("error Occured");
    }
    }else{
        res.status(400);
        throw new Error("error Occured");
    }
})

module.exports = {shareNews};
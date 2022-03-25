const mongoose = require("mongoose");


const otpSchema = new mongoose.Schema({
   
    email:String,
    code:String,
    expireIn:Number,
},{
    timestamps:true
})




//model
const otp = mongoose.model("otp",otpSchema,'otp');

//export
module.exports = otp;

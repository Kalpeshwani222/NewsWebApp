const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    // phone:{
    //     type:Number,
    //     required:true,
    // },
    password:{
        type:String,
        required:true,
    }

})

//for matching the entered passwords

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


// encrypt password everytime its saved the records
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});



//model
const UserModel = mongoose.model("user",userSchema);

//export
module.exports = UserModel;

const mongoose = require("mongoose");


const SavedNewsSchema = new mongoose.Schema({
    
    
    title:{
        type: String,
        //required:true,
    },
    description:{
        type:String,
        //required:true,
    },
    imageUrl:{
        type:String,
       // required:true,
    },
    newsUrl:{
        type:String,
        //required:true,
    },
    author:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        //required:true,
        ref:"User",
    },

})




//model
const SaveNewsdModel = mongoose.model("savedNews",SavedNewsSchema);

//export
module.exports = SaveNewsdModel;



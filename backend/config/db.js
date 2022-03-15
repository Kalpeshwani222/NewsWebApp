// import mongoose from 'mongoose';
const mongoose = require("mongoose");

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.DB, {
            useUnifiedTopology:true,
            useNewUrlParser:true,
            
        });
        console.log(`mongodb  connected`)
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit();
    }
};
module.exports = connectDB;
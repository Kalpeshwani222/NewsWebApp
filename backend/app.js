const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
//for routes
const userRoutes = require('./routes/userRoutes');
const savedNewsRoutes = require('./routes/savedNewsRoutes');

const { errorHandler,notFound } = require("./middleware/errorMiddlewares");
dotenv.config();
const port = process.env.port;


//for cors policy
app.use(cors());

//for database connection
connectDB();

//for JSON
app.use(express.json());


//for routes
app.use('/api/users',userRoutes);
app.use('/api/savedNews',savedNewsRoutes);


//for handling errors
app.use(notFound);
app.use(errorHandler)



 app.listen(port,()=>{
     console.log(`server listining at ${port}`);
 })
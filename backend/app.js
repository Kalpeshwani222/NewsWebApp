const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
//for routes
const userRoutes = require("./routes/userRoutes");
const savedNewsRoutes = require("./routes/savedNewsRoutes");
const shareNewsRoute = require("./routes/shareNewsRoute");
const resetPassword = require("./routes/resetPassword");
const { errorHandler, notFound } = require("./middleware/errorMiddlewares");
dotenv.config();
const port = process.env.port;

//for cors policy
app.use(cors());

//for database connection
connectDB();

//for JSON
app.use(express.json());

//for routes
app.use("/api/users", userRoutes);
app.use("/api/savedNews", savedNewsRoutes);
app.use("/api/share", shareNewsRoute);

app.use("/api/reset", resetPassword);

//for handling errors
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server listining at ${port}`);
});

// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('541f79b15e9343bc954d0e2a4bfd2f73');

// newsapi.v2.everything({
//  domains: 'ndtv.com',
//   from: '2022-3-01',
//   to: '2022-3-26',
//   language: 'en',
//   page: 2

// }).then(response => {
//   console.log(response);
// })

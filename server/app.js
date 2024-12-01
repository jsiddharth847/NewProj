var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const dotenv = require("dotenv").config();
const connectDB = require("./db/index");
const mongoose = require("mongoose");
const morgan = require("morgan");
var indexRouter = require("./routes/auth-router");
// var usersRouter = require('./routes/users');

var app = express();

// Middleware setup
app.use(express.json()); // JSON body parser
app.use(logger("dev")); // Logger for HTTP request
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false })); // URL-encoded body parser
app.use(cookieParser()); // Cookie parser
app.use(express.static(path.join(__dirname, "public"))); // Static files (if needed)

// Use router for API endpoints
app.use("/api/auth", indexRouter); // All routes in indexRouter will now start with /api/auth

// If you have other routes, you can add them here
// app.use('/users', usersRouter);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!!", err);
  });

module.exports = app;

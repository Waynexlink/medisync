const express = require("express");
const globalErrorHandler = require("./controller/errorController");
const AppError = require("./utils/appError");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(globalErrorHandler);
module.exports = app;

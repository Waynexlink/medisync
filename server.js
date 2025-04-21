const express = require("express");
const app = require("./app");
require("dotenv").config();
const dbConnect = require("./config/db");

dbConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT, () => {
  console.log(`server has been started in ${process.env.PORT}`);
});

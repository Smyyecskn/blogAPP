"use strict";
const express = require("express");
const app = express();

app.use(express.json());

require("dotenv").config();
const PORT = process.env?.PORT;

require("express-async-errors");
// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

//middleware/getModelList
app.use(require("./src/middlewares/queryHandler.js"));

//middleware/authentication
app.use(require("./src/middlewares/authentication.js"));

//routes tümü index.js
app.use("/", require("./src/routes"));

app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "WELCOME TO THE BLOG APP",
    user: req.user,
  });
});

//errorHandler
app.use(require("./src/middlewares/errorHandler.js"));

app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

const express = require("express");
const app = express();
const cors=require('cors')
const bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(cors())
const db = require("./db");

const bookRouter = require("./Routes/booksRouter");
app.use("/books", bookRouter);

module.exports = app;

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
var FileStore = require("session-file-store")(session);

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydb");

require("./models/user_login")(mongoose);

app.use(bodyParser.json());
// const db = require("./db");
app.use(cors());
const authenticate = require("./authenticate");
const config = require("./config");
const userRouter = require("./Routes/usersRouter");
const bookRouter = require("./Routes/booksRouter");
const userSign = require("./Routes/signUpRouter");

const passport = require("passport");

app.use(passport.initialize());

app.use("/user", userSign);
app.use("/books", bookRouter);
app.use("/users", userRouter);

module.exports = app;

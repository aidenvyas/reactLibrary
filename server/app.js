const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
var FileStore = require("session-file-store")(session);
app.use(bodyParser.json());

const db = require("./db");
app.use(cors());
const authenticate = require("./authenticate");

const userRouter = require("./Routes/usersRouter");
const bookRouter = require("./Routes/booksRouter");
const userSign = require("./Routes/signUpRouter");

const passport = require("passport");

app.use(passport.initialize());
app.use(passport.session());

app.use(
  session({
    name: "session-id",
    secret: "12345-67890-09876-54321",
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
  })
);
function auth(req, res, next) {
  console.log(req.user);

  if (!req.user) {
    var err = new Error("You are not authenticated!");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    next(err);
  } else {
    next();
  }
}

app.use(auth);

app.use("/books", bookRouter);
app.use("/users", userRouter);
app.use("/user", userSign);

module.exports = app;

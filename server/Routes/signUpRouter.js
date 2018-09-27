const express = require("express");
const userRouter = express.Router();
const Users = require("../models/users");
const passport = require("passport");

userRouter.post("/signup", (req, res, next) => {
  Users.register(
    new Users({
      username: req.body.username
    }, req.body.password,
    req.body.email,),
   

    (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        console.log(err);
        res.json({ err: err });
      } else {
        passport.authenticate("local")(req, res, () => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.send({ success: true, status: "registration successful!" });
        });
      }
    }
  );
});

userRouter.post("/login", passport.authenticate("local"), (req, res) => {
  res.statusCode = 200;

  res.setHeader("Content-Type", "application/json");
  res.send({ success: true, status: "Login successful!" });
});

module.exports = userRouter;

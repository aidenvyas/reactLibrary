const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const passport = require("passport");
const authenticate = require("../authenticate");

router.post("/signup", (req, res, next) => {
  if (req.body.admin) {
    req.body.admin = true;
  } else {
    req.body.admin = false;
  }
  Users.register(
    new Users({ username: req.body.username, email: req.body.email }),
    req.body.password,

    function(err, account) {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err: err });
      } else {
        passport.authenticate("local")(req, res, function() {
          res.send("created!");
        });
      }
    }
  );
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  const token = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    success: true,
    token: token,
    status: "You are successfully logged in!"
  });
});

router.get("/logout", (req, res, next) => {
  if (req.session) {
    req.session.destroy();
    req.clearCookie("session-id");
    req.redirect("/");
  } else {
    var err = new Error("You are not logged in!");
    err.status = 403;
    next(err);
  }
});

module.exports = router;

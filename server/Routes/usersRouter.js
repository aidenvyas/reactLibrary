const express = require("express");
const userRouter = express.Router();
const Users = require("../models/users");

userRouter
  .route("/")
  .get((req, res) => {
    Users.find({})
      .then(users => {
        res.statusCode = 200;

        res.setHeader("Content-Type", "application/json");
        res.json(users);
      })
      .catch(err => {
        res.send("no users!");
      });
  })
  .post((req, res, next) => {
    Users.create(req.body)
      .then(user => {
        console.log("user created!");
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(user);
      })
      .catch(err => next(err));
  })
  .delete((req, res, next) => {
    Users.deleteMany({})
      .then(resp => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(resp);
      })
      .catch(err => next(err));
  })
  .put((req, res, next) => {
    res.send("cant update");
  })

userRouter
  .route("/:userId")
  .get((req, res) => {
    Users.findById(req.params.userId)
      .then(user => {
        res.statusCode = 200;

        res.setHeader("Content-Type", "application/json");
        res.json(user);
      })
      .catch(err => res.send("error!"));
  })
  .post((req, res) => {
    res.statusCode = 200;

    res.setHeader("Content-Type", "application/json");
    res.send("Cant Post");
  })
  .put((req, res) => {
    Users.findByIdAndUpdate(
      req.params.userId,
      {
        $set: req.body
      },
      { new: true }
    )
      .then(user => {
        res.statusCode = 200;

        res.setHeader("Content-Type", "application/json");
        res.json(user);
      })
      .catch(err => {
        res.send(err);
      });
  })
  .delete((req, res, next) => {
    Users.findByIdAndRemove(req.params.userId).then(
      user => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(user);
      },
      err => next(err)
    );
  });

module.exports = userRouter;

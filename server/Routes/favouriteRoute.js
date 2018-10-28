const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Favourites = require("../models/favourite");
const authenticate = require("../authenticate");

const favouriteRouter = express.Router();

favouriteRouter.use(bodyParser.json());

favouriteRouter
  .route("/")
  .options((req, res) => {
    res.sendStatus(200);
  })
  .get(authenticate.verifyUser, (req, res, next) => {
    Favourites.findOne({ user: req.user._id })
      .populate("user")
      .populate("library")
      .then(
        favourites => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(favourites);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .post(authenticate.verifyUser, (req, res, next) => {
    console.log(req.query.favId,"in bysysysy")
    Favourites.findOne({ user: req.user._id })
      .then(
        favourites => {
          console.log("FAV : " + favourites);
          if (favourites == null) {
            var favObj = {};
            favObj.user = req.user._id;
            favObj.books = req.query.favId;
            Favourites.create(favObj)
              .then(
                fav => {
                  console.log("Added to favourites ", fav);
                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  res.json(fav);
                },
                err => next(err)
              )
              .catch(err => next(err));
          } else {
            Favourites.findOne({ user: req.user._id,books:req.query.favId })
              .then(
                user_result=>{
                  if (user_result == null) {
                    favourites.books.push(req.query.favId);
                    favourites.save().then(
                      fav => {
                        res.statusCode = 200;
                        res.setHeader("Content-Type", "application/json");
                        res.json(fav);
                      },
                      err => next(err)
                    );
                  }else{
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json({"error":"Book is already Favourite"});
                  }
                }
              ).catch(err => next(err));
          }
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .put(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /favourites");
  })
  .delete(authenticate.verifyUser, (req, res, next) => {
    Favourites.remove()
      .then(
        resp => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(resp);
        },
        err => next(err)
      )
      .catch(err => next(err));
  });

favouriteRouter
  .route("/?favId")
  .options((req, res) => {
    res.sendStatus(200);
  })
  .get((req, res, next) => {
    // res.statusCode = 403;
    // res.end("get operation not supported on /books/" + req.params.favId);
    Favourites.findOne({ user: req.user._id })
      .populate("user")
      .populate("library")
      .then(
        favourites => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(favourites);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .post(authenticate.verifyUser, (req, res, next) => {
    console.log(req.query.favId,"in node ")
    Favourites.findOne({ user: req.user._id })
      .then(
        favourites => {
          console.log("FAV : " + favourites);
          if (favourites == null) {
            var favObj = {};
            favObj.user = req.user._id;
            favObj.books = req.query.favId;
            Favourites.create(favObj)
              .then(
                fav => {
                  console.log("Added to favourites ", fav);
                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  res.json(fav);
                },
                err => next(err)
              )
              .catch(err => next(err));
          } else {
            favourites.books.push(req.query.favId);
            favourites.save().then(
              fav => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(fav);
              },
              err => next(err)
            );
          }
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .put(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on books: " + req.params.favId);
  })
  .delete(authenticate.verifyUser, (req, res, next) => {
    Favourites.findOne({ user: req.user._id })
      .then(
        fav => {
          if (fav != null) {
            var index = fav.books.indexOf(req.params.favId);
            if (index > -1) {
              fav.books.splice(index, 1);
            }
            fav.save().then(
              fav => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(fav);
              },
              err => next(err)
            );
          } else {
            err = new Error("book is not Present");
            err.statusCode = 404;
            return next(err);
          }
        },
        err => next(err)
      )
      .catch(err => next(err));
  });

module.exports = favouriteRouter;

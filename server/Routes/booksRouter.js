const express = require("express");
const Books = require("../models/books");
const bookRouter = express.Router();
const authenticate=require('../authenticate')
bookRouter
  .route("/")
  .get((req, res, next) => {
    Books.find({})
      .then(
        book => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");

          res.json(book);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .post(authenticate.verifyUser,(req, res, next) => {
    Books.create(req.body)
      .then(
        book => {
          console.log("book inserted!!", book);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(book);
        },
        err => {
          res.send("cant add duplicates");
        }
      )
      .catch(err => {
        res.send("cant add duplicates");
      });
  })
  .delete(authenticate.verifyUser,(req, res, next) => {
    Books.deleteMany({})
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

bookRouter
  .route("/:bookId")
  .get((req, res, next) => {
    Books.findById(req.params.bookId)
      .then(
        book => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(book);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .post(authenticate.verifyUser,(req, res, next) => {
    res.statusCode = 403;
    res.end("POST OPERATION CANT BE DONE");
  })
  .put(authenticate.verifyUser,(req, res, next) => {
    Books.findByIdAndUpdate(
      req.params.bookId,
      {
        $set: req.body
      },
      { new: true }
    )
      .then(
        book => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(book);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .delete(authenticate.verifyUser,(req, res, next) => {
    Books.findByIdAndRemove(req.params.bookId)
      .then(
        book => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(book);
        },
        err => next(err)
      )
      .catch(err => next(err));
  });

module.exports = bookRouter;

const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const connect = mongoose.connect(
  "mongodb://localhost:27017/library"
);

connect.then(
  db => {
    console.log("connected to server");
  },
  err => {
    console.log(err);
  }
);


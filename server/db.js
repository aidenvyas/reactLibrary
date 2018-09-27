const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const config = require("./config");
mongoose.connect(
  config.mongoUrl,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

var mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/mydb",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  },
  err => {
    if (err) console.log(err);
    else {
      console.log("connected!");
    }
  }
);

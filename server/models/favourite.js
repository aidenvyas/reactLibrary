const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favouriteSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "library"
    }
  ]
});

var Favourites = mongoose.model("Favourite", favouriteSchema);
module.exports = Favourites;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var librarySchema = new Schema(
  {
    title: {
      type: String
    },
    genre: { type: String },
    ISBN: { type: String, unique: true },
    description: { type: String },
    image: { type: String },
    author: { type: String },
    copies: Number
  },
  {
    usePushEach: true
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("library", librarySchema);

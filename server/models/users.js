const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, unique: true },
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    admin: { type: Boolean }
  },
  {
    usePushEach: true
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("userSchema", userSchema);

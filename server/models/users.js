var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

var User = new Schema(
  {
    username: {type: String, required: true,unique: true },
    email: { type: String, unique: true, required: true },
    admin: { type: Boolean, default: false }},
  { usePushEach: true},
  {timestamps: true }
);

User.plugin(passportLocalMongoose)
module.exports = mongoose.model("User", User);

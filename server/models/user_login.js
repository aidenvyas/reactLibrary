// module.exports = function(mongoose) {
//   var Schema = mongoose.Schema;
//   var userSchema = new Schema({
//     username: String,
//     password: String,
//     email: String
//   });

//   var userlogin = mongoose.model("userlogin", userSchema);
//   return userlogin;
// };

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
var userSchema = new Schema({
  username: String,
  password: String,
  email: String
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("userlogin", userSchema);

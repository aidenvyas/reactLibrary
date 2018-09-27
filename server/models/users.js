const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose=require('passport-local-mongoose')


const userSchema = new Schema(
  {
    email: { type: String, unique: true ,required:true},
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String },
    admin: { type: Boolean,default:false }
  },
  {
    usePushEach: true
  },
  {
    timestamps: true
  }
);

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("userSchema", userSchema);

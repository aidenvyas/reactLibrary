var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var User = require("./models/users");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");

const config = require("./config");

exports.local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = function(user) {
  return jwt.sign(user, config.secretkey, {
    expiresIn: 3600
  });
};

const opts={}

opts.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken()

opts.secretOrKey=config.secretkey


exports.jwtPassport=passport.use(new JwtStrategy(opts,(jwt_payload,done)=>{
    User.findOne({_id:jwt_payload._id},(err,user)=>{
        if(err) return done(err,false);
        else if(user){return done(null,user)}
        else{return done(null,false)}
    })
}))

exports.verifyUser=passport.authenticate('jwt',{session:false})



exports.verifyAdmin = (req, res, next) => {
    
    if (req.user.admin != true) {
        err = new Error('You Are Not Authorized! This is only for admin user.');
        err.statusCode = 401;
        return next(err);

    }
    else
        next();
}
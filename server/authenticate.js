const passport=require('passport')
const localStrategy=require('passport-local').Strategy
const User=require('./models/users')


exports.local=passport.use(new localStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session');
var Filestore=require('session-file-store')(session);
var passport=require('passport');
var authenticate = require('./authenticate');
var config=require('./config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var promoRouter = require('./routes/promoRouter');
var dishRouter = require('./routes/dishRouter');
var leaderRouter = require('./routes/leaderRouter');
var uploadRouter = require('./routes/uploadRouter');
var favoriteRouter = require('./routes/favoriteRouter');


const mongoose=require('mongoose');
mongoose.Promise=require('bluebird');

const Dishes=require('./models/dishes');
const Promo=require('./models/promotions');
const Leader=require('./models/leaders');

const url='mongodb://localhost:27017/conFusion';

const connect=mongoose.connect(url,{
  useMongoClient:true
});
connect.then((db)=>{
  console.log('connected to server');

},(err)=>{console.log(err);});
var app = express();

// app.all('*',(req,res,next)=>{
//   console.log('hi');
//   if(req.secure) {
//     console.log('fjaskl');
//     return next();
//   }
//   else {  
//     res.redirect('https://'+req.hostname+':'+app.get('secPort')+req.url);
//   }
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser('12345-67890-09876-54321'));
// app.use(session({
//   name:'session-id',
//   secret:'12345-67890-09876-54321',
//   saveUninitialized:false,
//   resave:false,
//   store: new Filestore()
// }));
app.use(passport.initialize());
// app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// function auth(req,res,next)
// {

//   console.log(req.session);
//   if (!req.user) {

//     // var authHeader = req.headers.authorization;

//     // if (!authHeader) {
//       var err = new Error('You are not authenticated!!!');
//      // res.setHeader('WWW-Authenticate', 'Basic');
//       err.status = 403;
//       return next(err);
//     // }
//     // var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
//     // var username = auth[0];
//     // var pass = auth[1];
//     // console.log('username:' + username + 'password:' + pass);
//     // if (username === 'admin' && pass === 'password') {
//     //   //res.cookie('users','admin',{signed:true});
//     //   req.session.user='admin';
//     //   next();
//     // }

//     // else {
//     //   var err = new Error('You are not authenticated!!!');
//     //   res.setHeader('WWW-Authenticate', 'Basic');
//     //   err.status = 401;
//     //   return next(err);
//     // }
//   }
//   else{
//     next();
//     // if(req.session.user==='authenticated')
//     // {
//     //   next();
//     // }
//     // else{
//     //   var err = new Error('You are not authenticated!!!');
//     //   err.status = 403;
//     //   return next(err);
//     // }
//   }
// }
// app.use(auth);




app.use(express.static(path.join(__dirname, 'public')));


app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);
app.use('/imageUpload',uploadRouter);
app.use('/favorite',favoriteRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

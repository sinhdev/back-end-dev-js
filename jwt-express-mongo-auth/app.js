var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const UserModel = require('./model/user-model');
// mongoose.connect('mongodb://127.0.0.1:27017/jwt-express-mongo-auth', { useMongoClient: false });
mongoose.connect("mongodb://127.0.0.1:27017/jwt-express-mongo-auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;

require('./auth/auth');
const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-routes');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', usersRouter);

// Plug in the JWT strategy as a middleware so only verified users can access this route.
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

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
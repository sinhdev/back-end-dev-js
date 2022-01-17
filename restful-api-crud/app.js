var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var productsRoutes = require('./routes/products');
var usersRouter = require('./routes/users')

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/restful-api-crud", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/products', productsRoutes);
app.use('/users', usersRouter);

module.exports = app;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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

app.use('/products', productsRoutes);
app.use('/users', usersRouter);

const swaggerOptions = {
  swaggerDefinition: {
      info: {
          title: 'REST API with Products (CRUD)',
          description: "A REST API built with Express and MongoDB. This API provides Product and the context of the product."
      },
  },
  apis: ["./routes/products.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;

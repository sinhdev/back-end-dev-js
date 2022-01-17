var express = require('express');
var router = express();
const productsRouter = require('./products');

/* GET products listing. */
router.get('/products', productsRouter);

module.exports = router;
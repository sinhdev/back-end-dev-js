var express = require('express');
const Product = require('../model/product');
var router = express.Router();

router.post('/', function (req, res, next) {
  let product = new Product({
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    unitPrice: req.body.unitPrice,
    description: req.body.description
  });
  product.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Product Created successfully')
  })
});

/* GET users listing. */
router.get('/', async function (req, res, next) {
  var products = await Product.find({});
  res.send(products);
});

router.put('/:id', (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
    if (err) return next(err);
    res.send('Product updated.');
  });
});

router.delete('/:id', (req, res, next) => {
  Product.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send('Deleted successfully!');
  })
});

module.exports = router;
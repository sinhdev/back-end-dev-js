var express = require('express');
const Product = require('../model/product');
var router = express.Router();

/**
 * @swagger
 * /products:
 *   post:
 *     parameters:
 *      - in: body
 *        name: product
 *        description: New product
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *            manufacture:
 *              type: string
 *            unitPrice:
 *              type: number
 *            description:
 *              type: string
 *     responses:
 *       201:
 *         description: Created
 */
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

/**
 * @swagger
 * /products:
 *   get:
 *     description: All products
 *     responses:
 *       200:
 *         description: Returns all the products
 */
router.get('/', async function (req, res, next) {
  var products = await Product.find({});
  res.send(products);
});

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The product ID.
 *     description: Get a product by id
 *     responses:
 *       200:
 *         description: Returns the requested product
 */
 router.get('/:id', async function (req, res, next) {
  var product = await Product.findOne({id: req.params.id});
  res.send(product);
});

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The product ID.
 *      - in: body
 *        name: product
 *        description: Update product
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *            manufacture:
 *              type: string
 *            unitPrice:
 *              type: number
 *            description:
 *              type: string
 *     responses:
 *       201:
 *         description: Updated
 */
router.put('/:id', (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
    if (err) return next(err);
    res.send('Product updated.');
  });
});

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The product ID.
 *     description: Delete a product by id
 *     responses:
 *       200:
 *         description: Returns the deleted product
 */
router.delete('/:id', (req, res, next) => {
  Product.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send('Deleted successfully!');
  })
});

module.exports = router;
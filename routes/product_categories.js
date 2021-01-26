var express = require('express');
var router = express.Router();

// Require index controller.
var product_categoriesController = require('../controllers/product_categoriesController');

// when users visit /product_categories go to product_categories controller
router.get('/product_categories', product_categoriesController.productCategories_get);

module.exports = router;


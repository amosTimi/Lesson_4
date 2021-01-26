var express = require('express');
var router = express.Router();

// Require index controller.
var product_optionsController = require('../controllers/product_optionsController');

// when users visit /product_options go to product_options controller
router.get('/product_options', product_optionsController.productOptions_get);

module.exports = router;


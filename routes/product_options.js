var express = require('express');
var router = express.Router();

var product_optionsController = require('../controllers/product_optionsController');

router.get('/product_options', product_optionsController.productOptions_get);

module.exports = router;


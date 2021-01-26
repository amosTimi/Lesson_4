var express = require('express');
var router  = express.Router();

var productsController = require('../controllers/productsController');

router.get("/products", productsController.products_get);

module.exports = router;
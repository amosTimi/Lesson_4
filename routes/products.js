var express = require('express');
var router  = express.Router();

var productsController = require('../controllers/productsController');

router.get('/',productsController.index);
router.get('/products', productsController.products_get);

module.exports = router;
var express = require('express');
var router = express.Router();

// Require order_details controller.
var ordersController = require('../controllers/ordersController');

// when users visit /options go to options controller
router.get('/orders', ordersController.orders_get);

module.exports = router;


var express = require('express');
var router = express.Router();

// Require order_details controller.
var order_detailsController = require('../controllers/order_detailsController');

// when users visit /options go to options controller
router.get('/order_details', order_detailsController.orderDetails_get);

module.exports = router;


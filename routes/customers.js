var express = require('express');
var router = express.Router();

// Require customers controller.
var customersController = require('../controllers/customersController');

// when users visit /options go to customers controller
router.get('/', customersController.index);
router.get('/customers', customersController.customers_get);

module.exports = router;


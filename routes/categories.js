var express = require('express');
var router = express.Router();

// Require categories controller.
var categoriesController = require('../controllers/categoriesController');

// when users visit /categories go to categories controller
router.get('/', categoriesController.index);
router.get('/categories', categoriesController.categories_get);

module.exports = router;


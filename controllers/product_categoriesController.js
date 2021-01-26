/* GET index page. */
exports.productCategories_get = [
    function(req, res, next) {
    res.render('product_categories', { title: 'Express' });
  }
  ];
  
/* GET product options page. */
exports.productOptions_get = [
    function(req, res, next) {
    res.render('product_options', { title: 'Express' });
  }
  ];
  
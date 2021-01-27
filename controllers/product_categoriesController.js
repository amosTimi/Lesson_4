exports.index = function(req,res){
  res.render('index', {title:'Product categories Page'});
};

exports.productCategories_get = [
    function(req, res, next) {
    res.render('product_categories', { title: 'Express' });
  }
  ];
  
exports.index = function(req,res){
  res.render('index', {title:'Product Options Page'});
};

exports.productOptions_get = [
    function(req, res, next) {
    res.render('product_options', { title: 'Express' });
  }
  ];
  
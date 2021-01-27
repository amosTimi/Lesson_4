exports.index = function(req,res){
  res.render('index', {title:'Orders Page'});
};

exports.orders_get = [
    function(req, res, next) {
    res.render('orders', { title: 'Express' });
  }
  ];
  
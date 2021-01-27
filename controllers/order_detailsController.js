exports.index = function(req,res){
  res.render('index', {title:'Order Details Page'});
};

exports.orderDetails_get = [
    function(req, res, next) {
    res.render('order_details', { title: 'Express' });
  }
  ];
  
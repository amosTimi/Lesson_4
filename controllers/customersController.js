exports.index = function(req,res){
  res.render('index', {title:'Customers Page'});
};

exports.customers_get = [
    function(req, res, next) {
    res.render('customers', { title: 'Express' });
  }
  ];
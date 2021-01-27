exports.index = function(req,res){
  res.render('index', {title:'Options Page'});
};

exports.options_get = [
    function(req, res, next) {
    res.render('options', { title: 'Express' });
  }
  ];
  
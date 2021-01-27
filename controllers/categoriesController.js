/* GET index page. */
exports.index = 
  function(req,res){
    res.render('index',{title: 'Categories Page'});
  };
  
exports.categories_get =
    function(req, res, next) {
    res.render('categories', { title: 'Express' });
  };
  
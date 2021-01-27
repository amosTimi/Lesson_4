/*GET Product page*/

exports.index = function(req,res){
    res.render('products', {title:'Products Page'});
};

exports.products_get =
    function(req,res,next){
        res.render('products',{title:'Products Page'});
    };
/* GET index page. */
exports.options_get = [
    function(req, res, next) {
    res.render('options', { title: 'Express' });
  }
  ];
  
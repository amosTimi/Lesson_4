exports.index_get = [
    function(req, res, next) {
    res.render('index', { title: 'Landing Page' });
  }
  ];
  
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express - GET' });
});

router.put('/', function(req, res, next) {
  res.render('index', { title: 'Express - PUT' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express - POST' });
});

router.delete('/', function(req, res, next) {
  res.render('index', { title: 'Express - DELETE' });
});
module.exports = router;

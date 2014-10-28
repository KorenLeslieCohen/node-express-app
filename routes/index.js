var express = require('express'); // requires Express functionality
var router = express.Router(); // attaches "router" variable to router method

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET newroute page. */
router.get('/newroute', function(req, res) { 
  res.render('newroute', { title: 'New Route' });
});

module.exports = router;

var express = require('express'); // requires Express functionality
var router = express.Router(); // attaches "router" variable to router method

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
    title: 'Express',
    author: 'Koren' 
  });
});

/* GET newroute page. */
router.get('/newroute', function(req, res) {
  var animals = [
    {name: "Porky", type: "pig"},
    {name: "Sugar", type: "dog"},
    {name: "Mr. Bigglesworth", type: "cat"}
  ]; 
  res.render('newroute', { 
    title: 'New Route',
    animals: animals
  });
});

module.exports = router;

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

/* GET users page. */
// extracting the db object passedto http request
// fills docs variable with database docs(user data)
// renders page
router.get('/users', function(req, res) {
  var db = req.db;
  var users = db.get('users');
  users.find({},{}, function(e, docs){
    res.render('users', { 
      title: 'Users',
      'users': docs 
    });
  });
});

/* GET new user page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', { 
    title: 'New User'
  });
});

module.exports = router;

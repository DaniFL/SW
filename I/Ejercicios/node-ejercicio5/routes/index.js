var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Ferrari Retro Club',
    intro: 'Welcome to Ferrari Retro Club',
    button: 'Login'
   });
});

module.exports = router;

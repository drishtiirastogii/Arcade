var express = require('express');
var router = express.Router();
const path = require('path');

router.use(express.static(path.join(__dirname, 'public')));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/signup', function(req, res, next) {
  res.render(path.join(__dirname, '..', 'views', 'registration', 'signup.ejs'));
});

router.get('/login', function(req, res, next) {
  res.render(path.join(__dirname, '..', 'views', 'registration', 'login.ejs'));
});

router.get('/dicegame', function(req, res, next) {
  res.render(path.join(__dirname, '..', 'views', 'dice', 'dice.ejs'));
});

router.get('/simongame', function(req, res, next) {
  res.render(path.join(__dirname, '..', 'views', 'simon', 'simon.ejs'));
});

router.get('/drumgame', function(req, res, next) {
  res.render(path.join(__dirname, '..', 'views', 'drum', 'drum.ejs'));
});

module.exports = router;

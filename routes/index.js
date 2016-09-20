
var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
//This is our routing code
//var parser = require('body-parser');


var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  // var paramObj = {tweets: tweets};
  // paramObj.showForm = true;
  res.render( 'index', {tweets:tweets, showForm:true} );
  //app.nunjucks.render('index.html', {tweets: tweets});
});



router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', {tweets: list} );
});


router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;

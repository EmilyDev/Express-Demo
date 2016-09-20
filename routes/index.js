
var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
//This is our routing code


var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  var paramObj = {tweets: tweets};
  res.render( 'index', paramObj );
  //app.nunjucks.render('index.html', {tweets: tweets});
});

module.exports = router;

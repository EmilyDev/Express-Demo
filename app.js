//Rounting
var Express = require('express');
var app = Express(); // creates an instance of an express application
var chalk = require('chalk');
var nunjucks = require('nunjucks');

var routes = require('./routes');


var tweetBank = require('./tweetBank');
var parser = require('body-parser');





// parse application/json
app.use(parser.json());

app.use(parser.urlencoded({ extended: false }));

//Remember to get your infor before you parse it!


// set
app.use(Express.static('public'));



// This needs to be after parsers
app.use('/',routes);   // sends whatever is not caught to the router




app.listen(3000,function(){
  console.log("Twitter is Running!")
});


nunjucks.configure('views', {      // tells us views has nunjucks html
    noCache: true
});


app.set('view engine', 'html');
app.engine('html', nunjucks.render);  // setting engine to render html




// nunjucks.render('index.html', locals, function(err, output) {
//     console.log(output);
// });
//
// nunjucks.configure('views');

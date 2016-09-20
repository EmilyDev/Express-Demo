//Rounting
var Express = require('express');
var app = Express(); // creates an instance of an express application
var chalk = require('chalk');
var nunjucks = require('nunjucks');
    //chalk.blue()
var routes = require('./routes');
app.use('/',routes);

var tweetBank = require('./tweetBank');
//var parser = require('body-parser');



// app.use(function(req, res, next) {
//     res.send("more stuff");
//     next();
// });

app.use(Express.static('public'));

app.get('/stylesheets/style.css');

// app.get('/', function(req, res, next) {
//     console.log('Hello World!');
//
//     var people = [{name: 'Full'},{name : 'Stacker'},{name:'Son'}];
//     res.render('index', {title: "Hall of Fame", people: people});
// });
//
//
// app.post('/modernism', function(req, res, next) {
//     res.send("So pomo");
// });


app.listen(3000, function() {
    console.log('I ran');
});

nunjucks.configure('views', {
    noCache: true
});

// nunjucks.render('index.html', locals, function(err, output) {
//     console.log(output);
// });
//
// nunjucks.configure('views');
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

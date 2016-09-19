var Express = require('express');
var app = Express(); // creates an instance of an express application
var chalk = require('chalk');

//chalk.blue()

app.use(function(req,res,next){
  console.log("Here is the middle stuff");
  next();
});

app.use(function(req,res,next){
  console.log("more stuff");
  next();
});

app.use("/special", function(req,res,next){
  console.log("this is special subdir");
  next();
})

app.use("/special/test", function(req,res,next){
  console.log("subdir test");
  next();
})

app.get('/', function(req,res,next){
  console.log('Hello World!');
  res.sendStatus(200);
});

app.get('/is-anybody-home', function(req,res,next) {
  res.send("Im home");
})

app.post('/modernism', function(req,res,next) {
  res.send("So pomo");
})


app.listen(3000, function(){
  console.log('I ran');
});

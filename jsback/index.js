console.log(this);

//require module
var greet = require('./module')
//In ES6 import * as greet from 'module'
greet();

//Emitter module
var Emitter = require('events');
var Config =  require('./config');
var emtr = new Emitter();
emtr.on(Config.GREET,function() {
  console.log('Event occured');
});

emtr.emit(Config.GREET);

//Util Module
var util = require('util');
var name = 'John';
var greeting = util.format('Hello %s', name);
util.log(greeting);

//inheritence using node utility
function Person() {
  this.firstname = 'John';
  this.lastname = 'Doe';
}

Person.prototype.greet = function() {
  console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policemen() {
  //IMP to call base function
  Person.call(this);
  this.badge = '123';
}

util.inherits(Policemen,Person);
var officer = new Policemen();
officer.greet();

// File System module
var fs = require('fs');
var outSync = fs.readFileSync(__dirname+'/greet.txt','utf-8');
console.log(outSync);

fs.readFile(__dirname+'/greet.txt','utf-8',
function(err,data){
  console.log('Async Read completed');
  console.log(data);
});

//http module
var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  fs.createReadStream(__dirname+'/index.html').pipe(res);
  //res.end('Hello World\n');
}).listen(4000,'127.0.0.1');

//express module
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

//urlencodedParser
var urlencodedParser = bodyParser.urlencoded({extended:false});

//jsonParser
var jsonParser = bodyParser.json();

app.get('/login',urlencodedParser,function(req,res){
  res.render('login');
})

app.post('/login',urlencodedParser,function(req,res){
  res.send('Welcome '+req.body.username);
})

//cookie parser middleware
var cookieParser = require('cookie-parser');
app.use(cookieParser());

//templating engine Embedded Javascript Engine (EJS)
var ejs = require('ejs');

app.set('view engine','ejs');

//static files
app.use('/static',express.static(__dirname+'/static'));

//filter
app.use('/',function(req,res,next){
  console.log('Request Url:'+req.url);
  console.log('Cookies:'+ JSON.stringify(req.cookies) );
  next();
})

//get method
app.get('/',function(req,res){
  res.send('<html><head><link href=/static/test.css type=text/css rel=stylesheet></head><body>Hello</body></html>');
})

//Send JSON
app.get('/api',function(req,res){
  res.json({firstname:'John',lastname:'Doe'});
})

//query params
app.get('/person/:id',function(req,res) {
  //res.send('Hello '+req.params.id);
  res.render('output',{ID : req.params.id});
})

//json parser
app.post('/person',jsonParser,function(req,res){
  res.send('Person added : '+req.body.firstname);
})


app.listen(port);

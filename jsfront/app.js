console.log(this);

//non poluted global space using IIFE
console.log(greeting);

//closures and callbacks
function sayHiLater(name) {
  var greeting = 'Hi';

  setTimeout(function(){
    console.log(greeting+ ' ' + name);
  }, 3000)

}

sayHiLater('World');

function tellMeWhenDone(callback) {
  //some processing
  callback();
}

tellMeWhenDone(function(){
  console.log("I am done");
});



//Prototypical Inheritance
function Person() {
  this.firstName = 'John',
  this.lastName = 'Doe',
  this.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
  }
}

Person.prototype.getFormalName = function() {
  return this.lastName + ' ' + this.firstName;
}

var john = new Person()
console.log(john);
console.log(john.getFullName());
console.log(john.getFormalName());

//Creating object from existing object
var car  = {
  type : 'default',
  make : 'default',
  start : function() {
    console.log('Starting'+ ' ' + this.make)
  }
}

var bmw = Object.create(car);
bmw.make = 'BMW'
bmw.type = 'wagon'
bmw.start();

//ES6 classical inheritance
class Base {
  constructor(key,value) {
    this.key = key;
    this.value = value;
  }

  show() {
    console.log("Key = " +this.key+ ' ' + "Value = "+this.value); 
  }
}

var pair = new Base('testKey','testVal');
pair.show();

class NamedBase extends Base {
  constructor(key,value,bucket) {
    super(key,value);
    this.bucket = bucket;
  }

  display() {
    console.log('Bucket = '+ this.bucket);
    this.show();
  }

}

var namedPair = new NamedBase('sampleKey','sampleVal','sample');
namedPair.display();


// _ is variable and $ is a function :)
var _ ={
  test : 'hello'
}

console.log(_.test);

function $(test) {
  console.log(test);
}

$('hello');

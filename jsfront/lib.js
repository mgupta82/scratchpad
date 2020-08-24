/*var greeting = 'Hello';
function greet(name) {
  console.log(greeting + ' ' + name);
}
greet('world');*/

//libraries to avoid overiding of variables - immediately invoked function expressions
(function(name){
  var greeting = 'Hello';
  console.log(greeting + ' ' + name)
}('World'));

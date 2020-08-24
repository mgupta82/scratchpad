//(function(exports,require,module,__filename,__dirname) {
var greet = function() {
  console.log('Hello from module');
}

module.exports = greet;
//});
//fn((module.exports,require,module,filename,dirname));
//in reality invoked with .apply
//return module.exports;

/* In ES6
export function greet() {
  console.log('Hello');
}
 */

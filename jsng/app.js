var myApp = angular.module('myApp', ['ngMessages']);

//var mainController = myApp.controller('mainContoller', function($scope,$log){
// For minificaion pass parameters as String in Array
var mainController = myApp.controller('mainContoller', ['$scope','$log','$filter','$timeout',function($scope,$log,$filter,$timeout){
  $log.info("Initializing controller");
  console.log($scope);
  $scope.upperCaseName = function() {
    return $filter('uppercase')($scope.name);
  }

  //digest watch loop
  $scope.$watch('name',function(newValue,oldValue){
    console.log('Name : "' + oldValue + '" => "' + newValue + '"' );
  });

  /* specifically needs to call $apply function for data binding as it is in different thread after reading from event queue
  setTimeout(function(){
    $scope.$apply(function(){
      $scope.name = 'default';
    })
  },3000);
  */
  //set default value afte 3 sec using agular service $timeout. forced to use all angualar
 $timeout(function(){
  $scope.name = 'default';
},3000)

}]);

//Dependency injection using function string
var test = function test(param1,param2){
};
console.log(angular.injector().annotate(test));

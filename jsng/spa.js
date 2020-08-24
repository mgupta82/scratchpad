var spaApp = angular.module('spaApp', ['ngRoute']);

spaApp.config(function($routeProvider) {

  $routeProvider
  .when('/',{
    templateUrl : 'init.html',
    controller : 'spaController'
  })
  .when('/next',{
    templateUrl: 'next.html',
    controller: 'spaController'
  })

});

spaApp.controller('spaController', ['$scope',function($scope){
  $scope.name = 'default';
}]);

'use strict';
var app = angular.module('RestaurantMap', ['ui.router']);
app.constant('api_key', 'fb3737b1c0d01edd92cf64262bc8efdf')
app.constant('base_url', 'http://localhost:3000/api/')

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/restaurants');

  $stateProvider
    .state('restaurants', restaurantRoute)
}]);



var restaurantRoute = {
  url: '/restaurants',
  templateUrl: 'Templates/RestaurantList.html',
  controller: 'RestaurantMapHomeCtrl'
}



/*
        function($routeProvider){

          $routeProvider
            .when('/restaurants', {
              templateUrl: 'RestaurantList.html',
              controller: 'RestaurantMapHomeCtrl'
            })
            .when('/test', testRoute)
            .otherwise({redirectTo: '/restaurants'});


          var homeRoute = {
            templateUrl: "Templates/RestaurantList.html",
            controller: "RestaurantMapHomeCtrl"
          }
          var testRoute = {
            templateUrl: 'Templates/test.html'
          }

        });
*/

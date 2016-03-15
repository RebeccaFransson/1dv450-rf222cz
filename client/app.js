'use strict';
var app = angular.module('RestaurantMap', ['ui.router', 'ui.bootstrap', 'ngMap', 'ngStorage']);
app.constant('api_key', 'fb3737b1c0d01edd92cf64262bc8efdf')
app.constant('base_url', 'http://localhost:3000/api/')

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('/restaurants');

  $stateProvider
    .state('restaurants', restaurantsRoute)
    .state('login', loginRoute)

}]);



var restaurantsRoute = {
  url: '/restaurants',
  templateUrl: 'Templates/RestaurantList.html',
  controller: 'RestaurantCtrl'
};

var loginRoute = {
  url: '/login',
  templateUrl: 'Templates/Login.html',
  controller: 'LoginCtrl'
}

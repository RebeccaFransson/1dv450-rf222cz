'use strict';
var app = angular.module('RestaurantMap', ['ui.router', 'ui.bootstrap', 'ngMap']);
app.constant('api_key', 'fb3737b1c0d01edd92cf64262bc8efdf')
app.constant('base_url', 'http://localhost:3000/api/')

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/restaurants');

  $stateProvider
    .state('restaurants', restaurantsRoute)
    .state('oneRestaurant', DetailRestaurantRoute)
}]);



var restaurantsRoute = {
  url: '/restaurants',
  templateUrl: 'Templates/RestaurantList.html',
  controller: 'RestaurantCtrl'
};

var DetailRestaurantRoute = {
  url: '/restaurant/:id',
  templateUrl: 'Templates/OneRestaurant.html',
  controller: 'DetailRestaurantCtrl'
}

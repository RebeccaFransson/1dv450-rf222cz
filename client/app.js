'use strict';
var app = angular.module('RestaurantMap', ['ui.router', 'ui.bootstrap', 'ngMap', 'ngStorage']);
app.constant('api_key', 'fb3737b1c0d01edd92cf64262bc8efdf')
app.constant('base_url', 'http://localhost:3000/api/')

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('/restaurants');

  $stateProvider
    .state('restaurants', restaurantsRoute)
    .state('login', loginRoute)
    .state('logout', logoutRoute)
    .state('addRestaurant', addRestaurantRoute)
}]);



var restaurantsRoute = {
  url: '/restaurants',
  templateUrl: 'Templates/RestaurantList.html',
  controller: 'RestaurantCtrl',
  resolve: {
    restaurants: function(RestaurantService){
      return RestaurantService.getRestaurants();
    },
    tags: function(TagService){
      return TagService.getTags();
    }
  },
  authenticate: false
};
var loginRoute = {
  url: '/login',
  templateUrl: 'Templates/Login.html',
  controller: 'LoginCtrl',
  authenticate: false
};
var logoutRoute = {
  url: '/logout',
  controller: 'LogoutCtrl',
  authenticate: false
};
var addRestaurantRoute = {
  url: '/addRestaurant',
  templateUrl: 'Templates/AddRestaurant.html',
  controller: 'AddRestaurantCtrl',
  authenticate: true
}


//authentication for routes
/*
app.run(function ($rootScope, $state, LoginService) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
    console.log(toState);
    console.log(toParams);
    if (toState.authenticate && !LoginService.isLoggedIn()) {
      $state.transitionTo("restaurants");
      event.preventDefault();
    }
  });
});
*/

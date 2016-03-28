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
    .state('creatorRestaurants', creatorRestaurantsRoute)
    .state('tags', tagsRoute)
}]);



var restaurantsRoute = {
  url: '/restaurants',
  templateUrl: 'Templates/RestaurantList.html',
  controller: 'RestaurantCtrl',
  resolve: {
    restaurants: function(RestaurantService, $sessionStorage){
      if($sessionStorage.restaurants == undefined){
        return RestaurantService.getRestaurants();
      }else{
        return null;
      }
    },
    tags: function(TagService, $sessionStorage){
      if($sessionStorage.tags == undefined){
        return TagService.getTags();
      }else{
        return null;
      }
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
};
var creatorRestaurantsRoute = {
  url: '/creatorRestaurants/:id',
  templateUrl: 'Templates/CreatorRestaurants.html',
  controller: 'CreatorRestaurantsCtrl',
  authenticate: true
};
var tagsRoute = {
  url: '/handleTags',
  templateUrl: 'Templates/HandleTags.html',
  controller: 'HandleTagsCtrl',
  authenticate: true,
  resolve: {
    tags: function(TagService, $sessionStorage){
        return TagService.getTags();
    }
  }
}


//authentication for routes
app.run(function ($rootScope, $state, LoginService) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
    console.log(toParams);
    if (toState.authenticate && !LoginService.isLoggedIn()) {
      $state.transitionTo("restaurants");
      event.preventDefault();
    }
  });
});

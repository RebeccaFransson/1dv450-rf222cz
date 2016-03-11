var app = angular.module('RestaurantMap', ['ui.router']);

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

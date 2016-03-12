
app.controller('RestaurantCtrl', ['$scope', 'RestaurantService', function($scope, RestaurantService) {
  'use strict';
  $scope.restaurants;
  $scope.status;
  getRestaurants();

  function getRestaurants(){
    RestaurantService.getRestaurants()
            .success(function (data) {
                $scope.restaurants = data.restaurants;
            })
            .error(function (error) {
                $scope.status = 'Unable to load restaurant data: ' + error.message;
            });;
  }

}]);

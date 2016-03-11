
app.controller('RestaurantMapHomeCtrl', ['$scope', 'RestaurantService', function RestaurantMapCtrl($scope, RestaurantService) {
  'use strict';
  $scope.restaurants;
  $scope.status;
  getRestaurants();

  function getRestaurants(){
    RestaurantService.getRestaurants()
            .success(function (data) {
              console.log(data.restaurants);
                $scope.restaurants = data.restaurants;
            })
            .error(function (error) {
                $scope.status = 'Unable to load restaurant data: ' + error.message;
            });;
  }

}]);

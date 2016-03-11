
app.controller('RestaurantMapHomeCtrl', ['$scope', 'RestaurantData', function RestaurantMapCtrl($scope, RestaurantData) {
  'use strict';
  $scope.restaurants;
  $scope.status;
  getRestaurants();

  function getRestaurants(){
    RestaurantData.getRestaurants()
            .success(function (data) {
              console.log(data.restaurants);
                $scope.restaurants = data.restaurants;
            })
            .error(function (error) {
                $scope.status = 'Unable to load restaurant data: ' + error.message;
            });;
  }

}]);

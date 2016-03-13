app.controller('DetailRestaurantCtrl', ['$scope', '$stateParams', 'RestaurantService', function($scope, $stateParams, RestaurantService) {
  $scope.restaurant;

  RestaurantService.getRestaurant($stateParams.id)
    .success(function(data){
      $scope.restaurant = data.restaurant;
    })
    .error(function (error) {
        //$scope.status = 'Unable to load tags: ' + error.message;
        console.log('Unable to load restaurant: ' + error);
    });

}])

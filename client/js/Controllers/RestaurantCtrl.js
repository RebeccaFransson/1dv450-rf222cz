
app.controller('RestaurantCtrl', ['$scope', 'RestaurantService', 'TagService', function($scope, RestaurantService, TagService) {
  'use strict';
  $scope.restaurants;
  $scope.status;
  getRestaurants();

  TagService.getTags()
    .success(function(data){
      $scope.tag = data.tags;
    })
    .error(function (error) {
        $scope.status = 'Unable to load tags: ' + error.message;
    });
    $scope.searchTag = function(){
      getRestaurantbyTag(this.select.id);
    }


  function getRestaurants(){
    RestaurantService.getRestaurants()
            .success(function (data) {
                $scope.restaurants = data.restaurants;
            })
            .error(function (error) {
                $scope.status = 'Unable to load restaurant data: ' + error.message;
            });
  }
 function getRestaurantbyTag(id){
    RestaurantService.getRestaurantbyTag(id)
            .success(function (data) {
                $scope.restaurants = data.restaurants;
            })
            .error(function (error) {
                $scope.status = 'Unable to load tag data: ' + error.message;
            });;
  }

}]);

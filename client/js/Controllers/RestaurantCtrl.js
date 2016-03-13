
app.controller('RestaurantCtrl', ['$scope', 'RestaurantService', 'TagService', function($scope, RestaurantService, TagService) {
  'use strict';
  $scope.restaurants;
  $scope.status;

  TagService.getTags()
    .success(function(data){
      $scope.tag = data.tags;
      $scope.tag.unshift({name: 'All tags'})
    })
    .error(function (error) {
        //$scope.status = 'Unable to load tags: ' + error.message;
        console.log('Unable to load tags: ' + error);
    });
    $scope.searchTag = function(){
      getRestaurantbyTag(this.select.id);
    }

  RestaurantService.getRestaurants()
          .success(function (data) {
              $scope.restaurants = data.restaurants;
          })
          .error(function (error) {
              //$scope.status = 'Unable to load restaurant data: ' + error.message;
              console.log('Unable to load restaurant data: ' + error);
          });



 function getRestaurantbyTag(id){
    RestaurantService.getRestaurantbyTag(id)
            .success(function (data) {
                $scope.restaurants = data.restaurants;
            })
            .error(function (error) {
                //$scope.status = 'Unable to load restaurant by tag data: ' + error.message;
                console.log('Unable to load restaurant by tag data: ' + error.message);
            });;
  }

}]);

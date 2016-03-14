/*
app.controller('TagCtrl', ['$scope', 'TagService', function($scope, TagService){
  'use strict';
  $scope.tag;
  $scope.status;
  getTags();

  function getTags(){
    TagService.getTags()
            .success(function (data) {
                $scope.tag = data.tags;
            })
            .error(function (error) {
                $scope.status = 'Unable to load tag data: ' + error.message;
            });;
  }

  //$scope.searchTag = RestaurantService.getRestaurantbyTag(this.select.id);

}]);
*/

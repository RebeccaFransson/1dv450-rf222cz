app.controller('TagCtrl', ['$scope', 'TagService', function($scope, TagService){
  'use strict';
  $scope.tag;
  $scope.preSelected = 'No tags in db';
  $scope.status;
  getTags();

  function getTags(){
    TagService.getTags()
            .success(function (data) {
                $scope.tag = data.tags;
                $scope.preSelected = data.tags.name;
            })
            .error(function (error) {
                $scope.status = 'Unable to load tag data: ' + error.message;
            });;
  }

}]);

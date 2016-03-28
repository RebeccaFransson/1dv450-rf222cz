app.controller('HandleTagsCtrl', ['$scope', '$sessionStorage', 'tags', 'LoginService', 'TagService', 'AlertService',
function($scope, $sessionStorage, tags, LoginService, TagService, AlertService){

  if(tags !== null){
    $scope.tags = tags.data.tags;
  }else{
    $scope.tags = $sessionStorage.tags.data;
  }

  
  $scope.deleteTag = function(id){
    TagService.deleteTag(id, LoginService.isLoggedIn().token.jwt)
          .success(function(data){
            AlertService.handlesAlerts(true, data.message, 'info');
          })
          .error(function (error) {
            if(error){
              AlertService.handlesAlerts(false, error.errors, 'danger');
            }else{
              AlertService.handlesAlerts(false, 'Someting went wrong, try again', 'danger');
            }
          });
  }

}])

app.controller('EditTagCtrl', ['$scope', '$sessionStorage', '$location', '$uibModalInstance', 'TagService', 'AlertService', 'LoginService', 'tag',
function($scope, $sessionStorage, $location, $uibModalInstance, TagService, AlertService, LoginService, tag){

$scope.tag = tag;

$scope.cancel = function () {
  $uibModalInstance.dismiss('cancel');
};

$scope.editTagSubmit = function(){
  var tagObj = {tag: $scope.tag}
  TagService.editTag(tagObj, $scope.tag.id, LoginService.isLoggedIn().token.jwt)
        .success(function(data){
          AlertService.handlesAlerts(true, 'Tag '+$scope.tag.name+' is now updated!', 'info');
          $scope.cancel();
        })
        .error(function (error) {
          console.log(error);
          AlertService.handlesAlerts(false, 'Someting went wrong, try again', 'danger');
        });
}

}]);

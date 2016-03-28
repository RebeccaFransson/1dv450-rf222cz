app.controller('HandleTagsCtrl', ['$scope', '$sessionStorage', '$location', '$uibModal', 'tags', 'LoginService', 'TagService', 'AlertService',
function($scope, $sessionStorage, $location, $uibModal, tags, LoginService, TagService, AlertService){

  if(tags !== null){
    $scope.tags = tags.data.tags;
  }else{
    $scope.tags = $sessionStorage.tags.data;
  }

//paginering
  $scope.currentPage = 0;
  $scope.pageSize = 5;
  $scope.numberOfPages=function(){
        return Math.ceil($scope.tags.length/$scope.pageSize);
    }



  $scope.deleteTag = function(id, index){
    TagService.deleteTag(id, LoginService.isLoggedIn().token.jwt)
          .success(function(data){
            AlertService.handlesAlerts(true, data.message, 'info');
            $scope.tags.splice(index, 1);
          })
          .error(function (error) {
            if(error){
              AlertService.handlesAlerts(false, error.errors, 'danger');
            }else{
              AlertService.handlesAlerts(false, 'Someting went wrong, try again', 'danger');
            }
          });
  }


  $scope.showEditTagModal = function(tag){
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'Templates/EditTag.html',
      controller: 'EditTagCtrl',
      size: 'lg',
      resolve: {
        tag: function () {
          //Tvungen att göra nytt obj så att den gamla ej ändras i klienten ifall användaren skulla avbryta ändringen
           return {
             id: tag.id,
             name: tag.name,
           };
         }
      }
    })
  };

}])

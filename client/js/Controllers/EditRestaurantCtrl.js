app.controller('EditRestaurantCtrl', ['$scope', '$sessionStorage', '$stateParams', '$location', '$uibModalInstance', 'RestaurantService', 'AlertService', 'LoginService', 'restaurant',
function($scope, $sessionStorage, $stateParams, $location, $uibModalInstance, RestaurantService, AlertService, LoginService, restaurant){


  $scope.rest = restaurant;
  $scope.amountLocations = restaurant.locations;
  $scope.tags = $sessionStorage.tags.data;




  $scope.addLocationInput = function(){
    $scope.amountLocations.push({});
  }
  $scope.addTag = function(){
    if($scope.rest.tags == undefined){
      $scope.rest.tags = [];
    }
    $scope.rest.tags.push({name: $scope.rest.selectTag.name})
  };
  $scope.addTagInput = function(){
    if($scope.rest.tags == undefined){
      $scope.rest.tags = [];
    }
    $scope.rest.tags.push({name: $scope.rest.newTag})
    $scope.rest.newTag = '';
  };
  $scope.removeTag = function(index){
    $scope.rest.tags.splice(index, 1);
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };


  $scope.editRestaurantSubmit = function(){
    var restaurantObj = {restaurant: $scope.rest}
    console.log($scope.rest);
    var user = LoginService.isLoggedIn();
    RestaurantService.editRestaurant(restaurantObj, $scope.rest.id, user.token.jwt)
          .success(function(data){
            AlertService.handlesAlerts(true, 'Restaurant '+$scope.rest.name+' is now updated!', 'info');
            $location.path('/creatorRestaurants/'+user.userdata.creator.id);
            $scope.cancel();
          })
          .error(function (error) {
            console.log(error);
            AlertService.handlesAlerts(false, 'Someting went wrong, try again', 'danger');
          });
  }
}]);

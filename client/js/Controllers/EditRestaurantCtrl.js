app.controller('EditRestaurantCtrl', ['$scope', '$sessionStorage', '$location', 'RestaurantService', 'AlertService', 'LoginService', '$uibModalInstance',
function($scope, $sessionStorage, $location, RestaurantService, AlertService, LoginService, $uibModalInstance){

  /*EDIT*/
  $scope.showEditRestaurant = function(rest){
    if($scope.anableEdit == undefined || $scope.anableEdit == false){
      $scope.anableEdit = true;
    }else{
      $scope.anableEdit = false;
    }
    console.log(rest.locations);
    $scope.restaurant = rest;
    $scope.amountLocations = rest.locations;
    $scope.tags = $sessionStorage.tags.data;
  };

  $scope.addLocationInput = function(){
    $scope.amountLocations.push({});
  }
  $scope.addTag = function(){
    if($scope.restaurant.tags == undefined){
      $scope.restaurant.tags = [];
    }
    console.log($scope.restaurant.selectTag);
    $scope.restaurant.tags.push({name: $scope.restaurant.selectTag.name})
  };
  $scope.addTagInput = function(){
    if($scope.restaurant.tags == undefined){
      $scope.restaurant.tags = [];
    }
    $scope.restaurant.tags.push({name: $scope.restaurant.newTag})
    $scope.restaurant.newTag = '';
  };
  $scope.removeTag = function(index){
    $scope.restaurant.tags.splice(index, 1);
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };


    $scope.editRestaurantSubmit = function(){
      var restaurantObj = {restaurant: $scope.restaurant}
      RestaurantService.editRestaurant(restaurantObj, $scope.restaurant.id, LoginService.isLoggedIn().token.jwt)
            .success(function(data){
              AlertService.handlesAlerts(true, 'Restaurant '+$scope.restaurant.name+' is now updated!', 'info');
              $scope.anableEdit = false;
              $location.path('/restaurants');
            })
            .error(function (error) {
              console.log(error);
              AlertService.handlesAlerts(false, 'Someting went wrong, try again', 'danger');
            });
    }

}]);

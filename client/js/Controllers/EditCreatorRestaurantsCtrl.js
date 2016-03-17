app.controller('EditCreatorRestaurantsCtrl', ['$scope', '$stateParams', '$sessionStorage', '$location', 'RestaurantService', 'AlertService', 'LoginService',
function($scope, $stateParams, $sessionStorage, $location, RestaurantService, AlertService, LoginService){
getRestaurants();

/*GET RESTAURANT BY CREATORID*/
function getRestaurants(){
  RestaurantService.getRestaurantbyCreator($stateParams.id)
        .success(function(data){
          $scope.restaurants = data.restaurants;
        })
        .error(function (error) {
            AlertService.handlesAlerts(false, 'Someting went wrong when getting the restaurants', 'danger');
        });
}

/*DELETE*/
$scope.deleteRestaurant = function(id){
  RestaurantService.deleteRestaurant(id, LoginService.isLoggedIn().token.jwt)
        .success(function(data){
          AlertService.handlesAlerts(true, data.message, 'info');
          $location.path('/restaurants');
        })
        .error(function (error) {
          AlertService.handlesAlerts(false, 'Someting went wrong, try again', 'danger');
        });
}

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
$scope.removeTag = function(index){
  $scope.restaurant.tags.splice(index, 1);
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

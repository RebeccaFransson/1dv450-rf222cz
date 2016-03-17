app.controller('EditCreatorRestaurantsCtrl', ['$scope', '$stateParams', '$sessionStorage', 'RestaurantService', 'AlertService', 'LoginService',
function($scope, $stateParams, $sessionStorage, RestaurantService, AlertService, LoginService){
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
          //TODO:uppdatera listan
          //getRestaurants(); //fungerar ej
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
  $scope.restaurant = rest;
  $scope.tags = $sessionStorage.tags.data;
};

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
            //console.log($scope.restaurants.every(findRestaurant));
            AlertService.handlesAlerts(true, 'Restaurant '+$scope.restaurant.name+' is now updated!', 'info');
            $scope.anableEdit = false;
            //TODO:uppdatera listan
            //getRestaurants(); //fungerar ej
          })
          .error(function (error) {
            console.log(error);
            AlertService.handlesAlerts(false, 'Someting went wrong, try again', 'danger');
          });
  }
}]);

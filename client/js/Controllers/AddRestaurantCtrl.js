app.controller('AddRestaurantCtrl', ['$scope', '$sessionStorage', '$location', 'RestaurantService', 'AlertService',
function($scope, $sessionStorage, $location, RestaurantService, AlertService){

  $scope.isReadonly = false;
  $scope.tags = $sessionStorage.tags.data;
  $scope.amountLocations = [{}];


  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.isEmpty = function(){
    return $scope.restaurant != undefined && $scope.restaurant.name != undefined &&
    $scope.restaurant.description != undefined && $scope.restaurant.location != undefined;
  };

  $scope.addLocationInput = function(){
    $scope.amountLocations.push({});
  };
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


  $scope.submit = function(){
    $scope.restaurant.locations = [];
    for (var key in $scope.restaurant.location) {
      $scope.restaurant.locations.push({address_city: $scope.restaurant.location[key]})
    }

    var restaurantSendObj = {
      restaurant: {
        name: $scope.restaurant.name,
        description: $scope.restaurant.description,
        stars: $scope.restaurant.stars,
        tags: $scope.restaurant.tags,
        locations: $scope.restaurant.locations
      }
    }

    RestaurantService.addRestaurant(restaurantSendObj, $sessionStorage.currentUser.token.jwt)
            .success(function (data) {
                AlertService.handlesAlerts(true, 'Your Restaurant is registerd!', 'success');//true is for a good message
                console.log($sessionStorage.restaurants);
                $location.path('/restaurants');
            })
            .error(function (error) {
              if(error.errors){
                AlertService.handlesAlerts(false, 'Your form isnt valid', 'warning');//false stands for an error
              }else{
                AlertService.handlesAlerts(false, 'Someting wrong with the server', 'danger');
              }
            });
  };

}])

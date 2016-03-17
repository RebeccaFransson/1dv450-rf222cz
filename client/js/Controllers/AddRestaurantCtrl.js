app.controller('AddRestaurantCtrl', ['$scope', '$sessionStorage', 'RestaurantService', 'AlertService',
function($scope, $sessionStorage, RestaurantService, AlertService){

  $scope.isReadonly = false;
  $scope.tags = $sessionStorage.tags.data;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.isEmpty = function(){
    return $scope.restaurant != undefined && $scope.restaurant.name != undefined && $scope.restaurant.description != undefined
  };
  $scope.submit =  function(){
    $scope.restaurant.tags = [{name: $scope.restaurant.tags.name}];
    $scope.restaurant.locations = [{address_city: $scope.restaurant.locations}];

    console.log($scope.restaurant);
    RestaurantService.addRestaurant($scope.restaurant, $sessionStorage.currentUser.token.jwt)
            .success(function (data) {
                AlertService.handlesAlerts(true, 'Your Restaurant is registerd!', 'success');//true is for a good message
                delete $sessionStorage.restaurants;
            })
            .error(function (error) {
              console.log(error);
              if(error.errors){
                AlertService.handlesAlerts(false, error.errors, 'warning');//false stands for an error
              }else{
                AlertService.handlesAlerts(false, 'Your form is not valid', 'warning');
              }
            });
  };

}])

app.controller('CreatorRestaurantsCtrl', ['$scope', '$stateParams', 'RestaurantService', 'AlertService', 'LoginService',
function($scope, $stateParams, RestaurantService, AlertService, LoginService){

  RestaurantService.getRestaurantbyCreator($stateParams.id)
        .success(function(data){
          console.log(data);
          $scope.restaurants = data.restaurants;
        })
        .error(function (error) {
            AlertService.handlesAlerts(false, 'someting went wrong getting the restaurants', 'danger');
        });

  $scope.deleteRestaurant = function(id){
    console.log(LoginService.isLoggedIn().token.jwt);
    RestaurantService.deleteRestaurant(id, LoginService.isLoggedIn().token.jwt)
          .success(function(data){
            console.log(data);
            //$scope.restaurants = data.restaurants;
            AlertService.handlesAlerts(true, 'removed', 'warning');
          })
          .error(function (error) {
            AlertService.handlesAlerts(false, 'someting went wrong getting the restaurants', 'danger');
          });
  }
}]);

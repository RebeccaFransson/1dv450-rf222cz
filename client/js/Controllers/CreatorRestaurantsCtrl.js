app.controller('CreatorRestaurantsCtrl', ['$scope', '$stateParams', 'RestaurantService', 'AlertService', 'LoginService',
function($scope, $stateParams, RestaurantService, AlertService, LoginService){
getRestaurants();

function getRestaurants(){
  RestaurantService.getRestaurantbyCreator($stateParams.id)
        .success(function(data){
          console.log(data);
          $scope.restaurants = data.restaurants;
        })
        .error(function (error) {
            AlertService.handlesAlerts(false, 'Someting went wrong when getting the restaurants', 'danger');
        });
}


  $scope.deleteRestaurant = function(id){
    console.log(LoginService.isLoggedIn().token.jwt);
    RestaurantService.deleteRestaurant(id, LoginService.isLoggedIn().token.jwt)
          .success(function(data){
            AlertService.handlesAlerts(true, data.message, 'warning');
            getRestaurants();
          })
          .error(function (error) {
            AlertService.handlesAlerts(false, 'Someting went wrong, try again', 'danger');
          });
  }
}]);

app.controller('CreatorRestaurantsCtrl', ['$scope', '$stateParams', '$sessionStorage', '$location', 'RestaurantService', 'AlertService', 'LoginService', '$uibModal',
function($scope, $stateParams, $sessionStorage, $location, RestaurantService, AlertService, LoginService, $uibModal){
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
};

/*DELETE*/
$scope.deleteRestaurant = function(id, index){
  RestaurantService.deleteRestaurant(id, LoginService.isLoggedIn().token.jwt)
        .success(function(data){
          AlertService.handlesAlerts(true, data.message, 'info');
          $location.path('/restaurants');
          $scope.restaurants.splice(index, 1);
        })
        .error(function (error) {
          AlertService.handlesAlerts(false, 'Someting went wrong, try again', 'danger');
        });
};

$scope.showEditModal = function(rest){
  var modalInstance = $uibModal.open({
    animation: true,
    templateUrl: 'Templates/EditRestaurant2.html',
    controller: 'EditRestaurantCtrl',
    size: 'lg',
    resolve: {
      restaurant: function () {
        //Tvungen att göra nytt obj så att den gamla ej ändras i klienten ifall användaren skulla avbryta ändringen
         return {
           id: rest.id,
           name: rest.name,
           description: rest.description,
           stars: rest.stars,
           locations: rest.locations,
           tags: rest.tags
         };
       }
    }
  })
};

}]);

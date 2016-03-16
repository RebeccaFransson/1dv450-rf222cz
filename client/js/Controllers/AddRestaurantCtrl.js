app.controller('AddRestaurantCtrl', ['$scope', '$sessionStorage', '$cacheFactory', 'RestaurantService', 'AlertService',
function($scope, $sessionStorage, $cacheFactory, RestaurantService, AlertService){
  console.log($cacheFactory.get('$http'));
  //$scope.rate = 7;
  //$scope.max = 5;
  $scope.isReadonly = false;
  $scope.tag = $sessionStorage.tag.data;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.isEmpty = function(){
    return $scope.restaurant != undefined && $scope.restaurant.name != undefined && $scope.restaurant.description != undefined
  };
  $scope.submit =  function(){
    $scope.restaurant.tag = {name: $scope.restaurant.tag.name};
    $scope.restaurant.location = {name: $scope.restaurant.location.address_city};

    RestaurantService.addRestaurant($scope.restaurant, $sessionStorage.currentUser.token.jwt)
            .success(function (data) {
                console.log(data.restaurant.name);
                $sessionStorage.alerts.unshift({type: 'success', msg: 'Your Restaurant is registerd!'});
                AlertService.handlesAlerts('Your form is not valid', 'restaurants');
                //delete $sessionStorage.restaurants;
                var httpCache = $cacheFactory.get('$http');
                httpCache.remove('http://localhost:3000/api/restaurants/?key=fb3737b1c0d01edd92cf64262bc8efdf');
            })
            .error(function (error) {
              console.log(error);
                AlertService.handlesAlerts('Your form is not valid', 'restaurants');
            });
  };

}])

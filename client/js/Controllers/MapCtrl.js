app.controller('MapController', ['$scope', '$sessionStorage', function($scope, $sessionStorage){
  $scope.restaurants = $sessionStorage.restaurants;
}])

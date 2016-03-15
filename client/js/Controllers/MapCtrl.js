app.controller('MapCtrl', ['$scope', '$sessionStorage', function($scope, $sessionStorage){
  //$scope.restaurants = $sessionStorage.restaurants;
  var vm = this;
  
  $scope.$on('mapInitialized', function(evt, map){
    console.log('hej');
    vm.map = map;
  });

  vm.showInfoWindow = function(event, rest, lat, lon){
    vm.rest = rest;
    vm.lat = lat;
    vm.lon = lon;
    vm.map.showInfoWindow('restInfo', rest, lat, lon);
  };
}]);

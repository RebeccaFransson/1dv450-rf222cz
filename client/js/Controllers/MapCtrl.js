app.controller('MapCtrl', ['$scope', '$sessionStorage', function($scope, $sessionStorage){

  //console.log($sessionStorage.restaurants);

  var vm = this;

  $scope.$on('mapInitialized', function(evt, map){
    vm.map = map;
  });

  vm.showInfoWindow = function(event, rest, lat, lon){
    vm.rest = rest;
    vm.position = {lat: lat, lon: lon};
    vm.map.showInfoWindow('restInfo', rest, lat, lon);
  };

}]);

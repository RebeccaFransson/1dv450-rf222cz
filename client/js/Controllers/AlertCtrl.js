app.controller('AlertCtrl', ['$scope', '$sessionStorage', function($scope, $sessionStorage) {
  //$sessionStorage.alerts = [];
  //$scope.alerts = $sessionStorage.alerts;
  $scope.alerts = [{type: 'info', msg: 'Welcome to Restaurant Map, enjoy your stay!'}];

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

}])

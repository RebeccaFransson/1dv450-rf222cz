app.controller('AlertCtrl', ['$scope', '$sessionStorage', function($scope, $sessionStorage) {

  $sessionStorage.alerts = [];//{type: 'info', msg: 'Welcome to Restaurant Map, enjoy your stay!'}

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
    $sessionStorage.alerts = $scope.alerts;
  };
  $scope.alerts = $sessionStorage.alerts;
}])

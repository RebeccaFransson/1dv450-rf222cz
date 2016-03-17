app.controller('LogoutCtrl', ['$scope', '$sessionStorage', '$location', 'AlertService',
function($scope, $sessionStorage, $location, AlertService){
  delete $sessionStorage.currentUser;
  AlertService.handlesAlerts(true, "Bye and welcome back! Hope we'll see you again soon!", 'info');
  $location.path('/restaurants');//fungerar ej med denna redrirect
}])

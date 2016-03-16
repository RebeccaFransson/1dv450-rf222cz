app.controller('LogoutCtrl', ['$scope', '$sessionStorage', '$location', '$window', function($scope, $sessionStorage, $location, $window){
  delete $sessionStorage.currentUser;
  $sessionStorage.alerts.unshift({type: 'info', msg: "Bye and welcome back! Hope we'll see you again soon!"});
  $location.path('/restaurants');//fungerar en med denna redrirect
  console.log('logged out');
}])

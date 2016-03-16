app.controller('NavigationCtrl', ['$scope', '$sessionStorage', function($scope, $sessionStorage){
  $scope.isLoggedIn = function(){
    return $sessionStorage.currentUser;
  }
}])

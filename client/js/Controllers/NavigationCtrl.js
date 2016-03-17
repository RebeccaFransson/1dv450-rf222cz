app.controller('NavigationCtrl', ['$scope', 'LoginService', function($scope, LoginService){
  $scope.isLoggedIn = function(){
    return LoginService.isLoggedIn() !== undefined;
  }
  if($scope.isLoggedIn()){
    $scope.user = LoginService.isLoggedIn().userdata.creator;
  }
}])

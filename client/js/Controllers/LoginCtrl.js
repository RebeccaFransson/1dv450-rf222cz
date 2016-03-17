app.controller('LoginCtrl', ['$scope', '$sessionStorage', '$location', 'LoginService', 'AlertService',
function($scope, $sessionStorage, $location, LoginService, AlertService){

  $scope.submit =  function(){
    LoginService.getJWT($scope.login)
          .success(function(token){
            setCurrentUser($scope.login.email, token);
          })
          .error(function (error) {
              AlertService.handlesErrors(true, 'The login failed!',  'warning');
          });
  };

  $scope.isEmpty = function(){
    return $scope.login !== undefined && $scope.login.email !== undefined && $scope.login.password !== undefined
  };

  function setCurrentUser(email, token){
    LoginService.getCreatorByEmail(email)
          .success(function(userdata){
            $sessionStorage.currentUser = {userdata, token};
            AlertService.handlesAlerts(true, 'Welcome to Restaurant Map, you are now logged in!', 'info');
            $location.path( '/restaurants');
          })
          .error(function(error){
              AlertService.handlesErrors(false, "Couldn't get user with this email "+email,  'danger');
          });

  }


}]);

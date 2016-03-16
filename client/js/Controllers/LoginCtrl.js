app.controller('LoginCtrl', ['$scope', '$sessionStorage', '$location', 'LoginService', 'AlertService',
function($scope, $sessionStorage, $location, LoginService, AlertService){

  $scope.submit =  function(){
    LoginService.getJWT($scope.login)
          .success(function(token){
            setCurrentUser($scope.login.email, token);
          })
          .error(function (error) {
              AlertService.handlesErrors(error = {errors: 'The login failed'});
          });
  };

  $scope.isEmpty = function(){
    return $scope.login != undefined && $scope.login.email != undefined && $scope.login.password != undefined
  };

  function setCurrentUser(email, token){
    LoginService.getCreatorByEmail(email)
          .success(function(userdata){
            $sessionStorage.currentUser = {userdata, token};
            $sessionStorage.alerts.unshift({type: 'info', msg: 'Welcome to Restaurant Map, you are now logged in!'});
            $location.path( '/restaurants');
            console.log($sessionStorage.currentUser);
          })
          .error(function (error) {
              AlertService.handlesErrors(error = {errors: 'Coundt get user with this email '+email});
          });

  }


}]);

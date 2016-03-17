app.controller('LoginCtrl', ['$scope', '$sessionStorage', '$location', 'LoginService', 'AlertService',
function($scope, $sessionStorage, $location, LoginService, AlertService){
//setCurrentUser('rebecca@restaurantmap.com', {jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0NTgzMTk4OTIsImF1ZCI6ZmFsc2UsInN1YiI6Mn0.TLMNXiEXMv0XadyqwjSw_09e76FXHfCynGw9OnrWIuA"})
  $scope.submit =  function(){
    console.log('loggar in');
    console.log($scope.login);
    LoginService.getJWT($scope.login)
          .success(function(token){
            console.log(token);
            setCurrentUser($scope.login.email, token);
          })
          .error(function (error) {
            console.log(error);
              AlertService.handlesAlerts(true, 'The login failed!',  'warning');
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
              AlertService.handlesAlerts(false, "Couldn't get user with this email "+email,  'danger');
          });

  }


}]);

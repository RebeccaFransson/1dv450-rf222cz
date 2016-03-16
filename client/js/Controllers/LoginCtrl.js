app.controller('LoginCtrl', ['$scope', '$sessionStorage', 'LoginService', 'AlertService', function($scope, $sessionStorage, LoginService, AlertService){
  $scope.submit =  function(){

    LoginService.getJWT($scope.login)
          .success(function(data){
            console.log(data);
          })
          .error(function (error) {
              AlertService.handlesErrors(error = {errors: 'The login failed'});
          });
  };

  $scope.isEmpty = function(){
    return $scope.login != undefined && $scope.login.email != undefined && $scope.login.password != undefined
  };
}]);

app.controller('LoginCtrl', ['$scope', '$sessionStorage', 'LoginService', function($scope, $sessionStorage,LoginService){
  $scope.submit =  function(){
    console.log($scope.login);
    var jwt = LoginService.getJWT($scope.login)
          .success(function(data){
            console.log(data);
          })
          .error(function (error) {
              //$scope.status = 'Unable to load tags: ' + error.message;
              console.log('Unable to get jwt: ' + error);
              $sessionStorage.alerts.unshift({type: 'warning', msg: 'kunde inte hämta jwt'});
          });

  }
}]);

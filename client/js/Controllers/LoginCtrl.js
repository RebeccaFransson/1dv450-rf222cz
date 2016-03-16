app.controller('LoginCtrl', ['$scope', '$sessionStorage', 'LoginService', function($scope, $sessionStorage,LoginService){
  $scope.submit =  function(){
    console.log($scope.login);
    var jwt = LoginService.getJWT($scope.login)
          .success(function(data){
            console.log(data);
          })
          .error(function (error) {
              $sessionStorage.alerts.unshift({type: 'danger', msg: 'Inloggningen misslyckades'});
              //Sätt timeout och ta bort?
          });

  }
}]);

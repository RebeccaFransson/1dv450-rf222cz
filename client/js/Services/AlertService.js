app.factory('AlertService', ['$sessionStorage', function($sessionStorage){
  'use strict';

  this.handlesErrors = function(error, resource){
    if(error == undefined){
      $sessionStorage.alerts.unshift({type: 'warning', msg: 'Sorry, we are unabled to reach the server right now. Cant load '+resource});
      //TODO: Try again-knapp?
    }else{
      $sessionStorage.alerts.unshift({type: 'warning', msg: 'Error: ' + error.errors});
    }
  }
  return this;
}]);

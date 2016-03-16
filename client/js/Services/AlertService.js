app.factory('AlertService', ['$sessionStorage', function($sessionStorage){
  'use strict';

  this.handlesAlerts = function(error, errorType, resource){
    if(error == undefined){
      $sessionStorage.alerts.unshift({type: errorType, msg: 'Sorry, we are unabled to reach the server right now. Cant load '+resource});
      //TODO: Try again-knapp?
    }else{
      $sessionStorage.alerts.unshift({type: errorType, msg: 'Error: ' + error});
    }
  }
  return this;
}]);

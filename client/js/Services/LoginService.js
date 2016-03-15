app.factory('LoginService', ['Resources', function(Resources){
  'use strict';

  this.getJWT= function(usercred) {
    return Resources.getJWT({auth: usercred});
  }

  return this;
}]);

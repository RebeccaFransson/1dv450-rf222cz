app.factory('LoginService', ['Resources', '$sessionStorage', function(Resources, $sessionStorage){
  'use strict';

  this.getJWT= function(usercred) {
    return Resources.postResource('knock/auth_token/', {auth: usercred} , 'http://localhost:3000/');
  }

  //hämta user info ->currentuser
  this.getCreatorByEmail = function(userEmail){
    return Resources.getResources('/creator_by_email', {email: userEmail});
  }

  this.isLoggedIn = function(){
    return $sessionStorage.currentUser;
  }

  //TODO: switchloggedinloggedout

  return this;
}]);

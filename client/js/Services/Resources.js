app.factory('Resources', ['$http', 'api_key', 'base_url', function($http, api_key, base_url){
  'use strict';

  this.getResources = function(resource, resourceParams){
    var params = Object.assign({ key: api_key }, resourceParams);
    console.log(resource);
    return $http.get(base_url + resource, {
      params: params,
      cache: true
    })
  }

  this.getJWT = function(resourceParams){
    var params = Object.assign({ key: api_key });
    return $http.post('http://localhost:3000/knock/auth_token', resourceParams,{
      params: params,
      cache: true
    })
  }

  return this;
}])

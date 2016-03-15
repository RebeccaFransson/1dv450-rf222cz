app.factory('Resources', ['$http', 'api_key', 'base_url', function($http, api_key, base_url){
  'use strict';

  this.getResources = function(resource, resourceParams, baseUrl){

    var params = Object.assign({ key: api_key }, resourceParams);
    var url = baseUrl == undefined ? base_url : baseUrl;
    console.log(resource);
    return $http.get(url + resource, {
      params: params,
      cache: true
    })
  }
  return this;
}])

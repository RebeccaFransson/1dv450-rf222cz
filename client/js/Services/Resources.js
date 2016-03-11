app.factory('Resources', ['$http', 'api_key', 'base_url', function($http, api_key, base_url){
  'use strict';

  this.getResources = function(resource, resourceParams, baseUrl){
    console.log(resource);
    console.log(resourceParams);
    console.log(baseUrl);
    var params = Object.assign({ key: api_key }, resourceParams);
    var url = baseUrl == undefined ? base_url : baseUrl;
    console.log(url);
    return $http.get(url + resource, {
      params: params
    })
  }
  return this;
}])

app.factory('Resources', ['$http', 'api_key', 'base_url', function($http, api_key, base_url){
  'use strict';

  this.getResources = function(resource, resourceParams){
    var params = Object.assign({ key: api_key }, resourceParams);
    return $http.get(base_url + resource, {
      params: params,
      cache: true
    })
  }

  this.postResource = function(resource, resourceParams, baseUrl, headers){
    var params = Object.assign({ key: api_key });
    var url = baseUrl == undefined ? base_url : baseUrl;
    return $http.post(url + resource, resourceParams,{
      headers: headers,
      params: params
    })
  }

  return this;
}])

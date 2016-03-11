app.factory('RestaurantData', ['$http', function($http){
  'use strict';

  var urlBase = 'http://localhost:3000/api/restaurants';
  var key = '?key=fb3737b1c0d01edd92cf64262bc8efdf';

  this.getRestaurants = function(){
    var json = $http.get(urlBase+key);
    return json;
  }
  return this;
}])

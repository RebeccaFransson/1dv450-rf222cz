app.factory('RestaurantService', ['Resources', function(Resources){
  'use strict';

  this.getRestaurants = function() {
    return Resources.getResources('restaurants/');
  };

  return this;
}]);

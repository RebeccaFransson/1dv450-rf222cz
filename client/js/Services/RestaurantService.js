app.factory('RestaurantService', ['Resources', function(Resources){//Deklarerar dependencies igen om jag bestämmer mig för att minifiera min kod
  'use strict';

  this.getRestaurants = function() {
    return Resources.getResources('restaurants/');
  };

  this.getRestaurantbyTag = function(id) {
    return Resources.getResources('tags/'+id+'/restaurants');
  };

  return this;
}]);

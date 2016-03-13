app.factory('RestaurantService', ['Resources', function(Resources){//Deklarerar dependencies igen om jag bestämmer mig för att minifiera min kod
  'use strict';

  this.getRestaurants = function() {
    return Resources.getResources('restaurants/');
  };

  this.getRestaurantbyTag = function(id) {
    console.log(id == undefined);
    if(id == undefined){
      return this.getRestaurants();
    }else{
      return Resources.getResources('tags/'+id+'/restaurants/');
    }
  };

  this.getRestaurant = function(id) {
    return Resources.getResources('restaurants/'+id+'/');
  };

  return this;
}]);

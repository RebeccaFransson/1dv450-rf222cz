app.factory('RestaurantService', ['Resources', function(Resources){//Deklarerar dependencies igen om jag bestämmer mig för att minifiera min kod
  'use strict';

  this.getRestaurants = function() {
    return Resources.getResources('restaurants/');
  };

  this.getRestaurantbyTag = function(id) {
    if(id == undefined){
      return this.getRestaurants();
    }else{
      return Resources.getResources('tags/'+id+'/restaurants/');
    }
  };

  this.getRestaurant = function(id) {
    return Resources.getResources('restaurants/'+id+'/');
  };

  this.getRestaurantbyQuery = function(searchText) {
    return Resources.getResources('restaurants/', {query: searchText});
  }

  /*ADD RESTAURANT*/
  this.addRestaurant = function(restaurantObj, token){
    return Resources.postResource('restaurants/', {restaurant: restaurantObj}, undefined, {Authorization: token});
  }

  return this;
}]);

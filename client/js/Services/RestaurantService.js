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

  /*this.getRestaurant = function(id) {
    return Resources.getResources('restaurants/'+id+'/');
  };*/

  this.getRestaurantbyQuery = function(searchText) {
    return Resources.getResources('restaurants/', {query: searchText});
  }
  this.getRestaurantbyCreator = function(creatorid) {
    return Resources.getResources('creators/'+creatorid+'/restaurants');
  }

  /*ADD RESTAURANT*/
  this.addRestaurant = function(restaurantObj, token){
    return Resources.postResource('restaurants/', {restaurant: restaurantObj}, undefined, {Authorization: token});
  }
  /*DELETE RESTAURANT*/
  this.deleteRestaurant = function(id, token){
    return Resources.deleteResource('restaurants/'+id, {Authorization: token});
  }

  return this;
}]);


app.controller('RestaurantCtrl', ['$scope', '$sessionStorage', 'restaurants', 'tags', 'RestaurantService', 'TagService', 'AlertService',
function($scope, $sessionStorage, restaurants, tags, RestaurantService, TagService, AlertService) {
  'use strict';
  //delete $sessionStorage.restaurants;
  $scope.restaurants = restaurants.data.restaurants;
  $sessionStorage.restaurants = $scope.restaurants;
  $scope.tag = tags.data.tags;
  //console.log($sessionStorage.currentUser);

console.log($sessionStorage.restaurants);
  if($sessionStorage.restaurants == undefined || $sessionStorage.tag.expire < new Date().getTime()){
    getRestaurants();
  }

  $scope.restaurants = $sessionStorage.restaurants;



//Kolla om det finns något sparat i sessionen, eller om utgångsdaumet för sessionen har gått ut(20min).
//Hämta nya taggar om sessionen inte stämmer
//Annars använder vi oss utav de som finns sparade i sessionen
//taggar
/*
  if($sessionStorage.tag == undefined || $sessionStorage.tag.expire < new Date().getTime()){
    console.log('byter ut taggar från session');
    getTags();
  }else{
    $scope.tag = $sessionStorage.tag.data;
  }
//restauranger
  if($sessionStorage.restaurants == undefined || $sessionStorage.restaurants.expire < new Date().getTime()){
    console.log('byter ut rest från session');
    getRestaurants();
  }else{
    $scope.restaurants = $sessionStorage.restaurants.data;
  }
*/

//Vid förändring i select-tags
  $scope.searchTag = function(){
    getRestaurantbyTag(this.select.id);
  }
  $scope.searchRestaurants = function(){
    getRestaurantByQuery(this.searchText);
    this.searchText = '';
  }



//Hämtar alla taggar
  function getTags(){
    TagService.getTags()
      .success(function(data){
        $scope.tag = data.tags;
        $sessionStorage.tag = {data: $scope.tag, expire: new Date().getTime()+(1*60000)};
      })
      .error(function (error) {
          AlertService.handlesErrors(error, 'tags');
      });
  }
//Hämtar alla restauranger
  function getRestaurants(){
    RestaurantService.getRestaurants()
            .success(function (data) {
                $sessionStorage.restaurants = {data: data.restaurants, expire: new Date().getTime()+(1*60000)};
            })
            .error(function (error) {
                AlertService.handlesErrors(error, 'restaurants');
            });
  }

//Hämtar alla restauranger med viss tag
 function getRestaurantbyTag(id){
   RestaurantService.getRestaurantbyTag(id)
           .success(function (data) {
               $scope.restaurants = data.restaurants;
           })
           .error(function (error) {
               AlertService.handlesErrors(error, 'restaurants');
           });
  }

  //Hämtar alla restauranger med sökord
   function getRestaurantByQuery(searchText){
     RestaurantService.getRestaurantbyQuery(searchText)
             .success(function (data) {
                 $scope.restaurants = data.restaurants;
             })
             .error(function (error) {
                 $sessionStorage.alerts.unshift({type: 'warning', msg: 'Unable to find restaurants with "'+searchText+'" in they names.  Error: ' + error.errors});
             });
    }

}]);


app.controller('RestaurantCtrl', ['$scope', '$sessionStorage', 'RestaurantService', 'TagService',
function($scope, $sessionStorage, RestaurantService, TagService) {
  'use strict';

  $scope.restaurants;
  $scope.status;
  $scope.tag;



//Kolla om det finns något sparat i sessionen, eller om utgångsdaumet för sessionen har gått ut(20min).
//Hämta nya taggar om sessionen inte stämmer
//Annars använder vi oss utav de som finns sparade i sessionen
//taggar
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
        $scope.tag.unshift({name: 'All tags'});
        $sessionStorage.tag = {data: $scope.tag, expire: new Date().getTime()+(20*60000)};
      })
      .error(function (error) {
          //$scope.status = 'Unable to load tags: ' + error.message;
          console.log('Unable to load tags: ' + error);
      });
  }
//Hämtar alla restauranger
  function getRestaurants(){
    RestaurantService.getRestaurants()
            .success(function (data) {
                $scope.restaurants = data.restaurants;
                $sessionStorage.restaurants = {data: $scope.restaurants, expire: new Date().getTime()+(20*60000)};

            })
            .error(function (error) {
                //$scope.status = 'Unable to load restaurant data: ' + error.message;
                console.log('Unable to load restaurant data: ' + error.errors);
            });
  }
//Hämtar alla restauranger med viss tag
 function getRestaurantbyTag(id){
   RestaurantService.getRestaurantbyTag(id)
           .success(function (data) {
               $scope.restaurants = data.restaurants;
           })
           .error(function (error) {
               //$scope.status = 'Unable to load restaurant by tag data: ' + error.message;
               console.log('Unable to load restaurant by tag data: ' + error.errors);

           });
  }

  //Hämtar alla restauranger med sökord
   function getRestaurantByQuery(searchText){
     RestaurantService.getRestaurantbyQuery(searchText)
             .success(function (data) {
                 $scope.restaurants = data.restaurants;
             })
             .error(function (error) {
                 $scope.status = 'Unable to load restaurant by tag data: ' + error.errors;
                 //TODO: Om inget hittas, flash meddelande
                 console.log('Unable to load restaurant by tag data: ' + error.errors);
             });
    }

}]);

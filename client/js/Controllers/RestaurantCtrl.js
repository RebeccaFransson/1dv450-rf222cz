
app.controller('RestaurantCtrl', ['$scope', '$sessionStorage', 'restaurants', 'tags', 'RestaurantService', 'TagService', 'AlertService', 'LoginService',
function($scope, $sessionStorage, restaurants, tags, RestaurantService, TagService, AlertService, LoginService) {
  'use strict';

  //Om en ny tag eller resturang är tilllagd tas sessionen bort
  //Kollar om det finns en session annars hämtar vi ny data från api
  if(restaurants !== null){
    $sessionStorage.restaurants = {data: restaurants.data.restaurants, expire: new Date().getTime()+(1*60000)}
  }
  if(tags !== null){
    $sessionStorage.tags = {data: tags.data.tags, expire: new Date().getTime()+(1*60000)}
  }

//Kolla om det finns något sparat i sessionen, eller om utgångsdaumet för sessionen har gått ut(20min).
//Hämta nya taggar om sessionen inte stämmer
//Annars använder vi oss utav de som finns sparade i sessionen
//taggar
  if($sessionStorage.tags == undefined || $sessionStorage.tags.expire < new Date().getTime()){
    console.log('byter ut taggar från session');
    getTags();
  }else{
    $scope.tags = $sessionStorage.tags.data;
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
  $scope.isYourResturant = function(rest){
    //console.log(rest.creator);
  }
  $scope.isYourResturantClick = function(rest){
    console.log(rest.creator);
    var user = LoginService.isLoggedIn();
    console.log(user.userdata.creator);
    console.log(user.userdata.creator.email == rest.creator.email);
    return user.userdata.creator.email == rest.creator.email;
  }



//Hämtar alla taggar
  function getTags(){
    TagService.getTags()
      .success(function(data){
        $scope.tags = data.tags;
        $sessionStorage.tags = {data: $scope.tags, expire: new Date().getTime()+(1*60000)};
      })
      .error(function (error) {
          AlertService.handlesAlerts(false, error, 'tags');
      });
  }
//Hämtar alla restauranger
  function getRestaurants(){
    RestaurantService.getRestaurants()
            .success(function (data) {
                $scope.restaurants = data.restaurants;
                $sessionStorage.restaurants = {data: $scope.restaurants, expire: new Date().getTime()+(1*60000)};
            })
            .error(function (error) {
                AlertService.handlesAlerts(false, error, 'restaurants');
            });
  }

//Hämtar alla restauranger med viss tag
 function getRestaurantbyTag(id){
   RestaurantService.getRestaurantbyTag(id)
           .success(function (data) {
               $scope.restaurants = data.restaurants;
           })
           .error(function (error) {
               AlertService.handlesAlerts(false, error, 'restaurants');
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

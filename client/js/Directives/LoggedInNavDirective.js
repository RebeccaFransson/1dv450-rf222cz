app.directive('loggedinnav', function(){
  return {
        template : '   <a ui-sref="addRestaurant" class="col-md-2">Add restaurants</a> <a ui-sref="creatorRestaurants({id: user.id})" class="col-md-3">See {{user.name}}s restaurants</a> <a ui-sref="tags" class="col-md-2">Handle tags</a> <a ui-sref="logout" class="col-md-2">Logout</a>'
    };
});

app.factory('TagService', ['Resources', function(Resources){
  'use strict';

  this.getTags = function() {
    return Resources.getResources('tags/');
  };

  return this;
}]);

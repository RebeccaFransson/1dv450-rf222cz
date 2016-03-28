app.factory('TagService', ['Resources', function(Resources){
  'use strict';

  this.getTags = function() {
    return Resources.getResources('tags/');
  };

  /*DELETE TAG*/
  this.deleteTag = function(id, token){
    return Resources.deleteResource('tags/'+id+'/', {Authorization: token});
  }
  /*EDIT TAG*/
  this.editTag = function(tag, id, token){
    return Resources.editResource('tags/'+id+'/', {Authorization: token}, tag);
  }

  return this;
}]);

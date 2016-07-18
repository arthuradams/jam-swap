"use strict";

(function(){
  angular
    .module("comments")
    .controller("CommentShowController", [
      "CommentFactory",
      "$stateParams",
      CommentShowControllerFunction
    ]);

  function CommentShowControllerFunction(CommentFactory, $stateParams){
    this.comment = CommentFactory.get({id: $stateParams.id})

    this.update = function(comment){
      comment.$update(comment);
    }
    this.destroy = function(comment){
      console.log(comment)
      CommentFactory.remove(comment);
      this.comment.splice(comment, 1)
    }
  }
})();

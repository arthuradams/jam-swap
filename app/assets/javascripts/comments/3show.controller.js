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
    this.comment = CommentFactory.get({id: $stateParams.id},function(res){
      console.log("This is this.comment in function:  "+JSON.stringify(res))
    })
    console.log("IN 3SHOW")
    console.log("This is this.comment:  "+this.comment)
    this.update = function(comment){
      comment.$update(comment);
    }
    this.destroy = function(comment_index){
      console.log(comment)
      commentFactory.remove(comment);
      this.comment.splice(comment, 1)
    }
  }
})();

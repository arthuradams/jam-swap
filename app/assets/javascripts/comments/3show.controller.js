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
    this.update = function(){
      this.comment.$update({id: $stateParams.id});
    }
    this.destroy = function(comment){
      console.log(comment)
      commentFactory.remove(comment);
      this.comment.splice(comment, 1)
    }
  }
})();

"use strict";

(function(){
  angular
    .module("categories")
    .controller("PostEditController", [
      "PostFactory",
      "$stateParams",
      "$state",
      PostEditControllerFunction
    ]);

  function PostEditControllerFunction(PostFactory, $stateParams, $state){
    this.post = PostFactory.get({id: $stateParams.id},function(res){
      console.log("This is this.post in function:  "+JSON.stringify(res))
    })
    console.log("IN 4EDIT")

    this.update = function(){
      console.log("button click")
          console.log("This is this.post:  "+this.post)
      this.post.$update({id: $stateParams.id}).then (function(post){
        $state.go("postIndex")
      });
    }
    this.destroy = function(post){
      console.log(post)
      PostFactory.remove(post);
      this.post.splice(post, 1)
    }
  }
})();

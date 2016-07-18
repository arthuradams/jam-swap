"use strict";

(function(){
  angular
    .module("posts")
    .controller("PostShowController", [
      "PostFactory",
      "$stateParams",
      PostShowControllerFunction
    ]);

  function PostShowControllerFunction(PostFactory, $stateParams){
    this.post = PostFactory.get({id: $stateParams.id})

    this.update = function(post){
      post.$update(post);
    }
    this.destroy = function(post){
      console.log(post)
      PostFactory.remove(post);
      this.post.splice(post, 1)
    }
  }
})();

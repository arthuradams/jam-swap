"use strict";

(function(){
  angular
    .module("posts")
    .controller("PostShowController", [
      "PostFactory",
      "CommentFactory",
      "$stateParams",
      PostShowControllerFunction
    ]);

  function PostShowControllerFunction(PostFactory, CommentFactory, $stateParams){
    var vm = this;
    PostFactory.get({id: $stateParams.id}).$promise.then(function(post) {
      vm.post = post
    })
    this.comments = CommentFactory.query({post_id: $stateParams.id})
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

"use strict";

(function(){
  angular
  .module("posts", ["ngResource"])
  .controller("post_controller", ["$resource", PostController]);

  function PostController($resource){
    var vm = this;
    var Post = $resource("/posts/:id.json", {}, {
      update: {method: "PUT"}
    });
    vm.post_data = Post.query();

    vm.sort_post_data_by = function(name){
      vm.sort_on = name;
      vm.is_descending = !(vm.is_descending);
    }

    vm.destroy = function(post_index){
      var post = vm.post_data[post_index];
      Post.remove(post_index, function(response){
        if(response.success) vm.post_data.splice(post_index, 1);
      });
    }

    vm.post = new Post();
    vm.create = function(){
      vm.post.$save(function(response){
        console.log(vm.post)
        if(response.success) vm.post_data.push();
      });
    }

    vm.update = function(post){
      Post.update({id: post.id}, post, function(response){
        console.log("Post updated!");
      });
    }
  }
})();

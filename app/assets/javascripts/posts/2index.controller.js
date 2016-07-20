"use strict";

(function(){
  angular
  .module("posts", ["ngResource"])
  .controller("post_controller", ["$resource", "PostFactory", PostController]);

  function PostController($resource, PostFactory){
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

    vm.new_post = {};
    console.log("NEW POST")
    vm.create = function(title, description){
      console.log(vm.new_post);
      vm.new_post = new PostFactory();
      console.log(vm.new_post);
      vm.new_post.$save().then(function(response){
        console.log(response)
        // vm.post_data.push(response);
        vm.new_post = {};
      });
    }

    vm.update = function(post){
      Post.update({id: post.id}, post, function(response){
        console.log("Post updated!");
      });
    }
  }
})();

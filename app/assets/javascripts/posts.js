//= require angular
//= require angular-resource

"use strict";

(function(){
  angular
  .module("post", ["ngResource"])
  .controller("post_controller", ["$resource", PostController]);

  function PostController($resource){
    var vm = this;
    var Post = $resource("/posts/:id.json", {}, {
      update: {method: "PUT"}
    });
    vm.data = Post.query();

    vm.sort_data_by = function(name){
      vm.sort_on = name;
      vm.is_descending = !(vm.is_descending);
    }

    vm.destroy = function(post_index){
      var post = vm.data[post_index];
      Post.remove({id: post.id}, function(response){
        if(response.success) vm.data.splice(post_index, 1);
      });
    }

    vm.new_post = {};
    vm.create = function(){
      Post.save(vm.new_post, function(response){
        vm.data.push(response);
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

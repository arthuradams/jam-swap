"use strict";

(function(){
  angular
  .module("posts")
  .controller("post_new_controller", ["$resource", "PostFactory", PostController]);

  function PostController($resource, PostFactory){
    var vm = this;
    vm.new_post = new PostFactory();
    console.log("NEW POST")
    vm.create = function(){
      console.log(vm.new_post);
      vm.new_post.$save().then(function(response){
        console.log(response)
        // vm.post_data.push(response);
    vm.new_post = new PostFactory();
      });
    }
  }
  })()

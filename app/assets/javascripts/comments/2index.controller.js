"use strict";

(function(){
  angular
  .module("comments", ["ngResource"])
  .controller("comment_controller", [
    "$resource",

    CommentController]);

  function CommentController($resource){
    var vm = this;
    var Comment = $resource("/comments/:id.json", {}, {
      update: {method: "PUT"}
    });
    vm.com_data = Comment.query();

    vm.sort_com_data_by = function(name){
      vm.sort_on = name;
      vm.is_descending = !(vm.is_descending);
    }

    vm.destroy = function(comment_index){
      console.log(comment_index)
      var comment = vm.com_data[comment_index];
      Comment.remove(comment_index, function(response){
        if(response.success) vm.com_data.splice(comment_index, 1);
      });
    }

    vm.comment = new CommentFactory();
    vm.create = function(){
      this.comments = CommentFactory.query({post_id: $stateParams.id})
      vm.comment.$save(function(response){
        console.log(vm.comment)
        if(response.success) vm.com_data.push();
      });
    }


    vm.update = function(message){
      Comment.update({id: comment.id}, message, function(response){
        console.log("Comment updated!");
      });
    }
  }
})();

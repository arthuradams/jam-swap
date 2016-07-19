"use strict";

(function(){
  angular
  .module("comments", ["ngResource"])
  .controller("comment_controller", ["$resource", CommentController]);

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
      var comment = vm.com_data[comment_index];
      Comment.remove({id: comment.id}, function(response){
        if(response.success) vm.com_data.splice(comment_index, 1);
      });
    }

    vm.new_comment = {};
    vm.create = function(){
      Comment.save(vm.new_comment, function(response){
        vm.com_data.push(response);
        vm.new_comment = {};
      });
    }

    vm.update = function(comment){
      Comment.update({id: comment.id}, comment, function(response){
        console.log("Comment updated!");
      });
    }
  }
})();

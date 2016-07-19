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
    this.comment = CommentFactory.get({id: $stateParams.id})

    this.update = function(comment){
      comment.$update(comment);
    }
    this.destroy = function(comment_index){
      console.log(comment)
      var comment = vm.com_data[comment_index];
      Comment.remove({id: comment.id}, function(response){
        if(response.success) vm.com_data.splice(comment_index, 1);
      });
    }

  }
})();

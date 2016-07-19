"use strict";

(function(){
  angular
  .module("comments")
  .factory("CommentFactory", [
    "$resource",
    CommentFactoryFunction
  ]);

  function CommentFactoryFunction($resource) {
    return $resource("http://localhost:3000/comments/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());

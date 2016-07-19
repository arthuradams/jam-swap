"use strict";

(function(){
  angular
  .module("posts")
  .factory("PostFactory", [
    "$resource",
    PostFactoryFunction
  ]);

  function PostFactoryFunction($resource) {
    return $resource("http://localhost:3000/posts/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());

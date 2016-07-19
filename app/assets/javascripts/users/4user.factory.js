"use strict";

(function(){
  angular
  .module("users")
  .factory("UserFactory", [
    "$resource",
    UserFactoryFunction
  ]);

  function UserFactoryFunction($resource) {
    return $resource("http://localhost:3000/users/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());

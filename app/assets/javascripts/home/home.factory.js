"use strict";

(function(){
  angular
  .module("homes")
  .factory("HomeFactory", [
    "$resource",
    HomeFactoryFunction
  ]);

  function HomeFactoryFunction($resource) {
    return $resource("http://localhost:3000/home/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());

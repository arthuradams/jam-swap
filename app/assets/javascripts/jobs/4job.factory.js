"use strict";

(function(){
  angular
  .module("jobs")
  .factory("JobFactory", [
    "$resource",
    JobFactoryFunction
  ]);

  function JobFactoryFunction($resource) {
    return $resource("http://localhost:3000/jobs/:id.json", {}, {
      update: {method: "PUT"}
    });
  }
}());

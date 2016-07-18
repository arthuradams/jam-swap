"use strict";

(function(){
  angular
  .module("sessions")
  .factory("SessionFactory", [
    "$resource",
    SessionFactoryFunction
  ]);

  function SessionFactoryFunction($resource) {
    return $resource("http://localhost:3000/sessions/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());

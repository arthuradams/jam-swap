"use strict";

(function(){
  angular
    .module("sessions")
    .controller("SessionShowController", [
      "SessionFactory",
      "$stateParams",
      SessionShowControllerFunction
    ]);

  function SessionShowControllerFunction(SessionFactory, $stateParams){
    this.session = SessionFactory.get({id: $stateParams.id})

    this.update = function(session){
      session.$update(session);
    }
    this.destroy = function(session){
      console.log(session)
      SessionFactory.remove(session);
      this.session.splice(session, 1)
    }
  }
})();

"use strict";

(function(){
  angular
  .module("sessions", ["ngResource"])
  .controller("session_controller", ["$resource", SessionController]);

  function SessionController($resource){
    var vm = this;
    var Session = $resource("/sessions/:id.json", {}, {
      update: {method: "PUT"}
    });
    vm.session_data = Session.query();

    vm.destroy = function(session_index){
      var session = vm.session_data[session_index];
      Session.remove({id: session.id}, function(response){
        if(response.success) vm.session_data.splice(session_index, 1);
      });
    }

    vm.new_session = {};
    vm.create = function(){
      Session.save(vm.new_session, function(response){
        vm.session_data.push(response);
        vm.new_session = {};
      });
    }
  }
})();

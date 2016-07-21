"use strict";

(function(){
  angular
  .module("meetups", ["ngResource"])
  .controller("meetup_controller", ["$resource", "$state", MeetupController]);

  function MeetupController($resource, $state){
    var vm = this;
    var Meetup = $resource("/meetups/:id.json", {}, {
      update: {method: "PUT"}
    });
    vm.meetup_data = Meetup.query();

    vm.sort_meetup_data_by = function(name){
      vm.sort_on = name;
      vm.is_descending = !(vm.is_descending);
    }

    vm.destroy = function(meetup_index){
      var meetup = vm.meetup_data[meetup_index];
      Meetup.remove(meetup_index, function(response){
        $state.go($state.current, {}, {reload: true});
        if(response.success) vm.meetup_data.splice(meetup_index, 1);
      });
    }

    vm.meetup = new Meetup();
    vm.create = function(){
      vm.meetup.$save(function(response){
        console.log(vm.meetup)
        $state.go($state.current, {}, {reload: true});
        if(response.success) vm.meetup_data.push(response);
      });
    }

    vm.update = function(meetup){
      Meetup.update({id: meetup.id}, meetup, function(response){
        console.log("Meetup updated!");
      });
    }
  }
})();

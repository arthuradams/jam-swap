"use strict";

(function(){
  angular
    .module("meetups")
    .controller("MeetupShowController", [
      "MeetupFactory",
      "$stateParams",
      MeetupShowControllerFunction
    ]);

  function MeetupShowControllerFunction(MeetupFactory, $stateParams){
    this.meetup = MeetupFactory.get({id: $stateParams.id})

    this.update = function(meetup){
      meetup.$update(meetup);
    }
    this.destroy = function(meetup){
      console.log(meetup)
      MeetupFactory.remove(meetup);
      this.meetup.splice(meetup, 1)
    }
  }
})();

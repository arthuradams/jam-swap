"use strict";

(function(){
  angular
  .module("jamswap", [
    "ui.router",
    "ngResource",
    "homes",
    "jobs",
    "meetups"
  ])
  .config(["$stateProvider", "$locationProvider", RouterFunction]);

    function RouterFunction($stateProvider, $locationProvider){
      $locationProvider.html5Mode(true);
      $stateProvider
      .state("homeIndex", {
        url: "/home",
        templateUrl: "homes/index.html.erb",
        controller: "home_controller",
        controllerAs: "HomeIndexViewModel"
      })
      .state("homeShow", {
        url: "/home/:id",
        templateUrl: "homes/show.html.erb",
        controller: "HomeShowController",
        controllerAs: "HomeShowViewModel"
      })
      .state("jobIndex", {
        url: "/jobs",
        templateUrl: "jobs/index.html.erb",
        controller: "job_controller",
        controllerAs: "JobIndexViewModel"
      })
      .state("jobShow", {
        url: "/jobs/:id",
        templateUrl: "jobs/show.html.erb",
        controller: "JobShowController",
        controllerAs: "JobShowViewModel"
      })
      .state("meetupIndex", {
        url: "/meetups",
        templateUrl: "meetups/index.html.erb",
        controller: "meetup_controller",
        controllerAs: "MeetupIndexViewModel"
      })
      .state("meetupShow", {
        url: "/meetups/:id",
        templateUrl: "meetups/show.html.erb",
        controller: "MeetupShowController",
        controllerAs: "MeetupShowViewModel"
      });
  }
})();

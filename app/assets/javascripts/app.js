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
<<<<<<< HEAD
      .state("sessionNew", {
        url: "/sessions",
        templateUrl: "sessions/new.html.erb",
        controller: "session_controller",
        controllerAs: "SessionNewViewModel"
      })
      .state("sessionShow", {
        url: "/sessions/:id",
        templateUrl: "sessions/show.html.erb",
        controller: "SessionShowController",
        controllerAs: "SessionShowViewModel"
      })
      .state("userIndex", {
        url: "/users",
        templateUrl: "users/index.html.erb",
        controller: "user_controller",
        controllerAs: "UserIndexViewModel"
      })
      .state("userShow", {
        url: "/users/:id",
        templateUrl: "users/show.html.erb",
        controller: "UserShowController",
        controllerAs: "UserShowViewModel"
      })
      .state("categoryIndex", {
        url: "/categories",
        templateUrl: "categories/index.html.erb",
        controller: "category_controller",
        controllerAs: "CategoryIndexViewModel"
      })
      .state("categoryShow", {
        url: "/categories/:id",
        templateUrl: "categories/show.html.erb",
        controller: "CategoryShowController",
        controllerAs: "CategoryShowViewModel"
      })
      .state("categoryEdit", {
        url: "/categories/:id/edit",
        templateUrl: "categories/edit.html.erb",
        controller: "CategoryEditController",
        controllerAs: "CategoryEditViewModel"
      })
      .state("postIndex", {
        url: "/posts",
        templateUrl: "posts/index.html.erb",
        controller: "post_controller",
        controllerAs: "PostIndexViewModel"
      })
      .state("postShow", {
        url: "/posts/:id",
        templateUrl: "posts/show.html.erb",
        controller: "PostShowController",
        controllerAs: "PostShowViewModel"
      })
      .state("commentIndex", {
        url: "/comments",
        templateUrl: "comments/index.html.erb",
        controller: "comment_controller",
        controllerAs: "CommentIndexViewModel"
      })
      .state("commentShow", {
        url: "/comments/:id",
        templateUrl: "comments/show.html.erb",
        controller: "CommentShowController",
        controllerAs: "CommentShowViewModel"
=======
      .state("homeIndex", {
        url: "/homes",
        templateUrl: "homes/index.html.erb",
        controller: "home_controller",
        controllerAs: "HomeIndexViewModel"
      })
      .state("homeShow", {
        url: "/homes/:id",
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
>>>>>>> ded28f9b7bc88177c16fba8cdc9d9f348fc55aa7
      });
  }
})();

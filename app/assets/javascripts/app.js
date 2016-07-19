"use strict";

(function(){
  angular
  .module("jamswap", [
    "ui.router",
    "ngResource",
    "sessions",
    "users",
    "categories",
    "posts",
    "comments"
  ])
  .config(["$stateProvider", "$locationProvider", RouterFunction]);

    function RouterFunction($stateProvider, $locationProvider){
      $locationProvider.html5Mode(true);
      $stateProvider
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
      });
  }
})();

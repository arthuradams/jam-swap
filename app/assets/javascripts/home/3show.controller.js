"use strict";

(function(){
  angular
    .module("homes")
    .controller("HomeShowController", [
      "HomeFactory",
      "$stateParams",
      HomeShowControllerFunction
    ]);

  function HomeShowControllerFunction(HomeFactory, $stateParams){
    this.home = HomeFactory.get({id: $stateParams.id})

    this.update = function(home){
      home.$update(home);
    }
    this.destroy = function(home){
      console.log(home)
      HomeFactory.remove(home);
      this.home.splice(home, 1)
    }
  }
})();

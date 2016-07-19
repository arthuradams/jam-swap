"use strict";

(function(){
  angular
    .module("users")
    .controller("UserShowController", [
      "UserFactory",
      "$stateParams",
      UserShowControllerFunction
    ]);

  function UserShowControllerFunction(UserFactory, $stateParams){
    this.user = UserFactory.get({id: $stateParams.id})

    this.update = function(user){
      user.$update(user);
    }
    this.destroy = function(user){
      console.log(user)
      UserFactory.remove(user);
      this.user.splice(user, 1)
    }
  }
})();

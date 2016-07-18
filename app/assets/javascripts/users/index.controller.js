"use strict";

(function(){
  angular
  .module("users", ["ngResource"])
  .controller("user_controller", ["$resource", UserController]);

  function UserController($resource){
    var vm = this;
    var User = $resource("/users/:id.json", {}, {
      update: {method: "PUT"}
    });
    vm.user_data = User.query();

    vm.sort_user_data_by = function(name){
      vm.sort_on = name;
      vm.is_descending = !(vm.is_descending);
    }

    vm.destroy = function(user_index){
      var user = vm.user_data[user_index];
      User.remove({id: user.id}, function(response){
        if(response.success) vm.user_data.splice(user_index, 1);
      });
    }

    vm.new_user = {};
    vm.create = function(){
      User.save(vm.new_user, function(response){
        vm.user_data.push(response);
        vm.new_user = {};
      });
    }

    vm.update = function(user){
      User.update({id: user.id}, user, function(response){
        console.log("User updated!");
      });
    }
  }
})();

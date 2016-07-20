"use strict";

(function(){
  angular
  .module("homes", ["ngResource"])
  .controller("home_controller", [
    "$resource",
    HomeController
  ]);

  function HomeController($resource){
    var vm = this;
    var Home = $resource("/homes/:id.json", {}, {
      update: {method: "PUT"}
    });
    vm.cat_data = Home.query();


    vm.sort_cat_data_by = function(name){
      vm.sort_on = name;
      vm.is_descending = !(vm.is_descending);
    }

    vm.destroy = function(home_index){
      console.log(home_index)
      var home = vm.cat_data[home_index];
      Home.remove(home_index, function(response){
        if(response.success) vm.cat_data.splice(home_index, 1);
      });
    }

    vm.home = new Home();
    vm.create = function(){
      vm.home.$save(function(response){
        console.log(vm.home)
        if(response.success) vm.cat_data.push();
      });
    }

    vm.update = function(home){
      console.log(home)
      Home.update(function(response){
        console.log("Home updated!");
      });
    }
  }
})();

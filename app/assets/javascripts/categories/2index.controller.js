"use strict";

(function(){
  angular
  .module("categories", ["ngResource"])
  .controller("category_controller", [
    "$resource",
    CategoryController
  ]);

  function CategoryController($resource){
    var vm = this;
    var Category = $resource("/categories/:id.json", {}, {
      update: {method: "PUT"}
    });
    vm.cat_data = Category.query();


    vm.sort_cat_data_by = function(name){
      vm.sort_on = name;
      vm.is_descending = !(vm.is_descending);
    }

    vm.destroy = function(category_index){
      console.log(category_index)
      var category = vm.cat_data[category_index];
      Category.remove(category_index, function(response){
        if(response.success) vm.cat_data.splice(category_index, 1);
      });
    }

    vm.category = new Category();
    vm.create = function(){
      vm.category.$save(function(response){
        console.log(vm.category)
        if(response.success) vm.cat_data.push();
      });
    }

    vm.update = function(category){
      console.log(category)
      Category.update(function(response){
        console.log("Category updated!");
      });
    }
  }
})();

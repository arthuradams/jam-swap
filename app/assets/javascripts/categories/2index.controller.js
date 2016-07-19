"use strict";

(function(){
  angular
  .module("categories", ["ngResource"])
  .controller("category_controller", [
    "CategoryFactory",
    "$resource",
    "$stateParams",
    CategoryController
  ]);

  function CategoryController(CategoryFactory, $resource, $stateParams){
    var vm = this;
    var Category = $resource("/categories/:id.json", {}, {
      update: {method: "PUT"}
    });
    vm.cat_data = Category.query(function(response){});


    vm.sort_cat_data_by = function(name){
      vm.sort_on = name;
      vm.is_descending = !(vm.is_descending);
    }

    vm.destroy = function(category){
      console.log(vm.category)
      vm.category.remove(category);
    }

    vm.new_category = {};
    vm.create = function(){
      console.log(vm.new_category)
      Category.save(vm.new_category, function(response){
        console.log(vm.cat_data)
        vm.cat_data.push(response);
        console.log(vm.cat_data)
        vm.new_category = {};
      });
    }

    vm.update = function(category){
      Category.update({id: category.id}, category, function(response){
        console.log("Category updated!");
      });
    }
  }
})();

"use strict";

(function(){
  angular
  .module("categories", ["ngResource"])
  .controller("category_controller", ["$resource", CategoryController]);

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
      var category = vm.cat_data[category_index];
      Category.remove({id: category.id}, function(response){
        if(response.success) vm.cat_data.splice(category_index, 1);
      });
    }

    vm.new_category = {};
    vm.create = function(){
      Category.save(vm.new_category, function(response){
        vm.cat_data.push(response);
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

"use strict";

(function(){
  angular
    .module("categories")
    .controller("CategoryShowController", [
      "CategoryFactory",
      "$stateParams",
      CategoryShowControllerFunction
    ]);

  function CategoryShowControllerFunction(CategoryFactory, $stateParams){
    this.category = CategoryFactory.get({id: $stateParams.id})

    this.update = function(category){
      category.$update(category);
    }
    this.destroy = function(category){
      console.log(category)
      CategoryFactory.remove(category);
      this.category.splice(category, 1)
    }
  }
})();

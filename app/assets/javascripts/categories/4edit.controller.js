"use strict";

(function(){
  angular
    .module("categories")
    .controller("CategoryEditController", [
      "CategoryFactory",
      "$stateParams",
      CategoryEditControllerFunction
    ]);

  function CategoryEditControllerFunction(CategoryFactory, $stateParams){
    this.category = CategoryFactory.get({id: $stateParams.id},function(res){
      console.log("This is this.category in function:  "+JSON.stringify(res))
    })
    console.log("IN 4EDIT")
    console.log("This is this.category:  "+this.category)
    this.update = function(){
      console.log("button click")
      var categoryID = JSON.stringify(this.category.id)
            console.log(categoryID)
      this.category.$update({categoryID});
    }
    this.destroy = function(category){
      console.log(category)
      CategoryFactory.remove(category);
      this.category.splice(category, 1)
    }
  }
})();

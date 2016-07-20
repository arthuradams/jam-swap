"use strict";

(function(){
  angular
    .module("jobs")
    .controller("JobShowController", [
      "JobFactory",
      "$stateParams",
      JobShowControllerFunction
    ]);

  function JobShowControllerFunction(JobFactory, $stateParams){
    this.job = JobFactory.get({id: $stateParams.id})

    this.update = function(job){
      job.$update(job);
    }
    this.destroy = function(job){
      console.log(job)
      JobFactory.remove(job);
      this.job.splice(job, 1)
    }
  }
})();

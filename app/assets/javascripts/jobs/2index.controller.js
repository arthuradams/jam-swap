"use strict";

(function(){
  angular
  .module("jobs", ["ngResource"])
  .controller("job_controller", ["$resource", JobController]);

  function JobController($resource){
    var vm = this;
    var Job = $resource("/jobs/:id.json", {}, {
      update: {method: "PUT"}
    });
    vm.job_data = Job.query();

    vm.sort_job_data_by = function(name){
      vm.sort_on = name;
      vm.is_descending = !(vm.is_descending);
    }

    vm.destroy = function(job_index){
      var job = vm.job_data[job_index];
      Job.remove(job_index, function(response){
        if(response.success) vm.job_data.splice(job_index, 1);
      });
    }

    vm.job = new Job();
    vm.create = function(){
      vm.job.$save(function(response){
        console.log(vm.job)
        if(response.success) vm.job_data.push();
      });
    }

    vm.update = function(job){
      Job.update({id: job.id}, job, function(response){
        console.log("Job updated!");
      });
    }
  }
})();

"use strict";

(function(){
  angular
  .module("meetups", [])
  .config(function($sceProvider) {
  // Completely disable SCE.  For demonstration purposes only!
  // Do not use in new projects.
  $sceProvider.enabled(false);
});
}());

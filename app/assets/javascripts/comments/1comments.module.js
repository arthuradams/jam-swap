"use strict";

(function(){
  angular
  .module("comments", [])
  .config(function($sceProvider) {
  // Completely disable SCE.  For demonstration purposes only!
  // Do not use in new projects.
  $sceProvider.enabled(false);
});
}());

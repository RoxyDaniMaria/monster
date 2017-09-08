(function() {
  'use strict';
  angular
  .module('app')
  .component('monsterarea', {

    controller: function() {
      const vm = this
      console.log('area working');

    },
    templateUrl: 'app/area/monsterarea.html'
  })
}());

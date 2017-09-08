(function() {
  'use strict';
  angular
    .module('app')
    .component('monsterarea', {
      bindings: {
        monsters: '<'
      },
      controller: function() {
        const vm = this
        vm.showme = function(monsters){


        if (monsters !== undefined) {
            console.log(monsters);
          }
        }
      },
      templateUrl: 'app/area/monsterarea.html'
    })

}());

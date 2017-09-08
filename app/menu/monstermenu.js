(function() {
  'use strict';
  angular
  .module('app')
  .component('monstermenu', {
    bindings: {
      monsterdetails :  '<'
    },
    controller: function() {
      const vm = this
      console.log(vm)

      vm.testtest = function(data){
        console.log(data[1])
      }

  },
    templateUrl: 'app/menu/monstermenu.html'
  })
}());

(function() {
  'use strict';
  angular
  .module('app')
  .component('monstermenu', {
    bindings: {
      monsterdetails :  '<',
      hideme : '<'
    },
    controller: function() {
      const vm = this
      //console.log(vm)

      vm.findname = function(monster){
        console.log(monster)
        if(monster !== undefined){
          for(var i = 0; i < monster.length; i++){
            // if(monster[i].scary !== true){
              return monster[i].name
            }
          // }
        }
      }

      vm.description = function(monster){
        if(monster !== undefined){
          for(var i = 0; i < monster.length; i++){
            if(monster[i].scary !== true){
              return monster[i].description
            }
          }
        }
      }
  },
    templateUrl: 'app/menu/monstermenu.html'
  })
}());

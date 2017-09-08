(function() {
  'use strict';
  angular
  .module('app')
  .component('monsterarea', {

    controller: function() {
      const vm = this
      vm.$onInit=function(){
        console.log('working');
      //   const url = 'https://infinite-garden-98938.herokuapp.com/api/v1/monsters'
      //   $http.get(url + '/messages').then(function(messages) {
      //     vm.messages = messages.data._embedded.messages // monsters info
      //     vm.formstatuses = {
      //       view: true
      //     }
      //     vm.formsubmit = {
      //       subject : "subject",
      //       body : "body"
      //     }
      //   })
      // }
    },
    templateUrl: 'app/main/monsterarea.html'
  })
}());

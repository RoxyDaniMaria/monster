(function() {
  'use strict';
  angular
  .module('app')
  .component('monstermain', {

    controller: function($http) {
      const vm = this
      vm.$onInit=function(){
        console.log('main working')
        const url = 'https://infinite-garden-98938.herokuapp.com/api/v1/monsters'
        // $http.get(url + '/messages').then(function(monsters) {
        //   console.log(monsters)
        //   // vm.messages = messages.data._embedded.messages // monsters info
        //   // vm.formstatuses = {
        //   //   view: true
        //   // }
        //   // vm.formsubmit = {
        //   //   subject : "subject",
        //   //   body : "body"
        //   // }
        // })
       }
    },
    templateUrl: 'app/main/monstermain.html'
  })
}());

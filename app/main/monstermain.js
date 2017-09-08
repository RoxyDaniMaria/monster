(function() {
  'use strict';
  angular
  .module('app')
  .component('monstermain', {

    controller: function($http) {
      const vm = this
      vm.$onInit=function(){
        // const url = 'https://young-bastion-40394.herokuapp.com/api'
        // $http.get(url + '/messages').then(function(messages){
        //   vm.messages = messages.data._embedded.messages
        //   vm.formstatuses ={
        //     view:true
        //   }
        //   vm.formsubmit = {
        //     subject : "subject",
        //     body : "body"
        //   }
        // })
      }
    },
    templateUrl: 'app/monstermain.html'
  })
}());

var app = angular.module('uSpeak', [ 
  'ngMaterial',
  'ionic',
  'ui.router',
  'uSpeak.language1',
  'uSpeak.language2',
  'uSpeak.loading',
  'ui.router'
  ])

.controller('toolbarController', function(){
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('language1', {
      url: '/',
      templateUrl: 'app/language1/language1Template.html',
      controller: 'language1Controller'
    })
    .state('language2', {
      url: '/1',
      templateUrl: 'app/language2/language2Template.html',
      controller: 'language2Controller'
    })
    .state('loading', {
      url: '/loading',
      templateUrl: 'app/loading/loadingTemplate.html',
      controller: 'loadingController'
    })
    .state('chat', {
      url: '/chat',
      templateUrl: 'app/chat/chatTemplate.html',
      controller: 'chatController'
    });
  $urlRouterProvider.otherwise("/");
});

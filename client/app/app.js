var app = angular.module('uSpeak', [ 
  'ngMaterial',
  'ionic',
  'ui.router',
  'uSpeak.languageSource',
  'uSpeak.languageTarget',
  'uSpeak.loading',
  'uSpeak.chat'
  ])

.controller('toolbarController', function(){
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('languageSource', {
      url: '/',
      templateUrl: 'app/languageSource/languageSourceTemplate.html',
      controller: 'languageSourceController'
    })
    .state('languageTarget', {
      url: '/target',
      templateUrl: 'app/languageTarget/languageTargetTemplate.html',
      controller: 'languageTargetController'
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

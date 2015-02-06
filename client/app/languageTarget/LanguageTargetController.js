angular.module('uSpeak.languageTarget', [])

.controller('languageTargetController', function($scope, languageService, $state){
  $scope.languages = [['English','us'],['Chinese','cn'],['Spanish','es'],['French','fr'],['Italian','it']];
  $scope.test = function(lang) {
    languageService.language.target = lang[0];    
    $state.go('loading');
  };

});
angular.module('uSpeak.language1', [])

.controller('language1Controller', function($scope, languageService){
  $scope.languages = [['English','us'],['Chinese','cn'],['Spanish','es'],['French','fr'],['Italian','it']];
  
});
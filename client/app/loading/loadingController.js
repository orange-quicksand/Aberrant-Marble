angular.module('uSpeak.loading', [])

.controller('loadingController', function($scope, $interval, $state, languageService, Translate, Room, Phrases) {

  $scope.targetLang = languageService.language.target;
  $scope.sourceLang = languageService.language.source;  

  if (!$scope.targetLang && !$scope.sourceLang) {
    $state.go('languageSource');
  }

  $scope.phrase = {
    source : Phrases.getPhrase()
  };

  $scope.isMatch = false;
  $scope.phraseIsTranslated = false;
  
  $scope.translate = function() {
    Translate.translateMsg($scope.phrase.source, $scope.targetLang)
      .then(function(res) {
        $scope.phraseIsTranslated = true;
        $scope.phrase.target = res.data.translations[0].translatedText;
      });
  };

  var langLoop = $interval(function() {
    $scope.phrase.source = Phrases.getPhrase();
    $scope.phraseIsTranslated = false;
    $scope.translate();
  }, 5000) 
  

  $scope.translate();
  
  $scope.getRoom = function() {
    Room.getRoom($scope.sourceLang, $scope.targetLang)
    .then(function(data) {      
      Room.setRoomId(data);      
      $state.go('chat');
    });
  };

  $scope.getRoom();

})

.factory('Phrases', function() {
  
  var Phrases = {
    funny: [
      'What did the hand say to the face? SLAP!',
      'I\'m sick of these #@\&(%Q* snakes, in this @$^\&#`@^ plane',
      'I am Lorde, YAH! YAH! YAH! YAH!',
      'Old McDonald had a farm.',
      'I always wanted to be like the blue power ranger.',
      'Ehhh, Macarena. Ahh!',
      'A priest walks into a bar...',
      'Mike is really bad at video games.',
      'Mike loves Backbone.js.',
      'You don\'t know what tap dancing is?',
      '',
    ],
    interesting: [],
    wtf: [
      'I ate like 7 frogs today.',
      'I rode a duck to work today.'
    ]
  };

  return {
  	getPhrase: function(type) {
      type = type || 'funny';
      
      return Phrases[type][ Math.floor( Math.random() * Phrases[type].length ) ];
  	}
  };
});
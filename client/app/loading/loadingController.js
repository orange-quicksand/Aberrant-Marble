angular.module('uSpeak.loading', ['ionic', 'translateModule'])

.controller('LoadingController', function($scope, Translate, Phrases) {
  $scope.speak = 'speaking';
  $scope.roomId = null;
  $scope.phrase = {};
  $scope.phrase.source = Phrases.getPhrase();

  // TODO:
  // Make an initial check to see if the source and target languages were provided.
  // .source, .target  <== Property Names


})

.factory('Phrases', function() {
  
  var Phrases = {
    funny: [
      'What did the hand say to the face? SLAP!',
      'I\'m of these )&Q%Q*%) snakes, in this @()$@^ plane',
      'I am Lorde, YAH! YAH! YAH! YAH!',
      'Old McDonald had a farm.',
      'I always wanted to be like the blue power ranger.',
      'Ehhh, Macarena. Ahh!',
      'A priest walks into a bar...',
      'Mike is really bad at video games.',
      'Mike loves Backbone.js.',
      'Your mother is so nice. The End.'
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
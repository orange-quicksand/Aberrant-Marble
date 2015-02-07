angular.module('uSpeak.chat', [])

.controller('chatController', function($scope, Translate, languageService, Room, $ionicScrollDelegate){

  $scope.roomId = Room.getRoomId() || 'testsdfdfs';

  // Connecet to Icecomm 
  $scope.comm = new Icecomm('tUYcGlKkEZqlHS5RnFefxkbqWomhWqlHYFaq/k68wcKJOMl8s');
  $scope.comm.connect($scope.roomId);

  // Local video
  $scope.comm.on('local', function(options) {
    document.getElementById('localVideo').setAttribute('src', options.stream);
  });

  // Remote video
  $scope.comm.on('connected', function(options) {
    console.log('CONNECTED!');
    document.getElementById('remoteVideo').setAttribute('src', options.stream);

    $scope.comm.on('data', function(options) {
      console.log('data!!!!');
      console.log(options);
      $scope.$apply(function(){
        Translate.translateMsg(options.data, languageService.language.source, languageService.language.target)
        .then(function(translatedMsg){
          console.log(translatedMsg);
          var translatedText = translatedMsg.data.translations[0].translatedText;

          var newMsg = {
            user: 'Them',
            text: options.data
          };
          var newTranslated = {
            user: 'Them (translated)',
            text: translatedText
          };

          $scope.messages.push(newMsg);
          $scope.messages.push(newTranslated);

        });
      });
    });

  });


  $scope.comm.on('disconnect', function(options) {
    console.log('DISCONNECTED');
  });

  $scope.messages = [];

  $scope.sendMessage = function (msg) {
    console.log(msg);
    $scope.comm.send(msg);
    var newMsg = {
      user: 'You',
      text: msg
    };
    $scope.messages.push(newMsg);
    $scope.clearMsg();
    $ionicScrollDelegate.scrollBottom();
  };

  $scope.clearMsg = function () {
    $scope.msg = '';
  };

});

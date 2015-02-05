angular.module('uSpeak.chat', [])

.controller('chatController', function($scope){

  $scope.messages = [];

  $scope.sendMessage = function () {
    var newMessage = { text: $scope.newMessageText };
    $scope.messages.push(newMessage);
    $scope.newMessageText = '';

    // TODO send message to webrtc
  };

  // ======================
  //       IceComm
  // ======================
  var comm;

  comm = new Icecomm('tUYcGlKkEZqlHS5RnFefxkbqWomhWqlHYFaq/k68wcKJOMl8s');

  comm.connect('12323423434543');


  // Local video
  comm.on('local', function(options) {
    document.getElementById('localVideo').setAttribute('src', options.stream);
  });

  // // Remote video
  // comm.on('connected', function(options) {
  //   console.log('CONNECTED!');
  //   document.getElementById('remoteVideo').setAttribute('src', options.stream);

  // });

  comm.on('data', function(options) {
    console.log(options);
    // $scope.$apply(function(){
    //   Translate.translateMsg(options.data, $scope.language.native, $scope.language.desired)
    //   .then(function(translatedMsg){
    //     console.log(translatedMsg);
    //     var translatedText = translatedMsg.data.translations[0].translatedText;
    //     $scope.convo += 'Them: ' + options.data + '\n';
    //     $scope.convo += 'Them (translated): ' + translatedText + '\n';
    //     $scope.scrollBottom();
    //   });
    // });
  });

  comm.on('disconnect', function(options) {
    console.log('DISCONNECTED');

    // document.getElementById(options.callerID).remove();
    // $scope.$apply(function() {
    //   $scope.showChatApp = false;
    // });
  });


});

// app.factory('Comm', function () {



//   return comm;

// });

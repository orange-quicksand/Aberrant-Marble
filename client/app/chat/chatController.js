angular.module('uSpeak.chat', [])

.controller('chatController', function($scope, Translate, languageService, Room){

  console.log(languageService.language.source);
  console.log(languageService.language.target);
  $scope.roomId = Room.getRoomId() || 'testsdfdfs';

  $scope.comm = new Icecomm('tUYcGlKkEZqlHS5RnFefxkbqWomhWqlHYFaq/k68wcKJOMl8s');
  console.log($scope.comm);
  // $scope.comm.connect($scope.roomId);
  $scope.comm.connect('12312312312321');

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


          // $scope.convo += 'Them: ' + options.data + '\n';
          // $scope.convo += 'Them (translated): ' + translatedText + '\n';
          // $scope.scrollBottom();
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
  };

  $scope.clearMsg = function () {
    $scope.msg = '';
  };

  // Function to send a message to the language partner
  // and display the sent message in the chatbox

  // $scope.convo = '';
  // $scope.sendMsg = function(){
  //   var newMsg = $scope.msg + '';
  //   if(newMsg.trim() !== '') {
  //     $scope.comm.send($scope.msg);
  //     $scope.convo += 'You: ' + $scope.msg + '\n';
  //     $scope.msg = '';
  //     // $scope.scrollBottom();
  //     document.getElementById('chatMsg').focus();
  //   }
  // };

  // // Function to send a chat message when the enter/return
  // // button is pressed
  // $scope.handleKeyPress = function(event){
  //   console.log('pressed');
  //   if(event.which === 13) {
  //   console.log($scope.mmsg);
  //     console.log('send')
  //     $scope.sendMsg();
  //   }
  // };

  // // Function to move the scroll bar to the bottom of the textarea
  // $scope.scrollBottom = function(){
  //   var chatBox = document.getElementById('chatBox');
  //   chatBox.scrollTop = 99999;
  // };


});

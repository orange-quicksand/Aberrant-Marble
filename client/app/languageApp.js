angular.module('languageApp', [
  // 'translateModule', 
  'ngMaterial'])

.controller('selectLanguageController', function($scope, $http) {
  // $scope.languages = [['English','us'],['Chinese','cn'],['Spanish','es'],['French','fr'],['Italian','it']];
  // $scope.language = {};

  // $scope.showChatApp = false;
  // $scope.msg = '';
  // $scope.convo = '';
  // $scope.waiting=false;

  // $scope.submitLanguages = function(languageSelections){
  //   return $http({
  //     method: 'GET',
  //     url: '/api/getroom',
  //     params: languageSelections
  //   })
  //   .success(function(data){
  //     $scope.comm = new Icecomm('IbQqKDNCGQS7b94Mllk/iHOJbeSe/UrJJy6l1BbqEbP0fKaK');

  //     $scope.comm.connect(data);

  //     // Show video of the user
  //     $scope.comm.on('local', function(options) {
  //       console.log(options.stream);
  //       $('#localVideo').attr("src", options.stream);
  //     });

  //     // When two people are connected, display the video of the language partner
  //     // and show the chat app
  //     $scope.comm.on('connected', function(options) {
  //       var foreignVidDiv = $('<div class="inline"></div>');
  //       foreignVidDiv.append(options.video)
  //       foreignVidDiv.children().addClass('foreignVideo');
  //       $('#videos').prepend(foreignVidDiv);
  //       // document.getElementById('videos').insertBefore(document.createElement("$BUTTON")options.video, document.getElementById('myVideo'));
  //       $scope.$apply(function() { 
  //         $scope.showChatApp = true; 
  //       });
  //     });

  //     // When a chat message is received from the language partner,
  //     // translate the message using Google Translate and
  //     // display both the original message and the translated message
  //     $scope.comm.on('data', function(options) {
  //       $scope.$apply(function(){
  //         Translate.translateMsg(options.data, $scope.language.native, $scope.language.desired)
  //         .then(function(translatedMsg){
  //           console.log(translatedMsg);
  //           var translatedText = translatedMsg.data.translations[0].translatedText
  //           $scope.convo += 'Them: ' + options.data + '\n';
  //           $scope.convo += 'Them (translated): ' + translatedText + '\n';
  //           $scope.scrollBottom();
  //         })
  //       });
  //     })

  //     // When the language partner leaves, remove the video and chatbox
  //     $scope.comm.on('disconnect', function(options) {
  //       document.getElementById(options.callerID).remove();
  //       $scope.$apply(function() {
  //         $scope.showChatApp = false;
  //       });
  //     });
  //   })
  // }

  // // Function to send a message to the language partner
  // // and display the sent message in the chatbox
  // $scope.sendMsg = function(){
  //   if($scope.msg.trim() !== '') {
  //     $scope.comm.send($scope.msg);
  //     $scope.convo += 'You: ' + $scope.msg + '\n';
  //     $scope.msg = ''
  //     $scope.scrollBottom();
  //     document.getElementById('chatMsg').focus();
  //   }
  // }

  // // Function to send a chat message when the enter/return
  // // button is pressed
  // $scope.handleKeyPress = function(event){
  //   if(event.which === 13) {
  //     $scope.sendMsg();
  //   }
  // }

  // // Function to move the scroll bar to the bottom of the textarea
  // $scope.scrollBottom = function(){
  //   var chatBox = document.getElementById('chatBox');
  //   chatBox.scrollTop = 99999;
  // }
})
.directive('svgIcon', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<svg viewBox="0 0 24 24" style="pointer-events: none;"><g><g><rect fill="none" width="24" height="24"></rect><path d="M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z"></path></g></g></svg>'
  };
});
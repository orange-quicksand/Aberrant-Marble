app.factory('Room', function($http) {
  var  _roomId = null;

  return {


    getRoomId: function() {
      return _roomId;
    },

    setRoomId: function(id) {
      return _roomId = id;
    },

    getRoom: function(source, target) {
      return $http({
        method: 'GET',
        url: '/api/getroom',
        params: {
          desired: target,
          native: source
        }
      })
      .then(function(res){
          return res.data;
        }, function(error){
          return error;
        }
      );
    }

  };
});

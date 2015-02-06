app.factory('Room', function($http) {
  var  _roomId = null;

  return {


    getRoomId: function() {
      return _roomId;
    },

    setRoomId: function(id) {
      return _roomId = id;
    },

    setAsReady: function(source, target) {
      return $http({
        method: 'GET',
        url: '/api/getroom',
        params: {
          desired: target,
          native: source
        }
      })
      .then(function(res){
          _roomId = res.data;
          return res.data;
        }, function(error){
          return error;
        }
      );
    },

    isPartnerReady: function() {
      if (!_roomId) { return null; }

      return $http({
        method: 'GET',
        url: '/api/ready',
        params: {
          roomId: _roomId          
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
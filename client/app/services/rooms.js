app.factory('Rooms', function($http) {
  return {
    
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
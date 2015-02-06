var Partner = require('./partnerModel');

module.exports = partners = {
  storage: {},

  add: function(roomId) {
    if (this.storage.hasOwnProperty(roomId)) {
      this.storage[roomId].setAsReady();
    } else {
      this.storage[roomId] = new Partner(roomId);
      console.log('Setting new Room as', roomId);
    }
  },

  isReady: function(roomId) {
    if (this.storage.hasOwnProperty(roomId)) {
      return this.storage[roomId].isReady();
    } else {
      return null;
    }
  },

  remove: function(roomId) {
  	if (this.storage.hasOwnProperty(roomId)) {
      delete this.storage[roomId];
    }
  }
};

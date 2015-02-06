module.exports = Partner = function(roomId) {

  this.roomId = roomId;
  this._ready = false
};

Partner.prototype.isReady = function() {
  return this._ready;
};

Partner.prototype.setAsReady = function() {
  this._ready = true;
};

Partner.prototype.setAsNotReady = function() {
  this._ready = false;
};
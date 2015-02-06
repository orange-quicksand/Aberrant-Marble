var bodyParser = require('body-parser');
var express = require('express');
var crypto = require('crypto');

var app = express();

// config file to instantiate all queues
var queues = require('./queue/queueCollection.js');
var queueModel = require('./queue/queueModel.js');

var Partner = require('./partner/partnerModel.js');
var partners = require('./partner/partnerCollection.js');

var port = process.env.PORT || 3000;
var host = process.env.host || '127.0.0.1';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/../client/'));

app.listen(port);

console.log('Server now listening on port ' + port);

module.exports = app;

//when a user clicks his native and desired language and clicks go, send a post request to api/languages
//create a queue for that specific language queue, then 
app.get('/api/getroom', function(req, res) {


  var nativeLanguage = req.query.native;
  var desiredLanguage = req.query.desired;
  var requireNative = (req.query.requireNative === "true");

  console.log(nativeLanguage,desiredLanguage);

  var nonNativePartners = queues[Queue.stringify(nativeLanguage,desiredLanguage)];
  var nativePartners = queues[Queue.stringify(desiredLanguage,nativeLanguage)];
  var partnerRoom = null;
  if (!requireNative && nonNativePartners.length() > 0) {
    partnerRoom = nonNativePartners.shift();
    partners.add(partnerRoom);
    res.status(200).send(partnerRoom);
  } else if (nativePartners.length() > 0) {
    partnerRoom = nativePartners.shift();
    partners.add(partnerRoom);
    res.status(200).send(partnerRoom);
  } else {
    console.log('new room');
    var newRoom = crypto.pseudoRandomBytes(256).toString('base64');
    console.log(newRoom);
    queues[Queue.stringify(nativeLanguage,desiredLanguage)].push(newRoom);
    partners.add(newRoom);
    res.status(200).send(newRoom);
  }
});

// Check if the partner is ready
app.get('/api/ready', function(req, res) {
  var roomId = req.query.roomId;
  var isReady = partners.isReady(roomId);  
  res.status(200).send({isReady: isReady});
});

app.get('/api/position', function(req, res) {
  var room = req.query.room;
  // response.s 
  var room = req.query.room;
  // for(var i = 0;)
});
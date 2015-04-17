var express = require('express');
var redis = require('redis');

var app = express();
app.enable('trust proxy');

var client = redis.createClient('6379', 'redis');

app.get('/', function(req, res, next) {
  client.incr('counter', function(err, counter) {
    if(err) return next(err);
    res.send('This page has been viewed ' + counter + ' times!');
  });
});

var server = app.listen(process.env.PORT || 3000, function() {
	console.log('Porta: teste');
	console.log('Api listening on port %d', server.address().port);
});
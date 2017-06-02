var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');
var mqtt = require('mqtt');
var mongo = require('mongodb');
var monk = require('monk');
//var db = monk('localhost:27017/traffic');
var db = monk('localhost:27017/abcz');
//ar db = monk('localhost:27017/traddffic');
var index = require('./routes/index');
var users = require('./routes/users');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();

})

app.use('/', index);
app.use('/users', users);

app.use('/', index);
app.use('/abcz', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

 

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




/*
var options = {
    port: 16479,
    host: 'tcp://m12.cloudmqtt.com',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'sxdzesyk',
    password: 'dc_pY7Q7gOTw',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};
var client = mqtt.connect('tcp://m12.cloudmqtt.com', options);
client.on('connect', function() { // When connected
    console.log('connected');
    // subscribe to a topic
    client.subscribe('amitynoida', function() {
        // when a message arrives, do something with it
        client.on('message', function(topic, message, packet) {
            
            var mymsg=(message);
            
            console.log(mymsg.toString());

            
        });
    });

     /*publish a message to a topic
    client.publish('amitynoida', 'hello123', function() {
        console.log("Message is published");
        client.end(); // Close the connection when published
    });

});

*/

module.exports = app;

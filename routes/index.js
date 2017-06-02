var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/triiaffic');
const mqtt = require('mqtt')  
/* GET home page. */



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });


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

console.log(client);



client.on('connect', function() { // When connected
    console.log('connected');
    // subscribe to a topic
    

    client.subscribe('amitynoida', function() {

        
        // when a message arrives, do something with it
        client.on('message', function(topic, message, packet) {
  


            var mymsg=(message);

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/abcz";

MongoClient.connect(url, function(err, db) {

  if (err) throw err;
  var myobj = {name: mymsg.toString()};
   
  db.collection("data").insertOne(myobj, function(err, res) {
  
    if (err) throw err;
  
    console.log("1 record inserted");
  
    db.close();
  });
});




            
            console.log(mymsg.toString());

            
        

        });
    });

     /*publish a message to a topic
    client.publish('amitynoida', 'hello123', function() {
        console.log("Message is published");
        client.end(); // Close the connection when published
    });
*/
});







    });




router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });

});


router.get('/signal', function(req, res, next) {



  res.render('signal', { title: 'signal' });


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

console.log(client);



client.on('connect', function() { // When connected
    console.log('connected');
    // subscribe to a topic
    

    client.subscribe('amitynoida', function() {

        
        // when a message arrives, do something with it
        client.on('message', function(topic, message, packet) {
  


            var mymsg=(message);

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/abcz";

MongoClient.connect(url, function(err, db) {

  if (err) throw err;
  var myobj = {name: mymsg.toString()};
   
  db.collection("data").insertOne(myobj, function(err, res) {
  
    if (err) throw err;
  
    console.log("1 record inserted");
  
    db.close();
  });
});




            
            console.log(mymsg.toString());

            
        

        });
    });

     /*publish a message to a topic
    client.publish('amitynoida', 'hello123', function() {
        console.log("Message is published");
        client.end(); // Close the connection when published
    });
*/
});







    });




router.get('/abc', function(req, res, next) {
  res.render('abc', { title: 'abc' });





});




module.exports = router;

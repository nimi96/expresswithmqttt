var express = require('express');
var router = express.Router();
const mqtt = require('mqtt')
/* GET users listing. 
*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.json(docs);


    });
});


router.get('/data', function(req, res) {
    var db = req.db;
    var collection = db.get('data');
    collection.find({},{}, function(e,docs){
        res.json(docs);


    });

});





router.post('/adduser', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        
        );

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
});



module.exports = router;

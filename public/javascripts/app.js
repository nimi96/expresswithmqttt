
var mqtt = require('mqtt');

var options = {
    port: 16479,
    host: 'tcp://m12.cloudmqtt.com',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'sxdzesyk',
    password: 'dc_pY7Q7gOTw',
    
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

            
       console.log("Receivedcdzk xj '" + message + "' on '" + topic + "'");



        });
    });

     /*publish a message to a topic
    client.publish('amitynoida', 'hello123', function() {
        console.log("Message is published");
        client.end(); // Close the connection when published
    });
*/
});






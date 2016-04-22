var app = require('./server.js');
var server = require('http').createServer(app);
var io = require('./server/utils/socketio')(server);

var port = process.env.PORT || 3333;

server.listen(port);

console.log('Server listening on port: ', port);

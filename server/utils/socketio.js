var canteenIO = require('socket.io');

module.exports = function(server) {
  var io = canteenIO.listen(server);

  io.sockets.on('connection', function (socket) {
    socket.on('message:send', function (msg) {
      io.emit('message:broadcast', msg);
    });

    socket.on('task:update', function(task) {
      console.log(task);
      io.emit('task:broadcast', task);
    });
  });
  return io;
};
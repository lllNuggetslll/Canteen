angular.module('canteen.socketFactory', [])

.factory('socket', [
  'socketFactory',
  function(socketFactory) {
    var mainSocket = socketFactory();
    return mainSocket;
  }
]);

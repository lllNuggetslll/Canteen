angular.module('canteen.messageFactory', [])

.factory('messageFactory', [
  '$http',
  function ($http) {
    function getMessages(tripId) {
      return $http({
        method: 'GET',
        url: '/api/messages/' + tripId
      })
      .then(function (resp) {
        return resp.data;
      })
      .catch(function (err) {
        console.error(err);
      });
    }

    function addMessage(message, tripId) {
      return $http({
        method: 'POST',
        url: '/api/messages/' + tripId,
        data: message
      })
      .then(function (resp) {
        return resp.data;
      })
      .catch(function (err) {
        console.error(err);
      });
    }

    // Factory methods use promises
    return {
      getMessages: getMessages,
      addMessage: addMessage
    };
  },
]);

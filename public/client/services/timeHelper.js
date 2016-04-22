angular.module('canteen.timeHelper', [])

.factory('timeHelper', [
  function() {
    function convertTime (time) {
      var momentTime = moment(time);
      var adjustedTime = momentTime.format('dddd, MMMM Do YYYY, h:mm:ss A');
      return adjustedTime;
    }

    return {
      convertTime: convertTime,
    };
  },
]);
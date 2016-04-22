angular.module('canteen.taskView', ['xeditable'])

.controller('taskView', [
  '$scope',
  'trip',
  'formFactory'
  function ($scope, trip) {
    $scope.updateStatus = function (task) {
      // Toggles status code between 0 and 1
      // and updates in db
      task.statusCode = task.statusCode ? 0 : 1;
      trip.updateStatus($scope.trip);
    };
  },


    $scope.updateTask = function(){



    }



]);

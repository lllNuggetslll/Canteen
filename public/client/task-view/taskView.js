angular.module('canteen.taskView', ['xeditable'])

.controller('taskView', [
  '$scope',
  'trip',
  'taskHolder',
  'socket',
  function($scope, trip, taskHolder, socket) {
    $scope.taskList = {};
    trip.getAllTasks($scope.trip._id)
      .then(function(data) {
        $scope.taskList = data
      });

    $scope.updateTask = function(task) {
      trip.updateTask(task)
      .then(function(data) {
        socket.emit('task:update', data);
      });
    };

    $scope.removeTask = function(task, index) {
      trip.deleteTask(task._id)
        .then(function(data) {
          if (data) {
            trip.getAllTasks($scope.trip._id)
              .then(function(data) {
                $scope.taskList = data
              });
          }
        });
    };

    $scope.$on('refresh', function() {
      trip.getAllTasks($scope.trip._id)
        .then(function(data) {
          $scope.taskList = data;
        });
    });

    socket.on('task:broadcast', function(updatedTask) {
      if (updatedTask.tripId === $scope.trip._id) {
        for (var task in $scope.taskList) {
          if ($scope.taskList[task]._id === updatedTask._id) {
            $scope.taskList[task] = updatedTask;
          }
        }
      }
    });
  }
])

.factory('taskHolder', ['$rootScope',
  function($rootScope) {
    function refreshTasks() {
      $rootScope.$broadcast('refresh');
    }
    return {
      refreshTasks: refreshTasks
    }
  }
]);

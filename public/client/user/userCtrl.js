angular.module('canteen.user', [])

.controller('userCtrl', [
  '$scope',
  '$stateParams',
  'userTrips',
  function ($scope, $stateParams, userTrips) {
    // console.log($stateParams.userId);

    $scope.user = {};
    $scope.trips = [];
    // get user info

    userTrips.getUserInfo($stateParams.userId)
    .then(function(userData) {
      $scope.user = userData.user;

      $scope.trips = userTrips.poulateTrips(userData.trips);
    });

  }
]);
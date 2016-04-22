angular.module('canteen.user', [])

.controller('userCtrl', [
  '$scope',
  '$stateParams',
  function ($scope, $stateParams) {
    $scope.username = 'User';
    
  }
]);
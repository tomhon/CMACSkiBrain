'use strict';

angular.module('spacAdminApp')
  .directive('racelist',function() {
    return {
      templateUrl:'scripts/directives/races/racelist.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller:function($scope){
        $scope.raceName = 'First Race';
      }
    }
  });

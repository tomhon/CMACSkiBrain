'use strict';

angular.module('spacAdminApp')
  .directive('volunteerlist', function () {
    return {
      templateUrl:'scripts/directives/volunteer-list/volunteer-list.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller: function ($scope, $http) {
          $scope.positions = [
                {
                    date: '1/1/2016',
                    race: 'WildKatz',
                    position: 'Gate Judge',
                    available: true
                },
                {
                    date: '1/2/2016',
                    race: 'WildKatz',
                    position: 'Course Crew',
                    available: false
                },
                {
                    date: '2/1/2016',
                    race: 'Apple Cup',
                    position: 'Gate Judge',
                    available: true
                },
                {
                    date: '2/2/2016',
                    race: 'Apple Cup',
                    position: 'Course Crew',
                    available: true
                }
          ];

          $scope.displayedPositions = [].concat($scope.positions);
      }
    }
  });

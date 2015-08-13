'use strict';

angular.module('spacAdminApp')
  .directive('racelist',function() {
    return {
      templateUrl:'scripts/directives/races/racelist.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller: function ($scope, $http) {

          $scope.LoadRaces = function() {
              $http.get('/api/Races/', $scope.data).success(function (data, status, headers, config) {
                  $scope.races = data;
              }).error(function (data, status, headers, config) {
                  $scope.errorMessage = "Oops... something went wrong";
              });
          }

          $scope.LoadRaces();

      }
    }
  });

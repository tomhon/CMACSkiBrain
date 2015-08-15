'use strict';

angular.module('spacAdminApp')
    .controller('loginController', function ($scope, $location, $modalInstance, authService) {

        $scope.loginData = {
            userName: "",
            password: ""
        };

        $scope.message = "";

        $scope.login = function () {

            authService.login($scope.loginData).then(function (response) {

                $modalInstance.close();

            },
             function (err) {
                 $scope.message = err.error_description;
             });
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    });
'use strict';

angular.module('spacAdminApp')
    .controller('registerController', function ($scope, $location, $timeout, $modalInstance, $modal, authService) {

    $scope.savedSuccessfully = false;
    $scope.message = "";

    $scope.registration = {
        userName: "",
        password: "",
        confirmPassword: ""
    };

    $scope.signUp = function () {

        authService.saveRegistration($scope.registration).then(function (response) {

            $scope.savedSuccessfully = true;
            $scope.message = "User has been registered successfully, you will be asked to login in 2 seconds.";
            startTimer();

        },
         function (response) {
             var errors = [];
             for (var key in response.data.modelState) {
                 for (var i = 0; i < response.data.modelState[key].length; i++) {
                     errors.push(response.data.modelState[key][i]);
                 }
             }
             $scope.message = errors.join(' ');
         });
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    var startTimer = function () {
        var timer = $timeout(function () {
            $timeout.cancel(timer);

            var modalInstance2 = $modal.open({
                controller: 'loginController',
                templateUrl: 'scripts/views/login.html',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'spacAdminApp',
                            files: [
                            'scripts/controllers/loginController.js'
                            ]
                        })
                    }
                }
            });

            modalInstance2.result.then(function(result) {
                $modalInstance.dismiss('cancel');
            }, function(err) {
                $modalInstance.dismiss('cancel');
            });
        }, 2000);
    }

});
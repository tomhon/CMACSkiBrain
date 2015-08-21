'use strict';

angular.module('spacAdminApp')
	.directive('headerMenu',function(){
		return {
            templateUrl:'scripts/directives/header/header-menu/header-menu.html',
            restrict: 'E',
            replace: true,
            scope: {
            },
            controller: function ($scope, $modal, authService) {

                $scope.authorized = function () {
                    return authService.authentication.isAuth;
                }

                $scope.userName = function () {
                    if ($scope.authorized()) {
                        return authService.authentication.userName;
                    }
                    else {
                        return 'Not Logged In';
                    }
                       
                }

                $scope.logOut = function () {
                    authService.logOut();
                }

                $scope.login = function () {

                    var modalInstance = $modal.open({
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
                }

                $scope.register = function () {

                    var modalInstance = $modal.open({
                        controller: 'registerController',
                        templateUrl: 'scripts/views/register.html',
                        resolve: {
                            loadMyFiles: function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'spacAdminApp',
                                    files: [
                                    'scripts/controllers/registerController.js'
                                    ]
                                })
                            }
                        }
                    });
                }

            }
    	}
	});



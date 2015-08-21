'use strict';

angular.module('spacAdminApp')
    .factory('authService', ['$http', '$q', 'localStorageService', function ($http, $q, localStorageService) {
    var serviceBase = '/';
    var authServiceFactory = {};
 
    var authentication = {
        isAuth: false,
        userName: "",
    };
 
    var saveRegistration = function (registration) {
 
        logOut();
 
        return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
            return response;
        });
 
    };
 
    var login = function (loginData) {

        var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password + "&client_id=webApp";

        var deferred = $q.defer();

        $http = $http || $injector.get('$http');
        $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName, refreshToken: response.refresh_token});
            authentication.isAuth = true;
            authentication.userName = loginData.userName;

            deferred.resolve(response);

        }).error(function (err, status) {
            logOut();
            deferred.reject(err);
        });

        return deferred.promise;

    };
 
    var logOut = function () {
 
        localStorageService.remove('authorizationData');
 
        authentication.isAuth = false;
        authentication.userName = "";
 
    };
 
    var fillAuthData = function () {
 
        var authData = localStorageService.get('authorizationData');
        if (authData)
        {
            authentication.isAuth = true;
            authentication.userName = authData.userName;
        }
 
    }

    var refreshToken = function () {
        var deferred = $q.defer();

        var authData = localStorageService.get('authorizationData');

        if (authData) {

            var data = "grant_type=refresh_token&refresh_token=" + authData.refreshToken + "&client_id=webApp";

            localStorageService.remove('authorizationData');

            $http = $http || $injector.get('$http');
            $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

                localStorageService.set('authorizationData', { token: response.access_token, userName: response.userName, refreshToken: response.refresh_token});

                deferred.resolve(response);

            }).error(function (err, status) {
                logOut();
                deferred.reject(err);
            });
        } else {
            deferred.reject();
        }

        return deferred.promise;
    };
 
    authServiceFactory.saveRegistration = saveRegistration;
    authServiceFactory.login = login;
    authServiceFactory.logOut = logOut;
    authServiceFactory.fillAuthData = fillAuthData;
    authServiceFactory.authentication = authentication;
    authServiceFactory.refreshToken = refreshToken;
 
    return authServiceFactory;
}]);
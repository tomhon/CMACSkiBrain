  /* globals angular */
  angular
    .module('skibrain.mobile', ['ionic', 'skibrain.mobile.controllers'])
    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      'use strict';
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        });

      $urlRouterProvider.otherwise('/home');
    }]);
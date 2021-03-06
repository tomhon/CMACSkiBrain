/* Disclaimer : UX based on SB Admin V2.0 template found here: https://github.com/start-angular/sb-admin-angular. Significant modifications have been made throughout as this template was simply used as a basis.
*/

'use strict';
/**
 * @ngdoc overview
 * @name spacAdminApp
 * @description
 * # spacAdminApp
 *
 * Main module of the application.
 */
angular
  .module('spacAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'LocalStorageModule',
    'smart-table'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $httpProvider.interceptors.push('authInterceptorService');

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'scripts/views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'spacAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-menu/header-menu.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl: 'scripts/views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'spacAdminApp',
              files:[
              'scripts/controllers/main.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/directives/chat/chat.js',
              'scripts/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
      .state('dashboard.races', {
              templateUrl: 'scripts/views/races.html',
              url: '/races',
              resolve: {
                  loadMyFiles: function ($ocLazyLoad) {
                      return $ocLazyLoad.load({
                          name: 'spacAdminApp',
                          files: [
                          'scripts/directives/races/racelist.js'
                          ]
                      })
                  }
              }
      })
          .state('dashboard.volunteer', {
              templateUrl: 'scripts/views/volunteer.html',
              url: '/volunteer',
              resolve: {
                  loadMyFiles: function ($ocLazyLoad) {
                      return $ocLazyLoad.load({
                          name: 'spacAdminApp',
                          files: [
                          'scripts/directives/volunteer-list/volunteer-list.js'
                          ]
                      })
                  }
              }
          })
      .state('dashboard.form',{
          templateUrl: 'scripts/views/form.html',
        url:'/form'
    })
      .state('dashboard.blank',{
          templateUrl: 'scripts/views/pages/blank.html',
        url:'/blank'
    })
      .state('dashboard.chart',{
          templateUrl: 'scripts/views/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                'bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'spacAdminApp',
                files:['scripts/controllers/chartContoller.js']
            })
          }
        }
    })
      .state('dashboard.table',{
          templateUrl: 'scripts/views/table.html',
        url:'/table'
    })
      .state('dashboard.panels-wells',{
          templateUrl: 'scripts/views/ui-elements/panels-wells.html',
          url:'/panels-wells'
      })
      .state('dashboard.buttons',{
          templateUrl: 'scripts/views/ui-elements/buttons.html',
        url:'/buttons'
    })
      .state('dashboard.notifications',{
          templateUrl: 'scripts/views/ui-elements/notifications.html',
        url:'/notifications'
    })
      .state('dashboard.typography',{
          templateUrl: 'scripts/views/ui-elements/typography.html',
       url:'/typography'
   })
      .state('dashboard.icons',{
          templateUrl: 'scripts/views/ui-elements/icons.html',
       url:'/icons'
   })
      .state('dashboard.grid',{
          templateUrl: 'scripts/views/ui-elements/grid.html',
       url:'/grid'
   })
  }])
.run(['authService', function (authService) {
      authService.fillAuthData();
  }]);

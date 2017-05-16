'use strict';

// Declare app level module which depends on filters, and services
angular.module('po', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.router',
  'ngSanitize'
])
.config(['$logProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', '$qProvider',
  function($logProvider, $stateProvider, $urlRouterProvider, $locationProvider, $qProvider) {
    // $locationProvider.html5Mode({enabled:true, requireBase:false});

    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/landing.html',
        controller: 'MainCtrl',
        controllerAs: 'ctrl'
      })
    );

    $logProvider.debugEnabled(true);
    $qProvider.errorOnUnhandledRejections(false);
  }
])
.run(['$rootScope', function($rootScope) {
  $rootScope.$on('$stateChangeStart', function (event, toState, fromState, fromParams) {
  });
}]);

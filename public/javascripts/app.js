// Declare app level module which depends on views, and components
angular.module('trelloApp', [
  'ui.router',
  'trelloApp.view1',
  'trelloApp.view2',
  'trelloApp.viewform',
  'trelloApp.version'
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  'use strict';

	$urlRouterProvider.otherwise("/view1");

}]);

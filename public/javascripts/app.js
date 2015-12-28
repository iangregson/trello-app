// Declare app level module which depends on views, and components
angular.module('trelloApp', [
  'ngAnimate',
  'ui.router',
  'trelloApp.view1',
  'trelloApp.view2',
  'trelloApp.viewform',
  'trelloApp.version',
  'trelloApp.services',
  'trelloApp.board-list.board-list-directive',
  'trelloApp.board',
  'nvd3'
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  'use strict';

	$urlRouterProvider.otherwise("/view1");

}]);

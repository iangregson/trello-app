// Declare app level module which depends on views, and components
angular.module('trelloApp', [
  'ngAnimate',
  'ui.router',
  'trelloApp.home',
  'trelloApp.version',
  'trelloApp.services',
  'trelloApp.board-list.board-list-directive',
  'trelloApp.board',
  'trelloApp.board.directives',
  'nvd3',
  'trelloApp.nav'
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  'use strict';

	$urlRouterProvider.otherwise("/home");

}]);

// state config
module.exports = function($stateProvider, $urlRouterProvider) {
	'use strict';

	$urlRouterProvider.otherwise("/home");

	$stateProvider
		
		.state("home", {
			url: "/home",
			template:"<nav-bar></nav-bar>",
			controller: "homeCtrl as vm"
		})
		.state("board", {
			url: "/board/:boardID",
			template:"<board-details></board-details><nvd3 options='vm.options' data='vm.lists'></nvd3>",
			controller: "boardCtrl as vm"
		});

};
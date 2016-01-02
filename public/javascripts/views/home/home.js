"use strict";
angular.module("trelloApp.home", [ "ui.router" ] )
	.config(["$stateProvider", function($stateProvider) {
		
		$stateProvider

		.state("home", {
			url: "/home",
			templateUrl:"javascripts/views/home/home.html",
			controller:"homeCtrl as vm"
		})
	}])

	.controller("homeCtrl", [ function() {
		
	}]);
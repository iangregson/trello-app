"use strict";
angular.module("trelloApp.view1", [ "ui.router" ] )
	.config(["$stateProvider", function($stateProvider) {
		
		$stateProvider

		.state("view1", {
			url: "/view1",
			templateUrl:"javascripts/views/view1/view1.html",
			controller:"View1Ctrl as vm"
		})
	}])

	.controller("View1Ctrl", [ function() {
		
	}]);
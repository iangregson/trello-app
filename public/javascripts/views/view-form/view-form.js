"use strict";
angular.module("trelloApp.viewform", [ "ui.router" ] )
	.config( ["$stateProvider", function($stateProvider) {
		
		$stateProvider

		.state("viewform", {
			url: "/view-form",
			templateUrl:"javascripts/views/view-form/view-form.html",
			controller:"viewformCtrl as vm"
		})
	}])

	.controller("viewformCtrl", [ function() {
		
	}]);
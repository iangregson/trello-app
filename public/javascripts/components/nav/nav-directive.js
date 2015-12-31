"use strict";
angular.module("trelloApp.nav",[])
	.directive("navDirective", function() {
		return {
			restrict: "E",
			templateUrl: "javascripts/components/nav/index.html",
			link: function(scope, elm, attrs) {
			}
		}
	});
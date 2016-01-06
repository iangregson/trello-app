"use strict";
var navDirective = angular.module("trelloApp.nav", []);

navDirective.directive("navDirective", [ "userService", function(userService) {
		return {
			restrict: "E",
			templateUrl: "javascripts/components/nav/index.html",
			link: function(scope, elm, attrs) {
				userService.me().success(function(data) {
					if (!data.profile) {
						scope.user = null;
					} else {
						scope.user = data.profile.displayName;
					}
				})
			}
		}
	}]);
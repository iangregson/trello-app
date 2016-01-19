"use strict";
var userService = angular.module("trelloApp.services", []);

userService.factory("userService", [ "$http", function($http) {
	return {
		me: function() {
			return $http.get("/trello-api");
		}
	};
}]);
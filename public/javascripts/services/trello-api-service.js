"use strict";
var trelloApiService = angular.module("trelloApp.services", []);

trelloApiService.factory("trelloApiService", [ "$http", function($http) {
	return {
		me: function() {
			return $http.get("/trello-api/me");
		},
		lists: function(boardID) {
			return $http.get("/trello-api/me/lists/" + boardID);
		},
		boards: function() {
			return $http.get("/trello-api/me/boards/");
		}
	};
}]);
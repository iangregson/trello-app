"use strict";
angular.module("trelloApp.services", [])
.factory("trelloApiService", function($http) {
	return {
		me: function() {
			return $http.get("/trello-api/me");
		},
		lists: function(boardID) {
			return $http.get("/trello-api/me/lists/" + boardID);
		}		
	};
});
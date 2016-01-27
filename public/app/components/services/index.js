// services index
"use strict";

exports.trelloApiService = function($http) {
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
};

exports.userService = function($http) {
	return {
		me: function() {
			return $http.get("/trello-api");
		}
	};
};
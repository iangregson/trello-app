"use strict";
angular.module("trelloApp.board-list.board-list-directive", ["trelloApp.services"])
	.directive("boardList", function(trelloApiService) {
		return {
			restrict: "E",
			templateUrl: "javascripts/components/board-list/index.html",
			link: function(scope, elm, attrs) {
				trelloApiService.me().success(function(data) {
					scope.boards = data.boards;
				})
			}
		}
	});
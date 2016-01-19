"use strict";
var boardListDirective = angular.module("trelloApp.board-list.board-list-directive", [ "trelloApiService" ]);

boardListDirective.directive("boardList", [ "trelloApiService", function(trelloApiService) {
		return {
			restrict: "EA",
			templateUrl: "javascripts/components/board-list/index.html",
			link: function(scope, elm, attrs) {
				trelloApiService.me().success(function(data) {
					scope.boards = data.boards;
				});
				
			}
		}
	}]);
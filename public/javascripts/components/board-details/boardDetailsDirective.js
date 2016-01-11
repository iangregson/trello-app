"use strict";
var trelloAppBoardDirectives = angular.module("trelloApp.board.directives", []);

trelloAppBoardDirectives.directive("boardDetails", [ function() {
		return {
			restrict: "EA",
			/*scope: {
				vm.boardNames: '=',
				vm.boardID: '=',
				vm.lists: '='
			},*/
			templateUrl: "javascripts/components/board-details/index.html",
			link: function(scope, elm, attrs) {
				
				}
		}
}]);
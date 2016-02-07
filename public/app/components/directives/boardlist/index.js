"use strict";
module.exports = function(trelloApiService) {
	return {
		restrict: "EA",
		templateUrl: "boardlist.html",
		link: function(scope, elm, attrs) {
			trelloApiService.me().success(function(data) {
				scope.boards = data.boards;
			});
			
		}
	};
};
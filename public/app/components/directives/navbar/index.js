// directives index

module.exports = function(userService) {
	return {
		restrict: "E",
		templateUrl: "navbar.html",
		link: function(scope, elm, attrs) {
			userService.me().success(function(data) {
				if (!data.profile) {
					scope.user = null;
				} else {
					scope.user = data.profile.displayName;
				};
			});
		}
	};
};
(function(module) {
try {
  module = angular.module('trelloApp.templates');
} catch (e) {
  module = angular.module('trelloApp.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('boarddetails.html',
    '<div><h3>{{(vm.boardNames | filter: {id: vm.boardID})[0].name}}</h3></div>\n' +
    '<div ng-repeat="list in vm.lists track by $index">\n' +
    '<strong>{{list.Key}}</strong> has {{list.Y}} cards.\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('trelloApp.templates');
} catch (e) {
  module = angular.module('trelloApp.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('boardlist.html',
    '<div class="button toggle toggle-open" ng-click="toggle = !toggle" ng-show="!toggle">Board list</div>\n' +
    '<div class="button toggle toggle-close" ng-click="toggle = !toggle" ng-show="toggle">Hide board list</div>\n' +
    '<div class="board-list" ng-show="toggle" ng-click="toggle = !toggle">\n' +
    '		<a class="board-list-item" ng-repeat="board in boards" ng-href="#/board/{{board.id}}"><h3>{{board.name}}</h3></a>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('trelloApp.templates');
} catch (e) {
  module = angular.module('trelloApp.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('navbar.html',
    '<nav>\n' +
    '	<div>\n' +
    '		<h5><ul>\n' +
    '				<li ng-show="!user"><a href="/login">Login</a></li>\n' +
    '				<li ng-show="user">Welcome, {{user}}</li>\n' +
    '		</h5></ul>\n' +
    '		<div ng-show="user"><board-list></board-list></div>\n' +
    '	</div>\n' +
    '</nav>');
}]);
})();

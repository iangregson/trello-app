(function(module) {
try {
  module = angular.module('trelloApp.templates');
} catch (e) {
  module = angular.module('trelloApp.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('boarddetails.html',
    '<div class="board-details title">\n' +
    '	<h1>\n' +
    '		<i class="fa fa-trello"></i>\n' +
    '	</h1>\n' +
    '	<h3>  {{(vm.boardNames | filter: {id: vm.boardID})[0].name}}</h3>\n' +
    '	<a class="board-details back-button" ng-href="/">\n' +
    '		<i class="fa fa-arrow-left"></i> Back\n' +
    '	</a>\n' +
    '</div>\n' +
    '<div class="board-details details" ng-repeat="list in vm.lists track by $index">\n' +
    '	<strong>{{list.Key}}</strong> has {{list.Y}} cards.\n' +
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
    '<div class="button toggle toggle-open" ng-click="toggle = !toggle" ng-show="!toggle"><i class="fa fa-trello"></i> Show board list</div>\n' +
    '<div class="button toggle toggle-close" ng-click="toggle = !toggle" ng-show="toggle"><i class="fa fa-arrow-left"></i> Hide board list</div>\n' +
    '<div class="board-list" ng-show="toggle" ng-click="toggle = !toggle">\n' +
    '		<a class="board-list-item" ng-repeat="board in boards" ng-href="#/board/{{board.id}}"><h5>{{board.name}}</h5></a>\n' +
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
    '	<div class="login" ng-class="{mini: user}">\n' +
    '		<img src="images/trello-logo.png">\n' +
    '		<ul>\n' +
    '			<li ng-show="!user"><a class="button" href="/login">Login to Trello</a></li>\n' +
    '			<li ng-show="user">Welcome, {{user}}</li>\n' +
    '		</ul>\n' +
    '	</div>\n' +
    '	<div ng-show="user"><board-list></board-list></div>\n' +
    '</nav>');
}]);
})();

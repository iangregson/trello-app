describe('TrelloApp Test', function() {

  describe('homeCtrl', function() {
    var injector, scope, ctrl;

    beforeEach(function() {
      injector = angular.injector(['trelloApp.components', 'ngMockE2E']);
      intercepts = {};
      injector.invoke(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('homeCtrl', {$scope: scope});
      });
    }); 

    it('should be defined', function(done) {
      expect(ctrl).toBeDefined();
      done();
    });

  });

  describe('boardCtrl', function() {
    var injector, scope, ctrl, stateparams;

    beforeEach(function() {
      injector = angular.injector(['trelloApp.components', 'ngMockE2E']);
      intercepts = {};
      stateparams = {boardID:'55a24b0e333f1efad9f26073'};
      injector.invoke(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('boardCtrl', {$scope: scope, $stateParams:stateparams});
      });
    }); 

    it('should be defined', function(done) {
      expect(ctrl).toBeDefined();
      done();
    });

  });

});
describe('Controllers', function(){
	var scope;

	beforeEach(module('app.controllers'));

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller('productPageInShopPageCtrl', {$scope: scope});
	}));
    
    it('should authorize', function(){
    	expect(scope.input = Authorization);
    });
});
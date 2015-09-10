'use strict';

describe('myApp.produtos module', function () {
    beforeEach(module('ngApi'));
    beforeEach(module('myApp.produtos'));

    describe('Produtos controller', function () {
        it('should ....', inject(function ($controller) {
            var scope = {};
            var homeController = $controller('ProdutosController', {$scope: scope});

            expect(homeController).toBeDefined();
        }));
    });
});
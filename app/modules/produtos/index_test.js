'use strict';

describe('myApp.produtos module', function () {
    beforeEach(module('myApp.api'));
    beforeEach(module('myApp.produtos'));

    describe('Produtos controller', function () {
        it('should ....', inject(function ($controller) {
            var scope = {};
            var homeController = $controller('ProdutosController', {$scope: scope});

            expect(homeController).toBeDefined();
        }));
    });
});
'use strict';

describe('myApp.orcamentos module', function () {
    beforeEach(module('myApp.api'));
    beforeEach(module('myApp.orcamentos'));

    describe('Orcamentos controller', function () {
        it('should ....', inject(function ($controller) {
            var scope = {};
            var homeController = $controller('OrcamentosController', {$scope: scope});

            expect(homeController).toBeDefined();
        }));
    });
});
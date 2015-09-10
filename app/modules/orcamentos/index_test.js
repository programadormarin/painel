'use strict';

describe('myApp.orcamentos module', function () {
    beforeEach(module('ngApi'));
    beforeEach(module('myApp.orcamentos'));

    describe('Orcamentos controller', function () {
        it('should ....', inject(function ($controller) {
            var scope = {};
            var homeController = $controller('OrcamentosController', {$scope: scope});

            expect(homeController).toBeDefined();
        }));
    });
});
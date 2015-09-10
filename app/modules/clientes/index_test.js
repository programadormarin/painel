'use strict';

describe('myApp.clientes module', function () {
    beforeEach(module('ngApi'));
    beforeEach(module('myApp.clientes'));

    describe('Clientes controller', function () {
        it('should ....', inject(function ($controller) {
            var scope = {};
            var homeController = $controller('ClientesController', {$scope: scope});

            expect(homeController).toBeDefined();
        }));
    });
});
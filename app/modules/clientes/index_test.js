'use strict';

describe('myApp.clientes module', function () {
    beforeEach(module('myApp.api'));
    beforeEach(module('myApp.clientes'));

    describe('Clientes controller', function () {
        it('should ....', inject(function ($controller) {
            var scope = {};
            var homeController = $controller('ClientesController', {$scope: scope});

            expect(homeController).toBeDefined();
        }));
    });
});
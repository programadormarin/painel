'use strict';

describe('myApp.empresa module', function () {
    beforeEach(module('myApp.api'));
    beforeEach(module('myApp.empresa'));

    describe('Empresa controller', function () {
        it('should ....', inject(function ($controller) {
            var scope = {};
            var homeController = $controller('EmpresaController', {$scope: scope});

            expect(homeController).toBeDefined();
        }));
    });
});
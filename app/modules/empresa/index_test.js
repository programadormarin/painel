'use strict';

describe('myApp.empresa module', function () {
    beforeEach(module('ngApi'));
    beforeEach(module('myApp.empresa'));

    describe('Empresa controller', function () {
        it('should ....', inject(function ($controller) {
            var scope = {};
            var homeController = $controller('EmpresaController', {$scope: scope});

            expect(homeController).toBeDefined();
        }));
    });
});
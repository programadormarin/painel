'use strict';

describe('myApp.aviso module', function () {
    beforeEach(module('myApp.api'));
    beforeEach(module('myApp.aviso'));

    describe('Aviso controller', function () {
        it('should ....', inject(function ($controller) {
            var scope = {};
            var homeController = $controller('AvisoController', {$scope: scope});

            expect(homeController).toBeDefined();
        }));
    });
});
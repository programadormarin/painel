'use strict';

describe('myApp.inicio module', function () {
    beforeEach(module('myApp.inicio'));

    describe('Inicio controller', function () {
        it('should ....', inject(function ($controller) {
            var scope    = {};
            var homeController = $controller('InicioController', {$scope:scope});

            expect(homeController).toBeDefined();
        }));
    });
});
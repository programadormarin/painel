'use strict';

describe('myApp.usuarios module', function () {
    beforeEach(module('ngApi'));
    beforeEach(module('myApp.usuarios'));

    describe('Usuarios controller', function () {
        it('should ....', inject(function ($controller) {
            var scope = {};
            var homeController = $controller('UsuariosController', {$scope: scope});

            expect(homeController).toBeDefined();
        }));
    });
});
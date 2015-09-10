'use strict';

describe('myApp.usuarios module', function () {
    beforeEach(module('myApp.api'));
    beforeEach(module('myApp.usuarios'));

    describe('Usuarios controller', function () {
        it('should ....', inject(function ($controller) {
            var scope    = {};
            var homeController = $controller('UsuariosController', {$scope:scope});

            expect(homeController).toBeDefined();
        }));
    });
});
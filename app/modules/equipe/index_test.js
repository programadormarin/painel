'use strict';

describe('myApp.equipe module', function () {
    beforeEach(module('myApp.api'));
    beforeEach(module('myApp.equipe'));

    describe('Equipe controller', function () {
        it('should ....', inject(function ($controller) {
            var scope = {};
            var homeController = $controller('EquipeController', {$scope: scope});

            expect(homeController).toBeDefined();
        }));
    });
});
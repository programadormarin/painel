'use strict';

describe('myApp.equipe module', function () {
    beforeEach(module('ngApi'));
    beforeEach(module('myApp.equipe'));

    describe('Equipe controller', function () {
        it('should ....', inject(function ($controller) {
            var scope = {};
            var homeController = $controller('EquipeController', {$scope: scope});

            expect(homeController).toBeDefined();
        }));
    });
});
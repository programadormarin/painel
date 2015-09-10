'use strict';

describe('myApp.empregos module', function () {
    beforeEach(module('myApp.api'));
    beforeEach(module('myApp.empregos'));

    describe('Empregos controller', function () {
        it('should ....', inject(function ($controller) {
            var scope = {};
            var homeController = $controller('EmpregosController', {$scope: scope});

            expect(homeController).toBeDefined();
        }));
    });
});
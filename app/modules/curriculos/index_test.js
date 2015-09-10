'use strict';

describe('myApp.curriculos module', function () {
    beforeEach(module('myApp.api'));
    beforeEach(module('myApp.curriculos'));

    describe('Curriculos controller', function () {
        it('should ....', inject(function ($controller) {
            var scope = {};
            var homeController = $controller('CurriculosController', {$scope: scope});

            expect(homeController).toBeDefined();
        }));
    });
});
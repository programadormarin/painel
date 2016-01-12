'use strict';

describe('myApp.parceiros module', function () {
    beforeEach(module('ngApi'));
    beforeEach(module('myApp.parceiros'));

    describe('Parceiros controller', function () {
        it('should ....', inject(function ($controller) {
            var scope = {};
            var homeController = $controller('ParceirosController', {$scope: scope});

            expect(homeController).toBeDefined();
        }));
    });
});
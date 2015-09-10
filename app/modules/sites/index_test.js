'use strict';

describe('myApp.sites module', function () {
    beforeEach(module('myApp.api'));
    beforeEach(module('myApp.sites'));

    describe('Sites controller', function () {
        it('should ....', inject(function ($controller) {
            var scope = {};
            var homeController = $controller('SitesController', {$scope: scope});

            expect(homeController).toBeDefined();
        }));
    });
});
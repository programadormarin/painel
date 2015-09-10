'use strict';

describe('myApp.login module', function () {
    beforeEach(module('myApp.login'));

    describe('Login controller', function () {
        it('should ....', inject(function ($controller) {
            var scope    = {};
            var homeController = $controller('LoginController', {$scope:scope});

            expect(homeController).toBeDefined();
        }));
    });
});
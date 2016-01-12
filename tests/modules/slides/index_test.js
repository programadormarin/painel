'use strict';

describe('myApp.slides module', function () {
    beforeEach(module('ngApi'));
    beforeEach(module('myApp.slides'));

    describe('Slides controller', function () {
        it('should ....', inject(function ($controller) {
            var scope = {};
            var homeController = $controller('SlidesController', {$scope: scope});

            expect(homeController).toBeDefined();
        }));
    });
});
'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function () {
  it('should automatically redirect to /inicio when location hash/fragment is empty', function () {
    browser.get('/');

    expect(browser.getLocationAbsUrl()).toMatch("/inicio");
  });

  describe('inicio', function () {
    beforeEach(function () {
      browser.get('/#/inicio');
    });


    it('should render inicio when user navigates to /inicio', function () {
      expect(element.all(by.css('[ng-view] h4')).first().getText()).
          toMatch(/.?/);
    });
  });
});

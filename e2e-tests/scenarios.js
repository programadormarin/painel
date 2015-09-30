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

  describe('aviso', function () {
    beforeEach(function () {
      browser.get('/#/aviso');
    });


    it('should render aviso when user navigates to /aviso', function () {
      expect(element.all(by.css('[ng-view] h4')).first().getText()).
          toMatch(/.?/);
    });
  });

  describe('empregos', function () {
    beforeEach(function () {
      browser.get('/#/empregos');
    });


    it('should render empregos when user navigates to /empregos', function () {
      expect(element.all(by.css('[ng-view] h4')).first().getText()).
          toMatch(/.?/);
    });
  });

  describe('empresa', function () {
    beforeEach(function () {
      browser.get('/#/empresa');
    });


    it('should render empresa when user navigates to /empresa', function () {
      expect(element.all(by.css('[ng-view] h4')).first().getText()).
          toMatch(/.?/);
    });
  });

  describe('equipe', function () {
    beforeEach(function () {
      browser.get('/#/equipe');
    });


    it('should render equipe when user navigates to /equipe', function () {
      expect(element.all(by.css('[ng-view] h4')).first().getText()).
          toMatch(/.?/);
    });
  });

  describe('login', function () {
    beforeEach(function () {
      browser.get('/#/login');
    });


    it('should render login when user navigates to /login', function () {
      expect(element.all(by.css('[ng-view] h4')).first().getText()).
          toMatch(/.?/);
    });
  });

  describe('parceiros', function () {
    beforeEach(function () {
      browser.get('/#/parceiros');
    });


    it('should render parceiros when user navigates to /parceiros', function () {
      expect(element.all(by.css('[ng-view] h4')).first().getText()).
          toMatch(/.?/);
    });
  });

  describe('slides', function () {
    beforeEach(function () {
      browser.get('/#/slides');
    });


    it('should render slides when user navigates to /slides', function () {
      expect(element.all(by.css('[ng-view] h4')).first().getText()).
          toMatch(/.?/);
    });
  });
});

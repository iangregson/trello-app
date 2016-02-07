'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('trelloApp', function() {


  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.get('/');
    browser.sleep(5000);
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('/#/home');
    });

    it('should render home when user navigates to /home', function() {
      expect(element.all(by.css('[ui-view] h1')).first().getText()).
        toMatch(/Welcome!/);
    });

  });

});
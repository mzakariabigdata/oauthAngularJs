'use strict';

describe('Service: returnAllPicture', function () {

  // load the service's module
  beforeEach(module('oauthAngularJsApp'));

  // instantiate service
  var returnAllPicture;
  beforeEach(inject(function (_returnAllPicture_) {
    returnAllPicture = _returnAllPicture_;
  }));

  it('should do something', function () {
    expect(!!returnAllPicture).toBe(true);
  });

});

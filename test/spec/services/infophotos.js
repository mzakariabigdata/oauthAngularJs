'use strict';

describe('Service: infoPhotos', function () {

  // load the service's module
  beforeEach(module('oauthAngularJsApp'));

  // instantiate service
  var infoPhotos;
  beforeEach(inject(function (_infoPhotos_) {
    infoPhotos = _infoPhotos_;
  }));

  it('should do something', function () {
    expect(!!infoPhotos).toBe(true);
  });

});

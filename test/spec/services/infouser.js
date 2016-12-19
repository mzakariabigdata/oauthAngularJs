'use strict';

describe('Service: infoUser', function () {

  // load the service's module
  beforeEach(module('oauthAngularJsApp'));

  // instantiate service
  var infoUser;
  beforeEach(inject(function (_infoUser_) {
    infoUser = _infoUser_;
  }));

  it('should do something', function () {
    expect(!!infoUser).toBe(true);
  });

});

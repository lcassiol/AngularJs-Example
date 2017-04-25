'use strict';

describe('Service: contactsApiService', function () {

  // load the service's module
  beforeEach(module('angularjsExampleApp'));

  // instantiate service
  var contactsApiService;
  beforeEach(inject(function (_contactsApiService_) {
    contactsApiService = _contactsApiService_;
  }));

  it('should do something', function () {
    expect(!!contactsApiService).toBe(true);
  });

});

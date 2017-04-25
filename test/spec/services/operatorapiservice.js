'use strict';

describe('Service: operatorApiService', function () {

  // load the service's module
  beforeEach(module('angularjsExampleApp'));

  // instantiate service
  var operatorApiService;
  beforeEach(inject(function (_operatorApiService_) {
    operatorApiService = _operatorApiService_;
  }));

  it('should do something', function () {
    expect(!!operatorApiService).toBe(true);
  });

});

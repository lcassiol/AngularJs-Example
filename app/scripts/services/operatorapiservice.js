'use strict';

/**
 * @ngdoc service
 * @name angularjsExampleApp.operatorApiService
 * @description
 * # operatorApiService
 * Service in the angularjsExampleApp.
 */
angular.module('angularjsExampleApp').factory('operatorApiService', function ($http, appConfig) {
      var _getOperadoras = function(){
        return $http.get(appConfig.baseUrl +  "/operator");
      }

      return{
        getOperadoras : _getOperadoras
      }
  });

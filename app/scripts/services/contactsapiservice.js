'use strict';

/**
 * @ngdoc service
 * @name angularjsExampleApp.contactsApiService
 * @description
 * # contactsApiService
 * Service in the angularjsExampleApp.
 */
angular.module('angularjsExampleApp').factory('contactsApiService', function ($http, appConfig) {
     var _getContatos = function (){
        return $http.get(appConfig.baseUrl +  "/contacts");
     };

     var _saveContato = function (contato){
        return $http.post(appConfig.baseUrl +  "/contacts", contato);
     };

     var _deleteContato = function(contatoId){
        return $http.delete(appConfig.baseUrl + "/contacts/" + contatoId);
     };

     return {
        getContatos: _getContatos,
        saveContato: _saveContato,
        deleteContato: _deleteContato
     }



  });

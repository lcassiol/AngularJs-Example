'use strict';

/**
 * @ngdoc function
 * @name angularjsExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsExampleApp
 */
angular.module('angularjsExampleApp')
  .controller('MainCtrl', function ($scope, contactsApiService,operatorApiService) {
      this.awesomeThings = [
       'HTML5 Boilerplate',
       'AngularJS',
       'Karma'
      ];

      $scope.operadoras = [];
      $scope.contatos = [];
      $scope.app = "Crud Lista Telefônica";
      $scope.applicationError = "";

      var carregaContatos = function (){
        contactsApiService.getContatos().then(function (response){
          console.log(response.data);
          if(response.status == 200){
            $scope.contatos = response.data;
          }
        }).catch(function (error, status){
            console.log("Problem : " + error);
            $scope.applicationError = "Erro! Verifique se o backend está ligado."
        });
      }

      var carregaOperadoras = function (){
        operatorApiService.getOperadoras().then(function (response){
          console.log(response.data);
          if(response.status == 200){
            $scope.operadoras = response.data;
          }
        }).catch(function (error, status){
            console.log("Problem : " + error);
        });
      }

      $scope.adicionarContato = function (contato){
        contato.data = new Date();
        contato.operadora = contato.operadora.nome; //temporary fix
        contactsApiService.saveContato(contato).then(function (response){
          console.log(response.data);
          if(response.status == 200){
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregaContatos();
          }
        }).catch(function (error, status){
            console.log("Problem : " + error);
        });

      };

      $scope.apagarContatos = function(contatosId){
             contactsApiService.deleteContato(contatosId).then(function(reponse){
              carregaContatos();
            });
      };

      $scope.isContatoSelecionado = function (contatos) {
				return contatos.some(function (contato) {
					return contato.selecionado;
				});
			};

      $scope.ordenarPor = function (campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
      }

      carregaContatos();
      carregaOperadoras();


  });

  /*
  example object
  $scope.operadoras = [
    {nome: "Oi", codigo: 14, categoria: "Celular", preco : 2},
    {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
    {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
    {nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
    {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
  ]*/

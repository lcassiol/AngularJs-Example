'use strict';

/**
 * @ngdoc function
 * @name angularjsExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsExampleApp
 */
angular.module('angularjsExampleApp')
  .controller('MainCtrl', function ($scope, $http) {
      this.awesomeThings = [
       'HTML5 Boilerplate',
       'AngularJS',
       'Karma'
      ];

      $scope.operadoras = [];
      $scope.contatos = [];
      $scope.app = "Crud Lista Telefônica";

      var carregaContatos = function (){
        $http.get("http://localhost:8000/contacts").then(function (response){
          console.log(response.data);
          if(response.status == 200){
            $scope.contatos = response.data;
          }
        }).catch(function (error, status){
            console.log("Problem : " + error);
        });
      }

      var carregaOperadoras = function (){
        $http.get("http://localhost:8000/operator").then(function (response){
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
        $scope.contatos.push(angular.copy(contato));
        $http.post("http://localhost:8000/contacts", contato).then(function (response){
          console.log(response.data);
          if(response.status == 200){
            console.log("done");
          }
        }).catch(function (error, status){
            console.log("Problem : " + error);
        });

        delete $scope.contato;
        $scope.contatoForm.$setPristine();
      };

      $scope.apagarContatos = function(contatosId){
            $http.delete("http://localhost:8000/contacts/" + contatosId).then(function(reponse){
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

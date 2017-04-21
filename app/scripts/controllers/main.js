'use strict';

/**
 * @ngdoc function
 * @name angularjsExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsExampleApp
 */
angular.module('angularjsExampleApp')
  .controller('MainCtrl', function ($scope, uppercaseFilter) {
      this.awesomeThings = [
       'HTML5 Boilerplate',
       'AngularJS',
       'Karma'
      ];

      $scope.app = "Crud Lista Telefônica";
      $scope.contatos = [
        {nome:  "Pedro", telefone: "9999-8888", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
        {nome: "Ana", telefone: "9999-8877", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
				{nome: "Maria", telefone: "9999-8866", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
      ];

      $scope.operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Celular", preco : 2},
        {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
				{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
				{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
				{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
      ]

      $scope.adicionarContato = function (contato){
        contato.data = new Date();
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
      };

      $scope.apagarContatos = function(contatos){
        $scope.contatos = contatos.filter(function (contato){
            if(!contato.selecionado) return contato;
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

  });

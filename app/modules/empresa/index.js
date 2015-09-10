'use strict';

angular.module('myApp.empresa', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/empresa', {
                templateUrl: 'modules/empresa/index.html',
                controller: 'EmpresaController'
            })
        ;
    }])

    .controller('EmpresaController', ['$scope', '$routeParams', '$location', 'api',
        function ($scope, $routeParams, $location, api) {
            $scope.site_id = localStorage.getItem('site');

            $scope.removeTelefone = function (indice) {
                $scope.empresa.telefones.splice(indice, 1);
            };

            $scope.removeEmail = function (indice) {
                $scope.empresa.emails.splice(indice, 1);
            };

            $scope.removeEndereco = function (indice) {
                $scope.empresa.enderecos.splice(indice, 1);
            };

            $scope.adicionaTelefone = function (telefone) {
                $scope.empresa.telefones.push(telefone);
                $scope.telefone = '';
            };

            $scope.adicionaEmail = function (email) {
                $scope.empresa.emails.push(email);
                $scope.email = '';
            };

            $scope.adicionaEndereco = function (endereco) {
                $scope.empresa.enderecos.push(endereco);
                $scope.endereco = '';
            };

            $scope.edit = function () {
                api
                    .put('site/' + $scope.site_id, $scope.empresa)
                    .success(function (data) {
                        $scope.status = {
                            type: 'success',
                            message: 'Dados atualizados com sucesso!'
                        }
                    })
                    .error(function () {
                        $scope.status = {
                            type: 'danger',
                            message: 'Ocorreu um erro atualizando os dados da empresa, tente novamente mais tarde'
                        }
                    });
            };

            $scope.get = function () {
                api
                    .get('site/' + $scope.site_id)
                    .then(function (data) {
                        $scope.empresa = (data.data.data);
                    });
            };
        }
    ]);
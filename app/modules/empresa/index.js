'use strict';

/**
 * Empresa
 *
 * @param $scope
 * @param $routeParams
 * @param $location
 * @param $http
 *
 * @constructor
 */
function EmpresaController ($scope, $routeParams, $location, $http) {
    $scope.site_id = localStorage.getItem('site');
    $http.defaults.headers.common.Authorization = localStorage.getItem('token');
    $http.defaults.headers.common.Site          = localStorage.getItem('site');

    /**
     * Remove um telefone do escopo
     *
     * @param indice
     */
    $scope.removeTelefone = function (indice) {
        $scope.empresa.telefones.splice(indice, 1);
    };

    /**
     * Remove um e-mail do escopo
     *
     * @param indice
     */
    $scope.removeEmail = function (indice) {
        $scope.empresa.emails.splice(indice, 1);
    };

    /**
     * Remove um endereço do escopo
     *
     * @param indice
     */
    $scope.removeEndereco = function (indice) {
        $scope.empresa.enderecos.splice(indice, 1);
    };

    /**
     * Insere um telefone no escopo
     *
     * @param telefone
     */
    $scope.adicionaTelefone = function (telefone) {
        $scope.empresa.telefones.push(telefone);
        $scope.telefone = '';
    };

    /**
     * Insere um e-mail no escopo
     *
     * @param email
     */
    $scope.adicionaEmail = function (email) {
        $scope.empresa.emails.push(email);
        $scope.email = '';
    };

    /**
     * Adiciona um emprego no escopo
     *
     * @param endereco
     */
    $scope.adicionaEndereco = function (endereco) {
        $scope.empresa.enderecos.push(endereco);
        $scope.endereco = '';
    };

    /**
     * Editar Empresa
     */
    $scope.edit = function () {
        $http
            .put($('meta[name="api"]').attr('content') + 'site/' + $scope.site_id, $scope.empresa)
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

    /**
     * Abrir Empresa
     */
    $scope.get = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'site/' + $scope.site_id)
            .then(function (data) {
                $scope.empresa = (data.data.data);
            });
    };
}

angular.module('myApp.empresa', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/empresa', {
                templateUrl: 'modules/empresa/index.html',
                controller: 'EmpresaController'
            })
        ;
    }])

    .controller('EmpresaController', ['$scope', '$routeParams', '$location', '$http', EmpresaController]);
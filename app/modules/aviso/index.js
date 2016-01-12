'use strict';

/**
 * Avisos
 *
 * @param $scope
 * @param $routeParams
 * @param $location
 * @param $http
 *
 * @constructor
 */
function AvisoController ($scope, $routeParams, $location, $http) {
    $scope.curPage  = 1;
    $scope.pageSize = 12;
    $http.defaults.headers.common.Authorization = localStorage.getItem('token');
    $http.defaults.headers.common.Site          = localStorage.getItem('site');

    /**
     * Carrega os Avisos cadastrados
     */
    $scope.load = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'aviso?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
            .then(function (result) {
                $scope.linhas = (result.data);
            });
    };

    /**
     * Adicionar Aviso
     */
    $scope.add = function () {
        $http
            .post($('meta[name="api"]').attr('content') + 'aviso', $scope.aviso)
            .then(function (data, status) {
                $scope.status = {
                    type: 'success',
                    message: 'Aviso inserido com sucesso!'
                };

                $scope.aviso = '';
                $scope.avisoForm.$setPristine();
            });
    };

    /**
     * Apagar aviso
     *
     * @param id
     */
    $scope.delete = function (id) {
        if (confirm('Você deseja realmente apagar o ítem?\nEste procedimento é irreversível!')) {
            $http
                .delete($('meta[name="api"]').attr('content') + 'aviso/' + id)
                .then(function (data) {
                    if (data.status == 204) {
                        $scope.status = {
                            type: 'success',
                            message: 'removida com sucesso!'
                        };

                        $location.path('/aviso');

                        $scope.load();
                    } else {
                        $scope.status = {
                            type: 'danger',
                            message: 'Erro removendo, tente novamente mais tarde'
                        }
                    }
                });
        }
    };

    /**
     * Editar Aviso
     */
    $scope.edit = function () {
        $http
            .put($('meta[name="api"]').attr('content') + 'aviso/' + $routeParams.id, $scope.aviso)
            .success(function (data) {
                $scope.status = {
                    type: 'success',
                    message: 'atualizada com sucesso!'
                }
            })
            .error(function () {
                $scope.status = {
                    type: 'danger',
                    message: 'Ocorreu um erro atualizando, tente novamente mais tarde'
                }
            });
    };

    /**
     * Recuperar Aviso para visualização
     */
    $scope.get = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'aviso/' + $routeParams.id)
            .then(function (data) {
                data.data.data.inicio = new Date(data.data.data.inicio);
                data.data.data.fim = new Date(data.data.data.fim);

                $scope.aviso = (data.data.data);
            });
    }
}

angular
    .module('myApp.aviso', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/aviso', {
                templateUrl: 'modules/aviso/index.html',
                controller: 'AvisoController'
            })
            .when('/aviso/adicionar', {
                templateUrl: 'modules/aviso/add.html',
                controller: 'AvisoController'
            })
            .when('/aviso/editar/:id', {
                templateUrl: 'modules/aviso/edit.html',
                controller: 'AvisoController'
            })
        ;
    }])

    .controller('AvisoController', ['$scope', '$routeParams', '$location', '$http', AvisoController]);
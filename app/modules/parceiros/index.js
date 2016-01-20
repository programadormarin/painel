'use strict';

/**
 * Parceiros
 * 
 * @param $scope
 * @param $routeParams
 * @param $location
 * @param $http
 * @param Upload
 * @constructor
 */
function ParceirosController ($scope, $routeParams, $location, $http, $upload) {
    $scope.curPage  = 1;
    $scope.pageSize = 12;

    /**
     * Carrega Parceiros
     */
    $scope.load = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'parceiro?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
            .then(function (data) {
                $scope.linhas = (data.data);
            });
    };

    /**
     * Adiciona Parceiro
     */
    $scope.add = function () {
        $upload
            .upload({
                url: $('meta[name="api"]').attr('content') + 'parceiro',
                data: $scope.parceiro,
                headers: config.headers
            })
            .then(
                function (resp) {
                    $location.url('/parceiros');
                    $scope.load();
                },
                function (resp) {
                    $scope.status = {
                        type: 'danger',
                        message: 'Erro cadastrando parceiro, tente novamente mais tarde'
                    };
                },
                function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);

                    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                }
            );
    };

    /**
     * Apaga Parceiro
     *
     * @param id
     */
    $scope.delete = function (id) {
        if (confirm('Você deseja realmente apagar o parceiro?\nEste procedimento é irreversível!')) {
            var toDelete = $scope.linhas.data[id];

            $http
                .delete($('meta[name="api"]').attr('content') + 'parceiro/' + toDelete._id)
                .then(function (data) {
                    if (data.status == 204) {
                        $scope.status = {
                            type: 'success',
                            message: 'Parceiro removido com sucesso!'
                        };

                        $location.path('/parceiros');
                        $scope.load();
                    } else {
                        $scope.status = {
                            type: 'danger',
                            message: 'Erro removendo parceiro, tente novamente mais tarde'
                        }
                    }
                });
        }
    };

    /**
     * Editar Parceiro
     */
    $scope.edit = function () {
        $http
            .put($('meta[name="api"]').attr('content') + 'parceiro/' + $routeParams.id, $scope.parceiro)
            .success(function (data) {
                $scope.status = {
                    type: 'success',
                    message: 'Parceiro atualizado com sucesso!'
                }
            })
            .error(function () {
                $scope.status = {
                    type: 'danger',
                    message: 'Ocorreu um erro atualizando os dados do parceiro, tente novamente mais tarde'
                }
            });
    };

    /**
     * Visualizar Parceiro
     */
    $scope.get = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'parceiro/' + $routeParams.id)
            .then(function (data) {
                $scope.parceiro = (data.data.data);
            });
    };
}

angular
    .module('myApp.parceiros', ['ngRoute', 'ngFileUpload'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/parceiros', {
                templateUrl: 'modules/parceiros/index.html',
                controller: 'ParceirosController'
            })
            .when('/parceiros/adicionar', {
                templateUrl: 'modules/parceiros/add.html',
                controller: 'ParceirosController'
            })
            .when('/parceiros/editar/:id', {
                templateUrl: 'modules/parceiros/edit.html',
                controller: 'ParceirosController'
            })
        ;
    }])

    .controller('ParceirosController', ['$scope', '$routeParams', '$location', '$http', 'Upload', ParceirosController]);
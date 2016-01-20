'use strict';

/**
 * Empregos
 *
 * @param $scope
 * @param $routeParams
 * @param $location
 * @param $http
 *
 * @constructor
 */
function EmpregosController ($scope, $routeParams, $location, $http) {
    $scope.curPage   = 1;
    $scope.pageSize  = 12;
    $scope.pageTitle = 'Ofertas de Empregos';

    /**
     * Carrega os Empregos
     */
    $scope.load = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'emprego?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
            .then(function (result) {
                $scope.linhas = (result.data);
            });
    };

    /**
     * Cadastra um Emprego
     */
    $scope.add = function () {
        $http
            .post($('meta[name="api"]').attr('content') + 'emprego', $scope.emprego)
            .success(function () {
                $location.url('/empregos');
                $scope.load();
            })
            .error(function () {
                $scope.status = {
                    type: 'danger',
                    message: 'Ocorreu um erro ao salvar a vaga'
                }
            });
    };

    /**
     * Remove um Emprego
     *
     * @param id
     */
    $scope.delete = function (id) {
        if (confirm('Você deseja realmente apagar a vaga?\nEste procedimento é irreversível!')) {
            var toDelete = $scope.linhas.data[id];

            $http
                .delete($('meta[name="api"]').attr('content') + 'emprego/' + toDelete._id)
                .success(function (data) {
                    $scope.status = {
                        type: 'success',
                        message: 'Vaga removida com sucesso!'
                    };

                    $scope.linhas.data.splice(id, 1);
                })
                .error(function() {
                    $scope.status = {
                        type: 'danger',
                        message: 'Erro removendo vaga, tente novamente mais tarde'
                    };
                });
        }
    };

    /**
     * Editar Emprego
     */
    $scope.edit = function () {
        $http
            .put($('meta[name="api"]').attr('content') + 'emprego/' + $routeParams.id, $scope.emprego)
            .success(function () {
                $scope.status = {
                    type: 'success',
                    message: 'Vaga atualizada com sucesso!'
                };
            })
            .error(function () {
                $scope.status = {
                    type: 'danger',
                    message: 'Ocorreu um erro atualizando os dados da vaga, tente novamente mais tarde'
                };
            });
    };

    /**
     * Visualizar Emprego
     */
    $scope.get = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'emprego/' + $routeParams.id)
            .then(function (data) {
                $scope.emprego = (data.data.data);
            });
    }
}

angular.module('myApp.empregos', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/empregos', {
                templateUrl: 'modules/empregos/index.html',
                controller: 'EmpregosController'
            })
            .when('/empregos/adicionar', {
                templateUrl: 'modules/empregos/add.html',
                controller: 'EmpregosController'
            })
            .when('/empregos/editar/:id', {
                templateUrl: 'modules/empregos/edit.html',
                controller: 'EmpregosController'
            })
        ;
    }])

    .controller('EmpregosController', ['$scope', '$routeParams', '$location', '$http', EmpregosController]);
'use strict';

/**
 * Parceiros
 * 
 * @param $scope
 * @param $routeParams
 * @param $location
 * @param $http
 * @param $cloudinary
 * @constructor
 */
function ParceirosController ($scope, $routeParams, $location, $http, $cloudinary) {
    $scope.curPage  = 1;
    $scope.pageSize = 12;
    $http.defaults.headers.common.Authorization = localStorage.getItem('token');
    $http.defaults.headers.common.Site          = localStorage.getItem('site');

    $scope.load = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'parceiro?page=' + $scope.curPage + '&limit=' + $scope.pageSize + '&t=' + new Date())
            .then(function (data) {
                $scope.linhas = (data.data);
            });
    };

    $scope.upload = function() {
        var $parceiro = $scope.parceiro;

        $cloudinary
            .upload($parceiro.imagem[0], {})
            .then(function (resp) {
                $parceiro.imagem = resp.data;

                $scope.add($parceiro);
            });
    };

    $scope.add = function () {
        $http
            .post($('meta[name="api"]').attr('content') + 'parceiro', $scope.parceiro)
            .success(function () {
                $location.url('/parceiros');
                $scope.load();
            })
            .error(function () {
                $scope.status = {
                    type: 'danger',
                    message: 'Erro inserindo parceiro'
                };
            });
    };

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

    $scope.get = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'parceiro/' + $routeParams.id)
            .then(function (data) {
                $scope.parceiro = (data.data.data);
            });
    };
}

angular
    .module('myApp.parceiros', ['ngRoute', 'angular-cloudinary'])

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

    .controller('ParceirosController', ['$scope', '$routeParams', '$location', '$http', 'cloudinary', ParceirosController]);
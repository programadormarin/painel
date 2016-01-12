'use strict';

/**
 * Equipe
 * 
 * @param $scope
 * @param $routeParams
 * @param $location
 * @param $http
 * @param $cloudinary
 * 
 * @constructor
 */
function EquipeController ($scope, $routeParams, $location, $http, $cloudinary) {
    $scope.curPage = 1;
    $scope.pageSize = 12;
    $http.defaults.headers.common.Authorization = localStorage.getItem('token');
    $http.defaults.headers.common.Site          = localStorage.getItem('site');

    $scope.load = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'equipe?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
            .then(function (data) {
                $scope.linhas = (data.data);
            });
    };

    $scope.upload = function() {
        var $membro = $scope.membro;

        $cloudinary
            .upload($membro.imagem[0], {})
            .then(function (resp) {
                $membro.imagem = resp.data;

                $scope.add($membro);
            });
    };

    $scope.add = function () {
        var $membro = $scope.membro;

        $http
            .post($('meta[name="api"]').attr('content') + 'equipe', $membro)
            .then(function (data) {
                if (data.status === 201) {
                    $location.url('/equipe');
                    $scope.load();
                } else {
                    $scope.status = {
                        type: 'danger',
                        message: 'Erro cadastrando membro, tente novamente mais tarde'
                    };
                }
            });
    };

    $scope.delete = function (id) {
        if (confirm('Você deseja realmente apagar o membro?\nEste procedimento é irreversível!')) {
            $http
                .delete($('meta[name="api"]').attr('content') + 'equipe/' + id)
                .then(function (data) {
                    if (data.status == 200) {
                        $scope.status = {
                            type: 'success',
                            message: 'Membro removido com sucesso!'
                        };

                        $location.path('/equipe');
                        $scope.load();
                    } else {
                        $scope.status = {
                            type: 'danger',
                            message: 'Erro removendo membro, tente novamente mais tarde'
                        }
                    }
                });
        }
    };

    $scope.edit = function () {
        $http
            .put($('meta[name="api"]').attr('content') + 'equipe/' + $routeParams.id, $scope.membro)
            .success(function (data) {
                $scope.status = {
                    type: 'success',
                    message: 'Membro atualizado com sucesso!'
                }
            })
            .error(function () {
                $scope.status = {
                    type: 'danger',
                    message: 'Ocorreu um erro atualizando os dados do membro, tente novamente mais tarde'
                }
            });
    };

    $scope.get = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'equipe/' + $routeParams.id)
            .then(function (data) {
                $scope.membro = (data.data.data);
            });
    };
}

angular
    .module('myApp.equipe', ['ngRoute', 'angular-cloudinary'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/equipe', {
                templateUrl: 'modules/equipe/index.html',
                controller: 'EquipeController'
            })
            .when('/equipe/adicionar', {
                templateUrl: 'modules/equipe/add.html',
                controller: 'EquipeController'
            })
            .when('/equipe/editar/:id', {
                templateUrl: 'modules/equipe/edit.html',
                controller: 'EquipeController'
            })
        ;
    }])

    .controller('EquipeController', ['$scope', '$routeParams', '$location', '$http', 'cloudinary', EquipeController]);
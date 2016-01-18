'use strict';

/**
 * Equipe
 * 
 * @param $scope
 * @param $routeParams
 * @param $location
 * @param $http
 * @param Upload
 * 
 * @constructor
 */
function EquipeController ($scope, $routeParams, $location, $http, $upload) {
    $scope.curPage  = 1;
    $scope.pageSize = 12;

    /**
     * General config
     *
     * @type {{headers: {Authorization, Site}}}
     */
    var config = {
        headers: {
            Authorization: localStorage.getItem('token'),
            Site: localStorage.getItem('site')
        }
    };

    /**
     * Carrega Equipe
     */
    $scope.load = function () {
        var url = $('meta[name="api"]').attr('content') + 'equipe?page=' + $scope.curPage + '&limit=' + $scope.pageSize;

        $http
            .get(url, config)
            .then(function (data) {
                $scope.linhas = (data.data);
            });
    };

    /**
     * Adiciona membro
     */
    $scope.add = function () {
        var $membro = $scope.membro;

        $upload
            .upload({
                url: $('meta[name="api"]').attr('content') + 'equipe',
                data: $membro,
                headers: config.headers
            })
            .then(
                function (resp) {
                    $location.url('/equipe');
                    $scope.load();
                },
                function (resp) {
                    $scope.status = {
                        type: 'danger',
                        message: 'Erro cadastrando membro, tente novamente mais tarde'
                    };
                },
                function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);

                    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                }
            );
    };

    /**
     * Remove membro da Equipe
     *
     * @param id
     */
    $scope.delete = function (id) {
        if (confirm('Você deseja realmente apagar o membro?\nEste procedimento é irreversível!')) {
            $http
                .delete($('meta[name="api"]').attr('content') + 'equipe/' + id, config)
                .then(function (data) {
                    if (data.status == 204) {
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

    /**
     * Edita membro
     */
    $scope.edit = function () {
        $http
            .put($('meta[name="api"]').attr('content') + 'equipe/' + $routeParams.id, $scope.membro, config)
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

    /**
     * Visualiza membro
     */
    $scope.get = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'equipe/' + $routeParams.id, config)
            .then(function (data) {
                $scope.membro = (data.data.data);
            });
    };
}

angular
    .module('myApp.equipe', ['ngRoute', 'ngFileUpload'])

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

    .controller('EquipeController', ['$scope', '$routeParams', '$location', '$http', 'Upload', EquipeController]);
'use strict';

/**
 * Slides
 *
 * @param $scope
 * @param $routeParams
 * @param $location
 * @param $http
 * @param Upload
 * @constructor
 */
function SlidesController ($scope, $routeParams, $location, $http, $upload) {
    $scope.curPage  = 1;
    $scope.pageSize = 12;

    /**
     * Carregar Slides
     */
    $scope.load = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'slide?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
            .then(function (result) {
                $scope.linhas = (result.data);
            });
    };

    /**
     * Inserir Slide
     */
    $scope.add = function () {
        var $produto = $scope.produto;

        $upload
            .upload({
                url: $('meta[name="api"]').attr('content') + 'slide',
                data: $produto
            })
            .then(
                function (resp) {
                    $location.url('/slides');
                    $scope.load();
                },
                function (resp) {
                    $scope.status = {
                        type: 'danger',
                        message: 'Erro cadastrando slide, tente novamente mais tarde'
                    };
                },
                function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);

                    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                }
            );
    };

    /**
     * Apagar Slide
     *
     * @param id
     */
    $scope.delete = function (id) {
        if (confirm('Você deseja realmente apagar o slide?\nEste procedimento é irreversível!')) {
            $http
                .delete($('meta[name="api"]').attr('content') + 'slide/' + id)
                .then(function (data) {
                    if (data.status == 204) {
                        $scope.status = {
                            type: 'success',
                            message: 'Slide removido com sucesso!'
                        };

                        $location.path('/slides');

                        $scope.load();
                    } else {
                        $scope.status = {
                            type: 'danger',
                            message: 'Erro removendo slide, tente novamente mais tarde'
                        };
                    }
                });
        }
    };

    /**
     * Editar Slide
     */
    $scope.edit = function () {
        $http
            .put($('meta[name="api"]').attr('content') + 'slide/' + $routeParams.id, $scope.produto)
            .success(function (data) {
                $scope.status = {
                    type: 'success',
                    message: 'produto atualizado com sucesso!'
                };
            })
            .error(function () {
                $scope.status = {
                    type: 'danger',
                    message: 'Ocorreu um erro atualizando os dados do slide, tente novamente mais tarde'
                };
            });
    };

    /**
     * Visualizar Slide
     */
    $scope.get = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'slide/' + $routeParams.id)
            .then(function (data) {
                $scope.produto = (data.data.data);
            });
    };
}

angular
    .module('myApp.slides', ['ngRoute', 'ngFileUpload'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/slides', {
                templateUrl: 'modules/slides/index.html',
                controller: 'SlidesController'
            })
            .when('/slides/adicionar', {
                templateUrl: 'modules/slides/add.html',
                controller: 'SlidesController'
            })
            .when('/slides/editar/:id', {
                templateUrl: 'modules/slides/edit.html',
                controller: 'SlidesController'
            })
        ;
    }])

    .controller('SlidesController', ['$scope', '$routeParams', '$location', '$http', 'Upload', SlidesController]);
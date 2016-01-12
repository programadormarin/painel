'use strict';

/**
 * Slides
 *
 * @param $scope
 * @param $routeParams
 * @param $location
 * @param $http
 * @param $cloudinary
 * @constructor
 */
function SlidesController ($scope, $routeParams, $location, $http, $cloudinary) {
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
     * Carregar Slides
     */
    $scope.load = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'slide?page=' + $scope.curPage + '&limit=' + $scope.pageSize, config)
            .then(function (result) {
                $scope.linhas = (result.data);
            });
    };

    /**
     * Upload da imagem do Slide
     */
    $scope.upload = function() {
        var $produto = $scope.produto;

        $cloudinary
            .upload($produto.imagem[0], {})
            .then(function (resp) {
                $produto.imagem = resp.data;

                $scope.add($produto);
            });
    };

    /**
     * Inserir Slide
     */
    $scope.add = function () {
        var $produto = $scope.produto;

        $http
            .post($('meta[name="api"]').attr('content') + 'slide', $produto, config)
            .then(function (data) {
                if (data.status === 201) {
                    $scope.status = {
                        type: 'success',
                        message: 'Slide inserido com sucesso'
                    };

                    $scope.produto = '';
                    $scope.produtoForm.$setPristine();
                } else {
                    $scope.status = {
                        type: 'danger',
                        message: 'Erro cadastrando slide, tente novamente mais tarde'
                    };

                    console.error(data);
                }
            });
    };

    /**
     * Apagar Slide
     *
     * @param id
     */
    $scope.delete = function (id) {
        if (confirm('Você deseja realmente apagar o slide?\nEste procedimento é irreversível!')) {
            $http
                .delete($('meta[name="api"]').attr('content') + 'slide/' + id, config)
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
            .put($('meta[name="api"]').attr('content') + 'slide/' + $routeParams.id, $scope.produto, config)
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
            .get($('meta[name="api"]').attr('content') + 'slide/' + $routeParams.id, config)
            .then(function (data) {
                $scope.produto = (data.data.data);
            });
    };
}

angular
    .module('myApp.slides', ['ngRoute', 'angular-cloudinary'])

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

    .controller('SlidesController', ['$scope', '$routeParams', '$location', '$http', 'cloudinary', SlidesController]);
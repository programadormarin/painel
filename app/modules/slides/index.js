'use strict';

angular
    .module('myApp.slides', ['ngRoute', 'ngInputTypeFile', 'angular-cloudinary'])

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

    .controller('SlidesController', ['$scope', '$routeParams', '$location', 'api', 'cloudinary', function ($scope, $routeParams, $location, $api, $cloudinary) {
            $scope.curPage  = 1;
            $scope.pageSize = 12;

            $scope.load = function () {
                $api
                    .get('slide?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
                    .then(function (result) {
                        $scope.linhas = (result.data);
                    });
            };

            $scope.upload = function() {
                var $produto = $scope.produto;

                $cloudinary
                    .upload($produto.imagem[0], {})
                    .then(function (resp) {
                        $produto.imagem = resp.data;

                        $scope.add($produto);
                    });
            };

            $scope.add = function () {
                var $produto = $scope.produto;

                $api
                    .post('slide', $produto)
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

            $scope.delete = function (id) {
                if (confirm('Você deseja realmente apagar o slide?\nEste procedimento é irreversível!')) {
                    $api
                        .delete('slide/' + id)
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

            $scope.edit = function () {
                $api
                    .put('slide/' + $routeParams.id, $scope.produto)
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

            $scope.get = function () {
                $api
                    .get('slide/' + $routeParams.id)
                    .then(function (data) {
                        $scope.produto = (data.data.data);
                    });
            };
        }
    ]);
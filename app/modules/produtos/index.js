'use strict';

angular
    .module('myApp.produtos', ['ngRoute', 'ngInputTypeFile', 'angular-cloudinary'])

    .config(['$routeProvider', 'cloudinaryProvider', function ($routeProvider, cloudinaryProvider) {
        cloudinaryProvider.config({
            upload_endpoint: 'https://api.cloudinary.com/v1_1/',
            cloud_name: 'publiciti-papelaria',
            upload_preset: 'kviu7ooz'
        });

        $routeProvider
            .when('/produtos', {
                templateUrl: 'modules/produtos/index.html',
                controller: 'ProdutosController'
            })
            .when('/produtos/adicionar', {
                templateUrl: 'modules/produtos/add.html',
                controller: 'ProdutosController'
            })
            .when('/produtos/editar/:id', {
                templateUrl: 'modules/produtos/edit.html',
                controller: 'ProdutosController'
            })
        ;
    }])

    .controller('ProdutosController', ['$scope', '$routeParams', '$location', 'api', 'cloudinary', function ($scope, $routeParams, $location, $api, $cloudinary) {
            $scope.curPage  = 1;
            $scope.pageSize = 24;

            $scope.load = function () {
                $api
                    .get('produto?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
                    .then(function (result) {
                        $scope.linhas = (result.data);
                    });
            };

            $scope.upload = function() {
                var $produto = $scope.produto;

                $cloudinary
                    .upload($produto.imagem[0], {})
                    .then(function (resp) {
                        $produto.imagem = JSON.stringify(resp.data);

                        $scope.add($produto);
                    });
            };

            $scope.add = function () {
                var $produto = $scope.produto;

                $api
                    .post('produto', $produto)
                    .then(function (data) {
                        if (data.status === 201) {
                            $scope.status = {
                                type: 'success',
                                message: 'Produto inserido com sucesso'
                            };

                            $scope.produto = '';
                            $scope.produtoForm.$setPristine();
                        } else {
                            $scope.status = {
                                type: 'danger',
                                message: 'Erro cadastrando produto, tente novamente mais tarde'
                            };

                            console.error(data);
                        }
                    });
            };

            $scope.delete = function (id) {
                if (confirm('Você deseja realmente apagar o produto?\nEste procedimento é irreversível!')) {
                    $api
                        .delete('produto/' + id)
                        .then(function (data) {
                            if (data.status == 204) {
                                $scope.status = {
                                    type: 'success',
                                    message: 'produto removido com sucesso!'
                                };

                                $location.path('/produtos');

                                $scope.load();
                            } else {
                                $scope.status = {
                                    type: 'danger',
                                    message: 'Erro removendo produto, tente novamente mais tarde'
                                };
                            }
                        });
                }
            };

            $scope.edit = function () {
                $scope.produto.imagem = JSON.stringify($scope.produto.imagem);

                $api
                    .put('produto/' + $routeParams.id, $scope.produto)
                    .success(function (data) {
                        $scope.status = {
                            type: 'success',
                            message: 'produto atualizado com sucesso!'
                        };
                    })
                    .error(function () {
                        $scope.status = {
                            type: 'danger',
                            message: 'Ocorreu um erro atualizando os dados do produto, tente novamente mais tarde'
                        };
                    });
            };

            $scope.get = function () {
                $api
                    .get('produto/' + $routeParams.id)
                    .then(function (data) {
                        $scope.produto = (data.data.data);
                    });
            };
        }
    ]);
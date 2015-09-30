'use strict';

angular
    .module('myApp.produtos', ['ngRoute', 'ngInputTypeFile', 'angular-cloudinary'])

    .config(['$routeProvider', function ($routeProvider) {
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
            $scope.pageSize = 12;

            $scope.load = function () {
                $api
                    .get('produto?page=' + $scope.curPage + '&limit=' + $scope.pageSize + '&t=' + new Date())
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
                    .post('produto', $produto)
                    .then(function (data) {
                        if (data.status === 201) {
                            $location.url('/produtos');
                            $scope.load();
                        } else {
                            $scope.status = {
                                type: 'danger',
                                message: 'Erro cadastrando produto, tente novamente mais tarde'
                            };
                        }
                    });
            };

            $scope.delete = function (id) {
                if (confirm('Você deseja realmente apagar o produto?\nEste procedimento é irreversível!')) {
                    var toDelete = $scope.linhas.data[id];

                    $api
                        .delete('produto/' + toDelete._id)
                        .then(function (data) {
                            if (data.status == 204) {
                                $scope.status = {
                                    type: 'success',
                                    message: 'produto removido com sucesso!'
                                };

                                $scope.linhas.data.splice(id, 1);
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
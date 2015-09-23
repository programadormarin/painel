'use strict';

angular.module('myApp.produtos', ['ngRoute'])
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
            .when('/produtos/editar', {
                templateUrl: 'modules/produtos/edit.html',
                controller: 'ProdutosController'
            })
        ;
    }])

    .controller('ProdutosController', ['$scope', '$routeParams', '$location', 'api',
        function ($scope, $routeParams, $location, api) {
            $scope.curPage = 1;
            $scope.pageSize = 12;

            $scope.editor = function () {
                $('.editor').wysiwyg();
                $('textarea').autosize();
            };

            $scope.load = function () {
                api
                    .get('produto?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
                    .then(function (result) {
                        $scope.linhas = (result.data);
                    });
            };

            $scope.add = function () {
                api
                    .post('produto', $scope.produto)
                    .then(function (data, status) {
                        $scope.status = {
                            type: 'success',
                            message: 'produto inserido com sucesso!'
                        }

                        $scope.produto = '';
                        $scope.produtoForm.$setPristine();
                    });
            };

            $scope.delete = function (id) {
                if (confirm('Você deseja realmente apagar o produto?\nEste procedimento é irreversível!')) {
                    api
                        .delete('produto/' + id)
                        .then(function (data) {
                            if (data.status == 200) {
                                $scope.status = {
                                    type: 'success',
                                    message: 'produto removido com sucesso!'
                                }

                                $location.path('/produtos');
                                $scope.load();
                            } else {
                                $scope.status = {
                                    type: 'danger',
                                    message: 'Erro removendo produto, tente novamente mais tarde'
                                }
                            }
                        });
                }
            };

            $scope.edit = function () {
                api
                    .put('produto/' + $routeParams.id, $scope.produto)
                    .success(function (data) {
                        $scope.status = {
                            type: 'success',
                            message: 'produto atualizado com sucesso!'
                        }
                    })
                    .error(function () {
                        $scope.status = {
                            type: 'danger',
                            message: 'Ocorreu um erro atualizando os dados do produto, tente novamente mais tarde'
                        }
                    });
            };

            $scope.get = function () {
                api
                    .get('produto/' + $routeParams.id)
                    .then(function (data) {
                        $scope.produto = (data.data.data);
                    });
            };
        }
    ]);
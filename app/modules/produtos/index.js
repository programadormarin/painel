'use strict';

function ProdutosController ($scope, $routeParams, $location, $http, $cloudinary) {
    $scope.curPage  = 1;
    $scope.pageSize = 12;

    $scope.load = function () {
        $http.defaults.headers.common.Authorization = localStorage.getItem('token');
        $http.defaults.headers.common.Site          = localStorage.getItem('site');

        $http
            .get($('meta[name="api"]').attr('content') + 'produto?page=' + $scope.curPage + '&limit=' + $scope.pageSize + '&t=' + new Date())
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

        $http
            .post($('meta[name="api"]').attr('content') + 'produto', $produto)
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

            $http
                .delete($('meta[name="api"]').attr('content') + 'produto/' + toDelete._id)
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
        $http
            .put($('meta[name="api"]').attr('content') + 'produto/' + $routeParams.id, $scope.produto)
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
        $http
            .get($('meta[name="api"]').attr('content') + 'produto/' + $routeParams.id)
            .then(function (data) {
                $scope.produto = (data.data.data);
            });
    };
}

angular
    .module('myApp.produtos', ['ngRoute', 'angular-cloudinary'])

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

    .controller('ProdutosController', ['$scope', '$routeParams', '$location', '$http', 'cloudinary', ProdutosController]);
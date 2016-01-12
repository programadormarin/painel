'use strict';

function ProdutosController ($scope, $routeParams, $location, $http, $cloudinary) {
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
     * Carregar Produtos
     */
    $scope.load = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'produto?page=' + $scope.curPage + '&limit=' + $scope.pageSize, config)
            .then(function (result) {
                $scope.linhas = (result.data);

                var paginas = new Array();

                for (var i=0; i <= result.data.pageCount; i++) {
                    paginas.push(i + 1);
                }

                $scope.paginas = paginas;
            });
    };

    /**
     * Upload de imagem do Produto
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
     * Cadastrar Produto
     */
    $scope.add = function () {
        var $produto = $scope.produto;

        $http
            .post($('meta[name="api"]').attr('content') + 'produto', $produto, config)
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

    /**
     * Apagar Produto
     *
     * @param id
     */
    $scope.delete = function (id) {
        if (confirm('Você deseja realmente apagar o produto?\nEste procedimento é irreversível!')) {
            var toDelete = $scope.linhas.data[id];

            $http
                .delete($('meta[name="api"]').attr('content') + 'produto/' + toDelete._id, config)
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

    /**
     * Editar Produto
     */
    $scope.edit = function () {
        $http
            .put($('meta[name="api"]').attr('content') + 'produto/' + $routeParams.id, $scope.produto, config)
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

    /**
     * Visualizar Produto
     */
    $scope.get = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'produto/' + $routeParams.id, config)
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
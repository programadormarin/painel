'use strict';

function ProdutosController ($scope, $routeParams, $location, $http, $upload) {
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

                for (var i=1; i <= result.data.pageCount; i++) {
                    paginas.push(i);
                }

                $scope.paginas = paginas;
            });
    };

    /**
     * Carrega as categorias do site
     *
     * @param site
     */
    $scope.categories = function() {
        $http
            .get($('meta[name="api"]').attr('content') + 'site/' + config.headers.Site, config)
            .then(function (data) {
                $scope.site = data.data.data;
            });
    };

    /**
     * Cadastrar Produto
     */
    $scope.add = function () {
        var $produto = $scope.produto;
            $produto.categoria = {
                titulo: $scope.produtoForm.categoria.titulo,
                categoria: {
                    titulo: $scope.produtoForm.subCategoria.titulo
                }
            };

        $upload
            .upload({
                url: $('meta[name="api"]').attr('content') + 'produto',
                data: $produto,
                headers: config.headers
            })
            .then(
                function (resp) {
                    $location.url('/produtos');
                    $scope.load();
                },
                function (resp) {
                    $scope.status = {
                        type: 'danger',
                        message: 'Erro cadastrando produto, tente novamente mais tarde'
                    };
                },
                function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);

                    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                }
            );
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
        var $produto = $scope.produto;
            $produto.categoria = {
                titulo: $scope.produtoForm.categoria.titulo,
                categoria: {
                    titulo: $scope.produtoForm.subCategoria.titulo
                }
            };

        $http
            .put($('meta[name="api"]').attr('content') + 'produto/' + $routeParams.id, $produto, config)
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

    /**
     * Search Products
     */
    $scope.search = function() {
        var url = $('meta[name="api"]').attr('content')
                + 'busca/'
                + '?page=' + $scope.curPage
                + '&limit=' + $scope.pageSize
                + '&busca=' + $scope.busca
            ;

        $http
            .get(url, config)
            .then(function (result) {
                $scope.linhas = (result.data);

                var paginas = new Array();

                for (var i=1; i <= result.data.pageCount; i++) {
                    paginas.push(i);
                }

                $scope.paginas = paginas;
            });
    };
}

angular
    .module('myApp.produtos', ['ngRoute', 'ngFileUpload'])

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

    .controller('ProdutosController', ['$scope', '$routeParams', '$location', '$http', 'Upload', ProdutosController]);
'use strict';

function CarrinhosController ($scope, $routeParams, $location, $http, $cloudinary) {
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
     * Carregar Carrinhos
     */
    $scope.load = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'carrinho?page=' + $scope.curPage + '&limit=' + $scope.pageSize, config)
            .then(function (result) {
                $scope.linhas = (result.data);
                $scope.total  = 0;

                //$scope.linhas.forEach(function(row) {
                //    //row.items.forEach(function(item) {
                //    //    $scope.total += item.produto.valor * item.quantidade;
                //    //});
                //    console.log(row);
                //});

                var paginas = new Array();

                for (var i=1; i <= result.data.pageCount; i++) {
                    paginas.push(i);
                }

                $scope.paginas = paginas;
            });
    };

    /**
     * Apagar Carrinho
     *
     * @param id
     */
    $scope.delete = function (id) {
        if (confirm('Você deseja realmente apagar o carrinho?\nEste procedimento é irreversível!')) {
            var toDelete = $scope.linhas.data[id];

            $http
                .delete($('meta[name="api"]').attr('content') + 'carrinho/' + toDelete._id, config)
                .then(function (data) {
                    if (data.status == 204) {
                        $scope.status = {
                            type: 'success',
                            message: 'carrinho removido com sucesso!'
                        };

                        $scope.linhas.data.splice(id, 1);
                    } else {
                        $scope.status = {
                            type: 'danger',
                            message: 'Erro removendo carrinho, tente novamente mais tarde'
                        };
                    }
                });
        }
    };

    /**
     * Visualizar Carrinho
     */
    $scope.get = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'carrinho/' + $routeParams.id, config)
            .then(function (data) {
                $scope.carrinho = (data.data.data);
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
    .module('myApp.carrinhos', ['ngRoute', 'angular-cloudinary'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/carrinhos', {
                templateUrl: 'modules/carrinhos/index.html',
                controller: 'CarrinhosController'
            })
            .when('/carrinhos/adicionar', {
                templateUrl: 'modules/carrinhos/add.html',
                controller: 'CarrinhosController'
            })
            .when('/carrinhos/editar/:id', {
                templateUrl: 'modules/carrinhos/edit.html',
                controller: 'CarrinhosController'
            })
        ;
    }])

    .controller('CarrinhosController', ['$scope', '$routeParams', '$location', '$http', 'cloudinary', CarrinhosController]);
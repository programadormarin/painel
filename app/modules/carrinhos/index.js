'use strict';

function CarrinhosController ($scope, $routeParams, $location, $http) {
    $scope.curPage  = 1;
    $scope.pageSize = 12;

    /**
     * Carregar Carrinhos
     */
    $scope.load = function () {
        $http
            .get($('meta[name="api"]').attr('content') + 'carrinho?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
            .then(function (result) {
                $scope.linhas = (result.data);
                $scope.total  = 0.00;

                var paginas = new Array();

                for (var i=1; i <= result.data.pageCount; i++) {
                    paginas.push(i);
                }

                $scope.paginas = paginas;
            });
    };

    /**
     * Visualizar Carrinho
     */
    $scope.open = function (carrinho) {
        $scope.carrinho = carrinho;

        $('#cartModal').modal('show');
    };

    /**
     * Apagar Carrinho
     *
     * @param id
     */
    $scope.delete = function (id) {
        if (confirm('Você deseja realmente apagar o carrinho?\nEste procedimento é irreversível!')) {
            $http
                .delete($('meta[name="api"]').attr('content') + 'carrinho/' + id)
                .then(function (data) {
                    if (data.status == 204) {
                        $scope.status = {
                            type: 'success',
                            message: 'carrinho removido com sucesso!'
                        };

                        $scope.load();
                    } else {
                        $scope.status = {
                            type: 'danger',
                            message: 'Erro removendo carrinho, tente novamente mais tarde'
                        };
                    }
                });
        }
    };
}

angular
    .module('myApp.carrinhos', ['ngRoute'])

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

    .controller('CarrinhosController', ['$scope', '$routeParams', '$location', '$http', CarrinhosController]);
'use strict';

function CarrinhosController ($scope, $routeParams, $location, $http) {
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
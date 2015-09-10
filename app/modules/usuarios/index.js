'use strict';

angular.module('myApp.usuarios', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/usuarios', {
                templateUrl: 'modules/usuarios/index.html',
                controller: 'UsuariosController'
            })
            .when('/usuarios/editar/:id', {
                templateUrl: 'modules/usuarios/edit.html',
                controller: 'UsuariosController'
            })
            .when('/usuarios/adicionar', {
                templateUrl: 'modules/usuarios/add.html',
                controller: 'UsuariosController'
            })
        ;
    }])

    .controller('UsuariosController', ['$scope', '$routeParams', 'api', function ($scope, $routeParams, api) {
        $scope.curPage = 1;
        $scope.pageSize = 12;

        $scope.load = function () {
            api
                .get('usuario?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
                .then(function (result) {
                    $scope.linhas = (result.data);
                });
        };

        $scope.add = function () {
            api
                .post('usuario', $scope.usuario)
                .then(function (data, status) {
                    $scope.status = {
                        type: 'success',
                        message: 'Usuário adicionado com sucesso!'
                    }

                    $scope.usuario = '';
                    $scope.usuarioForm.$setPristine();
                });
        };

        $scope.delete = function (id) {
            if (confirm('Você deseja realmente apagar o ítem?\nEste procedimento é irreversível!')) {
                api
                    .delete('usuario/' + id)
                    .then(function (data) {
                        if (data.status == 204) {
                            $scope.status = {
                                type: 'success',
                                message: 'Usuário removido com sucesso!'
                            }

                            $location.path('/usuarios');

                            $scope.load();
                        } else {
                            $scope.status = {
                                type: 'danger',
                                message: 'Erro removendo usuário, tente novamente mais tarde'
                            }
                        }
                    });
            }
        };

        $scope.update = function () {
            api
                .put('usuario/' + $routeParams.id, $scope.usuario)
                .success(function (data) {
                    $scope.status = {
                        type: 'success',
                        message: 'Usuário atualizado com sucesso!'
                    }
                })
                .error(function () {
                    $scope.status = {
                        type: 'danger',
                        message: 'Ocorreu um erro atualizando usuário, tente novamente mais tarde'
                    }
                });
        };

        $scope.get = function () {
            api
                .get('usuario/' + $routeParams.id)
                .then(function (data) {
                    $scope.usuario = data.data.data;
                });
        }
    }
    ]);
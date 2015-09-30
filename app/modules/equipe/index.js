'use strict';

angular
    .module('myApp.equipe', ['ngRoute', 'ngInputTypeFile', 'angular-cloudinary'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/equipe', {
                templateUrl: 'modules/equipe/index.html',
                controller: 'EquipeController'
            })
            .when('/equipe/adicionar', {
                templateUrl: 'modules/equipe/add.html',
                controller: 'EquipeController'
            })
            .when('/equipe/editar/:id', {
                templateUrl: 'modules/equipe/edit.html',
                controller: 'EquipeController'
            })
        ;
    }])

    .controller('EquipeController', ['$scope', '$routeParams', '$location', 'api', 'cloudinary', function ($scope, $routeParams, $location, $api, $cloudinary) {
        $scope.curPage = 1;
        $scope.pageSize = 12;

        $scope.load = function () {
            $api
                .get('equipe?page=' + $scope.curPage + '&limit=' + $scope.pageSize + '&t=' + new Date())
                .then(function (data) {
                    $scope.linhas = (data.data);
                });
        };

        $scope.upload = function() {
            var $membro = $scope.membro;

            $cloudinary
                .upload($membro.imagem[0], {})
                .then(function (resp) {
                    $membro.imagem = resp.data;

                    $scope.add($membro);
                });
        };

        $scope.add = function () {
            var $membro = $scope.membro;

            $api
                .post('equipe', $membro)
                .then(function (data) {
                    if (data.status === 201) {
                        $location.url('/equipe');
                        $scope.load();
                    } else {
                        $scope.status = {
                            type: 'danger',
                            message: 'Erro cadastrando membro, tente novamente mais tarde'
                        };
                    }
                });
        };

        $scope.delete = function (id) {
            if (confirm('Você deseja realmente apagar o membro?\nEste procedimento é irreversível!')) {
                $api
                    .delete('equipe/' + id)
                    .then(function (data) {
                        if (data.status == 200) {
                            $scope.status = {
                                type: 'success',
                                message: 'Membro removido com sucesso!'
                            }

                            $location.path('/equipe');
                            $scope.load();
                        } else {
                            $scope.status = {
                                type: 'danger',
                                message: 'Erro removendo membro, tente novamente mais tarde'
                            }
                        }
                    });
            }
        };

        $scope.edit = function () {
            $api
                .put('equipe/' + $routeParams.id, $scope.membro)
                .success(function (data) {
                    $scope.status = {
                        type: 'success',
                        message: 'Membro atualizado com sucesso!'
                    }
                })
                .error(function () {
                    $scope.status = {
                        type: 'danger',
                        message: 'Ocorreu um erro atualizando os dados do membro, tente novamente mais tarde'
                    }
                });
        };

        $scope.get = function () {
            $api
                .get('equipe/' + $routeParams.id)
                .then(function (data) {
                    $scope.membro = (data.data.data);
                });
        };
    }]);
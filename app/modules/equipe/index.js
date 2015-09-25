'use strict';

angular.module('myApp.equipe', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/equipe', {
                templateUrl: 'modules/equipe/index.html',
                controller: 'EquipeController'
            })
        ;
    }])

    .controller('EquipeController', ['$scope', '$routeParams', '$location', 'api',
        function ($scope, $routeParams, $location, api) {
            $scope.curPage = 1;
            $scope.pageSize = 12;

            $scope.editor = function () {
                $('.editor').wysiwyg();
                $('textarea').autosize();
            };

            $scope.load = function () {
                api
                    .get('equipe?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
                    .then(function (data) {
                        $scope.linhas = (data.data.data);
                    });
            };

            $scope.add = function () {
                api
                    .post('equipe', $scope.membro)
                    .then(function (data, status) {
                        $scope.status = {
                            type: 'success',
                            message: 'Membro da equipe inserido com sucesso!'
                        }

                        $scope.membro = '';
                        $scope.equipeForm.$setPristine();
                    });
            };

            $scope.delete = function (id) {
                if (confirm('Você deseja realmente apagar o membro?\nEste procedimento é irreversível!')) {
                    api
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
                api
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
                api
                    .get('equipe/' + $routeParams.id)
                    .then(function (data) {
                        $scope.membro = (data.data.data);
                    });
            };
        }
    ]);
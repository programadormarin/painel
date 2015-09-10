'use strict';

angular.module('myApp.slides', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/slides', {
                templateUrl: 'modules/slides/index.html',
                controller: 'SlidesController'
            })
        ;
    }])

    .controller('SlidesController', ['$scope', '$routeParams', '$location', 'api', '$route',
        function ($scope, $routeParams, $location, api, FileUploader, $route) {
            $scope.curPage = 1;
            $scope.pageSize = 12;

            $scope.editor = function () {
                $('.editor').wysiwyg();
                $('textarea').autosize();
            };

            $scope.load = function () {
                api
                    .get('slide?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
                    .then(function (data) {
                        $scope.linhas = (data.data);
                    });
            };

            $scope.add = function () {
                api
                    .post('slide', $scope.slide)
                    .then(function (data, status) {
                        $scope.status = {
                            type: 'success',
                            message: 'Slide inserido com sucesso!'
                        }

                        $scope.slide = '';
                        $scope.slideForm.$setPristine();
                    });
            };

            $scope.delete = function (id) {
                if (confirm('Você deseja realmente apagar o slide?\nEste procedimento é irreversível!')) {
                    api
                        .delete('slide/' + id)
                        .then(function (data) {
                            if (data.status == 200) {
                                $scope.status = {
                                    type: 'success',
                                    message: 'Slide removido com sucesso!'
                                }

                                $location.path('/slides');
                                $scope.load();
                            } else {
                                $scope.status = {
                                    type: 'danger',
                                    message: 'Erro removendo cliente, tente novamente mais tarde'
                                }
                            }
                        });
                }
            };

            $scope.edit = function () {
                api
                    .put('slide/' + $routeParams.id, $scope.slide)
                    .success(function (data) {
                        $scope.status = {
                            type: 'success',
                            message: 'Slide atualizado com sucesso!'
                        }
                    })
                    .error(function () {
                        $scope.status = {
                            type: 'danger',
                            message: 'Ocorreu um erro atualizando os dados do slide, tente novamente mais tarde'
                        }
                    });
            };

            $scope.get = function () {
                api
                    .get('slide/' + $routeParams.id)
                    .then(function (data) {
                        $scope.slide = (data.data);
                    });
            };
        }
    ]);
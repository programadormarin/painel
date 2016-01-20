"use strict";function EmpresaController(e,o,s,t){e.removeTelefone=function(o){e.empresa.telefones.splice(o,1)},e.removeEmail=function(o){e.empresa.emails.splice(o,1)},e.removeEndereco=function(o){e.empresa.enderecos.splice(o,1)},e.adicionaTelefone=function(o){e.empresa.telefones.push(o),e.telefone=""},e.adicionaEmail=function(o){e.empresa.emails.push(o),e.email=""},e.adicionaEndereco=function(o){e.empresa.enderecos.push(o),e.endereco=""},e.edit=function(){t.put($('meta[name="api"]').attr("content")+"site/"+e.site_id,e.empresa).success(function(o){e.status={type:"success",message:"Dados atualizados com sucesso!"}}).error(function(){e.status={type:"danger",message:"Ocorreu um erro atualizando os dados da empresa, tente novamente mais tarde"}})},e.get=function(){e.empresa=JSON.parse(localStorage.getItem("site"))}}angular.module("myApp.empresa",["ngRoute"]).config(["$routeProvider",function(e){e.when("/empresa",{templateUrl:"modules/empresa/index.html",controller:"EmpresaController"})}]).controller("EmpresaController",["$scope","$routeParams","$location","$http",EmpresaController]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHJlc2EvaW5kZXguanMiXSwibmFtZXMiOlsiRW1wcmVzYUNvbnRyb2xsZXIiLCIkc2NvcGUiLCIkcm91dGVQYXJhbXMiLCIkbG9jYXRpb24iLCIkaHR0cCIsInJlbW92ZVRlbGVmb25lIiwiaW5kaWNlIiwiZW1wcmVzYSIsInRlbGVmb25lcyIsInNwbGljZSIsInJlbW92ZUVtYWlsIiwiZW1haWxzIiwicmVtb3ZlRW5kZXJlY28iLCJlbmRlcmVjb3MiLCJhZGljaW9uYVRlbGVmb25lIiwidGVsZWZvbmUiLCJwdXNoIiwiYWRpY2lvbmFFbWFpbCIsImVtYWlsIiwiYWRpY2lvbmFFbmRlcmVjbyIsImVuZGVyZWNvIiwiZWRpdCIsInB1dCIsIiQiLCJhdHRyIiwic2l0ZV9pZCIsInN1Y2Nlc3MiLCJkYXRhIiwic3RhdHVzIiwidHlwZSIsIm1lc3NhZ2UiLCJlcnJvciIsImdldCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHJvdXRlUHJvdmlkZXIiLCJ3aGVuIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQVlBLFNBQVNBLG1CQUFtQkMsRUFBUUMsRUFBY0MsRUFBV0MsR0FNekRILEVBQU9JLGVBQWlCLFNBQVVDLEdBQzlCTCxFQUFPTSxRQUFRQyxVQUFVQyxPQUFPSCxFQUFRLElBUTVDTCxFQUFPUyxZQUFjLFNBQVVKLEdBQzNCTCxFQUFPTSxRQUFRSSxPQUFPRixPQUFPSCxFQUFRLElBUXpDTCxFQUFPVyxlQUFpQixTQUFVTixHQUM5QkwsRUFBT00sUUFBUU0sVUFBVUosT0FBT0gsRUFBUSxJQVE1Q0wsRUFBT2EsaUJBQW1CLFNBQVVDLEdBQ2hDZCxFQUFPTSxRQUFRQyxVQUFVUSxLQUFLRCxHQUM5QmQsRUFBT2MsU0FBVyxJQVF0QmQsRUFBT2dCLGNBQWdCLFNBQVVDLEdBQzdCakIsRUFBT00sUUFBUUksT0FBT0ssS0FBS0UsR0FDM0JqQixFQUFPaUIsTUFBUSxJQVFuQmpCLEVBQU9rQixpQkFBbUIsU0FBVUMsR0FDaENuQixFQUFPTSxRQUFRTSxVQUFVRyxLQUFLSSxHQUM5Qm5CLEVBQU9tQixTQUFXLElBTXRCbkIsRUFBT29CLEtBQU8sV0FDVmpCLEVBQ0trQixJQUFJQyxFQUFFLG9CQUFvQkMsS0FBSyxXQUFhLFFBQVV2QixFQUFPd0IsUUFBU3hCLEVBQU9NLFNBQzdFbUIsUUFBUSxTQUFVQyxHQUNmMUIsRUFBTzJCLFFBQ0hDLEtBQU0sVUFDTkMsUUFBUyxvQ0FHaEJDLE1BQU0sV0FDSDlCLEVBQU8yQixRQUNIQyxLQUFNLFNBQ05DLFFBQVMsa0ZBUXpCN0IsRUFBTytCLElBQU0sV0FDVC9CLEVBQU9NLFFBQVUwQixLQUFLQyxNQUFNQyxhQUFhQyxRQUFRLFVBSXpEQyxRQUFRQyxPQUFPLGlCQUFrQixZQUM1QkMsUUFBUSxpQkFBa0IsU0FBVUMsR0FDakNBLEVBQ0tDLEtBQUssWUFDRkMsWUFBYSw2QkFDYkMsV0FBWSx5QkFLdkJBLFdBQVcscUJBQXNCLFNBQVUsZUFBZ0IsWUFBYSxRQUFTM0MiLCJmaWxlIjoiZW1wcmVzYS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBFbXByZXNhXG4gKlxuICogQHBhcmFtICRzY29wZVxuICogQHBhcmFtICRyb3V0ZVBhcmFtc1xuICogQHBhcmFtICRsb2NhdGlvblxuICogQHBhcmFtICRodHRwXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEVtcHJlc2FDb250cm9sbGVyICgkc2NvcGUsICRyb3V0ZVBhcmFtcywgJGxvY2F0aW9uLCAkaHR0cCkge1xuICAgIC8qKlxuICAgICAqIFJlbW92ZSB1bSB0ZWxlZm9uZSBkbyBlc2NvcG9cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpbmRpY2VcbiAgICAgKi9cbiAgICAkc2NvcGUucmVtb3ZlVGVsZWZvbmUgPSBmdW5jdGlvbiAoaW5kaWNlKSB7XG4gICAgICAgICRzY29wZS5lbXByZXNhLnRlbGVmb25lcy5zcGxpY2UoaW5kaWNlLCAxKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHVtIGUtbWFpbCBkbyBlc2NvcG9cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpbmRpY2VcbiAgICAgKi9cbiAgICAkc2NvcGUucmVtb3ZlRW1haWwgPSBmdW5jdGlvbiAoaW5kaWNlKSB7XG4gICAgICAgICRzY29wZS5lbXByZXNhLmVtYWlscy5zcGxpY2UoaW5kaWNlLCAxKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHVtIGVuZGVyZcOnbyBkbyBlc2NvcG9cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpbmRpY2VcbiAgICAgKi9cbiAgICAkc2NvcGUucmVtb3ZlRW5kZXJlY28gPSBmdW5jdGlvbiAoaW5kaWNlKSB7XG4gICAgICAgICRzY29wZS5lbXByZXNhLmVuZGVyZWNvcy5zcGxpY2UoaW5kaWNlLCAxKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5zZXJlIHVtIHRlbGVmb25lIG5vIGVzY29wb1xuICAgICAqXG4gICAgICogQHBhcmFtIHRlbGVmb25lXG4gICAgICovXG4gICAgJHNjb3BlLmFkaWNpb25hVGVsZWZvbmUgPSBmdW5jdGlvbiAodGVsZWZvbmUpIHtcbiAgICAgICAgJHNjb3BlLmVtcHJlc2EudGVsZWZvbmVzLnB1c2godGVsZWZvbmUpO1xuICAgICAgICAkc2NvcGUudGVsZWZvbmUgPSAnJztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5zZXJlIHVtIGUtbWFpbCBubyBlc2NvcG9cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbWFpbFxuICAgICAqL1xuICAgICRzY29wZS5hZGljaW9uYUVtYWlsID0gZnVuY3Rpb24gKGVtYWlsKSB7XG4gICAgICAgICRzY29wZS5lbXByZXNhLmVtYWlscy5wdXNoKGVtYWlsKTtcbiAgICAgICAgJHNjb3BlLmVtYWlsID0gJyc7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkaWNpb25hIHVtIGVtcHJlZ28gbm8gZXNjb3BvXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZW5kZXJlY29cbiAgICAgKi9cbiAgICAkc2NvcGUuYWRpY2lvbmFFbmRlcmVjbyA9IGZ1bmN0aW9uIChlbmRlcmVjbykge1xuICAgICAgICAkc2NvcGUuZW1wcmVzYS5lbmRlcmVjb3MucHVzaChlbmRlcmVjbyk7XG4gICAgICAgICRzY29wZS5lbmRlcmVjbyA9ICcnO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFZGl0YXIgRW1wcmVzYVxuICAgICAqL1xuICAgICRzY29wZS5lZGl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLnB1dCgkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAnc2l0ZS8nICsgJHNjb3BlLnNpdGVfaWQsICRzY29wZS5lbXByZXNhKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdEYWRvcyBhdHVhbGl6YWRvcyBjb20gc3VjZXNzbyEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdPY29ycmV1IHVtIGVycm8gYXR1YWxpemFuZG8gb3MgZGFkb3MgZGEgZW1wcmVzYSwgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFicmlyIEVtcHJlc2FcbiAgICAgKi9cbiAgICAkc2NvcGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkc2NvcGUuZW1wcmVzYSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NpdGUnKSk7XG4gICAgfTtcbn1cblxuYW5ndWxhci5tb2R1bGUoJ215QXBwLmVtcHJlc2EnLCBbJ25nUm91dGUnXSlcbiAgICAuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC53aGVuKCcvZW1wcmVzYScsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvZW1wcmVzYS9pbmRleC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRW1wcmVzYUNvbnRyb2xsZXInXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG5cbiAgICAuY29udHJvbGxlcignRW1wcmVzYUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckcm91dGVQYXJhbXMnLCAnJGxvY2F0aW9uJywgJyRodHRwJywgRW1wcmVzYUNvbnRyb2xsZXJdKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
"use strict";function AvisoController(e,t,a,o){e.curPage=1,e.pageSize=12;var n={headers:{Authorization:localStorage.getItem("token"),Site:localStorage.getItem("site")}};e.load=function(){o.get($('meta[name="api"]').attr("content")+"aviso?page="+e.curPage+"&limit="+e.pageSize,n).then(function(t){e.linhas=t.data})},e.add=function(){o.post($('meta[name="api"]').attr("content")+"aviso",e.aviso,n).then(function(t,a){e.status={type:"success",message:"Aviso inserido com sucesso!"},e.aviso="",e.avisoForm.$setPristine()})},e["delete"]=function(t){confirm("Você deseja realmente apagar o ítem?\nEste procedimento é irreversível!")&&o["delete"]($('meta[name="api"]').attr("content")+"aviso/"+t,n).then(function(t){204==t.status?(e.status={type:"success",message:"removida com sucesso!"},a.path("/aviso"),e.load()):e.status={type:"danger",message:"Erro removendo, tente novamente mais tarde"}})},e.edit=function(){o.put($('meta[name="api"]').attr("content")+"aviso/"+t.id,e.aviso,n).success(function(t){e.status={type:"success",message:"atualizada com sucesso!"}}).error(function(){e.status={type:"danger",message:"Ocorreu um erro atualizando, tente novamente mais tarde"}})},e.get=function(){o.get($('meta[name="api"]').attr("content")+"aviso/"+t.id,n).then(function(t){t.data.data.inicio=new Date(t.data.data.inicio),t.data.data.fim=new Date(t.data.data.fim),e.aviso=t.data.data})}}angular.module("myApp.aviso",["ngRoute"]).config(["$routeProvider",function(e){e.when("/aviso",{templateUrl:"modules/aviso/index.html",controller:"AvisoController"}).when("/aviso/adicionar",{templateUrl:"modules/aviso/add.html",controller:"AvisoController"}).when("/aviso/editar/:id",{templateUrl:"modules/aviso/edit.html",controller:"AvisoController"})}]).controller("AvisoController",["$scope","$routeParams","$location","$http",AvisoController]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2aXNvL2luZGV4LmpzIl0sIm5hbWVzIjpbIkF2aXNvQ29udHJvbGxlciIsIiRzY29wZSIsIiRyb3V0ZVBhcmFtcyIsIiRsb2NhdGlvbiIsIiRodHRwIiwiY3VyUGFnZSIsInBhZ2VTaXplIiwiY29uZmlnIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiU2l0ZSIsImxvYWQiLCJnZXQiLCIkIiwiYXR0ciIsInRoZW4iLCJyZXN1bHQiLCJsaW5oYXMiLCJhZGQiLCJwb3N0IiwiYXZpc28iLCJkYXRhIiwic3RhdHVzIiwidHlwZSIsIm1lc3NhZ2UiLCJhdmlzb0Zvcm0iLCIkc2V0UHJpc3RpbmUiLCJpZCIsImNvbmZpcm0iLCJwYXRoIiwiZWRpdCIsInB1dCIsInN1Y2Nlc3MiLCJlcnJvciIsImluaWNpbyIsIkRhdGUiLCJmaW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiJHJvdXRlUHJvdmlkZXIiLCJ3aGVuIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQVlBLFNBQVNBLGlCQUFpQkMsRUFBUUMsRUFBY0MsRUFBV0MsR0FDdkRILEVBQU9JLFFBQVcsRUFDbEJKLEVBQU9LLFNBQVcsRUFPbEIsSUFBSUMsSUFDQUMsU0FDSUMsY0FBZUMsYUFBYUMsUUFBUSxTQUNwQ0MsS0FBTUYsYUFBYUMsUUFBUSxTQU9uQ1YsR0FBT1ksS0FBTyxXQUNWVCxFQUNLVSxJQUFJQyxFQUFFLG9CQUFvQkMsS0FBSyxXQUFhLGNBQWdCZixFQUFPSSxRQUFVLFVBQVlKLEVBQU9LLFNBQVVDLEdBQzFHVSxLQUFLLFNBQVVDLEdBQ1pqQixFQUFPa0IsT0FBVUQsRUFBVyxRQU94Q2pCLEVBQU9tQixJQUFNLFdBQ1RoQixFQUNLaUIsS0FBS04sRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxRQUFTZixFQUFPcUIsTUFBT2YsR0FDcEVVLEtBQUssU0FBVU0sRUFBTUMsR0FDbEJ2QixFQUFPdUIsUUFDSEMsS0FBTSxVQUNOQyxRQUFTLCtCQUdiekIsRUFBT3FCLE1BQVEsR0FDZnJCLEVBQU8wQixVQUFVQyxrQkFTN0IzQixFQUFBQSxVQUFnQixTQUFVNEIsR0FDbEJDLFFBQVEsNEVBQ1IxQixFQUFBQSxVQUNZVyxFQUFFLG9CQUFvQkMsS0FBSyxXQUFhLFNBQVdhLEVBQUl0QixHQUM5RFUsS0FBSyxTQUFVTSxHQUNPLEtBQWZBLEVBQUtDLFFBQ0x2QixFQUFPdUIsUUFDSEMsS0FBTSxVQUNOQyxRQUFTLHlCQUdidkIsRUFBVTRCLEtBQUssVUFFZjlCLEVBQU9ZLFFBRVBaLEVBQU91QixRQUNIQyxLQUFNLFNBQ05DLFFBQVMsaURBVWpDekIsRUFBTytCLEtBQU8sV0FDVjVCLEVBQ0s2QixJQUFJbEIsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxTQUFXZCxFQUFhMkIsR0FBSTVCLEVBQU9xQixNQUFPZixHQUN0RjJCLFFBQVEsU0FBVVgsR0FDZnRCLEVBQU91QixRQUNIQyxLQUFNLFVBQ05DLFFBQVMsNkJBR2hCUyxNQUFNLFdBQ0hsQyxFQUFPdUIsUUFDSEMsS0FBTSxTQUNOQyxRQUFTLDhEQVF6QnpCLEVBQU9hLElBQU0sV0FDVFYsRUFDS1UsSUFBSUMsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxTQUFXZCxFQUFhMkIsR0FBSXRCLEdBQ3hFVSxLQUFLLFNBQVVNLEdBQ1pBLEVBQUtBLEtBQUtBLEtBQUthLE9BQVMsR0FBSUMsTUFBS2QsRUFBS0EsS0FBS0EsS0FBS2EsUUFDaERiLEVBQUtBLEtBQUtBLEtBQUtlLElBQU0sR0FBSUQsTUFBS2QsRUFBS0EsS0FBS0EsS0FBS2UsS0FFN0NyQyxFQUFPcUIsTUFBU0MsRUFBS0EsS0FBUyxRQUs5Q2dCLFFBQ0tDLE9BQU8sZUFBZ0IsWUFFdkJqQyxRQUFRLGlCQUFrQixTQUFVa0MsR0FDakNBLEVBQ0tDLEtBQUssVUFDRkMsWUFBYSwyQkFDYkMsV0FBWSxvQkFFZkYsS0FBSyxvQkFDRkMsWUFBYSx5QkFDYkMsV0FBWSxvQkFFZkYsS0FBSyxxQkFDRkMsWUFBYSwwQkFDYkMsV0FBWSx1QkFLdkJBLFdBQVcsbUJBQW9CLFNBQVUsZUFBZ0IsWUFBYSxRQUFTNUMiLCJmaWxlIjoiYXZpc28vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQXZpc29zXG4gKlxuICogQHBhcmFtICRzY29wZVxuICogQHBhcmFtICRyb3V0ZVBhcmFtc1xuICogQHBhcmFtICRsb2NhdGlvblxuICogQHBhcmFtICRodHRwXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEF2aXNvQ29udHJvbGxlciAoJHNjb3BlLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHApIHtcbiAgICAkc2NvcGUuY3VyUGFnZSAgPSAxO1xuICAgICRzY29wZS5wYWdlU2l6ZSA9IDEyO1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJhbCBjb25maWdcbiAgICAgKlxuICAgICAqIEB0eXBlIHt7aGVhZGVyczoge0F1dGhvcml6YXRpb24sIFNpdGV9fX1cbiAgICAgKi9cbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSxcbiAgICAgICAgICAgIFNpdGU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaXRlJylcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDYXJyZWdhIG9zIEF2aXNvcyBjYWRhc3RyYWRvc1xuICAgICAqL1xuICAgICRzY29wZS5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLmdldCgkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAnYXZpc28/cGFnZT0nICsgJHNjb3BlLmN1clBhZ2UgKyAnJmxpbWl0PScgKyAkc2NvcGUucGFnZVNpemUsIGNvbmZpZylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUubGluaGFzID0gKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGljaW9uYXIgQXZpc29cbiAgICAgKi9cbiAgICAkc2NvcGUuYWRkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLnBvc3QoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ2F2aXNvJywgJHNjb3BlLmF2aXNvLCBjb25maWcpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQXZpc28gaW5zZXJpZG8gY29tIHN1Y2Vzc28hJ1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAkc2NvcGUuYXZpc28gPSAnJztcbiAgICAgICAgICAgICAgICAkc2NvcGUuYXZpc29Gb3JtLiRzZXRQcmlzdGluZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwYWdhciBhdmlzb1xuICAgICAqXG4gICAgICogQHBhcmFtIGlkXG4gICAgICovXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBpZiAoY29uZmlybSgnVm9jw6ogZGVzZWphIHJlYWxtZW50ZSBhcGFnYXIgbyDDrXRlbT9cXG5Fc3RlIHByb2NlZGltZW50byDDqSBpcnJldmVyc8OtdmVsIScpKSB7XG4gICAgICAgICAgICAkaHR0cFxuICAgICAgICAgICAgICAgIC5kZWxldGUoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ2F2aXNvLycgKyBpZCwgY29uZmlnKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAyMDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdyZW1vdmlkYSBjb20gc3VjZXNzbyEnXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnL2F2aXNvJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvIHJlbW92ZW5kbywgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFZGl0YXIgQXZpc29cbiAgICAgKi9cbiAgICAkc2NvcGUuZWRpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGh0dHBcbiAgICAgICAgICAgIC5wdXQoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ2F2aXNvLycgKyAkcm91dGVQYXJhbXMuaWQsICRzY29wZS5hdmlzbywgY29uZmlnKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdhdHVhbGl6YWRhIGNvbSBzdWNlc3NvISdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ09jb3JyZXUgdW0gZXJybyBhdHVhbGl6YW5kbywgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlY3VwZXJhciBBdmlzbyBwYXJhIHZpc3VhbGl6YcOnw6NvXG4gICAgICovXG4gICAgJHNjb3BlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGh0dHBcbiAgICAgICAgICAgIC5nZXQoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ2F2aXNvLycgKyAkcm91dGVQYXJhbXMuaWQsIGNvbmZpZylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5kYXRhLmRhdGEuaW5pY2lvID0gbmV3IERhdGUoZGF0YS5kYXRhLmRhdGEuaW5pY2lvKTtcbiAgICAgICAgICAgICAgICBkYXRhLmRhdGEuZGF0YS5maW0gPSBuZXcgRGF0ZShkYXRhLmRhdGEuZGF0YS5maW0pO1xuXG4gICAgICAgICAgICAgICAgJHNjb3BlLmF2aXNvID0gKGRhdGEuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuYW5ndWxhclxuICAgIC5tb2R1bGUoJ215QXBwLmF2aXNvJywgWyduZ1JvdXRlJ10pXG5cbiAgICAuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC53aGVuKCcvYXZpc28nLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL2F2aXNvL2luZGV4Lmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBdmlzb0NvbnRyb2xsZXInXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLndoZW4oJy9hdmlzby9hZGljaW9uYXInLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL2F2aXNvL2FkZC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQXZpc29Db250cm9sbGVyJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC53aGVuKCcvYXZpc28vZWRpdGFyLzppZCcsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvYXZpc28vZWRpdC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQXZpc29Db250cm9sbGVyJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuXG4gICAgLmNvbnRyb2xsZXIoJ0F2aXNvQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRyb3V0ZVBhcmFtcycsICckbG9jYXRpb24nLCAnJGh0dHAnLCBBdmlzb0NvbnRyb2xsZXJdKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

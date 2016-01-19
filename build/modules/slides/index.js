"use strict";function SlidesController(e,t,a,o,n){e.curPage=1,e.pageSize=12;var s={headers:{Authorization:localStorage.getItem("token"),Site:localStorage.getItem("site")}};e.load=function(){o.get($('meta[name="api"]').attr("content")+"slide?page="+e.curPage+"&limit="+e.pageSize,s).then(function(t){e.linhas=t.data})},e.add=function(){var t=e.produto;n.upload({url:$('meta[name="api"]').attr("content")+"slide",data:t,headers:s.headers}).then(function(t){a.url("/slides"),e.load()},function(t){e.status={type:"danger",message:"Erro cadastrando slide, tente novamente mais tarde"}},function(e){var t=parseInt(100*e.loaded/e.total);console.log("progress: "+t+"% "+e.config.data.file.name)})},e["delete"]=function(t){confirm("Você deseja realmente apagar o slide?\nEste procedimento é irreversível!")&&o["delete"]($('meta[name="api"]').attr("content")+"slide/"+t,s).then(function(t){204==t.status?(e.status={type:"success",message:"Slide removido com sucesso!"},a.path("/slides"),e.load()):e.status={type:"danger",message:"Erro removendo slide, tente novamente mais tarde"}})},e.edit=function(){o.put($('meta[name="api"]').attr("content")+"slide/"+t.id,e.produto,s).success(function(t){e.status={type:"success",message:"produto atualizado com sucesso!"}}).error(function(){e.status={type:"danger",message:"Ocorreu um erro atualizando os dados do slide, tente novamente mais tarde"}})},e.get=function(){o.get($('meta[name="api"]').attr("content")+"slide/"+t.id,s).then(function(t){e.produto=t.data.data})}}angular.module("myApp.slides",["ngRoute","ngFileUpload"]).config(["$routeProvider",function(e){e.when("/slides",{templateUrl:"modules/slides/index.html",controller:"SlidesController"}).when("/slides/adicionar",{templateUrl:"modules/slides/add.html",controller:"SlidesController"}).when("/slides/editar/:id",{templateUrl:"modules/slides/edit.html",controller:"SlidesController"})}]).controller("SlidesController",["$scope","$routeParams","$location","$http","Upload",SlidesController]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJTbGlkZXNDb250cm9sbGVyIiwiJHNjb3BlIiwiJHJvdXRlUGFyYW1zIiwiJGxvY2F0aW9uIiwiJGh0dHAiLCIkdXBsb2FkIiwiY3VyUGFnZSIsInBhZ2VTaXplIiwiY29uZmlnIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiU2l0ZSIsImxvYWQiLCJnZXQiLCIkIiwiYXR0ciIsInRoZW4iLCJyZXN1bHQiLCJsaW5oYXMiLCJhZGQiLCIkcHJvZHV0byIsInByb2R1dG8iLCJ1cGxvYWQiLCJ1cmwiLCJkYXRhIiwicmVzcCIsInN0YXR1cyIsInR5cGUiLCJtZXNzYWdlIiwiZXZ0IiwicHJvZ3Jlc3NQZXJjZW50YWdlIiwicGFyc2VJbnQiLCJsb2FkZWQiLCJ0b3RhbCIsImNvbnNvbGUiLCJsb2ciLCJmaWxlIiwibmFtZSIsImlkIiwiY29uZmlybSIsInBhdGgiLCJlZGl0IiwicHV0Iiwic3VjY2VzcyIsImVycm9yIiwiYW5ndWxhciIsIm1vZHVsZSIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFZQSxTQUFTQSxrQkFBa0JDLEVBQVFDLEVBQWNDLEVBQVdDLEVBQU9DLEdBQy9ESixFQUFPSyxRQUFXLEVBQ2xCTCxFQUFPTSxTQUFXLEVBT2xCLElBQUlDLElBQ0FDLFNBQ0lDLGNBQWVDLGFBQWFDLFFBQVEsU0FDcENDLEtBQU1GLGFBQWFDLFFBQVEsU0FPbkNYLEdBQU9hLEtBQU8sV0FDVlYsRUFDS1csSUFBSUMsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxjQUFnQmhCLEVBQU9LLFFBQVUsVUFBWUwsRUFBT00sU0FBVUMsR0FDMUdVLEtBQUssU0FBVUMsR0FDWmxCLEVBQU9tQixPQUFVRCxFQUFXLFFBT3hDbEIsRUFBT29CLElBQU0sV0FDVCxHQUFJQyxHQUFXckIsRUFBT3NCLE9BRXRCbEIsR0FDS21CLFFBQ0dDLElBQUtULEVBQUUsb0JBQW9CQyxLQUFLLFdBQWEsUUFDN0NTLEtBQU1KLEVBQ05iLFFBQVNELEVBQU9DLFVBRW5CUyxLQUNHLFNBQVVTLEdBQ054QixFQUFVc0IsSUFBSSxXQUNkeEIsRUFBT2EsUUFFWCxTQUFVYSxHQUNOMUIsRUFBTzJCLFFBQ0hDLEtBQU0sU0FDTkMsUUFBUyx1REFHakIsU0FBVUMsR0FDTixHQUFJQyxHQUFxQkMsU0FBUyxJQUFRRixFQUFJRyxPQUFTSCxFQUFJSSxNQUUzREMsU0FBUUMsSUFBSSxhQUFlTCxFQUFxQixLQUFPRCxFQUFJdkIsT0FBT2tCLEtBQUtZLEtBQUtDLFNBVTVGdEMsRUFBQUEsVUFBZ0IsU0FBVXVDLEdBQ2xCQyxRQUFRLDZFQUNSckMsRUFBQUEsVUFDWVksRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxTQUFXdUIsRUFBSWhDLEdBQzlEVSxLQUFLLFNBQVVRLEdBQ08sS0FBZkEsRUFBS0UsUUFDTDNCLEVBQU8yQixRQUNIQyxLQUFNLFVBQ05DLFFBQVMsK0JBR2IzQixFQUFVdUMsS0FBSyxXQUVmekMsRUFBT2EsUUFFUGIsRUFBTzJCLFFBQ0hDLEtBQU0sU0FDTkMsUUFBUyx1REFVakM3QixFQUFPMEMsS0FBTyxXQUNWdkMsRUFDS3dDLElBQUk1QixFQUFFLG9CQUFvQkMsS0FBSyxXQUFhLFNBQVdmLEVBQWFzQyxHQUFJdkMsRUFBT3NCLFFBQVNmLEdBQ3hGcUMsUUFBUSxTQUFVbkIsR0FDZnpCLEVBQU8yQixRQUNIQyxLQUFNLFVBQ05DLFFBQVMscUNBR2hCZ0IsTUFBTSxXQUNIN0MsRUFBTzJCLFFBQ0hDLEtBQU0sU0FDTkMsUUFBUyxnRkFRekI3QixFQUFPYyxJQUFNLFdBQ1RYLEVBQ0tXLElBQUlDLEVBQUUsb0JBQW9CQyxLQUFLLFdBQWEsU0FBV2YsRUFBYXNDLEdBQUloQyxHQUN4RVUsS0FBSyxTQUFVUSxHQUNaekIsRUFBT3NCLFFBQVdHLEVBQUtBLEtBQVMsUUFLaERxQixRQUNLQyxPQUFPLGdCQUFpQixVQUFXLGlCQUVuQ3hDLFFBQVEsaUJBQWtCLFNBQVV5QyxHQUNqQ0EsRUFDS0MsS0FBSyxXQUNGQyxZQUFhLDRCQUNiQyxXQUFZLHFCQUVmRixLQUFLLHFCQUNGQyxZQUFhLDBCQUNiQyxXQUFZLHFCQUVmRixLQUFLLHNCQUNGQyxZQUFhLDJCQUNiQyxXQUFZLHdCQUt2QkEsV0FBVyxvQkFBcUIsU0FBVSxlQUFnQixZQUFhLFFBQVMsU0FBVXBEIiwiZmlsZSI6InNsaWRlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTbGlkZXNcbiAqXG4gKiBAcGFyYW0gJHNjb3BlXG4gKiBAcGFyYW0gJHJvdXRlUGFyYW1zXG4gKiBAcGFyYW0gJGxvY2F0aW9uXG4gKiBAcGFyYW0gJGh0dHBcbiAqIEBwYXJhbSBVcGxvYWRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTbGlkZXNDb250cm9sbGVyICgkc2NvcGUsICRyb3V0ZVBhcmFtcywgJGxvY2F0aW9uLCAkaHR0cCwgJHVwbG9hZCkge1xuICAgICRzY29wZS5jdXJQYWdlICA9IDE7XG4gICAgJHNjb3BlLnBhZ2VTaXplID0gMTI7XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmFsIGNvbmZpZ1xuICAgICAqXG4gICAgICogQHR5cGUge3toZWFkZXJzOiB7QXV0aG9yaXphdGlvbiwgU2l0ZX19fVxuICAgICAqL1xuICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpLFxuICAgICAgICAgICAgU2l0ZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NpdGUnKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENhcnJlZ2FyIFNsaWRlc1xuICAgICAqL1xuICAgICRzY29wZS5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLmdldCgkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAnc2xpZGU/cGFnZT0nICsgJHNjb3BlLmN1clBhZ2UgKyAnJmxpbWl0PScgKyAkc2NvcGUucGFnZVNpemUsIGNvbmZpZylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUubGluaGFzID0gKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcmlyIFNsaWRlXG4gICAgICovXG4gICAgJHNjb3BlLmFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRwcm9kdXRvID0gJHNjb3BlLnByb2R1dG87XG5cbiAgICAgICAgJHVwbG9hZFxuICAgICAgICAgICAgLnVwbG9hZCh7XG4gICAgICAgICAgICAgICAgdXJsOiAkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAnc2xpZGUnLFxuICAgICAgICAgICAgICAgIGRhdGE6ICRwcm9kdXRvLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnVybCgnL3NsaWRlcycpO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubG9hZCgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm8gY2FkYXN0cmFuZG8gc2xpZGUsIHRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3NQZXJjZW50YWdlID0gcGFyc2VJbnQoMTAwLjAgKiBldnQubG9hZGVkIC8gZXZ0LnRvdGFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncHJvZ3Jlc3M6ICcgKyBwcm9ncmVzc1BlcmNlbnRhZ2UgKyAnJSAnICsgZXZ0LmNvbmZpZy5kYXRhLmZpbGUubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBhZ2FyIFNsaWRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKi9cbiAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGlmIChjb25maXJtKCdWb2PDqiBkZXNlamEgcmVhbG1lbnRlIGFwYWdhciBvIHNsaWRlP1xcbkVzdGUgcHJvY2VkaW1lbnRvIMOpIGlycmV2ZXJzw612ZWwhJykpIHtcbiAgICAgICAgICAgICRodHRwXG4gICAgICAgICAgICAgICAgLmRlbGV0ZSgkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAnc2xpZGUvJyArIGlkLCBjb25maWcpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDIwNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NsaWRlIHJlbW92aWRvIGNvbSBzdWNlc3NvISdcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2xpZGVzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvIHJlbW92ZW5kbyBzbGlkZSwgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRWRpdGFyIFNsaWRlXG4gICAgICovXG4gICAgJHNjb3BlLmVkaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRodHRwXG4gICAgICAgICAgICAucHV0KCQoJ21ldGFbbmFtZT1cImFwaVwiXScpLmF0dHIoJ2NvbnRlbnQnKSArICdzbGlkZS8nICsgJHJvdXRlUGFyYW1zLmlkLCAkc2NvcGUucHJvZHV0bywgY29uZmlnKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcm9kdXRvIGF0dWFsaXphZG8gY29tIHN1Y2Vzc28hJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ09jb3JyZXUgdW0gZXJybyBhdHVhbGl6YW5kbyBvcyBkYWRvcyBkbyBzbGlkZSwgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBWaXN1YWxpemFyIFNsaWRlXG4gICAgICovXG4gICAgJHNjb3BlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGh0dHBcbiAgICAgICAgICAgIC5nZXQoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ3NsaWRlLycgKyAkcm91dGVQYXJhbXMuaWQsIGNvbmZpZylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnByb2R1dG8gPSAoZGF0YS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuYW5ndWxhclxuICAgIC5tb2R1bGUoJ215QXBwLnNsaWRlcycsIFsnbmdSb3V0ZScsICduZ0ZpbGVVcGxvYWQnXSlcblxuICAgIC5jb25maWcoWyckcm91dGVQcm92aWRlcicsIGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAgICAgICAkcm91dGVQcm92aWRlclxuICAgICAgICAgICAgLndoZW4oJy9zbGlkZXMnLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3NsaWRlcy9pbmRleC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU2xpZGVzQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAud2hlbignL3NsaWRlcy9hZGljaW9uYXInLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3NsaWRlcy9hZGQuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NsaWRlc0NvbnRyb2xsZXInXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLndoZW4oJy9zbGlkZXMvZWRpdGFyLzppZCcsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvc2xpZGVzL2VkaXQuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NsaWRlc0NvbnRyb2xsZXInXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG5cbiAgICAuY29udHJvbGxlcignU2xpZGVzQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRyb3V0ZVBhcmFtcycsICckbG9jYXRpb24nLCAnJGh0dHAnLCAnVXBsb2FkJywgU2xpZGVzQ29udHJvbGxlcl0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

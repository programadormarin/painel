"use strict";function EmpregosController(e,t,a,o){e.curPage=1,e.pageSize=12;var r={headers:{Authorization:localStorage.getItem("token"),Site:localStorage.getItem("site")}};e.load=function(){o.get($('meta[name="api"]').attr("content")+"emprego?page="+e.curPage+"&limit="+e.pageSize,r).then(function(t){e.linhas=t.data})},e.add=function(){o.post($('meta[name="api"]').attr("content")+"emprego",e.emprego,r).success(function(){a.url("/empregos"),e.load()}).error(function(){e.status={type:"danger",message:"Ocorreu um erro ao salvar a vaga"}})},e["delete"]=function(t){if(confirm("Você deseja realmente apagar a vaga?\nEste procedimento é irreversível!")){var a=e.linhas.data[t];o["delete"]($('meta[name="api"]').attr("content")+"emprego/"+a._id,r).success(function(a){e.status={type:"success",message:"Vaga removida com sucesso!"},e.linhas.data.splice(t,1)}).error(function(){e.status={type:"danger",message:"Erro removendo vaga, tente novamente mais tarde"}})}},e.edit=function(){o.put($('meta[name="api"]').attr("content")+"emprego/"+t.id,e.emprego,r).success(function(){e.status={type:"success",message:"Vaga atualizada com sucesso!"}}).error(function(){e.status={type:"danger",message:"Ocorreu um erro atualizando os dados da vaga, tente novamente mais tarde"}})},e.get=function(){o.get($('meta[name="api"]').attr("content")+"emprego/"+t.id,r).then(function(t){e.emprego=t.data.data})}}angular.module("myApp.empregos",["ngRoute"]).config(["$routeProvider",function(e){e.when("/empregos",{templateUrl:"modules/empregos/index.html",controller:"EmpregosController"}).when("/empregos/adicionar",{templateUrl:"modules/empregos/add.html",controller:"EmpregosController"}).when("/empregos/editar/:id",{templateUrl:"modules/empregos/edit.html",controller:"EmpregosController"})}]).controller("EmpregosController",["$scope","$routeParams","$location","$http",EmpregosController]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZW1wcmVnb3MvaW5kZXguanMiXSwibmFtZXMiOlsiRW1wcmVnb3NDb250cm9sbGVyIiwiJHNjb3BlIiwiJHJvdXRlUGFyYW1zIiwiJGxvY2F0aW9uIiwiJGh0dHAiLCJjdXJQYWdlIiwicGFnZVNpemUiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJTaXRlIiwibG9hZCIsImdldCIsIiQiLCJhdHRyIiwidGhlbiIsInJlc3VsdCIsImxpbmhhcyIsImFkZCIsInBvc3QiLCJlbXByZWdvIiwic3VjY2VzcyIsInVybCIsImVycm9yIiwic3RhdHVzIiwidHlwZSIsIm1lc3NhZ2UiLCJpZCIsImNvbmZpcm0iLCJ0b0RlbGV0ZSIsImRhdGEiLCJfaWQiLCJzcGxpY2UiLCJlZGl0IiwicHV0IiwiYW5ndWxhciIsIm1vZHVsZSIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFZQSxTQUFTQSxvQkFBb0JDLEVBQVFDLEVBQWNDLEVBQVdDLEdBQzFESCxFQUFPSSxRQUFXLEVBQ2xCSixFQUFPSyxTQUFXLEVBT2xCLElBQUlDLElBQ0FDLFNBQ0lDLGNBQWVDLGFBQWFDLFFBQVEsU0FDcENDLEtBQU1GLGFBQWFDLFFBQVEsU0FPbkNWLEdBQU9ZLEtBQU8sV0FDVlQsRUFDS1UsSUFBSUMsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxnQkFBa0JmLEVBQU9JLFFBQVUsVUFBWUosRUFBT0ssU0FBVUMsR0FDNUdVLEtBQUssU0FBVUMsR0FDWmpCLEVBQU9rQixPQUFVRCxFQUFXLFFBT3hDakIsRUFBT21CLElBQU0sV0FDVGhCLEVBQ0tpQixLQUFLTixFQUFFLG9CQUFvQkMsS0FBSyxXQUFhLFVBQVdmLEVBQU9xQixRQUFTZixHQUN4RWdCLFFBQVEsV0FDTHBCLEVBQVVxQixJQUFJLGFBQ2R2QixFQUFPWSxTQUVWWSxNQUFNLFdBQ0h4QixFQUFPeUIsUUFDSEMsS0FBTSxTQUNOQyxRQUFTLHVDQVV6QjNCLEVBQUFBLFVBQWdCLFNBQVU0QixHQUN0QixHQUFJQyxRQUFRLDJFQUE0RSxDQUNwRixHQUFJQyxHQUFXOUIsRUFBT2tCLE9BQU9hLEtBQUtILEVBRWxDekIsR0FBQUEsVUFDWVcsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxXQUFhZSxFQUFTRSxJQUFLMUIsR0FDMUVnQixRQUFRLFNBQVVTLEdBQ2YvQixFQUFPeUIsUUFDSEMsS0FBTSxVQUNOQyxRQUFTLDhCQUdiM0IsRUFBT2tCLE9BQU9hLEtBQUtFLE9BQU9MLEVBQUksS0FFakNKLE1BQU0sV0FDSHhCLEVBQU95QixRQUNIQyxLQUFNLFNBQ05DLFFBQVMsdURBUzdCM0IsRUFBT2tDLEtBQU8sV0FDVi9CLEVBQ0tnQyxJQUFJckIsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxXQUFhZCxFQUFhMkIsR0FBSTVCLEVBQU9xQixRQUFTZixHQUMxRmdCLFFBQVEsV0FDTHRCLEVBQU95QixRQUNIQyxLQUFNLFVBQ05DLFFBQVMsa0NBR2hCSCxNQUFNLFdBQ0h4QixFQUFPeUIsUUFDSEMsS0FBTSxTQUNOQyxRQUFTLCtFQVF6QjNCLEVBQU9hLElBQU0sV0FDVFYsRUFDS1UsSUFBSUMsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxXQUFhZCxFQUFhMkIsR0FBSXRCLEdBQzFFVSxLQUFLLFNBQVVlLEdBQ1ovQixFQUFPcUIsUUFBV1UsRUFBS0EsS0FBUyxRQUtoREssUUFBUUMsT0FBTyxrQkFBbUIsWUFDN0IvQixRQUFRLGlCQUFrQixTQUFVZ0MsR0FDakNBLEVBQ0tDLEtBQUssYUFDRkMsWUFBYSw4QkFDYkMsV0FBWSx1QkFFZkYsS0FBSyx1QkFDRkMsWUFBYSw0QkFDYkMsV0FBWSx1QkFFZkYsS0FBSyx3QkFDRkMsWUFBYSw2QkFDYkMsV0FBWSwwQkFLdkJBLFdBQVcsc0JBQXVCLFNBQVUsZUFBZ0IsWUFBYSxRQUFTMUMiLCJmaWxlIjoibW9kdWxlcy9lbXByZWdvcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBFbXByZWdvc1xuICpcbiAqIEBwYXJhbSAkc2NvcGVcbiAqIEBwYXJhbSAkcm91dGVQYXJhbXNcbiAqIEBwYXJhbSAkbG9jYXRpb25cbiAqIEBwYXJhbSAkaHR0cFxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBFbXByZWdvc0NvbnRyb2xsZXIgKCRzY29wZSwgJHJvdXRlUGFyYW1zLCAkbG9jYXRpb24sICRodHRwKSB7XG4gICAgJHNjb3BlLmN1clBhZ2UgID0gMTtcbiAgICAkc2NvcGUucGFnZVNpemUgPSAxMjtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYWwgY29uZmlnXG4gICAgICpcbiAgICAgKiBAdHlwZSB7e2hlYWRlcnM6IHtBdXRob3JpemF0aW9uLCBTaXRlfX19XG4gICAgICovXG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyksXG4gICAgICAgICAgICBTaXRlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2l0ZScpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2FycmVnYSBvcyBFbXByZWdvc1xuICAgICAqL1xuICAgICRzY29wZS5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLmdldCgkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAnZW1wcmVnbz9wYWdlPScgKyAkc2NvcGUuY3VyUGFnZSArICcmbGltaXQ9JyArICRzY29wZS5wYWdlU2l6ZSwgY29uZmlnKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICRzY29wZS5saW5oYXMgPSAocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENhZGFzdHJhIHVtIEVtcHJlZ29cbiAgICAgKi9cbiAgICAkc2NvcGUuYWRkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLnBvc3QoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ2VtcHJlZ28nLCAkc2NvcGUuZW1wcmVnbywgY29uZmlnKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRsb2NhdGlvbi51cmwoJy9lbXByZWdvcycpO1xuICAgICAgICAgICAgICAgICRzY29wZS5sb2FkKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ09jb3JyZXUgdW0gZXJybyBhbyBzYWx2YXIgYSB2YWdhJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdW0gRW1wcmVnb1xuICAgICAqXG4gICAgICogQHBhcmFtIGlkXG4gICAgICovXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBpZiAoY29uZmlybSgnVm9jw6ogZGVzZWphIHJlYWxtZW50ZSBhcGFnYXIgYSB2YWdhP1xcbkVzdGUgcHJvY2VkaW1lbnRvIMOpIGlycmV2ZXJzw612ZWwhJykpIHtcbiAgICAgICAgICAgIHZhciB0b0RlbGV0ZSA9ICRzY29wZS5saW5oYXMuZGF0YVtpZF07XG5cbiAgICAgICAgICAgICRodHRwXG4gICAgICAgICAgICAgICAgLmRlbGV0ZSgkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAnZW1wcmVnby8nICsgdG9EZWxldGUuX2lkLCBjb25maWcpXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdWYWdhIHJlbW92aWRhIGNvbSBzdWNlc3NvISdcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubGluaGFzLmRhdGEuc3BsaWNlKGlkLCAxKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm8gcmVtb3ZlbmRvIHZhZ2EsIHRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVkaXRhciBFbXByZWdvXG4gICAgICovXG4gICAgJHNjb3BlLmVkaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRodHRwXG4gICAgICAgICAgICAucHV0KCQoJ21ldGFbbmFtZT1cImFwaVwiXScpLmF0dHIoJ2NvbnRlbnQnKSArICdlbXByZWdvLycgKyAkcm91dGVQYXJhbXMuaWQsICRzY29wZS5lbXByZWdvLCBjb25maWcpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVmFnYSBhdHVhbGl6YWRhIGNvbSBzdWNlc3NvISdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdPY29ycmV1IHVtIGVycm8gYXR1YWxpemFuZG8gb3MgZGFkb3MgZGEgdmFnYSwgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBWaXN1YWxpemFyIEVtcHJlZ29cbiAgICAgKi9cbiAgICAkc2NvcGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLmdldCgkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAnZW1wcmVnby8nICsgJHJvdXRlUGFyYW1zLmlkLCBjb25maWcpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICRzY29wZS5lbXByZWdvID0gKGRhdGEuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ215QXBwLmVtcHJlZ29zJywgWyduZ1JvdXRlJ10pXG4gICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAgICAgICAud2hlbignL2VtcHJlZ29zJywge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9lbXByZWdvcy9pbmRleC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRW1wcmVnb3NDb250cm9sbGVyJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC53aGVuKCcvZW1wcmVnb3MvYWRpY2lvbmFyJywge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9lbXByZWdvcy9hZGQuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0VtcHJlZ29zQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAud2hlbignL2VtcHJlZ29zL2VkaXRhci86aWQnLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL2VtcHJlZ29zL2VkaXQuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0VtcHJlZ29zQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcblxuICAgIC5jb250cm9sbGVyKCdFbXByZWdvc0NvbnRyb2xsZXInLCBbJyRzY29wZScsICckcm91dGVQYXJhbXMnLCAnJGxvY2F0aW9uJywgJyRodHRwJywgRW1wcmVnb3NDb250cm9sbGVyXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

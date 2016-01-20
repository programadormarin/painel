"use strict";function EmpregosController(e,t,a,o){e.curPage=1,e.pageSize=12,e.pageTitle="Ofertas de Empregos",e.load=function(){o.get($('meta[name="api"]').attr("content")+"emprego?page="+e.curPage+"&limit="+e.pageSize).then(function(t){e.linhas=t.data})},e.add=function(){o.post($('meta[name="api"]').attr("content")+"emprego",e.emprego).success(function(){a.url("/empregos"),e.load()}).error(function(){e.status={type:"danger",message:"Ocorreu um erro ao salvar a vaga"}})},e["delete"]=function(t){if(confirm("Você deseja realmente apagar a vaga?\nEste procedimento é irreversível!")){var a=e.linhas.data[t];o["delete"]($('meta[name="api"]').attr("content")+"emprego/"+a._id).success(function(a){e.status={type:"success",message:"Vaga removida com sucesso!"},e.linhas.data.splice(t,1)}).error(function(){e.status={type:"danger",message:"Erro removendo vaga, tente novamente mais tarde"}})}},e.edit=function(){o.put($('meta[name="api"]').attr("content")+"emprego/"+t.id,e.emprego).success(function(){e.status={type:"success",message:"Vaga atualizada com sucesso!"}}).error(function(){e.status={type:"danger",message:"Ocorreu um erro atualizando os dados da vaga, tente novamente mais tarde"}})},e.get=function(){o.get($('meta[name="api"]').attr("content")+"emprego/"+t.id).then(function(t){e.emprego=t.data.data})}}angular.module("myApp.empregos",["ngRoute"]).config(["$routeProvider",function(e){e.when("/empregos",{templateUrl:"modules/empregos/index.html",controller:"EmpregosController"}).when("/empregos/adicionar",{templateUrl:"modules/empregos/add.html",controller:"EmpregosController"}).when("/empregos/editar/:id",{templateUrl:"modules/empregos/edit.html",controller:"EmpregosController"})}]).controller("EmpregosController",["$scope","$routeParams","$location","$http",EmpregosController]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHJlZ29zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkVtcHJlZ29zQ29udHJvbGxlciIsIiRzY29wZSIsIiRyb3V0ZVBhcmFtcyIsIiRsb2NhdGlvbiIsIiRodHRwIiwiY3VyUGFnZSIsInBhZ2VTaXplIiwicGFnZVRpdGxlIiwibG9hZCIsImdldCIsIiQiLCJhdHRyIiwidGhlbiIsInJlc3VsdCIsImxpbmhhcyIsImFkZCIsInBvc3QiLCJlbXByZWdvIiwic3VjY2VzcyIsInVybCIsImVycm9yIiwic3RhdHVzIiwidHlwZSIsIm1lc3NhZ2UiLCJpZCIsImNvbmZpcm0iLCJ0b0RlbGV0ZSIsImRhdGEiLCJfaWQiLCJzcGxpY2UiLCJlZGl0IiwicHV0IiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFZQSxTQUFTQSxvQkFBb0JDLEVBQVFDLEVBQWNDLEVBQVdDLEdBQzFESCxFQUFPSSxRQUFZLEVBQ25CSixFQUFPSyxTQUFZLEdBQ25CTCxFQUFPTSxVQUFZLHNCQUtuQk4sRUFBT08sS0FBTyxXQUNWSixFQUNLSyxJQUFJQyxFQUFFLG9CQUFvQkMsS0FBSyxXQUFhLGdCQUFrQlYsRUFBT0ksUUFBVSxVQUFZSixFQUFPSyxVQUNsR00sS0FBSyxTQUFVQyxHQUNaWixFQUFPYSxPQUFVRCxFQUFXLFFBT3hDWixFQUFPYyxJQUFNLFdBQ1RYLEVBQ0tZLEtBQUtOLEVBQUUsb0JBQW9CQyxLQUFLLFdBQWEsVUFBV1YsRUFBT2dCLFNBQy9EQyxRQUFRLFdBQ0xmLEVBQVVnQixJQUFJLGFBQ2RsQixFQUFPTyxTQUVWWSxNQUFNLFdBQ0huQixFQUFPb0IsUUFDSEMsS0FBTSxTQUNOQyxRQUFTLHVDQVV6QnRCLEVBQUFBLFVBQWdCLFNBQVV1QixHQUN0QixHQUFJQyxRQUFRLDJFQUE0RSxDQUNwRixHQUFJQyxHQUFXekIsRUFBT2EsT0FBT2EsS0FBS0gsRUFFbENwQixHQUFBQSxVQUNZTSxFQUFFLG9CQUFvQkMsS0FBSyxXQUFhLFdBQWFlLEVBQVNFLEtBQ3JFVixRQUFRLFNBQVVTLEdBQ2YxQixFQUFPb0IsUUFDSEMsS0FBTSxVQUNOQyxRQUFTLDhCQUdidEIsRUFBT2EsT0FBT2EsS0FBS0UsT0FBT0wsRUFBSSxLQUVqQ0osTUFBTSxXQUNIbkIsRUFBT29CLFFBQ0hDLEtBQU0sU0FDTkMsUUFBUyx1REFTN0J0QixFQUFPNkIsS0FBTyxXQUNWMUIsRUFDSzJCLElBQUlyQixFQUFFLG9CQUFvQkMsS0FBSyxXQUFhLFdBQWFULEVBQWFzQixHQUFJdkIsRUFBT2dCLFNBQ2pGQyxRQUFRLFdBQ0xqQixFQUFPb0IsUUFDSEMsS0FBTSxVQUNOQyxRQUFTLGtDQUdoQkgsTUFBTSxXQUNIbkIsRUFBT29CLFFBQ0hDLEtBQU0sU0FDTkMsUUFBUywrRUFRekJ0QixFQUFPUSxJQUFNLFdBQ1RMLEVBQ0tLLElBQUlDLEVBQUUsb0JBQW9CQyxLQUFLLFdBQWEsV0FBYVQsRUFBYXNCLElBQ3RFWixLQUFLLFNBQVVlLEdBQ1oxQixFQUFPZ0IsUUFBV1UsRUFBS0EsS0FBUyxRQUtoREssUUFBUUMsT0FBTyxrQkFBbUIsWUFDN0JDLFFBQVEsaUJBQWtCLFNBQVVDLEdBQ2pDQSxFQUNLQyxLQUFLLGFBQ0ZDLFlBQWEsOEJBQ2JDLFdBQVksdUJBRWZGLEtBQUssdUJBQ0ZDLFlBQWEsNEJBQ2JDLFdBQVksdUJBRWZGLEtBQUssd0JBQ0ZDLFlBQWEsNkJBQ2JDLFdBQVksMEJBS3ZCQSxXQUFXLHNCQUF1QixTQUFVLGVBQWdCLFlBQWEsUUFBU3RDIiwiZmlsZSI6ImVtcHJlZ29zL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEVtcHJlZ29zXG4gKlxuICogQHBhcmFtICRzY29wZVxuICogQHBhcmFtICRyb3V0ZVBhcmFtc1xuICogQHBhcmFtICRsb2NhdGlvblxuICogQHBhcmFtICRodHRwXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEVtcHJlZ29zQ29udHJvbGxlciAoJHNjb3BlLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHApIHtcbiAgICAkc2NvcGUuY3VyUGFnZSAgID0gMTtcbiAgICAkc2NvcGUucGFnZVNpemUgID0gMTI7XG4gICAgJHNjb3BlLnBhZ2VUaXRsZSA9ICdPZmVydGFzIGRlIEVtcHJlZ29zJztcblxuICAgIC8qKlxuICAgICAqIENhcnJlZ2Egb3MgRW1wcmVnb3NcbiAgICAgKi9cbiAgICAkc2NvcGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGh0dHBcbiAgICAgICAgICAgIC5nZXQoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ2VtcHJlZ28/cGFnZT0nICsgJHNjb3BlLmN1clBhZ2UgKyAnJmxpbWl0PScgKyAkc2NvcGUucGFnZVNpemUpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmxpbmhhcyA9IChyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2FkYXN0cmEgdW0gRW1wcmVnb1xuICAgICAqL1xuICAgICRzY29wZS5hZGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRodHRwXG4gICAgICAgICAgICAucG9zdCgkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAnZW1wcmVnbycsICRzY29wZS5lbXByZWdvKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRsb2NhdGlvbi51cmwoJy9lbXByZWdvcycpO1xuICAgICAgICAgICAgICAgICRzY29wZS5sb2FkKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ09jb3JyZXUgdW0gZXJybyBhbyBzYWx2YXIgYSB2YWdhJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdW0gRW1wcmVnb1xuICAgICAqXG4gICAgICogQHBhcmFtIGlkXG4gICAgICovXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBpZiAoY29uZmlybSgnVm9jw6ogZGVzZWphIHJlYWxtZW50ZSBhcGFnYXIgYSB2YWdhP1xcbkVzdGUgcHJvY2VkaW1lbnRvIMOpIGlycmV2ZXJzw612ZWwhJykpIHtcbiAgICAgICAgICAgIHZhciB0b0RlbGV0ZSA9ICRzY29wZS5saW5oYXMuZGF0YVtpZF07XG5cbiAgICAgICAgICAgICRodHRwXG4gICAgICAgICAgICAgICAgLmRlbGV0ZSgkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAnZW1wcmVnby8nICsgdG9EZWxldGUuX2lkKVxuICAgICAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVmFnYSByZW1vdmlkYSBjb20gc3VjZXNzbyEnXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxpbmhhcy5kYXRhLnNwbGljZShpZCwgMSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvIHJlbW92ZW5kbyB2YWdhLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSdcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFZGl0YXIgRW1wcmVnb1xuICAgICAqL1xuICAgICRzY29wZS5lZGl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLnB1dCgkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAnZW1wcmVnby8nICsgJHJvdXRlUGFyYW1zLmlkLCAkc2NvcGUuZW1wcmVnbylcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdWYWdhIGF0dWFsaXphZGEgY29tIHN1Y2Vzc28hJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ09jb3JyZXUgdW0gZXJybyBhdHVhbGl6YW5kbyBvcyBkYWRvcyBkYSB2YWdhLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFZpc3VhbGl6YXIgRW1wcmVnb1xuICAgICAqL1xuICAgICRzY29wZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRodHRwXG4gICAgICAgICAgICAuZ2V0KCQoJ21ldGFbbmFtZT1cImFwaVwiXScpLmF0dHIoJ2NvbnRlbnQnKSArICdlbXByZWdvLycgKyAkcm91dGVQYXJhbXMuaWQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICRzY29wZS5lbXByZWdvID0gKGRhdGEuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ215QXBwLmVtcHJlZ29zJywgWyduZ1JvdXRlJ10pXG4gICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAgICAgICAud2hlbignL2VtcHJlZ29zJywge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9lbXByZWdvcy9pbmRleC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRW1wcmVnb3NDb250cm9sbGVyJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC53aGVuKCcvZW1wcmVnb3MvYWRpY2lvbmFyJywge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9lbXByZWdvcy9hZGQuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0VtcHJlZ29zQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAud2hlbignL2VtcHJlZ29zL2VkaXRhci86aWQnLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL2VtcHJlZ29zL2VkaXQuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0VtcHJlZ29zQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcblxuICAgIC5jb250cm9sbGVyKCdFbXByZWdvc0NvbnRyb2xsZXInLCBbJyRzY29wZScsICckcm91dGVQYXJhbXMnLCAnJGxvY2F0aW9uJywgJyRodHRwJywgRW1wcmVnb3NDb250cm9sbGVyXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

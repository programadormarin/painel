"use strict";function EquipeController(e,t,o,a,n){e.curPage=1,e.pageSize=12,e.load=function(){var t=$('meta[name="api"]').attr("content")+"equipe?page="+e.curPage+"&limit="+e.pageSize;a.get(t).then(function(t){e.linhas=t.data})},e.add=function(){var t=e.membro;n.upload({url:$('meta[name="api"]').attr("content")+"equipe",data:t}).then(function(t){o.url("/equipe"),e.load()},function(t){e.status={type:"danger",message:"Erro cadastrando membro, tente novamente mais tarde"}},function(e){var t=parseInt(100*e.loaded/e.total);console.log("progress: "+t+"% "+e.config.data.file.name)})},e["delete"]=function(t){confirm("Você deseja realmente apagar o membro?\nEste procedimento é irreversível!")&&a["delete"]($('meta[name="api"]').attr("content")+"equipe/"+t).then(function(t){204==t.status?(e.status={type:"success",message:"Membro removido com sucesso!"},o.path("/equipe"),e.load()):e.status={type:"danger",message:"Erro removendo membro, tente novamente mais tarde"}})},e.edit=function(){a.put($('meta[name="api"]').attr("content")+"equipe/"+t.id,e.membro).success(function(t){e.status={type:"success",message:"Membro atualizado com sucesso!"}}).error(function(){e.status={type:"danger",message:"Ocorreu um erro atualizando os dados do membro, tente novamente mais tarde"}})},e.get=function(){a.get($('meta[name="api"]').attr("content")+"equipe/"+t.id).then(function(t){e.membro=t.data.data})}}angular.module("myApp.equipe",["ngRoute","ngFileUpload"]).config(["$routeProvider",function(e){e.when("/equipe",{templateUrl:"modules/equipe/index.html",controller:"EquipeController"}).when("/equipe/adicionar",{templateUrl:"modules/equipe/add.html",controller:"EquipeController"}).when("/equipe/editar/:id",{templateUrl:"modules/equipe/edit.html",controller:"EquipeController"})}]).controller("EquipeController",["$scope","$routeParams","$location","$http","Upload",EquipeController]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJFcXVpcGVDb250cm9sbGVyIiwiJHNjb3BlIiwiJHJvdXRlUGFyYW1zIiwiJGxvY2F0aW9uIiwiJGh0dHAiLCIkdXBsb2FkIiwiY3VyUGFnZSIsInBhZ2VTaXplIiwibG9hZCIsInVybCIsIiQiLCJhdHRyIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJsaW5oYXMiLCJhZGQiLCIkbWVtYnJvIiwibWVtYnJvIiwidXBsb2FkIiwicmVzcCIsInN0YXR1cyIsInR5cGUiLCJtZXNzYWdlIiwiZXZ0IiwicHJvZ3Jlc3NQZXJjZW50YWdlIiwicGFyc2VJbnQiLCJsb2FkZWQiLCJ0b3RhbCIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciLCJmaWxlIiwibmFtZSIsImlkIiwiY29uZmlybSIsInBhdGgiLCJlZGl0IiwicHV0Iiwic3VjY2VzcyIsImVycm9yIiwiYW5ndWxhciIsIm1vZHVsZSIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFhQSxTQUFTQSxrQkFBa0JDLEVBQVFDLEVBQWNDLEVBQVdDLEVBQU9DLEdBQy9ESixFQUFPSyxRQUFXLEVBQ2xCTCxFQUFPTSxTQUFXLEdBS2xCTixFQUFPTyxLQUFPLFdBQ1YsR0FBSUMsR0FBTUMsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxlQUFpQlYsRUFBT0ssUUFBVSxVQUFZTCxFQUFPTSxRQUV2R0gsR0FDS1EsSUFBSUgsR0FDSkksS0FBSyxTQUFVQyxHQUNaYixFQUFPYyxPQUFVRCxFQUFTLFFBT3RDYixFQUFPZSxJQUFNLFdBQ1QsR0FBSUMsR0FBVWhCLEVBQU9pQixNQUVyQmIsR0FDS2MsUUFDR1YsSUFBS0MsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxTQUM3Q0csS0FBTUcsSUFFVEosS0FDRyxTQUFVTyxHQUNOakIsRUFBVU0sSUFBSSxXQUNkUixFQUFPTyxRQUVYLFNBQVVZLEdBQ05uQixFQUFPb0IsUUFDSEMsS0FBTSxTQUNOQyxRQUFTLHdEQUdqQixTQUFVQyxHQUNOLEdBQUlDLEdBQXFCQyxTQUFTLElBQVFGLEVBQUlHLE9BQVNILEVBQUlJLE1BRTNEQyxTQUFRQyxJQUFJLGFBQWVMLEVBQXFCLEtBQU9ELEVBQUlPLE9BQU9qQixLQUFLa0IsS0FBS0MsU0FVNUZoQyxFQUFBQSxVQUFnQixTQUFVaUMsR0FDbEJDLFFBQVEsOEVBQ1IvQixFQUFBQSxVQUNZTSxFQUFFLG9CQUFvQkMsS0FBSyxXQUFhLFVBQVl1QixHQUMzRHJCLEtBQUssU0FBVUMsR0FDTyxLQUFmQSxFQUFLTyxRQUNMcEIsRUFBT29CLFFBQ0hDLEtBQU0sVUFDTkMsUUFBUyxnQ0FHYnBCLEVBQVVpQyxLQUFLLFdBQ2ZuQyxFQUFPTyxRQUVQUCxFQUFPb0IsUUFDSEMsS0FBTSxTQUNOQyxRQUFTLHdEQVVqQ3RCLEVBQU9vQyxLQUFPLFdBQ1ZqQyxFQUNLa0MsSUFBSTVCLEVBQUUsb0JBQW9CQyxLQUFLLFdBQWEsVUFBWVQsRUFBYWdDLEdBQUlqQyxFQUFPaUIsUUFDaEZxQixRQUFRLFNBQVV6QixHQUNmYixFQUFPb0IsUUFDSEMsS0FBTSxVQUNOQyxRQUFTLG9DQUdoQmlCLE1BQU0sV0FDSHZDLEVBQU9vQixRQUNIQyxLQUFNLFNBQ05DLFFBQVMsaUZBUXpCdEIsRUFBT1csSUFBTSxXQUNUUixFQUNLUSxJQUFJRixFQUFFLG9CQUFvQkMsS0FBSyxXQUFhLFVBQVlULEVBQWFnQyxJQUNyRXJCLEtBQUssU0FBVUMsR0FDWmIsRUFBT2lCLE9BQVVKLEVBQUtBLEtBQVMsUUFLL0MyQixRQUNLQyxPQUFPLGdCQUFpQixVQUFXLGlCQUVuQ1gsUUFBUSxpQkFBa0IsU0FBVVksR0FDakNBLEVBQ0tDLEtBQUssV0FDRkMsWUFBYSw0QkFDYkMsV0FBWSxxQkFFZkYsS0FBSyxxQkFDRkMsWUFBYSwwQkFDYkMsV0FBWSxxQkFFZkYsS0FBSyxzQkFDRkMsWUFBYSwyQkFDYkMsV0FBWSx3QkFLdkJBLFdBQVcsb0JBQXFCLFNBQVUsZUFBZ0IsWUFBYSxRQUFTLFNBQVU5QyIsImZpbGUiOiJlcXVpcGUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRXF1aXBlXG4gKiBcbiAqIEBwYXJhbSAkc2NvcGVcbiAqIEBwYXJhbSAkcm91dGVQYXJhbXNcbiAqIEBwYXJhbSAkbG9jYXRpb25cbiAqIEBwYXJhbSAkaHR0cFxuICogQHBhcmFtIFVwbG9hZFxuICogXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gRXF1aXBlQ29udHJvbGxlciAoJHNjb3BlLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHAsICR1cGxvYWQpIHtcbiAgICAkc2NvcGUuY3VyUGFnZSAgPSAxO1xuICAgICRzY29wZS5wYWdlU2l6ZSA9IDEyO1xuXG4gICAgLyoqXG4gICAgICogQ2FycmVnYSBFcXVpcGVcbiAgICAgKi9cbiAgICAkc2NvcGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVybCA9ICQoJ21ldGFbbmFtZT1cImFwaVwiXScpLmF0dHIoJ2NvbnRlbnQnKSArICdlcXVpcGU/cGFnZT0nICsgJHNjb3BlLmN1clBhZ2UgKyAnJmxpbWl0PScgKyAkc2NvcGUucGFnZVNpemU7XG5cbiAgICAgICAgJGh0dHBcbiAgICAgICAgICAgIC5nZXQodXJsKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUubGluaGFzID0gKGRhdGEuZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRpY2lvbmEgbWVtYnJvXG4gICAgICovXG4gICAgJHNjb3BlLmFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRtZW1icm8gPSAkc2NvcGUubWVtYnJvO1xuXG4gICAgICAgICR1cGxvYWRcbiAgICAgICAgICAgIC51cGxvYWQoe1xuICAgICAgICAgICAgICAgIHVybDogJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ2VxdWlwZScsXG4gICAgICAgICAgICAgICAgZGF0YTogJG1lbWJyb1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi51cmwoJy9lcXVpcGUnKTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvYWQoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvIGNhZGFzdHJhbmRvIG1lbWJybywgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUnXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzc1BlcmNlbnRhZ2UgPSBwYXJzZUludCgxMDAuMCAqIGV2dC5sb2FkZWQgLyBldnQudG90YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9ncmVzczogJyArIHByb2dyZXNzUGVyY2VudGFnZSArICclICcgKyBldnQuY29uZmlnLmRhdGEuZmlsZS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgbWVtYnJvIGRhIEVxdWlwZVxuICAgICAqXG4gICAgICogQHBhcmFtIGlkXG4gICAgICovXG4gICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBpZiAoY29uZmlybSgnVm9jw6ogZGVzZWphIHJlYWxtZW50ZSBhcGFnYXIgbyBtZW1icm8/XFxuRXN0ZSBwcm9jZWRpbWVudG8gw6kgaXJyZXZlcnPDrXZlbCEnKSkge1xuICAgICAgICAgICAgJGh0dHBcbiAgICAgICAgICAgICAgICAuZGVsZXRlKCQoJ21ldGFbbmFtZT1cImFwaVwiXScpLmF0dHIoJ2NvbnRlbnQnKSArICdlcXVpcGUvJyArIGlkKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAyMDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdNZW1icm8gcmVtb3ZpZG8gY29tIHN1Y2Vzc28hJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy9lcXVpcGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvIHJlbW92ZW5kbyBtZW1icm8sIHRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRWRpdGEgbWVtYnJvXG4gICAgICovXG4gICAgJHNjb3BlLmVkaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRodHRwXG4gICAgICAgICAgICAucHV0KCQoJ21ldGFbbmFtZT1cImFwaVwiXScpLmF0dHIoJ2NvbnRlbnQnKSArICdlcXVpcGUvJyArICRyb3V0ZVBhcmFtcy5pZCwgJHNjb3BlLm1lbWJybylcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTWVtYnJvIGF0dWFsaXphZG8gY29tIHN1Y2Vzc28hJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnT2NvcnJldSB1bSBlcnJvIGF0dWFsaXphbmRvIG9zIGRhZG9zIGRvIG1lbWJybywgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFZpc3VhbGl6YSBtZW1icm9cbiAgICAgKi9cbiAgICAkc2NvcGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLmdldCgkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAnZXF1aXBlLycgKyAkcm91dGVQYXJhbXMuaWQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICRzY29wZS5tZW1icm8gPSAoZGF0YS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuYW5ndWxhclxuICAgIC5tb2R1bGUoJ215QXBwLmVxdWlwZScsIFsnbmdSb3V0ZScsICduZ0ZpbGVVcGxvYWQnXSlcblxuICAgIC5jb25maWcoWyckcm91dGVQcm92aWRlcicsIGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAgICAgICAkcm91dGVQcm92aWRlclxuICAgICAgICAgICAgLndoZW4oJy9lcXVpcGUnLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL2VxdWlwZS9pbmRleC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRXF1aXBlQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAud2hlbignL2VxdWlwZS9hZGljaW9uYXInLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL2VxdWlwZS9hZGQuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0VxdWlwZUNvbnRyb2xsZXInXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLndoZW4oJy9lcXVpcGUvZWRpdGFyLzppZCcsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvZXF1aXBlL2VkaXQuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0VxdWlwZUNvbnRyb2xsZXInXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG5cbiAgICAuY29udHJvbGxlcignRXF1aXBlQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRyb3V0ZVBhcmFtcycsICckbG9jYXRpb24nLCAnJGh0dHAnLCAnVXBsb2FkJywgRXF1aXBlQ29udHJvbGxlcl0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

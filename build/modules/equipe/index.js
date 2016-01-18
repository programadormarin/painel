"use strict";function EquipeController(e,t,a,o,n){e.curPage=1,e.pageSize=12;var r={headers:{Authorization:localStorage.getItem("token"),Site:localStorage.getItem("site")}};e.load=function(){var t=$('meta[name="api"]').attr("content")+"equipe?page="+e.curPage+"&limit="+e.pageSize;o.get(t,r).then(function(t){e.linhas=t.data})},e.add=function(){var t=e.membro;n.upload({url:$('meta[name="api"]').attr("content")+"equipe",data:t,headers:r.headers}).then(function(t){a.url("/equipe"),e.load()},function(t){e.status={type:"danger",message:"Erro cadastrando produto, tente novamente mais tarde"}},function(e){var t=parseInt(100*e.loaded/e.total);console.log("progress: "+t+"% "+e.config.data.file.name)})},e["delete"]=function(t){confirm("Você deseja realmente apagar o membro?\nEste procedimento é irreversível!")&&o["delete"]($('meta[name="api"]').attr("content")+"equipe/"+t,r).then(function(t){204==t.status?(e.status={type:"success",message:"Membro removido com sucesso!"},a.path("/equipe"),e.load()):e.status={type:"danger",message:"Erro removendo membro, tente novamente mais tarde"}})},e.edit=function(){o.put($('meta[name="api"]').attr("content")+"equipe/"+t.id,e.membro,r).success(function(t){e.status={type:"success",message:"Membro atualizado com sucesso!"}}).error(function(){e.status={type:"danger",message:"Ocorreu um erro atualizando os dados do membro, tente novamente mais tarde"}})},e.get=function(){o.get($('meta[name="api"]').attr("content")+"equipe/"+t.id,r).then(function(t){e.membro=t.data.data})}}angular.module("myApp.equipe",["ngRoute","ngFileUpload"]).config(["$routeProvider",function(e){e.when("/equipe",{templateUrl:"modules/equipe/index.html",controller:"EquipeController"}).when("/equipe/adicionar",{templateUrl:"modules/equipe/add.html",controller:"EquipeController"}).when("/equipe/editar/:id",{templateUrl:"modules/equipe/edit.html",controller:"EquipeController"})}]).controller("EquipeController",["$scope","$routeParams","$location","$http","Upload",EquipeController]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZXF1aXBlL2luZGV4LmpzIl0sIm5hbWVzIjpbIkVxdWlwZUNvbnRyb2xsZXIiLCIkc2NvcGUiLCIkcm91dGVQYXJhbXMiLCIkbG9jYXRpb24iLCIkaHR0cCIsIiR1cGxvYWQiLCJjdXJQYWdlIiwicGFnZVNpemUiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJTaXRlIiwibG9hZCIsInVybCIsIiQiLCJhdHRyIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJsaW5oYXMiLCJhZGQiLCIkbWVtYnJvIiwibWVtYnJvIiwidXBsb2FkIiwicmVzcCIsInN0YXR1cyIsInR5cGUiLCJtZXNzYWdlIiwiZXZ0IiwicHJvZ3Jlc3NQZXJjZW50YWdlIiwicGFyc2VJbnQiLCJsb2FkZWQiLCJ0b3RhbCIsImNvbnNvbGUiLCJsb2ciLCJmaWxlIiwibmFtZSIsImlkIiwiY29uZmlybSIsInBhdGgiLCJlZGl0IiwicHV0Iiwic3VjY2VzcyIsImVycm9yIiwiYW5ndWxhciIsIm1vZHVsZSIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFhQSxTQUFTQSxrQkFBa0JDLEVBQVFDLEVBQWNDLEVBQVdDLEVBQU9DLEdBQy9ESixFQUFPSyxRQUFXLEVBQ2xCTCxFQUFPTSxTQUFXLEVBT2xCLElBQUlDLElBQ0FDLFNBQ0lDLGNBQWVDLGFBQWFDLFFBQVEsU0FDcENDLEtBQU1GLGFBQWFDLFFBQVEsU0FPbkNYLEdBQU9hLEtBQU8sV0FDVixHQUFJQyxHQUFNQyxFQUFFLG9CQUFvQkMsS0FBSyxXQUFhLGVBQWlCaEIsRUFBT0ssUUFBVSxVQUFZTCxFQUFPTSxRQUV2R0gsR0FDS2MsSUFBSUgsRUFBS1AsR0FDVFcsS0FBSyxTQUFVQyxHQUNabkIsRUFBT29CLE9BQVVELEVBQVMsUUFPdENuQixFQUFPcUIsSUFBTSxXQUNULEdBQUlDLEdBQVV0QixFQUFPdUIsTUFFckJuQixHQUNLb0IsUUFDR1YsSUFBS0MsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxTQUM3Q0csS0FBTUcsRUFDTmQsUUFBU0QsRUFBT0MsVUFFbkJVLEtBQ0csU0FBVU8sR0FDTnZCLEVBQVVZLElBQUksV0FDZGQsRUFBT2EsUUFFWCxTQUFVWSxHQUNOekIsRUFBTzBCLFFBQ0hDLEtBQU0sU0FDTkMsUUFBUyx5REFHakIsU0FBVUMsR0FDTixHQUFJQyxHQUFxQkMsU0FBUyxJQUFRRixFQUFJRyxPQUFTSCxFQUFJSSxNQUUzREMsU0FBUUMsSUFBSSxhQUFlTCxFQUFxQixLQUFPRCxFQUFJdEIsT0FBT1ksS0FBS2lCLEtBQUtDLFNBVTVGckMsRUFBQUEsVUFBZ0IsU0FBVXNDLEdBQ2xCQyxRQUFRLDhFQUNScEMsRUFBQUEsVUFDWVksRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxVQUFZc0IsRUFBSS9CLEdBQy9EVyxLQUFLLFNBQVVDLEdBQ08sS0FBZkEsRUFBS08sUUFDTDFCLEVBQU8wQixRQUNIQyxLQUFNLFVBQ05DLFFBQVMsZ0NBR2IxQixFQUFVc0MsS0FBSyxXQUNmeEMsRUFBT2EsUUFFUGIsRUFBTzBCLFFBQ0hDLEtBQU0sU0FDTkMsUUFBUyx3REFVakM1QixFQUFPeUMsS0FBTyxXQUNWdEMsRUFDS3VDLElBQUkzQixFQUFFLG9CQUFvQkMsS0FBSyxXQUFhLFVBQVlmLEVBQWFxQyxHQUFJdEMsRUFBT3VCLE9BQVFoQixHQUN4Rm9DLFFBQVEsU0FBVXhCLEdBQ2ZuQixFQUFPMEIsUUFDSEMsS0FBTSxVQUNOQyxRQUFTLG9DQUdoQmdCLE1BQU0sV0FDSDVDLEVBQU8wQixRQUNIQyxLQUFNLFNBQ05DLFFBQVMsaUZBUXpCNUIsRUFBT2lCLElBQU0sV0FDVGQsRUFDS2MsSUFBSUYsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxVQUFZZixFQUFhcUMsR0FBSS9CLEdBQ3pFVyxLQUFLLFNBQVVDLEdBQ1puQixFQUFPdUIsT0FBVUosRUFBS0EsS0FBUyxRQUsvQzBCLFFBQ0tDLE9BQU8sZ0JBQWlCLFVBQVcsaUJBRW5DdkMsUUFBUSxpQkFBa0IsU0FBVXdDLEdBQ2pDQSxFQUNLQyxLQUFLLFdBQ0ZDLFlBQWEsNEJBQ2JDLFdBQVkscUJBRWZGLEtBQUsscUJBQ0ZDLFlBQWEsMEJBQ2JDLFdBQVkscUJBRWZGLEtBQUssc0JBQ0ZDLFlBQWEsMkJBQ2JDLFdBQVksd0JBS3ZCQSxXQUFXLG9CQUFxQixTQUFVLGVBQWdCLFlBQWEsUUFBUyxTQUFVbkQiLCJmaWxlIjoibW9kdWxlcy9lcXVpcGUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRXF1aXBlXG4gKiBcbiAqIEBwYXJhbSAkc2NvcGVcbiAqIEBwYXJhbSAkcm91dGVQYXJhbXNcbiAqIEBwYXJhbSAkbG9jYXRpb25cbiAqIEBwYXJhbSAkaHR0cFxuICogQHBhcmFtIFVwbG9hZFxuICogXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gRXF1aXBlQ29udHJvbGxlciAoJHNjb3BlLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHAsICR1cGxvYWQpIHtcbiAgICAkc2NvcGUuY3VyUGFnZSAgPSAxO1xuICAgICRzY29wZS5wYWdlU2l6ZSA9IDEyO1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJhbCBjb25maWdcbiAgICAgKlxuICAgICAqIEB0eXBlIHt7aGVhZGVyczoge0F1dGhvcml6YXRpb24sIFNpdGV9fX1cbiAgICAgKi9cbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSxcbiAgICAgICAgICAgIFNpdGU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaXRlJylcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDYXJyZWdhIEVxdWlwZVxuICAgICAqL1xuICAgICRzY29wZS5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXJsID0gJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ2VxdWlwZT9wYWdlPScgKyAkc2NvcGUuY3VyUGFnZSArICcmbGltaXQ9JyArICRzY29wZS5wYWdlU2l6ZTtcblxuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLmdldCh1cmwsIGNvbmZpZylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmxpbmhhcyA9IChkYXRhLmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkaWNpb25hIG1lbWJyb1xuICAgICAqL1xuICAgICRzY29wZS5hZGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkbWVtYnJvID0gJHNjb3BlLm1lbWJybztcblxuICAgICAgICAkdXBsb2FkXG4gICAgICAgICAgICAudXBsb2FkKHtcbiAgICAgICAgICAgICAgICB1cmw6ICQoJ21ldGFbbmFtZT1cImFwaVwiXScpLmF0dHIoJ2NvbnRlbnQnKSArICdlcXVpcGUnLFxuICAgICAgICAgICAgICAgIGRhdGE6ICRtZW1icm8sXG4gICAgICAgICAgICAgICAgaGVhZGVyczogY29uZmlnLmhlYWRlcnNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24udXJsKCcvZXF1aXBlJyk7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2FkKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJybyBjYWRhc3RyYW5kbyBwcm9kdXRvLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSdcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzUGVyY2VudGFnZSA9IHBhcnNlSW50KDEwMC4wICogZXZ0LmxvYWRlZCAvIGV2dC50b3RhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2dyZXNzOiAnICsgcHJvZ3Jlc3NQZXJjZW50YWdlICsgJyUgJyArIGV2dC5jb25maWcuZGF0YS5maWxlLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBtZW1icm8gZGEgRXF1aXBlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKi9cbiAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGlmIChjb25maXJtKCdWb2PDqiBkZXNlamEgcmVhbG1lbnRlIGFwYWdhciBvIG1lbWJybz9cXG5Fc3RlIHByb2NlZGltZW50byDDqSBpcnJldmVyc8OtdmVsIScpKSB7XG4gICAgICAgICAgICAkaHR0cFxuICAgICAgICAgICAgICAgIC5kZWxldGUoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ2VxdWlwZS8nICsgaWQsIGNvbmZpZylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTWVtYnJvIHJlbW92aWRvIGNvbSBzdWNlc3NvISdcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvZXF1aXBlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJybyByZW1vdmVuZG8gbWVtYnJvLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVkaXRhIG1lbWJyb1xuICAgICAqL1xuICAgICRzY29wZS5lZGl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLnB1dCgkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAnZXF1aXBlLycgKyAkcm91dGVQYXJhbXMuaWQsICRzY29wZS5tZW1icm8sIGNvbmZpZylcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTWVtYnJvIGF0dWFsaXphZG8gY29tIHN1Y2Vzc28hJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnT2NvcnJldSB1bSBlcnJvIGF0dWFsaXphbmRvIG9zIGRhZG9zIGRvIG1lbWJybywgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFZpc3VhbGl6YSBtZW1icm9cbiAgICAgKi9cbiAgICAkc2NvcGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLmdldCgkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAnZXF1aXBlLycgKyAkcm91dGVQYXJhbXMuaWQsIGNvbmZpZylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm1lbWJybyA9IChkYXRhLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5hbmd1bGFyXG4gICAgLm1vZHVsZSgnbXlBcHAuZXF1aXBlJywgWyduZ1JvdXRlJywgJ25nRmlsZVVwbG9hZCddKVxuXG4gICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAgICAgICAud2hlbignL2VxdWlwZScsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvZXF1aXBlL2luZGV4Lmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdFcXVpcGVDb250cm9sbGVyJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC53aGVuKCcvZXF1aXBlL2FkaWNpb25hcicsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvZXF1aXBlL2FkZC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRXF1aXBlQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAud2hlbignL2VxdWlwZS9lZGl0YXIvOmlkJywge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9lcXVpcGUvZWRpdC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRXF1aXBlQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcblxuICAgIC5jb250cm9sbGVyKCdFcXVpcGVDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHJvdXRlUGFyYW1zJywgJyRsb2NhdGlvbicsICckaHR0cCcsICdVcGxvYWQnLCBFcXVpcGVDb250cm9sbGVyXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

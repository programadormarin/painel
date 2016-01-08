"use strict";angular.module("myApp.equipe",["ngRoute","ngInputTypeFile","angular-cloudinary"]).config(["$routeProvider",function(e){e.when("/equipe",{templateUrl:"modules/equipe/index.html",controller:"EquipeController"}).when("/equipe/adicionar",{templateUrl:"modules/equipe/add.html",controller:"EquipeController"}).when("/equipe/editar/:id",{templateUrl:"modules/equipe/edit.html",controller:"EquipeController"})}]).controller("EquipeController",["$scope","$routeParams","$location","api","cloudinary",function(e,t,o,a,n){e.curPage=1,e.pageSize=12,e.load=function(){a.get("equipe?page="+e.curPage+"&limit="+e.pageSize+"&t="+new Date).then(function(t){e.linhas=t.data})},e.upload=function(){var t=e.membro;n.upload(t.imagem[0],{}).then(function(o){t.imagem=o.data,e.add(t)})},e.add=function(){var t=e.membro;a.post("equipe",t).then(function(t){201===t.status?(o.url("/equipe"),e.load()):e.status={type:"danger",message:"Erro cadastrando membro, tente novamente mais tarde"}})},e["delete"]=function(t){confirm("Você deseja realmente apagar o membro?\nEste procedimento é irreversível!")&&a["delete"]("equipe/"+t).then(function(t){200==t.status?(e.status={type:"success",message:"Membro removido com sucesso!"},o.path("/equipe"),e.load()):e.status={type:"danger",message:"Erro removendo membro, tente novamente mais tarde"}})},e.edit=function(){a.put("equipe/"+t.id,e.membro).success(function(t){e.status={type:"success",message:"Membro atualizado com sucesso!"}}).error(function(){e.status={type:"danger",message:"Ocorreu um erro atualizando os dados do membro, tente novamente mais tarde"}})},e.get=function(){a.get("equipe/"+t.id).then(function(t){e.membro=t.data.data})}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZXF1aXBlL2luZGV4LmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25maWciLCIkcm91dGVQcm92aWRlciIsIndoZW4iLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCIkcm91dGVQYXJhbXMiLCIkbG9jYXRpb24iLCIkYXBpIiwiJGNsb3VkaW5hcnkiLCJjdXJQYWdlIiwicGFnZVNpemUiLCJsb2FkIiwiZ2V0IiwiRGF0ZSIsInRoZW4iLCJkYXRhIiwibGluaGFzIiwidXBsb2FkIiwiJG1lbWJybyIsIm1lbWJybyIsImltYWdlbSIsInJlc3AiLCJhZGQiLCJwb3N0Iiwic3RhdHVzIiwidXJsIiwidHlwZSIsIm1lc3NhZ2UiLCJpZCIsImNvbmZpcm0iLCJwYXRoIiwiZWRpdCIsInB1dCIsInN1Y2Nlc3MiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFFQUEsU0FDS0MsT0FBTyxnQkFBaUIsVUFBVyxrQkFBbUIsdUJBRXREQyxRQUFRLGlCQUFrQixTQUFVQyxHQUNqQ0EsRUFDS0MsS0FBSyxXQUNGQyxZQUFhLDRCQUNiQyxXQUFZLHFCQUVmRixLQUFLLHFCQUNGQyxZQUFhLDBCQUNiQyxXQUFZLHFCQUVmRixLQUFLLHNCQUNGQyxZQUFhLDJCQUNiQyxXQUFZLHdCQUt2QkEsV0FBVyxvQkFBcUIsU0FBVSxlQUFnQixZQUFhLE1BQU8sYUFBYyxTQUFVQyxFQUFRQyxFQUFjQyxFQUFXQyxFQUFNQyxHQUMxSUosRUFBT0ssUUFBVSxFQUNqQkwsRUFBT00sU0FBVyxHQUVsQk4sRUFBT08sS0FBTyxXQUNWSixFQUNLSyxJQUFJLGVBQWlCUixFQUFPSyxRQUFVLFVBQVlMLEVBQU9NLFNBQVcsTUFBUSxHQUFJRyxPQUNoRkMsS0FBSyxTQUFVQyxHQUNaWCxFQUFPWSxPQUFVRCxFQUFTLFFBSXRDWCxFQUFPYSxPQUFTLFdBQ1osR0FBSUMsR0FBVWQsRUFBT2UsTUFFckJYLEdBQ0tTLE9BQU9DLEVBQVFFLE9BQU8sT0FDdEJOLEtBQUssU0FBVU8sR0FDWkgsRUFBUUUsT0FBU0MsRUFBS04sS0FFdEJYLEVBQU9rQixJQUFJSixNQUl2QmQsRUFBT2tCLElBQU0sV0FDVCxHQUFJSixHQUFVZCxFQUFPZSxNQUVyQlosR0FDS2dCLEtBQUssU0FBVUwsR0FDZkosS0FBSyxTQUFVQyxHQUNRLE1BQWhCQSxFQUFLUyxRQUNMbEIsRUFBVW1CLElBQUksV0FDZHJCLEVBQU9PLFFBRVBQLEVBQU9vQixRQUNIRSxLQUFNLFNBQ05DLFFBQVMsMERBTTdCdkIsRUFBQUEsVUFBZ0IsU0FBVXdCLEdBQ2xCQyxRQUFRLDhFQUNSdEIsRUFBQUEsVUFDWSxVQUFZcUIsR0FDbkJkLEtBQUssU0FBVUMsR0FDTyxLQUFmQSxFQUFLUyxRQUNMcEIsRUFBT29CLFFBQ0hFLEtBQU0sVUFDTkMsUUFBUyxnQ0FHYnJCLEVBQVV3QixLQUFLLFdBQ2YxQixFQUFPTyxRQUVQUCxFQUFPb0IsUUFDSEUsS0FBTSxTQUNOQyxRQUFTLHdEQU9qQ3ZCLEVBQU8yQixLQUFPLFdBQ1Z4QixFQUNLeUIsSUFBSSxVQUFZM0IsRUFBYXVCLEdBQUl4QixFQUFPZSxRQUN4Q2MsUUFBUSxTQUFVbEIsR0FDZlgsRUFBT29CLFFBQ0hFLEtBQU0sVUFDTkMsUUFBUyxvQ0FHaEJPLE1BQU0sV0FDSDlCLEVBQU9vQixRQUNIRSxLQUFNLFNBQ05DLFFBQVMsaUZBS3pCdkIsRUFBT1EsSUFBTSxXQUNUTCxFQUNLSyxJQUFJLFVBQVlQLEVBQWF1QixJQUM3QmQsS0FBSyxTQUFVQyxHQUNaWCxFQUFPZSxPQUFVSixFQUFLQSxLQUFTIiwiZmlsZSI6Im1vZHVsZXMvZXF1aXBlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyXG4gICAgLm1vZHVsZSgnbXlBcHAuZXF1aXBlJywgWyduZ1JvdXRlJywgJ25nSW5wdXRUeXBlRmlsZScsICdhbmd1bGFyLWNsb3VkaW5hcnknXSlcblxuICAgIC5jb25maWcoWyckcm91dGVQcm92aWRlcicsIGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAgICAgICAkcm91dGVQcm92aWRlclxuICAgICAgICAgICAgLndoZW4oJy9lcXVpcGUnLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL2VxdWlwZS9pbmRleC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRXF1aXBlQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAud2hlbignL2VxdWlwZS9hZGljaW9uYXInLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL2VxdWlwZS9hZGQuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0VxdWlwZUNvbnRyb2xsZXInXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLndoZW4oJy9lcXVpcGUvZWRpdGFyLzppZCcsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvZXF1aXBlL2VkaXQuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0VxdWlwZUNvbnRyb2xsZXInXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG5cbiAgICAuY29udHJvbGxlcignRXF1aXBlQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRyb3V0ZVBhcmFtcycsICckbG9jYXRpb24nLCAnYXBpJywgJ2Nsb3VkaW5hcnknLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbiwgJGFwaSwgJGNsb3VkaW5hcnkpIHtcbiAgICAgICAgJHNjb3BlLmN1clBhZ2UgPSAxO1xuICAgICAgICAkc2NvcGUucGFnZVNpemUgPSAxMjtcblxuICAgICAgICAkc2NvcGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRhcGlcbiAgICAgICAgICAgICAgICAuZ2V0KCdlcXVpcGU/cGFnZT0nICsgJHNjb3BlLmN1clBhZ2UgKyAnJmxpbWl0PScgKyAkc2NvcGUucGFnZVNpemUgKyAnJnQ9JyArIG5ldyBEYXRlKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxpbmhhcyA9IChkYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS51cGxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkbWVtYnJvID0gJHNjb3BlLm1lbWJybztcblxuICAgICAgICAgICAgJGNsb3VkaW5hcnlcbiAgICAgICAgICAgICAgICAudXBsb2FkKCRtZW1icm8uaW1hZ2VtWzBdLCB7fSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgICAgICAkbWVtYnJvLmltYWdlbSA9IHJlc3AuZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYWRkKCRtZW1icm8pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5hZGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgJG1lbWJybyA9ICRzY29wZS5tZW1icm87XG5cbiAgICAgICAgICAgICRhcGlcbiAgICAgICAgICAgICAgICAucG9zdCgnZXF1aXBlJywgJG1lbWJybylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnVybCgnL2VxdWlwZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm8gY2FkYXN0cmFuZG8gbWVtYnJvLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlybSgnVm9jw6ogZGVzZWphIHJlYWxtZW50ZSBhcGFnYXIgbyBtZW1icm8/XFxuRXN0ZSBwcm9jZWRpbWVudG8gw6kgaXJyZXZlcnPDrXZlbCEnKSkge1xuICAgICAgICAgICAgICAgICRhcGlcbiAgICAgICAgICAgICAgICAgICAgLmRlbGV0ZSgnZXF1aXBlLycgKyBpZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdNZW1icm8gcmVtb3ZpZG8gY29tIHN1Y2Vzc28hJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvZXF1aXBlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvIHJlbW92ZW5kbyBtZW1icm8sIHRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLmVkaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkYXBpXG4gICAgICAgICAgICAgICAgLnB1dCgnZXF1aXBlLycgKyAkcm91dGVQYXJhbXMuaWQsICRzY29wZS5tZW1icm8pXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdNZW1icm8gYXR1YWxpemFkbyBjb20gc3VjZXNzbyEnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdPY29ycmV1IHVtIGVycm8gYXR1YWxpemFuZG8gb3MgZGFkb3MgZG8gbWVtYnJvLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkYXBpXG4gICAgICAgICAgICAgICAgLmdldCgnZXF1aXBlLycgKyAkcm91dGVQYXJhbXMuaWQpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1lbWJybyA9IChkYXRhLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfV0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
"use strict";angular.module("myApp.parceiros",["ngRoute","ngInputTypeFile","angular-cloudinary"]).config(["$routeProvider",function(e){e.when("/parceiros",{templateUrl:"modules/parceiros/index.html",controller:"ParceirosController"}).when("/parceiros/adicionar",{templateUrl:"modules/parceiros/add.html",controller:"ParceirosController"}).when("/parceiros/editar/:id",{templateUrl:"modules/parceiros/edit.html",controller:"ParceirosController"})}]).controller("ParceirosController",["$scope","$routeParams","$location","api","cloudinary",function(e,r,o,a,t){e.curPage=1,e.pageSize=12,e.load=function(){a.get("parceiro?page="+e.curPage+"&limit="+e.pageSize+"&t="+new Date).then(function(r){e.linhas=r.data})},e.upload=function(){var r=e.parceiro;t.upload(r.imagem[0],{}).then(function(o){r.imagem=o.data,e.add(r)})},e.add=function(){a.post("parceiro",e.parceiro).success(function(){o.url("/parceiros"),e.load()}).error(function(){e.status={type:"danger",message:"Erro inserindo parceiro"}})},e["delete"]=function(r){if(confirm("Você deseja realmente apagar o parceiro?\nEste procedimento é irreversível!")){var t=e.linhas.data[r];a["delete"]("parceiro/"+t._id).then(function(r){204==r.status?(e.status={type:"success",message:"Parceiro removido com sucesso!"},o.path("/parceiros"),e.load()):e.status={type:"danger",message:"Erro removendo parceiro, tente novamente mais tarde"}})}},e.edit=function(){a.put("parceiro/"+r.id,e.parceiro).success(function(r){e.status={type:"success",message:"Parceiro atualizado com sucesso!"}}).error(function(){e.status={type:"danger",message:"Ocorreu um erro atualizando os dados do parceiro, tente novamente mais tarde"}})},e.get=function(){a.get("parceiro/"+r.id).then(function(r){e.parceiro=r.data.data})}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcGFyY2Vpcm9zL2luZGV4LmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25maWciLCIkcm91dGVQcm92aWRlciIsIndoZW4iLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCIkcm91dGVQYXJhbXMiLCIkbG9jYXRpb24iLCIkYXBpIiwiJGNsb3VkaW5hcnkiLCJjdXJQYWdlIiwicGFnZVNpemUiLCJsb2FkIiwiZ2V0IiwiRGF0ZSIsInRoZW4iLCJkYXRhIiwibGluaGFzIiwidXBsb2FkIiwiJHBhcmNlaXJvIiwicGFyY2Vpcm8iLCJpbWFnZW0iLCJyZXNwIiwiYWRkIiwicG9zdCIsInN1Y2Nlc3MiLCJ1cmwiLCJlcnJvciIsInN0YXR1cyIsInR5cGUiLCJtZXNzYWdlIiwiaWQiLCJjb25maXJtIiwidG9EZWxldGUiLCJfaWQiLCJwYXRoIiwiZWRpdCIsInB1dCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFFQUEsU0FDS0MsT0FBTyxtQkFBb0IsVUFBVyxrQkFBbUIsdUJBRXpEQyxRQUFRLGlCQUFrQixTQUFVQyxHQUNqQ0EsRUFDS0MsS0FBSyxjQUNGQyxZQUFhLCtCQUNiQyxXQUFZLHdCQUVmRixLQUFLLHdCQUNGQyxZQUFhLDZCQUNiQyxXQUFZLHdCQUVmRixLQUFLLHlCQUNGQyxZQUFhLDhCQUNiQyxXQUFZLDJCQUt2QkEsV0FBVyx1QkFBd0IsU0FBVSxlQUFnQixZQUFhLE1BQU8sYUFBYyxTQUFVQyxFQUFRQyxFQUFjQyxFQUFXQyxFQUFNQyxHQUM3SUosRUFBT0ssUUFBVyxFQUNsQkwsRUFBT00sU0FBVyxHQUVsQk4sRUFBT08sS0FBTyxXQUNWSixFQUNLSyxJQUFJLGlCQUFtQlIsRUFBT0ssUUFBVSxVQUFZTCxFQUFPTSxTQUFXLE1BQVEsR0FBSUcsT0FDbEZDLEtBQUssU0FBVUMsR0FDWlgsRUFBT1ksT0FBVUQsRUFBUyxRQUl0Q1gsRUFBT2EsT0FBUyxXQUNaLEdBQUlDLEdBQVlkLEVBQU9lLFFBRXZCWCxHQUNLUyxPQUFPQyxFQUFVRSxPQUFPLE9BQ3hCTixLQUFLLFNBQVVPLEdBQ1pILEVBQVVFLE9BQVNDLEVBQUtOLEtBRXhCWCxFQUFPa0IsSUFBSUosTUFJdkJkLEVBQU9rQixJQUFNLFdBQ1RmLEVBQ0tnQixLQUFLLFdBQVluQixFQUFPZSxVQUN4QkssUUFBUSxXQUNMbEIsRUFBVW1CLElBQUksY0FDZHJCLEVBQU9PLFNBRVZlLE1BQU0sV0FDSHRCLEVBQU91QixRQUNIQyxLQUFNLFNBQ05DLFFBQVMsOEJBS3pCekIsRUFBQUEsVUFBZ0IsU0FBVTBCLEdBQ3RCLEdBQUlDLFFBQVEsK0VBQWdGLENBQ3hGLEdBQUlDLEdBQVc1QixFQUFPWSxPQUFPRCxLQUFLZSxFQUVsQ3ZCLEdBQUFBLFVBQ1ksWUFBY3lCLEVBQVNDLEtBQzlCbkIsS0FBSyxTQUFVQyxHQUNPLEtBQWZBLEVBQUtZLFFBQ0x2QixFQUFPdUIsUUFDSEMsS0FBTSxVQUNOQyxRQUFTLGtDQUdidkIsRUFBVTRCLEtBQUssY0FDZjlCLEVBQU9PLFFBRVBQLEVBQU91QixRQUNIQyxLQUFNLFNBQ05DLFFBQVMsMkRBT2pDekIsRUFBTytCLEtBQU8sV0FDVjVCLEVBQ0s2QixJQUFJLFlBQWMvQixFQUFheUIsR0FBSTFCLEVBQU9lLFVBQzFDSyxRQUFRLFNBQVVULEdBQ2ZYLEVBQU91QixRQUNIQyxLQUFNLFVBQ05DLFFBQVMsc0NBR2hCSCxNQUFNLFdBQ0h0QixFQUFPdUIsUUFDSEMsS0FBTSxTQUNOQyxRQUFTLG1GQUt6QnpCLEVBQU9RLElBQU0sV0FDVEwsRUFDS0ssSUFBSSxZQUFjUCxFQUFheUIsSUFDL0JoQixLQUFLLFNBQVVDLEdBQ1pYLEVBQU9lLFNBQVlKLEVBQUtBLEtBQVMiLCJmaWxlIjoibW9kdWxlcy9wYXJjZWlyb3MvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXJcbiAgICAubW9kdWxlKCdteUFwcC5wYXJjZWlyb3MnLCBbJ25nUm91dGUnLCAnbmdJbnB1dFR5cGVGaWxlJywgJ2FuZ3VsYXItY2xvdWRpbmFyeSddKVxuXG4gICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAgICAgICAud2hlbignL3BhcmNlaXJvcycsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcGFyY2Vpcm9zL2luZGV4Lmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQYXJjZWlyb3NDb250cm9sbGVyJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC53aGVuKCcvcGFyY2Vpcm9zL2FkaWNpb25hcicsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcGFyY2Vpcm9zL2FkZC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnUGFyY2Vpcm9zQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAud2hlbignL3BhcmNlaXJvcy9lZGl0YXIvOmlkJywge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wYXJjZWlyb3MvZWRpdC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnUGFyY2Vpcm9zQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcblxuICAgIC5jb250cm9sbGVyKCdQYXJjZWlyb3NDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHJvdXRlUGFyYW1zJywgJyRsb2NhdGlvbicsICdhcGknLCAnY2xvdWRpbmFyeScsIGZ1bmN0aW9uICgkc2NvcGUsICRyb3V0ZVBhcmFtcywgJGxvY2F0aW9uLCAkYXBpLCAkY2xvdWRpbmFyeSkge1xuICAgICAgICAkc2NvcGUuY3VyUGFnZSAgPSAxO1xuICAgICAgICAkc2NvcGUucGFnZVNpemUgPSAxMjtcblxuICAgICAgICAkc2NvcGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRhcGlcbiAgICAgICAgICAgICAgICAuZ2V0KCdwYXJjZWlybz9wYWdlPScgKyAkc2NvcGUuY3VyUGFnZSArICcmbGltaXQ9JyArICRzY29wZS5wYWdlU2l6ZSArICcmdD0nICsgbmV3IERhdGUoKSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubGluaGFzID0gKGRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnVwbG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICRwYXJjZWlybyA9ICRzY29wZS5wYXJjZWlybztcblxuICAgICAgICAgICAgJGNsb3VkaW5hcnlcbiAgICAgICAgICAgICAgICAudXBsb2FkKCRwYXJjZWlyby5pbWFnZW1bMF0sIHt9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgICAgICRwYXJjZWlyby5pbWFnZW0gPSByZXNwLmRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFkZCgkcGFyY2Vpcm8pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5hZGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkYXBpXG4gICAgICAgICAgICAgICAgLnBvc3QoJ3BhcmNlaXJvJywgJHNjb3BlLnBhcmNlaXJvKVxuICAgICAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnVybCgnL3BhcmNlaXJvcycpO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubG9hZCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm8gaW5zZXJpbmRvIHBhcmNlaXJvJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5kZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIGlmIChjb25maXJtKCdWb2PDqiBkZXNlamEgcmVhbG1lbnRlIGFwYWdhciBvIHBhcmNlaXJvP1xcbkVzdGUgcHJvY2VkaW1lbnRvIMOpIGlycmV2ZXJzw612ZWwhJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9EZWxldGUgPSAkc2NvcGUubGluaGFzLmRhdGFbaWRdO1xuXG4gICAgICAgICAgICAgICAgJGFwaVxuICAgICAgICAgICAgICAgICAgICAuZGVsZXRlKCdwYXJjZWlyby8nICsgdG9EZWxldGUuX2lkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDIwNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BhcmNlaXJvIHJlbW92aWRvIGNvbSBzdWNlc3NvISdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy9wYXJjZWlyb3MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm8gcmVtb3ZlbmRvIHBhcmNlaXJvLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5lZGl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGFwaVxuICAgICAgICAgICAgICAgIC5wdXQoJ3BhcmNlaXJvLycgKyAkcm91dGVQYXJhbXMuaWQsICRzY29wZS5wYXJjZWlybylcbiAgICAgICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BhcmNlaXJvIGF0dWFsaXphZG8gY29tIHN1Y2Vzc28hJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnT2NvcnJldSB1bSBlcnJvIGF0dWFsaXphbmRvIG9zIGRhZG9zIGRvIHBhcmNlaXJvLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkYXBpXG4gICAgICAgICAgICAgICAgLmdldCgncGFyY2Vpcm8vJyArICRyb3V0ZVBhcmFtcy5pZClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGFyY2Vpcm8gPSAoZGF0YS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1dKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
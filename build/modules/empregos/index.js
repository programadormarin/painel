"use strict";angular.module("myApp.empregos",["ngRoute"]).config(["$routeProvider",function(e){e.when("/empregos",{templateUrl:"modules/empregos/index.html",controller:"EmpregosController"}).when("/empregos/adicionar",{templateUrl:"modules/empregos/add.html",controller:"EmpregosController"}).when("/empregos/editar/:id",{templateUrl:"modules/empregos/edit.html",controller:"EmpregosController"})}]).controller("EmpregosController",["$scope","$routeParams","$location","api",function(e,o,a,r){e.curPage=1,e.pageSize=12,e.load=function(){r.get("emprego?page="+e.curPage+"&limit="+e.pageSize+"&t="+new Date).then(function(o){e.linhas=o.data})},e.add=function(){r.post("emprego",e.emprego).success(function(){a.url("/empregos"),e.load()}).error(function(){e.status={type:"danger",message:"Ocorreu um erro ao salvar a vaga"}})},e["delete"]=function(o){if(confirm("Você deseja realmente apagar a vaga?\nEste procedimento é irreversível!")){var a=e.linhas.data[o];r["delete"]("emprego/"+a._id).success(function(a){e.status={type:"success",message:"Vaga removida com sucesso!"},e.linhas.data.splice(o,1)}).error(function(){e.status={type:"danger",message:"Erro removendo vaga, tente novamente mais tarde"}})}},e.edit=function(){r.put("emprego/"+o.id,e.emprego).success(function(){e.status={type:"success",message:"Vaga atualizada com sucesso!"}}).error(function(){e.status={type:"danger",message:"Ocorreu um erro atualizando os dados da vaga, tente novamente mais tarde"}})},e.get=function(){r.get("emprego/"+o.id).then(function(o){e.emprego=o.data.data})}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZW1wcmVnb3MvaW5kZXguanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiRyb3V0ZVBhcmFtcyIsIiRsb2NhdGlvbiIsImFwaSIsImN1clBhZ2UiLCJwYWdlU2l6ZSIsImxvYWQiLCJnZXQiLCJEYXRlIiwidGhlbiIsInJlc3VsdCIsImxpbmhhcyIsImFkZCIsInBvc3QiLCJlbXByZWdvIiwic3VjY2VzcyIsInVybCIsImVycm9yIiwic3RhdHVzIiwidHlwZSIsIm1lc3NhZ2UiLCJpZCIsImNvbmZpcm0iLCJ0b0RlbGV0ZSIsImRhdGEiLCJfaWQiLCJzcGxpY2UiLCJlZGl0IiwicHV0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUVBQSxTQUFRQyxPQUFPLGtCQUFtQixZQUM3QkMsUUFBUSxpQkFBa0IsU0FBVUMsR0FDakNBLEVBQ0tDLEtBQUssYUFDRkMsWUFBYSw4QkFDYkMsV0FBWSx1QkFFZkYsS0FBSyx1QkFDRkMsWUFBYSw0QkFDYkMsV0FBWSx1QkFFZkYsS0FBSyx3QkFDRkMsWUFBYSw2QkFDYkMsV0FBWSwwQkFLdkJBLFdBQVcsc0JBQXVCLFNBQVUsZUFBZ0IsWUFBYSxNQUFPLFNBQVVDLEVBQVFDLEVBQWNDLEVBQVdDLEdBQ3BISCxFQUFPSSxRQUFXLEVBQ2xCSixFQUFPSyxTQUFXLEdBRWxCTCxFQUFPTSxLQUFPLFdBQ1ZILEVBQ0tJLElBQUksZ0JBQWtCUCxFQUFPSSxRQUFVLFVBQVlKLEVBQU9LLFNBQVcsTUFBUSxHQUFJRyxPQUNqRkMsS0FBSyxTQUFVQyxHQUNaVixFQUFPVyxPQUFVRCxFQUFXLFFBSXhDVixFQUFPWSxJQUFNLFdBQ1RULEVBQ0tVLEtBQUssVUFBV2IsRUFBT2MsU0FDdkJDLFFBQVEsV0FDTGIsRUFBVWMsSUFBSSxhQUNkaEIsRUFBT00sU0FFVlcsTUFBTSxXQUNIakIsRUFBT2tCLFFBQ0hDLEtBQU0sU0FDTkMsUUFBUyx1Q0FLekJwQixFQUFBQSxVQUFnQixTQUFVcUIsR0FDdEIsR0FBSUMsUUFBUSwyRUFBNEUsQ0FDcEYsR0FBSUMsR0FBV3ZCLEVBQU9XLE9BQU9hLEtBQUtILEVBRWxDbEIsR0FBQUEsVUFDWSxXQUFhb0IsRUFBU0UsS0FDN0JWLFFBQVEsU0FBVVMsR0FDZnhCLEVBQU9rQixRQUNIQyxLQUFNLFVBQ05DLFFBQVMsOEJBR2JwQixFQUFPVyxPQUFPYSxLQUFLRSxPQUFPTCxFQUFJLEtBRWpDSixNQUFNLFdBQ0hqQixFQUFPa0IsUUFDSEMsS0FBTSxTQUNOQyxRQUFTLHVEQU03QnBCLEVBQU8yQixLQUFPLFdBQ1Z4QixFQUNLeUIsSUFBSSxXQUFhM0IsRUFBYW9CLEdBQUlyQixFQUFPYyxTQUN6Q0MsUUFBUSxXQUNMZixFQUFPa0IsUUFDSEMsS0FBTSxVQUNOQyxRQUFTLGtDQUdoQkgsTUFBTSxXQUNIakIsRUFBT2tCLFFBQ0hDLEtBQU0sU0FDTkMsUUFBUywrRUFLekJwQixFQUFPTyxJQUFNLFdBQ1RKLEVBQ0tJLElBQUksV0FBYU4sRUFBYW9CLElBQzlCWixLQUFLLFNBQVVlLEdBQ1p4QixFQUFPYyxRQUFXVSxFQUFLQSxLQUFTIiwiZmlsZSI6Im1vZHVsZXMvZW1wcmVnb3MvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdteUFwcC5lbXByZWdvcycsIFsnbmdSb3V0ZSddKVxuICAgIC5jb25maWcoWyckcm91dGVQcm92aWRlcicsIGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAgICAgICAkcm91dGVQcm92aWRlclxuICAgICAgICAgICAgLndoZW4oJy9lbXByZWdvcycsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvZW1wcmVnb3MvaW5kZXguaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0VtcHJlZ29zQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAud2hlbignL2VtcHJlZ29zL2FkaWNpb25hcicsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvZW1wcmVnb3MvYWRkLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdFbXByZWdvc0NvbnRyb2xsZXInXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLndoZW4oJy9lbXByZWdvcy9lZGl0YXIvOmlkJywge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9lbXByZWdvcy9lZGl0Lmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdFbXByZWdvc0NvbnRyb2xsZXInXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG5cbiAgICAuY29udHJvbGxlcignRW1wcmVnb3NDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHJvdXRlUGFyYW1zJywgJyRsb2NhdGlvbicsICdhcGknLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbiwgYXBpKSB7XG4gICAgICAgICAgICAkc2NvcGUuY3VyUGFnZSAgPSAxO1xuICAgICAgICAgICAgJHNjb3BlLnBhZ2VTaXplID0gMTI7XG5cbiAgICAgICAgICAgICRzY29wZS5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFwaVxuICAgICAgICAgICAgICAgICAgICAuZ2V0KCdlbXByZWdvP3BhZ2U9JyArICRzY29wZS5jdXJQYWdlICsgJyZsaW1pdD0nICsgJHNjb3BlLnBhZ2VTaXplICsgJyZ0PScgKyBuZXcgRGF0ZSgpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubGluaGFzID0gKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkc2NvcGUuYWRkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFwaVxuICAgICAgICAgICAgICAgICAgICAucG9zdCgnZW1wcmVnbycsICRzY29wZS5lbXByZWdvKVxuICAgICAgICAgICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24udXJsKCcvZW1wcmVnb3MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5sb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdPY29ycmV1IHVtIGVycm8gYW8gc2FsdmFyIGEgdmFnYSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkc2NvcGUuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ1ZvY8OqIGRlc2VqYSByZWFsbWVudGUgYXBhZ2FyIGEgdmFnYT9cXG5Fc3RlIHByb2NlZGltZW50byDDqSBpcnJldmVyc8OtdmVsIScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b0RlbGV0ZSA9ICRzY29wZS5saW5oYXMuZGF0YVtpZF07XG5cbiAgICAgICAgICAgICAgICAgICAgYXBpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVsZXRlKCdlbXByZWdvLycgKyB0b0RlbGV0ZS5faWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1ZhZ2EgcmVtb3ZpZGEgY29tIHN1Y2Vzc28hJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubGluaGFzLmRhdGEuc3BsaWNlKGlkLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvIHJlbW92ZW5kbyB2YWdhLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJHNjb3BlLmVkaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYXBpXG4gICAgICAgICAgICAgICAgICAgIC5wdXQoJ2VtcHJlZ28vJyArICRyb3V0ZVBhcmFtcy5pZCwgJHNjb3BlLmVtcHJlZ28pXG4gICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdWYWdhIGF0dWFsaXphZGEgY29tIHN1Y2Vzc28hJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ09jb3JyZXUgdW0gZXJybyBhdHVhbGl6YW5kbyBvcyBkYWRvcyBkYSB2YWdhLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJHNjb3BlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhcGlcbiAgICAgICAgICAgICAgICAgICAgLmdldCgnZW1wcmVnby8nICsgJHJvdXRlUGFyYW1zLmlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVtcHJlZ28gPSAoZGF0YS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

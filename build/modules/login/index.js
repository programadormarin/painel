"use strict";angular.module("myApp.login",["ngRoute"]).config(["$routeProvider",function(o){}]).controller("LoginController",["$scope","$routeParams","$location","api","$window","$interval",function(o,e,t,a,i,s){o.check=function(){s(function(){if(localStorage.getItem("usuario")){o.logado=!0;var e=JSON.parse(localStorage.getItem("usuario"));o.modulos=e.modulos,o.usuario=e}else o.logado=!1,$("#myModal").modal("show")},100)},o.login=function(){a.post("login",o.user).success(function(e){o.status={type:"success",message:"Logado com sucesso!"},o.user="",o.loginForm.$setPristine(),localStorage.setItem("site",e.data.usuario.site._id),localStorage.setItem("usuario",JSON.stringify(e.data.usuario)),localStorage.setItem("token",e.data.token.conteudo),t.url("/inicio"),i.location.reload()}).error(function(){o.status={type:"danger",message:"Usuário/Senha inválidos"}})},o.logout=function(){localStorage.clear(),t.url("/inicio"),i.location.reload()}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvbG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiRyb3V0ZVBhcmFtcyIsIiRsb2NhdGlvbiIsIiRhcGkiLCIkd2luZG93IiwiJGludGVydmFsIiwiY2hlY2siLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9nYWRvIiwidXN1YXJpbyIsIkpTT04iLCJwYXJzZSIsIm1vZHVsb3MiLCIkIiwibW9kYWwiLCJsb2dpbiIsInBvc3QiLCJ1c2VyIiwic3VjY2VzcyIsImRhdGEiLCJzdGF0dXMiLCJ0eXBlIiwibWVzc2FnZSIsImxvZ2luRm9ybSIsIiRzZXRQcmlzdGluZSIsInNldEl0ZW0iLCJzaXRlIiwiX2lkIiwic3RyaW5naWZ5IiwidG9rZW4iLCJjb250ZXVkbyIsInVybCIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3IiLCJsb2dvdXQiLCJjbGVhciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFFQUEsU0FDS0MsT0FBTyxlQUFnQixZQUV2QkMsUUFBUSxpQkFBa0IsU0FBVUMsT0FJcENDLFdBQVcsbUJBQW9CLFNBQVUsZUFBZ0IsWUFBYSxNQUFPLFVBQVcsWUFBYSxTQUFVQyxFQUFRQyxFQUFjQyxFQUFXQyxFQUFNQyxFQUFTQyxHQUM1SkwsRUFBT00sTUFBUSxXQUNYRCxFQUFVLFdBQ04sR0FBSUUsYUFBYUMsUUFBUSxXQUFZLENBQ2pDUixFQUFPUyxRQUFTLENBRWhCLElBQUlDLEdBQVVDLEtBQUtDLE1BQU1MLGFBQWFDLFFBQVEsV0FFOUNSLEdBQU9hLFFBQVVILEVBQVFHLFFBQ3pCYixFQUFPVSxRQUFVQSxNQUVqQlYsR0FBT1MsUUFBUyxFQUVoQkssRUFBRSxZQUFZQyxNQUFNLFNBRXpCLE1BR1BmLEVBQU9nQixNQUFRLFdBQ1hiLEVBQ0tjLEtBQUssUUFBU2pCLEVBQU9rQixNQUNyQkMsUUFBUSxTQUFVQyxHQUNmcEIsRUFBT3FCLFFBQ0hDLEtBQU0sVUFDTkMsUUFBUyx1QkFHYnZCLEVBQU9rQixLQUFPLEdBQ2RsQixFQUFPd0IsVUFBVUMsZUFFakJsQixhQUFhbUIsUUFBUSxPQUFRTixFQUFLQSxLQUFLVixRQUFRaUIsS0FBS0MsS0FDcERyQixhQUFhbUIsUUFBUSxVQUFXZixLQUFLa0IsVUFBVVQsRUFBS0EsS0FBS1YsVUFDekRILGFBQWFtQixRQUFRLFFBQVNOLEVBQUtBLEtBQUtVLE1BQU1DLFVBRTlDN0IsRUFBVThCLElBQUksV0FFZDVCLEVBQVE2QixTQUFTQyxXQUVwQkMsTUFBTSxXQUNIbkMsRUFBT3FCLFFBQ0hDLEtBQU0sU0FDTkMsUUFBUyw4QkFLekJ2QixFQUFPb0MsT0FBUyxXQUNaN0IsYUFBYThCLFFBRWJuQyxFQUFVOEIsSUFBSSxXQUVkNUIsRUFBUTZCLFNBQVNDIiwiZmlsZSI6Im1vZHVsZXMvbG9naW4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXJcbiAgICAubW9kdWxlKCdteUFwcC5sb2dpbicsIFsnbmdSb3V0ZSddKVxuXG4gICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgICAgIC8vIDopXG4gICAgfV0pXG5cbiAgICAuY29udHJvbGxlcignTG9naW5Db250cm9sbGVyJywgWyckc2NvcGUnLCAnJHJvdXRlUGFyYW1zJywgJyRsb2NhdGlvbicsICdhcGknLCAnJHdpbmRvdycsICckaW50ZXJ2YWwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbiwgJGFwaSwgJHdpbmRvdywgJGludGVydmFsKSB7XG4gICAgICAgICRzY29wZS5jaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c3VhcmlvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvZ2FkbyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzdWFyaW8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c3VhcmlvJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5tb2R1bG9zID0gdXN1YXJpby5tb2R1bG9zO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUudXN1YXJpbyA9IHVzdWFyaW87XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvZ2FkbyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJyNteU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRhcGlcbiAgICAgICAgICAgICAgICAucG9zdCgnbG9naW4nLCAkc2NvcGUudXNlcilcbiAgICAgICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0xvZ2FkbyBjb20gc3VjZXNzbyEnXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnVzZXIgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvZ2luRm9ybS4kc2V0UHJpc3RpbmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2l0ZScsIGRhdGEuZGF0YS51c3VhcmlvLnNpdGUuX2lkKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzdWFyaW8nLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEudXN1YXJpbykpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLmRhdGEudG9rZW4uY29udGV1ZG8pO1xuXG4gICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi51cmwoJy9pbmljaW8nKTtcblxuICAgICAgICAgICAgICAgICAgICAkd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1VzdcOhcmlvL1NlbmhhIGludsOhbGlkb3MnXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG4gICAgICAgICAgICAkbG9jYXRpb24udXJsKCcvaW5pY2lvJyk7XG5cbiAgICAgICAgICAgICR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH07XG4gICAgfV0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

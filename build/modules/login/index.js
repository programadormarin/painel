"use strict";function LoginController(o,e,t,i,n){o.check=function(){i(function(){return localStorage.getItem("token")?($("#myModal").modal("hide"),$(".container-fluid").removeClass("hidden").show(),$("nav").removeClass("hidden").show(),o.usuario=JSON.parse(localStorage.getItem("usuario")),void(o.site=JSON.parse(localStorage.getItem("site")))):($("#myModal").modal("show"),$(".container-fluid").hide(),void $("nav").hide())},100)},o.login=function(){t.post($('meta[name="api"]').attr("content")+"login",o.user,{headers:{site:o.site}}).success(function(t){localStorage.setItem("site",JSON.stringify(t.data.site)),localStorage.setItem("token",t.data.token.conteudo),localStorage.setItem("usuario",JSON.stringify(t.data.usuario)),delete o.status,n.location.reload(),e.url("/inicio")}).error(function(){o.status={type:"danger",message:"Usuário/Senha inválidos"}})},o.logout=function(){localStorage.clear(),n.location.reload(),e.url("/inicio")}}angular.module("myApp.login",["ngRoute"]).config(["$routeProvider",function(o){}]).controller("LoginController",["$scope","$location","$http","$interval","$window",LoginController]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxvZ2luQ29udHJvbGxlciIsIiRzY29wZSIsIiRsb2NhdGlvbiIsIiRodHRwIiwiJGludGVydmFsIiwiJHdpbmRvdyIsImNoZWNrIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIiQiLCJtb2RhbCIsInJlbW92ZUNsYXNzIiwic2hvdyIsInVzdWFyaW8iLCJKU09OIiwicGFyc2UiLCJzaXRlIiwiaGlkZSIsImxvZ2luIiwicG9zdCIsImF0dHIiLCJ1c2VyIiwiaGVhZGVycyIsInN1Y2Nlc3MiLCJkYXRhIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInRva2VuIiwiY29udGV1ZG8iLCJzdGF0dXMiLCJsb2NhdGlvbiIsInJlbG9hZCIsInVybCIsImVycm9yIiwidHlwZSIsIm1lc3NhZ2UiLCJsb2dvdXQiLCJjbGVhciIsImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25maWciLCIkcm91dGVQcm92aWRlciIsImNvbnRyb2xsZXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBWUEsU0FBU0EsaUJBQWlCQyxFQUFRQyxFQUFXQyxFQUFPQyxFQUFXQyxHQUkzREosRUFBT0ssTUFBUSxXQUNYRixFQUFVLFdBQ04sTUFBSUcsY0FBYUMsUUFBUSxVQUNyQkMsRUFBRSxZQUFZQyxNQUFNLFFBRXBCRCxFQUFFLG9CQUFvQkUsWUFBWSxVQUFVQyxPQUM1Q0gsRUFBRSxPQUFPRSxZQUFZLFVBQVVDLE9BRS9CWCxFQUFPWSxRQUFXQyxLQUFLQyxNQUFNUixhQUFhQyxRQUFRLGlCQUNsRFAsRUFBT2UsS0FBV0YsS0FBS0MsTUFBTVIsYUFBYUMsUUFBUSxZQUt0REMsRUFBRSxZQUFZQyxNQUFNLFFBQ3BCRCxFQUFFLG9CQUFvQlEsV0FDdEJSLEdBQUUsT0FBT1EsU0FDVixNQU1QaEIsRUFBT2lCLE1BQVEsV0FDWGYsRUFDS2dCLEtBQUtWLEVBQUUsb0JBQW9CVyxLQUFLLFdBQWEsUUFBU25CLEVBQU9vQixNQUFPQyxTQUFXTixLQUFNZixFQUFPZSxRQUM1Rk8sUUFBUSxTQUFVQyxHQUNmakIsYUFBYWtCLFFBQVEsT0FBU1gsS0FBS1ksVUFBVUYsRUFBS0EsS0FBS1IsT0FDdkRULGFBQWFrQixRQUFRLFFBQVNELEVBQUtBLEtBQUtHLE1BQU1DLFVBQzlDckIsYUFBYWtCLFFBQVEsVUFBV1gsS0FBS1ksVUFBVUYsRUFBS0EsS0FBS1gsZ0JBRWxEWixHQUFPNEIsT0FFZHhCLEVBQVF5QixTQUFTQyxTQUVqQjdCLEVBQVU4QixJQUFJLGFBRWpCQyxNQUFNLFdBQ0hoQyxFQUFPNEIsUUFDSEssS0FBTSxTQUNOQyxRQUFTLDhCQVN6QmxDLEVBQU9tQyxPQUFTLFdBQ1o3QixhQUFhOEIsUUFFYmhDLEVBQVF5QixTQUFTQyxTQUVqQjdCLEVBQVU4QixJQUFJLFlBSXRCTSxRQUNLQyxPQUFPLGVBQWdCLFlBRXZCQyxRQUFRLGlCQUFrQixTQUFVQyxPQUlwQ0MsV0FBVyxtQkFBb0IsU0FBVSxZQUFhLFFBQVMsWUFBYSxVQUFXMUMiLCJmaWxlIjoibG9naW4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQXV0ZW50aWNhw6fDo29cbiAqXG4gKiBAcGFyYW0gJHNjb3BlXG4gKiBAcGFyYW0gJGxvY2F0aW9uXG4gKiBAcGFyYW0gJGh0dHBcbiAqIEBwYXJhbSAkaW50ZXJ2YWxcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTG9naW5Db250cm9sbGVyICgkc2NvcGUsICRsb2NhdGlvbiwgJGh0dHAsICRpbnRlcnZhbCwgJHdpbmRvdykge1xuICAgIC8qKlxuICAgICAqIEVmZXR1YSBjaGVjYWdlbSBkZSBlc3RhZG8gZGUgYXV0ZW50aWNhw6fDo29cbiAgICAgKi9cbiAgICAkc2NvcGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpIHtcbiAgICAgICAgICAgICAgICAkKCcjbXlNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG5cbiAgICAgICAgICAgICAgICAkKCcuY29udGFpbmVyLWZsdWlkJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKCduYXYnKS5yZW1vdmVDbGFzcygnaGlkZGVuJykuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgJHNjb3BlLnVzdWFyaW8gID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXN1YXJpbycpKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2l0ZSAgICAgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaXRlJykpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcjbXlNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgICAgICAkKCcuY29udGFpbmVyLWZsdWlkJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnbmF2JykuaGlkZSgpO1xuICAgICAgICB9LCAxMDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBdXRlbnRpY2EgbmEgQVBJIGUgcmVjdXBlcmEgdW0gdG9rZW4gZGUgYWNlc3NvXG4gICAgICovXG4gICAgJHNjb3BlLmxvZ2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLnBvc3QoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ2xvZ2luJywgJHNjb3BlLnVzZXIsIHtoZWFkZXJzOiB7IHNpdGU6ICRzY29wZS5zaXRlIH19KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2l0ZScsICBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEuc2l0ZSkpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEuZGF0YS50b2tlbi5jb250ZXVkbyk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzdWFyaW8nLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEudXN1YXJpbykpO1xuXG4gICAgICAgICAgICAgICAgZGVsZXRlICRzY29wZS5zdGF0dXM7XG5cbiAgICAgICAgICAgICAgICAkd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXG4gICAgICAgICAgICAgICAgJGxvY2F0aW9uLnVybCgnL2luaWNpbycpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVc3XDoXJpby9TZW5oYSBpbnbDoWxpZG9zJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTG9nb2ZmIGRhIGFwcGxpY2HDp8Ojb1xuICAgICAqXG4gICAgICovXG4gICAgJHNjb3BlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbiAgICAgICAgJHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblxuICAgICAgICAkbG9jYXRpb24udXJsKCcvaW5pY2lvJyk7XG4gICAgfTtcbn1cblxuYW5ndWxhclxuICAgIC5tb2R1bGUoJ215QXBwLmxvZ2luJywgWyduZ1JvdXRlJ10pXG5cbiAgICAuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcbiAgICAgICAgLy8gOilcbiAgICB9XSlcblxuICAgIC5jb250cm9sbGVyKCdMb2dpbkNvbnRyb2xsZXInLCBbJyRzY29wZScsICckbG9jYXRpb24nLCAnJGh0dHAnLCAnJGludGVydmFsJywgJyR3aW5kb3cnLCBMb2dpbkNvbnRyb2xsZXJdKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
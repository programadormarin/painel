"use strict";function CarrinhosController(r,e,o,a){r.curPage=1,r.pageSize=12;var t={headers:{Authorization:localStorage.getItem("token"),Site:localStorage.getItem("site")}};r.load=function(){a.get($('meta[name="api"]').attr("content")+"carrinho?page="+r.curPage+"&limit="+r.pageSize,t).then(function(e){r.linhas=e.data,r.total=0;for(var o=new Array,a=1;a<=e.data.pageCount;a++)o.push(a);r.paginas=o})},r.open=function(e){r.carrinho=e,$("#cartModal").modal("show")},r["delete"]=function(e){confirm("Você deseja realmente apagar o carrinho?\nEste procedimento é irreversível!")&&a["delete"]($('meta[name="api"]').attr("content")+"carrinho/"+e,t).then(function(e){204==e.status?(r.status={type:"success",message:"carrinho removido com sucesso!"},r.load()):r.status={type:"danger",message:"Erro removendo carrinho, tente novamente mais tarde"}})}}angular.module("myApp.carrinhos",["ngRoute","angular-cloudinary"]).config(["$routeProvider",function(r){r.when("/carrinhos",{templateUrl:"modules/carrinhos/index.html",controller:"CarrinhosController"}).when("/carrinhos/adicionar",{templateUrl:"modules/carrinhos/add.html",controller:"CarrinhosController"}).when("/carrinhos/editar/:id",{templateUrl:"modules/carrinhos/edit.html",controller:"CarrinhosController"})}]).controller("CarrinhosController",["$scope","$routeParams","$location","$http","cloudinary",CarrinhosController]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY2FycmluaG9zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhcnJpbmhvc0NvbnRyb2xsZXIiLCIkc2NvcGUiLCIkcm91dGVQYXJhbXMiLCIkbG9jYXRpb24iLCIkaHR0cCIsImN1clBhZ2UiLCJwYWdlU2l6ZSIsImNvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlNpdGUiLCJsb2FkIiwiZ2V0IiwiJCIsImF0dHIiLCJ0aGVuIiwicmVzdWx0IiwibGluaGFzIiwidG90YWwiLCJwYWdpbmFzIiwiQXJyYXkiLCJpIiwiZGF0YSIsInBhZ2VDb3VudCIsInB1c2giLCJvcGVuIiwiY2FycmluaG8iLCJtb2RhbCIsImlkIiwiY29uZmlybSIsInN0YXR1cyIsInR5cGUiLCJtZXNzYWdlIiwiYW5ndWxhciIsIm1vZHVsZSIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFFQSxTQUFTQSxxQkFBcUJDLEVBQVFDLEVBQWNDLEVBQVdDLEdBQzNESCxFQUFPSSxRQUFXLEVBQ2xCSixFQUFPSyxTQUFXLEVBT2xCLElBQUlDLElBQ0FDLFNBQ0lDLGNBQWVDLGFBQWFDLFFBQVEsU0FDcENDLEtBQU1GLGFBQWFDLFFBQVEsU0FPbkNWLEdBQU9ZLEtBQU8sV0FDVlQsRUFDS1UsSUFBSUMsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxpQkFBbUJmLEVBQU9JLFFBQVUsVUFBWUosRUFBT0ssU0FBVUMsR0FDN0dVLEtBQUssU0FBVUMsR0FDWmpCLEVBQU9rQixPQUFVRCxFQUFXLEtBQzVCakIsRUFBT21CLE1BQVMsQ0FJaEIsS0FBSyxHQUZEQyxHQUFVLEdBQUlDLE9BRVRDLEVBQUUsRUFBR0EsR0FBS0wsRUFBT00sS0FBS0MsVUFBV0YsSUFDdENGLEVBQVFLLEtBQUtILEVBR2pCdEIsR0FBT29CLFFBQVVBLEtBTzdCcEIsRUFBTzBCLEtBQU8sU0FBVUMsR0FDcEIzQixFQUFPMkIsU0FBV0EsRUFFbEJiLEVBQUUsY0FBY2MsTUFBTSxTQVExQjVCLEVBQUFBLFVBQWdCLFNBQVU2QixHQUNsQkMsUUFBUSxnRkFDUjNCLEVBQUFBLFVBQ1lXLEVBQUUsb0JBQW9CQyxLQUFLLFdBQWEsWUFBY2MsRUFBSXZCLEdBQ2pFVSxLQUFLLFNBQVVPLEdBQ08sS0FBZkEsRUFBS1EsUUFDTC9CLEVBQU8rQixRQUNIQyxLQUFNLFVBQ05DLFFBQVMsa0NBR2JqQyxFQUFPWSxRQUVQWixFQUFPK0IsUUFDSEMsS0FBTSxTQUNOQyxRQUFTLDBEQVFyQ0MsUUFDS0MsT0FBTyxtQkFBb0IsVUFBVyx1QkFFdEM3QixRQUFRLGlCQUFrQixTQUFVOEIsR0FDakNBLEVBQ0tDLEtBQUssY0FDRkMsWUFBYSwrQkFDYkMsV0FBWSx3QkFFZkYsS0FBSyx3QkFDRkMsWUFBYSw2QkFDYkMsV0FBWSx3QkFFZkYsS0FBSyx5QkFDRkMsWUFBYSw4QkFDYkMsV0FBWSwyQkFLdkJBLFdBQVcsdUJBQXdCLFNBQVUsZUFBZ0IsWUFBYSxRQUFTLGFBQWN4QyIsImZpbGUiOiJtb2R1bGVzL2NhcnJpbmhvcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gQ2FycmluaG9zQ29udHJvbGxlciAoJHNjb3BlLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHApIHtcbiAgICAkc2NvcGUuY3VyUGFnZSAgPSAxO1xuICAgICRzY29wZS5wYWdlU2l6ZSA9IDEyO1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJhbCBjb25maWdcbiAgICAgKlxuICAgICAqIEB0eXBlIHt7aGVhZGVyczoge0F1dGhvcml6YXRpb24sIFNpdGV9fX1cbiAgICAgKi9cbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSxcbiAgICAgICAgICAgIFNpdGU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaXRlJylcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDYXJyZWdhciBDYXJyaW5ob3NcbiAgICAgKi9cbiAgICAkc2NvcGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGh0dHBcbiAgICAgICAgICAgIC5nZXQoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ2NhcnJpbmhvP3BhZ2U9JyArICRzY29wZS5jdXJQYWdlICsgJyZsaW1pdD0nICsgJHNjb3BlLnBhZ2VTaXplLCBjb25maWcpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmxpbmhhcyA9IChyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnRvdGFsICA9IDAuMDA7XG5cbiAgICAgICAgICAgICAgICB2YXIgcGFnaW5hcyA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0xOyBpIDw9IHJlc3VsdC5kYXRhLnBhZ2VDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXMucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkc2NvcGUucGFnaW5hcyA9IHBhZ2luYXM7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVmlzdWFsaXphciBDYXJyaW5ob1xuICAgICAqL1xuICAgICRzY29wZS5vcGVuID0gZnVuY3Rpb24gKGNhcnJpbmhvKSB7XG4gICAgICAgICRzY29wZS5jYXJyaW5obyA9IGNhcnJpbmhvO1xuXG4gICAgICAgICQoJyNjYXJ0TW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcGFnYXIgQ2FycmluaG9cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqL1xuICAgICRzY29wZS5kZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgaWYgKGNvbmZpcm0oJ1ZvY8OqIGRlc2VqYSByZWFsbWVudGUgYXBhZ2FyIG8gY2FycmluaG8/XFxuRXN0ZSBwcm9jZWRpbWVudG8gw6kgaXJyZXZlcnPDrXZlbCEnKSkge1xuICAgICAgICAgICAgJGh0dHBcbiAgICAgICAgICAgICAgICAuZGVsZXRlKCQoJ21ldGFbbmFtZT1cImFwaVwiXScpLmF0dHIoJ2NvbnRlbnQnKSArICdjYXJyaW5oby8nICsgaWQsIGNvbmZpZylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnY2FycmluaG8gcmVtb3ZpZG8gY29tIHN1Y2Vzc28hJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm8gcmVtb3ZlbmRvIGNhcnJpbmhvLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmFuZ3VsYXJcbiAgICAubW9kdWxlKCdteUFwcC5jYXJyaW5ob3MnLCBbJ25nUm91dGUnLCAnYW5ndWxhci1jbG91ZGluYXJ5J10pXG5cbiAgICAuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC53aGVuKCcvY2FycmluaG9zJywge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9jYXJyaW5ob3MvaW5kZXguaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NhcnJpbmhvc0NvbnRyb2xsZXInXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLndoZW4oJy9jYXJyaW5ob3MvYWRpY2lvbmFyJywge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9jYXJyaW5ob3MvYWRkLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDYXJyaW5ob3NDb250cm9sbGVyJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC53aGVuKCcvY2FycmluaG9zL2VkaXRhci86aWQnLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL2NhcnJpbmhvcy9lZGl0Lmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDYXJyaW5ob3NDb250cm9sbGVyJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuXG4gICAgLmNvbnRyb2xsZXIoJ0NhcnJpbmhvc0NvbnRyb2xsZXInLCBbJyRzY29wZScsICckcm91dGVQYXJhbXMnLCAnJGxvY2F0aW9uJywgJyRodHRwJywgJ2Nsb3VkaW5hcnknLCBDYXJyaW5ob3NDb250cm9sbGVyXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

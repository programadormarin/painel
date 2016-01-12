"use strict";function ProdutosController(t,o,e,a,r){t.curPage=1,t.pageSize=12;var n={headers:{Authorization:localStorage.getItem("token"),Site:localStorage.getItem("site")}};t.load=function(){a.get($('meta[name="api"]').attr("content")+"produto?page="+t.curPage+"&limit="+t.pageSize,n).then(function(o){t.linhas=o.data;for(var e=new Array,a=1;a<=o.data.pageCount;a++)e.push(a);t.paginas=e})},t.upload=function(){var o=t.produto;r.upload(o.imagem[0],{}).then(function(e){o.imagem=e.data,t.add(o)})},t.add=function(){var o=t.produto;a.post($('meta[name="api"]').attr("content")+"produto",o,n).then(function(o){201===o.status?(e.url("/produtos"),t.load()):t.status={type:"danger",message:"Erro cadastrando produto, tente novamente mais tarde"}})},t["delete"]=function(o){if(confirm("Você deseja realmente apagar o produto?\nEste procedimento é irreversível!")){var e=t.linhas.data[o];a["delete"]($('meta[name="api"]').attr("content")+"produto/"+e._id,n).then(function(e){204==e.status?(t.status={type:"success",message:"produto removido com sucesso!"},t.linhas.data.splice(o,1)):t.status={type:"danger",message:"Erro removendo produto, tente novamente mais tarde"}})}},t.edit=function(){a.put($('meta[name="api"]').attr("content")+"produto/"+o.id,t.produto,n).success(function(o){t.status={type:"success",message:"produto atualizado com sucesso!"}}).error(function(){t.status={type:"danger",message:"Ocorreu um erro atualizando os dados do produto, tente novamente mais tarde"}})},t.get=function(){a.get($('meta[name="api"]').attr("content")+"produto/"+o.id,n).then(function(o){t.produto=o.data.data})},t.search=function(){var o=$('meta[name="api"]').attr("content")+"busca/?page="+t.curPage+"&limit="+t.pageSize+"&busca="+t.busca;a.get(o,n).then(function(o){t.linhas=o.data;for(var e=new Array,a=1;a<=o.data.pageCount;a++)e.push(a);t.paginas=e})}}angular.module("myApp.produtos",["ngRoute","angular-cloudinary"]).config(["$routeProvider",function(t){t.when("/produtos",{templateUrl:"modules/produtos/index.html",controller:"ProdutosController"}).when("/produtos/adicionar",{templateUrl:"modules/produtos/add.html",controller:"ProdutosController"}).when("/produtos/editar/:id",{templateUrl:"modules/produtos/edit.html",controller:"ProdutosController"})}]).controller("ProdutosController",["$scope","$routeParams","$location","$http","cloudinary",ProdutosController]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcHJvZHV0b3MvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHV0b3NDb250cm9sbGVyIiwiJHNjb3BlIiwiJHJvdXRlUGFyYW1zIiwiJGxvY2F0aW9uIiwiJGh0dHAiLCIkY2xvdWRpbmFyeSIsImN1clBhZ2UiLCJwYWdlU2l6ZSIsImNvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlNpdGUiLCJsb2FkIiwiZ2V0IiwiJCIsImF0dHIiLCJ0aGVuIiwicmVzdWx0IiwibGluaGFzIiwicGFnaW5hcyIsIkFycmF5IiwiaSIsImRhdGEiLCJwYWdlQ291bnQiLCJwdXNoIiwidXBsb2FkIiwiJHByb2R1dG8iLCJwcm9kdXRvIiwiaW1hZ2VtIiwicmVzcCIsImFkZCIsInBvc3QiLCJzdGF0dXMiLCJ1cmwiLCJ0eXBlIiwibWVzc2FnZSIsImlkIiwiY29uZmlybSIsInRvRGVsZXRlIiwiX2lkIiwic3BsaWNlIiwiZWRpdCIsInB1dCIsInN1Y2Nlc3MiLCJlcnJvciIsInNlYXJjaCIsImJ1c2NhIiwiYW5ndWxhciIsIm1vZHVsZSIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFFQSxTQUFTQSxvQkFBb0JDLEVBQVFDLEVBQWNDLEVBQVdDLEVBQU9DLEdBQ2pFSixFQUFPSyxRQUFXLEVBQ2xCTCxFQUFPTSxTQUFXLEVBT2xCLElBQUlDLElBQ0FDLFNBQ0lDLGNBQWVDLGFBQWFDLFFBQVEsU0FDcENDLEtBQU1GLGFBQWFDLFFBQVEsU0FPbkNYLEdBQU9hLEtBQU8sV0FDVlYsRUFDS1csSUFBSUMsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxnQkFBa0JoQixFQUFPSyxRQUFVLFVBQVlMLEVBQU9NLFNBQVVDLEdBQzVHVSxLQUFLLFNBQVVDLEdBQ1psQixFQUFPbUIsT0FBVUQsRUFBVyxJQUk1QixLQUFLLEdBRkRFLEdBQVUsR0FBSUMsT0FFVEMsRUFBRSxFQUFHQSxHQUFLSixFQUFPSyxLQUFLQyxVQUFXRixJQUN0Q0YsRUFBUUssS0FBS0gsRUFHakJ0QixHQUFPb0IsUUFBVUEsS0FPN0JwQixFQUFPMEIsT0FBUyxXQUNaLEdBQUlDLEdBQVczQixFQUFPNEIsT0FFdEJ4QixHQUNLc0IsT0FBT0MsRUFBU0UsT0FBTyxPQUN2QlosS0FBSyxTQUFVYSxHQUNaSCxFQUFTRSxPQUFTQyxFQUFLUCxLQUV2QnZCLEVBQU8rQixJQUFJSixNQU92QjNCLEVBQU8rQixJQUFNLFdBQ1QsR0FBSUosR0FBVzNCLEVBQU80QixPQUV0QnpCLEdBQ0s2QixLQUFLakIsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxVQUFXVyxFQUFVcEIsR0FDbEVVLEtBQUssU0FBVU0sR0FDUSxNQUFoQkEsRUFBS1UsUUFDTC9CLEVBQVVnQyxJQUFJLGFBQ2RsQyxFQUFPYSxRQUVQYixFQUFPaUMsUUFDSEUsS0FBTSxTQUNOQyxRQUFTLDJEQVc3QnBDLEVBQUFBLFVBQWdCLFNBQVVxQyxHQUN0QixHQUFJQyxRQUFRLDhFQUErRSxDQUN2RixHQUFJQyxHQUFXdkMsRUFBT21CLE9BQU9JLEtBQUtjLEVBRWxDbEMsR0FBQUEsVUFDWVksRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxXQUFhdUIsRUFBU0MsSUFBS2pDLEdBQzFFVSxLQUFLLFNBQVVNLEdBQ08sS0FBZkEsRUFBS1UsUUFDTGpDLEVBQU9pQyxRQUNIRSxLQUFNLFVBQ05DLFFBQVMsaUNBR2JwQyxFQUFPbUIsT0FBT0ksS0FBS2tCLE9BQU9KLEVBQUksSUFFOUJyQyxFQUFPaUMsUUFDSEUsS0FBTSxTQUNOQyxRQUFTLDBEQVVqQ3BDLEVBQU8wQyxLQUFPLFdBQ1Z2QyxFQUNLd0MsSUFBSTVCLEVBQUUsb0JBQW9CQyxLQUFLLFdBQWEsV0FBYWYsRUFBYW9DLEdBQUlyQyxFQUFPNEIsUUFBU3JCLEdBQzFGcUMsUUFBUSxTQUFVckIsR0FDZnZCLEVBQU9pQyxRQUNIRSxLQUFNLFVBQ05DLFFBQVMscUNBR2hCUyxNQUFNLFdBQ0g3QyxFQUFPaUMsUUFDSEUsS0FBTSxTQUNOQyxRQUFTLGtGQVF6QnBDLEVBQU9jLElBQU0sV0FDVFgsRUFDS1csSUFBSUMsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxXQUFhZixFQUFhb0MsR0FBSTlCLEdBQzFFVSxLQUFLLFNBQVVNLEdBQ1p2QixFQUFPNEIsUUFBV0wsRUFBS0EsS0FBUyxRQU81Q3ZCLEVBQU84QyxPQUFTLFdBQ1osR0FBSVosR0FBTW5CLEVBQUUsb0JBQW9CQyxLQUFLLFdBQzNCLGVBQ1doQixFQUFPSyxRQUNsQixVQUFZTCxFQUFPTSxTQUNuQixVQUFZTixFQUFPK0MsS0FHN0I1QyxHQUNLVyxJQUFJb0IsRUFBSzNCLEdBQ1RVLEtBQUssU0FBVUMsR0FDWmxCLEVBQU9tQixPQUFVRCxFQUFXLElBSTVCLEtBQUssR0FGREUsR0FBVSxHQUFJQyxPQUVUQyxFQUFFLEVBQUdBLEdBQUtKLEVBQU9LLEtBQUtDLFVBQVdGLElBQ3RDRixFQUFRSyxLQUFLSCxFQUdqQnRCLEdBQU9vQixRQUFVQSxLQUtqQzRCLFFBQ0tDLE9BQU8sa0JBQW1CLFVBQVcsdUJBRXJDMUMsUUFBUSxpQkFBa0IsU0FBVTJDLEdBQ2pDQSxFQUNLQyxLQUFLLGFBQ0ZDLFlBQWEsOEJBQ2JDLFdBQVksdUJBRWZGLEtBQUssdUJBQ0ZDLFlBQWEsNEJBQ2JDLFdBQVksdUJBRWZGLEtBQUssd0JBQ0ZDLFlBQWEsNkJBQ2JDLFdBQVksMEJBS3ZCQSxXQUFXLHNCQUF1QixTQUFVLGVBQWdCLFlBQWEsUUFBUyxhQUFjdEQiLCJmaWxlIjoibW9kdWxlcy9wcm9kdXRvcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gUHJvZHV0b3NDb250cm9sbGVyICgkc2NvcGUsICRyb3V0ZVBhcmFtcywgJGxvY2F0aW9uLCAkaHR0cCwgJGNsb3VkaW5hcnkpIHtcbiAgICAkc2NvcGUuY3VyUGFnZSAgPSAxO1xuICAgICRzY29wZS5wYWdlU2l6ZSA9IDEyO1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJhbCBjb25maWdcbiAgICAgKlxuICAgICAqIEB0eXBlIHt7aGVhZGVyczoge0F1dGhvcml6YXRpb24sIFNpdGV9fX1cbiAgICAgKi9cbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSxcbiAgICAgICAgICAgIFNpdGU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaXRlJylcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDYXJyZWdhciBQcm9kdXRvc1xuICAgICAqL1xuICAgICRzY29wZS5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLmdldCgkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAncHJvZHV0bz9wYWdlPScgKyAkc2NvcGUuY3VyUGFnZSArICcmbGltaXQ9JyArICRzY29wZS5wYWdlU2l6ZSwgY29uZmlnKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICRzY29wZS5saW5oYXMgPSAocmVzdWx0LmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBhZ2luYXMgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MTsgaSA8PSByZXN1bHQuZGF0YS5wYWdlQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBwYWdpbmFzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHNjb3BlLnBhZ2luYXMgPSBwYWdpbmFzO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwbG9hZCBkZSBpbWFnZW0gZG8gUHJvZHV0b1xuICAgICAqL1xuICAgICRzY29wZS51cGxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyICRwcm9kdXRvID0gJHNjb3BlLnByb2R1dG87XG5cbiAgICAgICAgJGNsb3VkaW5hcnlcbiAgICAgICAgICAgIC51cGxvYWQoJHByb2R1dG8uaW1hZ2VtWzBdLCB7fSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgJHByb2R1dG8uaW1hZ2VtID0gcmVzcC5kYXRhO1xuXG4gICAgICAgICAgICAgICAgJHNjb3BlLmFkZCgkcHJvZHV0byk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2FkYXN0cmFyIFByb2R1dG9cbiAgICAgKi9cbiAgICAkc2NvcGUuYWRkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHByb2R1dG8gPSAkc2NvcGUucHJvZHV0bztcblxuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLnBvc3QoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ3Byb2R1dG8nLCAkcHJvZHV0bywgY29uZmlnKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24udXJsKCcvcHJvZHV0b3MnKTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvYWQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJybyBjYWRhc3RyYW5kbyBwcm9kdXRvLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSdcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBhZ2FyIFByb2R1dG9cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqL1xuICAgICRzY29wZS5kZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgaWYgKGNvbmZpcm0oJ1ZvY8OqIGRlc2VqYSByZWFsbWVudGUgYXBhZ2FyIG8gcHJvZHV0bz9cXG5Fc3RlIHByb2NlZGltZW50byDDqSBpcnJldmVyc8OtdmVsIScpKSB7XG4gICAgICAgICAgICB2YXIgdG9EZWxldGUgPSAkc2NvcGUubGluaGFzLmRhdGFbaWRdO1xuXG4gICAgICAgICAgICAkaHR0cFxuICAgICAgICAgICAgICAgIC5kZWxldGUoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ3Byb2R1dG8vJyArIHRvRGVsZXRlLl9pZCwgY29uZmlnKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAyMDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcm9kdXRvIHJlbW92aWRvIGNvbSBzdWNlc3NvISdcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5saW5oYXMuZGF0YS5zcGxpY2UoaWQsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJybyByZW1vdmVuZG8gcHJvZHV0bywgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRWRpdGFyIFByb2R1dG9cbiAgICAgKi9cbiAgICAkc2NvcGUuZWRpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGh0dHBcbiAgICAgICAgICAgIC5wdXQoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ3Byb2R1dG8vJyArICRyb3V0ZVBhcmFtcy5pZCwgJHNjb3BlLnByb2R1dG8sIGNvbmZpZylcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJvZHV0byBhdHVhbGl6YWRvIGNvbSBzdWNlc3NvISdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdPY29ycmV1IHVtIGVycm8gYXR1YWxpemFuZG8gb3MgZGFkb3MgZG8gcHJvZHV0bywgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBWaXN1YWxpemFyIFByb2R1dG9cbiAgICAgKi9cbiAgICAkc2NvcGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLmdldCgkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAncHJvZHV0by8nICsgJHJvdXRlUGFyYW1zLmlkLCBjb25maWcpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICRzY29wZS5wcm9kdXRvID0gKGRhdGEuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggUHJvZHVjdHNcbiAgICAgKi9cbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB1cmwgPSAkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JylcbiAgICAgICAgICAgICAgICArICdidXNjYS8nXG4gICAgICAgICAgICAgICAgKyAnP3BhZ2U9JyArICRzY29wZS5jdXJQYWdlXG4gICAgICAgICAgICAgICAgKyAnJmxpbWl0PScgKyAkc2NvcGUucGFnZVNpemVcbiAgICAgICAgICAgICAgICArICcmYnVzY2E9JyArICRzY29wZS5idXNjYVxuICAgICAgICAgICAgO1xuXG4gICAgICAgICRodHRwXG4gICAgICAgICAgICAuZ2V0KHVybCwgY29uZmlnKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICRzY29wZS5saW5oYXMgPSAocmVzdWx0LmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBhZ2luYXMgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MTsgaSA8PSByZXN1bHQuZGF0YS5wYWdlQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBwYWdpbmFzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHNjb3BlLnBhZ2luYXMgPSBwYWdpbmFzO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuYW5ndWxhclxuICAgIC5tb2R1bGUoJ215QXBwLnByb2R1dG9zJywgWyduZ1JvdXRlJywgJ2FuZ3VsYXItY2xvdWRpbmFyeSddKVxuXG4gICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAgICAgICAud2hlbignL3Byb2R1dG9zJywge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcm9kdXRvcy9pbmRleC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnUHJvZHV0b3NDb250cm9sbGVyJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC53aGVuKCcvcHJvZHV0b3MvYWRpY2lvbmFyJywge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcm9kdXRvcy9hZGQuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1Byb2R1dG9zQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAud2hlbignL3Byb2R1dG9zL2VkaXRhci86aWQnLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3Byb2R1dG9zL2VkaXQuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1Byb2R1dG9zQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcblxuICAgIC5jb250cm9sbGVyKCdQcm9kdXRvc0NvbnRyb2xsZXInLCBbJyRzY29wZScsICckcm91dGVQYXJhbXMnLCAnJGxvY2F0aW9uJywgJyRodHRwJywgJ2Nsb3VkaW5hcnknLCBQcm9kdXRvc0NvbnRyb2xsZXJdKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

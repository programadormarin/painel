"use strict";function ProdutosController(t,o,e,a,r){t.curPage=1,t.pageSize=12;var n={headers:{Authorization:localStorage.getItem("token"),Site:localStorage.getItem("site")}};t.load=function(){a.get($('meta[name="api"]').attr("content")+"produto?page="+t.curPage+"&limit="+t.pageSize,n).then(function(o){t.linhas=o.data;for(var e=new Array,a=1;a<=o.data.pageCount;a++)e.push(a);t.paginas=e})},t.categories=function(){a.get($('meta[name="api"]').attr("content")+"site/"+n.headers.Site,n).then(function(o){t.site=o.data.data})},t.add=function(){var o=t.produto;o.categoria={titulo:t.produtoForm.categoria.titulo,categoria:{titulo:t.produtoForm.subCategoria.titulo}},r.upload({url:$('meta[name="api"]').attr("content")+"produto",data:o,headers:n.headers}).then(function(o){e.url("/produtos"),t.load()},function(o){t.status={type:"danger",message:"Erro cadastrando produto, tente novamente mais tarde"}},function(t){var o=parseInt(100*t.loaded/t.total);console.log("progress: "+o+"% "+t.config.data.file.name)})},t["delete"]=function(o){if(confirm("Você deseja realmente apagar o produto?\nEste procedimento é irreversível!")){var e=t.linhas.data[o];a["delete"]($('meta[name="api"]').attr("content")+"produto/"+e._id,n).then(function(e){204==e.status?(t.status={type:"success",message:"produto removido com sucesso!"},t.linhas.data.splice(o,1)):t.status={type:"danger",message:"Erro removendo produto, tente novamente mais tarde"}})}},t.edit=function(){var e=t.produto;e.categoria={titulo:t.produtoForm.categoria.titulo,categoria:{titulo:t.produtoForm.subCategoria.titulo}},a.put($('meta[name="api"]').attr("content")+"produto/"+o.id,t.produto,n).success(function(o){t.status={type:"success",message:"produto atualizado com sucesso!"}}).error(function(){t.status={type:"danger",message:"Ocorreu um erro atualizando os dados do produto, tente novamente mais tarde"}})},t.get=function(){a.get($('meta[name="api"]').attr("content")+"produto/"+o.id,n).then(function(o){t.produto=o.data.data})},t.search=function(){var o=$('meta[name="api"]').attr("content")+"busca/?page="+t.curPage+"&limit="+t.pageSize+"&busca="+t.busca;a.get(o,n).then(function(o){t.linhas=o.data;for(var e=new Array,a=1;a<=o.data.pageCount;a++)e.push(a);t.paginas=e})}}angular.module("myApp.produtos",["ngRoute","ngFileUpload"]).config(["$routeProvider",function(t){t.when("/produtos",{templateUrl:"modules/produtos/index.html",controller:"ProdutosController"}).when("/produtos/adicionar",{templateUrl:"modules/produtos/add.html",controller:"ProdutosController"}).when("/produtos/editar/:id",{templateUrl:"modules/produtos/edit.html",controller:"ProdutosController"})}]).controller("ProdutosController",["$scope","$routeParams","$location","$http","Upload",ProdutosController]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcHJvZHV0b3MvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHV0b3NDb250cm9sbGVyIiwiJHNjb3BlIiwiJHJvdXRlUGFyYW1zIiwiJGxvY2F0aW9uIiwiJGh0dHAiLCIkdXBsb2FkIiwiY3VyUGFnZSIsInBhZ2VTaXplIiwiY29uZmlnIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiU2l0ZSIsImxvYWQiLCJnZXQiLCIkIiwiYXR0ciIsInRoZW4iLCJyZXN1bHQiLCJsaW5oYXMiLCJwYWdpbmFzIiwiQXJyYXkiLCJpIiwiZGF0YSIsInBhZ2VDb3VudCIsInB1c2giLCJjYXRlZ29yaWVzIiwic2l0ZSIsImFkZCIsIiRwcm9kdXRvIiwicHJvZHV0byIsImNhdGVnb3JpYSIsInRpdHVsbyIsInByb2R1dG9Gb3JtIiwic3ViQ2F0ZWdvcmlhIiwidXBsb2FkIiwidXJsIiwicmVzcCIsInN0YXR1cyIsInR5cGUiLCJtZXNzYWdlIiwiZXZ0IiwicHJvZ3Jlc3NQZXJjZW50YWdlIiwicGFyc2VJbnQiLCJsb2FkZWQiLCJ0b3RhbCIsImNvbnNvbGUiLCJsb2ciLCJmaWxlIiwibmFtZSIsImlkIiwiY29uZmlybSIsInRvRGVsZXRlIiwiX2lkIiwic3BsaWNlIiwiZWRpdCIsInB1dCIsInN1Y2Nlc3MiLCJlcnJvciIsInNlYXJjaCIsImJ1c2NhIiwiYW5ndWxhciIsIm1vZHVsZSIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFFQSxTQUFTQSxvQkFBb0JDLEVBQVFDLEVBQWNDLEVBQVdDLEVBQU9DLEdBQ2pFSixFQUFPSyxRQUFXLEVBQ2xCTCxFQUFPTSxTQUFXLEVBT2xCLElBQUlDLElBQ0FDLFNBQ0lDLGNBQWVDLGFBQWFDLFFBQVEsU0FDcENDLEtBQU1GLGFBQWFDLFFBQVEsU0FPbkNYLEdBQU9hLEtBQU8sV0FDVlYsRUFDS1csSUFBSUMsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxnQkFBa0JoQixFQUFPSyxRQUFVLFVBQVlMLEVBQU9NLFNBQVVDLEdBQzVHVSxLQUFLLFNBQVVDLEdBQ1psQixFQUFPbUIsT0FBVUQsRUFBVyxJQUk1QixLQUFLLEdBRkRFLEdBQVUsR0FBSUMsT0FFVEMsRUFBRSxFQUFHQSxHQUFLSixFQUFPSyxLQUFLQyxVQUFXRixJQUN0Q0YsRUFBUUssS0FBS0gsRUFHakJ0QixHQUFPb0IsUUFBVUEsS0FTN0JwQixFQUFPMEIsV0FBYSxXQUNoQnZCLEVBQ0tXLElBQUlDLEVBQUUsb0JBQW9CQyxLQUFLLFdBQWEsUUFBVVQsRUFBT0MsUUFBUUksS0FBTUwsR0FDM0VVLEtBQUssU0FBVU0sR0FDWnZCLEVBQU8yQixLQUFPSixFQUFLQSxLQUFLQSxRQU9wQ3ZCLEVBQU80QixJQUFNLFdBQ1QsR0FBSUMsR0FBVzdCLEVBQU84QixPQUNsQkQsR0FBU0UsV0FDTEMsT0FBUWhDLEVBQU9pQyxZQUFZRixVQUFVQyxPQUNyQ0QsV0FDSUMsT0FBUWhDLEVBQU9pQyxZQUFZQyxhQUFhRixTQUlwRDVCLEVBQ0srQixRQUNHQyxJQUFLckIsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxVQUM3Q08sS0FBTU0sRUFDTnJCLFFBQVNELEVBQU9DLFVBRW5CUyxLQUNHLFNBQVVvQixHQUNObkMsRUFBVWtDLElBQUksYUFDZHBDLEVBQU9hLFFBRVgsU0FBVXdCLEdBQ05yQyxFQUFPc0MsUUFDSEMsS0FBTSxTQUNOQyxRQUFTLHlEQUdqQixTQUFVQyxHQUNOLEdBQUlDLEdBQXFCQyxTQUFTLElBQVFGLEVBQUlHLE9BQVNILEVBQUlJLE1BRTNEQyxTQUFRQyxJQUFJLGFBQWVMLEVBQXFCLEtBQU9ELEVBQUlsQyxPQUFPZ0IsS0FBS3lCLEtBQUtDLFNBVTVGakQsRUFBQUEsVUFBZ0IsU0FBVWtELEdBQ3RCLEdBQUlDLFFBQVEsOEVBQStFLENBQ3ZGLEdBQUlDLEdBQVdwRCxFQUFPbUIsT0FBT0ksS0FBSzJCLEVBRWxDL0MsR0FBQUEsVUFDWVksRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxXQUFhb0MsRUFBU0MsSUFBSzlDLEdBQzFFVSxLQUFLLFNBQVVNLEdBQ08sS0FBZkEsRUFBS2UsUUFDTHRDLEVBQU9zQyxRQUNIQyxLQUFNLFVBQ05DLFFBQVMsaUNBR2J4QyxFQUFPbUIsT0FBT0ksS0FBSytCLE9BQU9KLEVBQUksSUFFOUJsRCxFQUFPc0MsUUFDSEMsS0FBTSxTQUNOQyxRQUFTLDBEQVVqQ3hDLEVBQU91RCxLQUFPLFdBQ1YsR0FBSTFCLEdBQVc3QixFQUFPOEIsT0FDbEJELEdBQVNFLFdBQ0xDLE9BQVFoQyxFQUFPaUMsWUFBWUYsVUFBVUMsT0FDckNELFdBQ0lDLE9BQVFoQyxFQUFPaUMsWUFBWUMsYUFBYUYsU0FJcEQ3QixFQUNLcUQsSUFBSXpDLEVBQUUsb0JBQW9CQyxLQUFLLFdBQWEsV0FBYWYsRUFBYWlELEdBQUlsRCxFQUFPOEIsUUFBU3ZCLEdBQzFGa0QsUUFBUSxTQUFVbEMsR0FDZnZCLEVBQU9zQyxRQUNIQyxLQUFNLFVBQ05DLFFBQVMscUNBR2hCa0IsTUFBTSxXQUNIMUQsRUFBT3NDLFFBQ0hDLEtBQU0sU0FDTkMsUUFBUyxrRkFRekJ4QyxFQUFPYyxJQUFNLFdBQ1RYLEVBQ0tXLElBQUlDLEVBQUUsb0JBQW9CQyxLQUFLLFdBQWEsV0FBYWYsRUFBYWlELEdBQUkzQyxHQUMxRVUsS0FBSyxTQUFVTSxHQUNadkIsRUFBTzhCLFFBQVdQLEVBQUtBLEtBQVMsUUFPNUN2QixFQUFPMkQsT0FBUyxXQUNaLEdBQUl2QixHQUFNckIsRUFBRSxvQkFBb0JDLEtBQUssV0FDM0IsZUFDV2hCLEVBQU9LLFFBQ2xCLFVBQVlMLEVBQU9NLFNBQ25CLFVBQVlOLEVBQU80RCxLQUc3QnpELEdBQ0tXLElBQUlzQixFQUFLN0IsR0FDVFUsS0FBSyxTQUFVQyxHQUNabEIsRUFBT21CLE9BQVVELEVBQVcsSUFJNUIsS0FBSyxHQUZERSxHQUFVLEdBQUlDLE9BRVRDLEVBQUUsRUFBR0EsR0FBS0osRUFBT0ssS0FBS0MsVUFBV0YsSUFDdENGLEVBQVFLLEtBQUtILEVBR2pCdEIsR0FBT29CLFFBQVVBLEtBS2pDeUMsUUFDS0MsT0FBTyxrQkFBbUIsVUFBVyxpQkFFckN2RCxRQUFRLGlCQUFrQixTQUFVd0QsR0FDakNBLEVBQ0tDLEtBQUssYUFDRkMsWUFBYSw4QkFDYkMsV0FBWSx1QkFFZkYsS0FBSyx1QkFDRkMsWUFBYSw0QkFDYkMsV0FBWSx1QkFFZkYsS0FBSyx3QkFDRkMsWUFBYSw2QkFDYkMsV0FBWSwwQkFLdkJBLFdBQVcsc0JBQXVCLFNBQVUsZUFBZ0IsWUFBYSxRQUFTLFNBQVVuRSIsImZpbGUiOiJtb2R1bGVzL3Byb2R1dG9zL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBQcm9kdXRvc0NvbnRyb2xsZXIgKCRzY29wZSwgJHJvdXRlUGFyYW1zLCAkbG9jYXRpb24sICRodHRwLCAkdXBsb2FkKSB7XG4gICAgJHNjb3BlLmN1clBhZ2UgID0gMTtcbiAgICAkc2NvcGUucGFnZVNpemUgPSAxMjtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYWwgY29uZmlnXG4gICAgICpcbiAgICAgKiBAdHlwZSB7e2hlYWRlcnM6IHtBdXRob3JpemF0aW9uLCBTaXRlfX19XG4gICAgICovXG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyksXG4gICAgICAgICAgICBTaXRlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2l0ZScpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2FycmVnYXIgUHJvZHV0b3NcbiAgICAgKi9cbiAgICAkc2NvcGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGh0dHBcbiAgICAgICAgICAgIC5nZXQoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ3Byb2R1dG8/cGFnZT0nICsgJHNjb3BlLmN1clBhZ2UgKyAnJmxpbWl0PScgKyAkc2NvcGUucGFnZVNpemUsIGNvbmZpZylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUubGluaGFzID0gKHJlc3VsdC5kYXRhKTtcblxuICAgICAgICAgICAgICAgIHZhciBwYWdpbmFzID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTE7IGkgPD0gcmVzdWx0LmRhdGEucGFnZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hcy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRzY29wZS5wYWdpbmFzID0gcGFnaW5hcztcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDYXJyZWdhIGFzIGNhdGVnb3JpYXMgZG8gc2l0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHNpdGVcbiAgICAgKi9cbiAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLmdldCgkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAnc2l0ZS8nICsgY29uZmlnLmhlYWRlcnMuU2l0ZSwgY29uZmlnKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2l0ZSA9IGRhdGEuZGF0YS5kYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENhZGFzdHJhciBQcm9kdXRvXG4gICAgICovXG4gICAgJHNjb3BlLmFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRwcm9kdXRvID0gJHNjb3BlLnByb2R1dG87XG4gICAgICAgICAgICAkcHJvZHV0by5jYXRlZ29yaWEgPSB7XG4gICAgICAgICAgICAgICAgdGl0dWxvOiAkc2NvcGUucHJvZHV0b0Zvcm0uY2F0ZWdvcmlhLnRpdHVsbyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0dWxvOiAkc2NvcGUucHJvZHV0b0Zvcm0uc3ViQ2F0ZWdvcmlhLnRpdHVsb1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgJHVwbG9hZFxuICAgICAgICAgICAgLnVwbG9hZCh7XG4gICAgICAgICAgICAgICAgdXJsOiAkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAncHJvZHV0bycsXG4gICAgICAgICAgICAgICAgZGF0YTogJHByb2R1dG8sXG4gICAgICAgICAgICAgICAgaGVhZGVyczogY29uZmlnLmhlYWRlcnNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24udXJsKCcvcHJvZHV0b3MnKTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvYWQoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvIGNhZGFzdHJhbmRvIHByb2R1dG8sIHRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3NQZXJjZW50YWdlID0gcGFyc2VJbnQoMTAwLjAgKiBldnQubG9hZGVkIC8gZXZ0LnRvdGFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncHJvZ3Jlc3M6ICcgKyBwcm9ncmVzc1BlcmNlbnRhZ2UgKyAnJSAnICsgZXZ0LmNvbmZpZy5kYXRhLmZpbGUubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBhZ2FyIFByb2R1dG9cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqL1xuICAgICRzY29wZS5kZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgaWYgKGNvbmZpcm0oJ1ZvY8OqIGRlc2VqYSByZWFsbWVudGUgYXBhZ2FyIG8gcHJvZHV0bz9cXG5Fc3RlIHByb2NlZGltZW50byDDqSBpcnJldmVyc8OtdmVsIScpKSB7XG4gICAgICAgICAgICB2YXIgdG9EZWxldGUgPSAkc2NvcGUubGluaGFzLmRhdGFbaWRdO1xuXG4gICAgICAgICAgICAkaHR0cFxuICAgICAgICAgICAgICAgIC5kZWxldGUoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ3Byb2R1dG8vJyArIHRvRGVsZXRlLl9pZCwgY29uZmlnKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAyMDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcm9kdXRvIHJlbW92aWRvIGNvbSBzdWNlc3NvISdcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5saW5oYXMuZGF0YS5zcGxpY2UoaWQsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJybyByZW1vdmVuZG8gcHJvZHV0bywgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRWRpdGFyIFByb2R1dG9cbiAgICAgKi9cbiAgICAkc2NvcGUuZWRpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRwcm9kdXRvID0gJHNjb3BlLnByb2R1dG87XG4gICAgICAgICAgICAkcHJvZHV0by5jYXRlZ29yaWEgPSB7XG4gICAgICAgICAgICAgICAgdGl0dWxvOiAkc2NvcGUucHJvZHV0b0Zvcm0uY2F0ZWdvcmlhLnRpdHVsbyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0dWxvOiAkc2NvcGUucHJvZHV0b0Zvcm0uc3ViQ2F0ZWdvcmlhLnRpdHVsb1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgJGh0dHBcbiAgICAgICAgICAgIC5wdXQoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ3Byb2R1dG8vJyArICRyb3V0ZVBhcmFtcy5pZCwgJHNjb3BlLnByb2R1dG8sIGNvbmZpZylcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJvZHV0byBhdHVhbGl6YWRvIGNvbSBzdWNlc3NvISdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdPY29ycmV1IHVtIGVycm8gYXR1YWxpemFuZG8gb3MgZGFkb3MgZG8gcHJvZHV0bywgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBWaXN1YWxpemFyIFByb2R1dG9cbiAgICAgKi9cbiAgICAkc2NvcGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgICAgLmdldCgkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JykgKyAncHJvZHV0by8nICsgJHJvdXRlUGFyYW1zLmlkLCBjb25maWcpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICRzY29wZS5wcm9kdXRvID0gKGRhdGEuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggUHJvZHVjdHNcbiAgICAgKi9cbiAgICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB1cmwgPSAkKCdtZXRhW25hbWU9XCJhcGlcIl0nKS5hdHRyKCdjb250ZW50JylcbiAgICAgICAgICAgICAgICArICdidXNjYS8nXG4gICAgICAgICAgICAgICAgKyAnP3BhZ2U9JyArICRzY29wZS5jdXJQYWdlXG4gICAgICAgICAgICAgICAgKyAnJmxpbWl0PScgKyAkc2NvcGUucGFnZVNpemVcbiAgICAgICAgICAgICAgICArICcmYnVzY2E9JyArICRzY29wZS5idXNjYVxuICAgICAgICAgICAgO1xuXG4gICAgICAgICRodHRwXG4gICAgICAgICAgICAuZ2V0KHVybCwgY29uZmlnKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICRzY29wZS5saW5oYXMgPSAocmVzdWx0LmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBhZ2luYXMgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MTsgaSA8PSByZXN1bHQuZGF0YS5wYWdlQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBwYWdpbmFzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHNjb3BlLnBhZ2luYXMgPSBwYWdpbmFzO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuYW5ndWxhclxuICAgIC5tb2R1bGUoJ215QXBwLnByb2R1dG9zJywgWyduZ1JvdXRlJywgJ25nRmlsZVVwbG9hZCddKVxuXG4gICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAgICAgICAud2hlbignL3Byb2R1dG9zJywge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcm9kdXRvcy9pbmRleC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnUHJvZHV0b3NDb250cm9sbGVyJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC53aGVuKCcvcHJvZHV0b3MvYWRpY2lvbmFyJywge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcm9kdXRvcy9hZGQuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1Byb2R1dG9zQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAud2hlbignL3Byb2R1dG9zL2VkaXRhci86aWQnLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3Byb2R1dG9zL2VkaXQuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1Byb2R1dG9zQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcblxuICAgIC5jb250cm9sbGVyKCdQcm9kdXRvc0NvbnRyb2xsZXInLCBbJyRzY29wZScsICckcm91dGVQYXJhbXMnLCAnJGxvY2F0aW9uJywgJyRodHRwJywgJ1VwbG9hZCcsIFByb2R1dG9zQ29udHJvbGxlcl0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

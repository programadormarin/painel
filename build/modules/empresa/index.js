"use strict";angular.module("myApp.empresa",["ngRoute"]).config(["$routeProvider",function(e){e.when("/empresa",{templateUrl:"modules/empresa/index.html",controller:"EmpresaController"})}]).controller("EmpresaController",["$scope","$routeParams","$location","api",function(e,o,s,t){e.site_id=localStorage.getItem("site"),e.removeTelefone=function(o){e.empresa.telefones.splice(o,1)},e.removeEmail=function(o){e.empresa.emails.splice(o,1)},e.removeEndereco=function(o){e.empresa.enderecos.splice(o,1)},e.adicionaTelefone=function(o){e.empresa.telefones.push(o),e.telefone=""},e.adicionaEmail=function(o){e.empresa.emails.push(o),e.email=""},e.adicionaEndereco=function(o){e.empresa.enderecos.push(o),e.endereco=""},e.edit=function(){t.put("site/"+e.site_id,e.empresa).success(function(o){e.status={type:"success",message:"Dados atualizados com sucesso!"}}).error(function(){e.status={type:"danger",message:"Ocorreu um erro atualizando os dados da empresa, tente novamente mais tarde"}})},e.get=function(){t.get("site/"+e.site_id).then(function(o){e.empresa=o.data.data})}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZW1wcmVzYS9pbmRleC5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHJvdXRlUHJvdmlkZXIiLCJ3aGVuIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJHJvdXRlUGFyYW1zIiwiJGxvY2F0aW9uIiwiYXBpIiwic2l0ZV9pZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVUZWxlZm9uZSIsImluZGljZSIsImVtcHJlc2EiLCJ0ZWxlZm9uZXMiLCJzcGxpY2UiLCJyZW1vdmVFbWFpbCIsImVtYWlscyIsInJlbW92ZUVuZGVyZWNvIiwiZW5kZXJlY29zIiwiYWRpY2lvbmFUZWxlZm9uZSIsInRlbGVmb25lIiwicHVzaCIsImFkaWNpb25hRW1haWwiLCJlbWFpbCIsImFkaWNpb25hRW5kZXJlY28iLCJlbmRlcmVjbyIsImVkaXQiLCJwdXQiLCJzdWNjZXNzIiwiZGF0YSIsInN0YXR1cyIsInR5cGUiLCJtZXNzYWdlIiwiZXJyb3IiLCJnZXQiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUVBQSxTQUFRQyxPQUFPLGlCQUFrQixZQUM1QkMsUUFBUSxpQkFBa0IsU0FBVUMsR0FDakNBLEVBQ0tDLEtBQUssWUFDRkMsWUFBYSw2QkFDYkMsV0FBWSx5QkFLdkJBLFdBQVcscUJBQXNCLFNBQVUsZUFBZ0IsWUFBYSxNQUNyRSxTQUFVQyxFQUFRQyxFQUFjQyxFQUFXQyxHQUN2Q0gsRUFBT0ksUUFBVUMsYUFBYUMsUUFBUSxRQUV0Q04sRUFBT08sZUFBaUIsU0FBVUMsR0FDOUJSLEVBQU9TLFFBQVFDLFVBQVVDLE9BQU9ILEVBQVEsSUFHNUNSLEVBQU9ZLFlBQWMsU0FBVUosR0FDM0JSLEVBQU9TLFFBQVFJLE9BQU9GLE9BQU9ILEVBQVEsSUFHekNSLEVBQU9jLGVBQWlCLFNBQVVOLEdBQzlCUixFQUFPUyxRQUFRTSxVQUFVSixPQUFPSCxFQUFRLElBRzVDUixFQUFPZ0IsaUJBQW1CLFNBQVVDLEdBQ2hDakIsRUFBT1MsUUFBUUMsVUFBVVEsS0FBS0QsR0FDOUJqQixFQUFPaUIsU0FBVyxJQUd0QmpCLEVBQU9tQixjQUFnQixTQUFVQyxHQUM3QnBCLEVBQU9TLFFBQVFJLE9BQU9LLEtBQUtFLEdBQzNCcEIsRUFBT29CLE1BQVEsSUFHbkJwQixFQUFPcUIsaUJBQW1CLFNBQVVDLEdBQ2hDdEIsRUFBT1MsUUFBUU0sVUFBVUcsS0FBS0ksR0FDOUJ0QixFQUFPc0IsU0FBVyxJQUd0QnRCLEVBQU91QixLQUFPLFdBQ1ZwQixFQUNLcUIsSUFBSSxRQUFVeEIsRUFBT0ksUUFBU0osRUFBT1MsU0FDckNnQixRQUFRLFNBQVVDLEdBQ2YxQixFQUFPMkIsUUFDSEMsS0FBTSxVQUNOQyxRQUFTLG9DQUdoQkMsTUFBTSxXQUNIOUIsRUFBTzJCLFFBQ0hDLEtBQU0sU0FDTkMsUUFBUyxrRkFLekI3QixFQUFPK0IsSUFBTSxXQUNUNUIsRUFDSzRCLElBQUksUUFBVS9CLEVBQU9JLFNBQ3JCNEIsS0FBSyxTQUFVTixHQUNaMUIsRUFBT1MsUUFBV2lCLEVBQUtBLEtBQVMiLCJmaWxlIjoibW9kdWxlcy9lbXByZXNhL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAuZW1wcmVzYScsIFsnbmdSb3V0ZSddKVxuICAgIC5jb25maWcoWyckcm91dGVQcm92aWRlcicsIGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAgICAgICAkcm91dGVQcm92aWRlclxuICAgICAgICAgICAgLndoZW4oJy9lbXByZXNhJywge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9lbXByZXNhL2luZGV4Lmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdFbXByZXNhQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcblxuICAgIC5jb250cm9sbGVyKCdFbXByZXNhQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRyb3V0ZVBhcmFtcycsICckbG9jYXRpb24nLCAnYXBpJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJHJvdXRlUGFyYW1zLCAkbG9jYXRpb24sIGFwaSkge1xuICAgICAgICAgICAgJHNjb3BlLnNpdGVfaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2l0ZScpO1xuXG4gICAgICAgICAgICAkc2NvcGUucmVtb3ZlVGVsZWZvbmUgPSBmdW5jdGlvbiAoaW5kaWNlKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmVtcHJlc2EudGVsZWZvbmVzLnNwbGljZShpbmRpY2UsIDEpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJHNjb3BlLnJlbW92ZUVtYWlsID0gZnVuY3Rpb24gKGluZGljZSkge1xuICAgICAgICAgICAgICAgICRzY29wZS5lbXByZXNhLmVtYWlscy5zcGxpY2UoaW5kaWNlLCAxKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICRzY29wZS5yZW1vdmVFbmRlcmVjbyA9IGZ1bmN0aW9uIChpbmRpY2UpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZW1wcmVzYS5lbmRlcmVjb3Muc3BsaWNlKGluZGljZSwgMSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkc2NvcGUuYWRpY2lvbmFUZWxlZm9uZSA9IGZ1bmN0aW9uICh0ZWxlZm9uZSkge1xuICAgICAgICAgICAgICAgICRzY29wZS5lbXByZXNhLnRlbGVmb25lcy5wdXNoKHRlbGVmb25lKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUudGVsZWZvbmUgPSAnJztcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICRzY29wZS5hZGljaW9uYUVtYWlsID0gZnVuY3Rpb24gKGVtYWlsKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmVtcHJlc2EuZW1haWxzLnB1c2goZW1haWwpO1xuICAgICAgICAgICAgICAgICRzY29wZS5lbWFpbCA9ICcnO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJHNjb3BlLmFkaWNpb25hRW5kZXJlY28gPSBmdW5jdGlvbiAoZW5kZXJlY28pIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZW1wcmVzYS5lbmRlcmVjb3MucHVzaChlbmRlcmVjbyk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmVuZGVyZWNvID0gJyc7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkc2NvcGUuZWRpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhcGlcbiAgICAgICAgICAgICAgICAgICAgLnB1dCgnc2l0ZS8nICsgJHNjb3BlLnNpdGVfaWQsICRzY29wZS5lbXByZXNhKVxuICAgICAgICAgICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0RhZG9zIGF0dWFsaXphZG9zIGNvbSBzdWNlc3NvISdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ09jb3JyZXUgdW0gZXJybyBhdHVhbGl6YW5kbyBvcyBkYWRvcyBkYSBlbXByZXNhLCB0ZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkc2NvcGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFwaVxuICAgICAgICAgICAgICAgICAgICAuZ2V0KCdzaXRlLycgKyAkc2NvcGUuc2l0ZV9pZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5lbXByZXNhID0gKGRhdGEuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

"use strict";function EmpresaController(e,t,o,a){e.site_id=localStorage.getItem("site"),e.removeTelefone=function(t){e.empresa.telefones.splice(t,1)},e.removeEmail=function(t){e.empresa.emails.splice(t,1)},e.removeEndereco=function(t){e.empresa.enderecos.splice(t,1)},e.adicionaTelefone=function(t){e.empresa.telefones.push(t),e.telefone=""},e.adicionaEmail=function(t){e.empresa.emails.push(t),e.email=""},e.adicionaEndereco=function(t){e.empresa.enderecos.push(t),e.endereco=""},e.edit=function(){a.put($('meta[name="api"]').attr("content")+"site/"+e.site_id,e.empresa).success(function(t){e.status={type:"success",message:"Dados atualizados com sucesso!"}}).error(function(){e.status={type:"danger",message:"Ocorreu um erro atualizando os dados da empresa, tente novamente mais tarde"}})},e.get=function(){a.get($('meta[name="api"]').attr("content")+"site/"+e.site_id).then(function(t){e.empresa=t.data.data})}}angular.module("myApp.empresa",["ngRoute"]).config(["$routeProvider",function(e){e.when("/empresa",{templateUrl:"modules/empresa/index.html",controller:"EmpresaController"})}]).controller("EmpresaController",["$scope","$routeParams","$location","$http",EmpresaController]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHJlc2EvaW5kZXguanMiXSwibmFtZXMiOlsiRW1wcmVzYUNvbnRyb2xsZXIiLCIkc2NvcGUiLCIkcm91dGVQYXJhbXMiLCIkbG9jYXRpb24iLCIkaHR0cCIsInNpdGVfaWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlVGVsZWZvbmUiLCJpbmRpY2UiLCJlbXByZXNhIiwidGVsZWZvbmVzIiwic3BsaWNlIiwicmVtb3ZlRW1haWwiLCJlbWFpbHMiLCJyZW1vdmVFbmRlcmVjbyIsImVuZGVyZWNvcyIsImFkaWNpb25hVGVsZWZvbmUiLCJ0ZWxlZm9uZSIsInB1c2giLCJhZGljaW9uYUVtYWlsIiwiZW1haWwiLCJhZGljaW9uYUVuZGVyZWNvIiwiZW5kZXJlY28iLCJlZGl0IiwicHV0IiwiJCIsImF0dHIiLCJzdWNjZXNzIiwiZGF0YSIsInN0YXR1cyIsInR5cGUiLCJtZXNzYWdlIiwiZXJyb3IiLCJnZXQiLCJ0aGVuIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFZQSxTQUFTQSxtQkFBbUJDLEVBQVFDLEVBQWNDLEVBQVdDLEdBQ3pESCxFQUFPSSxRQUFVQyxhQUFhQyxRQUFRLFFBT3RDTixFQUFPTyxlQUFpQixTQUFVQyxHQUM5QlIsRUFBT1MsUUFBUUMsVUFBVUMsT0FBT0gsRUFBUSxJQVE1Q1IsRUFBT1ksWUFBYyxTQUFVSixHQUMzQlIsRUFBT1MsUUFBUUksT0FBT0YsT0FBT0gsRUFBUSxJQVF6Q1IsRUFBT2MsZUFBaUIsU0FBVU4sR0FDOUJSLEVBQU9TLFFBQVFNLFVBQVVKLE9BQU9ILEVBQVEsSUFRNUNSLEVBQU9nQixpQkFBbUIsU0FBVUMsR0FDaENqQixFQUFPUyxRQUFRQyxVQUFVUSxLQUFLRCxHQUM5QmpCLEVBQU9pQixTQUFXLElBUXRCakIsRUFBT21CLGNBQWdCLFNBQVVDLEdBQzdCcEIsRUFBT1MsUUFBUUksT0FBT0ssS0FBS0UsR0FDM0JwQixFQUFPb0IsTUFBUSxJQVFuQnBCLEVBQU9xQixpQkFBbUIsU0FBVUMsR0FDaEN0QixFQUFPUyxRQUFRTSxVQUFVRyxLQUFLSSxHQUM5QnRCLEVBQU9zQixTQUFXLElBTXRCdEIsRUFBT3VCLEtBQU8sV0FDVnBCLEVBQ0txQixJQUFJQyxFQUFFLG9CQUFvQkMsS0FBSyxXQUFhLFFBQVUxQixFQUFPSSxRQUFTSixFQUFPUyxTQUM3RWtCLFFBQVEsU0FBVUMsR0FDZjVCLEVBQU82QixRQUNIQyxLQUFNLFVBQ05DLFFBQVMsb0NBR2hCQyxNQUFNLFdBQ0hoQyxFQUFPNkIsUUFDSEMsS0FBTSxTQUNOQyxRQUFTLGtGQVF6Qi9CLEVBQU9pQyxJQUFNLFdBQ1Q5QixFQUNLOEIsSUFBSVIsRUFBRSxvQkFBb0JDLEtBQUssV0FBYSxRQUFVMUIsRUFBT0ksU0FDN0Q4QixLQUFLLFNBQVVOLEdBQ1o1QixFQUFPUyxRQUFXbUIsRUFBS0EsS0FBUyxRQUtoRE8sUUFBUUMsT0FBTyxpQkFBa0IsWUFDNUJDLFFBQVEsaUJBQWtCLFNBQVVDLEdBQ2pDQSxFQUNLQyxLQUFLLFlBQ0ZDLFlBQWEsNkJBQ2JDLFdBQVkseUJBS3ZCQSxXQUFXLHFCQUFzQixTQUFVLGVBQWdCLFlBQWEsUUFBUzFDIiwiZmlsZSI6ImVtcHJlc2EvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRW1wcmVzYVxuICpcbiAqIEBwYXJhbSAkc2NvcGVcbiAqIEBwYXJhbSAkcm91dGVQYXJhbXNcbiAqIEBwYXJhbSAkbG9jYXRpb25cbiAqIEBwYXJhbSAkaHR0cFxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBFbXByZXNhQ29udHJvbGxlciAoJHNjb3BlLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHApIHtcbiAgICAkc2NvcGUuc2l0ZV9pZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaXRlJyk7XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdW0gdGVsZWZvbmUgZG8gZXNjb3BvXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5kaWNlXG4gICAgICovXG4gICAgJHNjb3BlLnJlbW92ZVRlbGVmb25lID0gZnVuY3Rpb24gKGluZGljZSkge1xuICAgICAgICAkc2NvcGUuZW1wcmVzYS50ZWxlZm9uZXMuc3BsaWNlKGluZGljZSwgMSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB1bSBlLW1haWwgZG8gZXNjb3BvXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5kaWNlXG4gICAgICovXG4gICAgJHNjb3BlLnJlbW92ZUVtYWlsID0gZnVuY3Rpb24gKGluZGljZSkge1xuICAgICAgICAkc2NvcGUuZW1wcmVzYS5lbWFpbHMuc3BsaWNlKGluZGljZSwgMSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB1bSBlbmRlcmXDp28gZG8gZXNjb3BvXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5kaWNlXG4gICAgICovXG4gICAgJHNjb3BlLnJlbW92ZUVuZGVyZWNvID0gZnVuY3Rpb24gKGluZGljZSkge1xuICAgICAgICAkc2NvcGUuZW1wcmVzYS5lbmRlcmVjb3Muc3BsaWNlKGluZGljZSwgMSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluc2VyZSB1bSB0ZWxlZm9uZSBubyBlc2NvcG9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0ZWxlZm9uZVxuICAgICAqL1xuICAgICRzY29wZS5hZGljaW9uYVRlbGVmb25lID0gZnVuY3Rpb24gKHRlbGVmb25lKSB7XG4gICAgICAgICRzY29wZS5lbXByZXNhLnRlbGVmb25lcy5wdXNoKHRlbGVmb25lKTtcbiAgICAgICAgJHNjb3BlLnRlbGVmb25lID0gJyc7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluc2VyZSB1bSBlLW1haWwgbm8gZXNjb3BvXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZW1haWxcbiAgICAgKi9cbiAgICAkc2NvcGUuYWRpY2lvbmFFbWFpbCA9IGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICAgICAkc2NvcGUuZW1wcmVzYS5lbWFpbHMucHVzaChlbWFpbCk7XG4gICAgICAgICRzY29wZS5lbWFpbCA9ICcnO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGljaW9uYSB1bSBlbXByZWdvIG5vIGVzY29wb1xuICAgICAqXG4gICAgICogQHBhcmFtIGVuZGVyZWNvXG4gICAgICovXG4gICAgJHNjb3BlLmFkaWNpb25hRW5kZXJlY28gPSBmdW5jdGlvbiAoZW5kZXJlY28pIHtcbiAgICAgICAgJHNjb3BlLmVtcHJlc2EuZW5kZXJlY29zLnB1c2goZW5kZXJlY28pO1xuICAgICAgICAkc2NvcGUuZW5kZXJlY28gPSAnJztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRWRpdGFyIEVtcHJlc2FcbiAgICAgKi9cbiAgICAkc2NvcGUuZWRpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGh0dHBcbiAgICAgICAgICAgIC5wdXQoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ3NpdGUvJyArICRzY29wZS5zaXRlX2lkLCAkc2NvcGUuZW1wcmVzYSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRGFkb3MgYXR1YWxpemFkb3MgY29tIHN1Y2Vzc28hJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnT2NvcnJldSB1bSBlcnJvIGF0dWFsaXphbmRvIG9zIGRhZG9zIGRhIGVtcHJlc2EsIHRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBYnJpciBFbXByZXNhXG4gICAgICovXG4gICAgJHNjb3BlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGh0dHBcbiAgICAgICAgICAgIC5nZXQoJCgnbWV0YVtuYW1lPVwiYXBpXCJdJykuYXR0cignY29udGVudCcpICsgJ3NpdGUvJyArICRzY29wZS5zaXRlX2lkKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZW1wcmVzYSA9IChkYXRhLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAuZW1wcmVzYScsIFsnbmdSb3V0ZSddKVxuICAgIC5jb25maWcoWyckcm91dGVQcm92aWRlcicsIGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAgICAgICAkcm91dGVQcm92aWRlclxuICAgICAgICAgICAgLndoZW4oJy9lbXByZXNhJywge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9lbXByZXNhL2luZGV4Lmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdFbXByZXNhQ29udHJvbGxlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcblxuICAgIC5jb250cm9sbGVyKCdFbXByZXNhQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRyb3V0ZVBhcmFtcycsICckbG9jYXRpb24nLCAnJGh0dHAnLCBFbXByZXNhQ29udHJvbGxlcl0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

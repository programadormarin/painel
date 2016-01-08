!function(){"use strict";function e(){return{restrict:"E",require:"?ngModel",link:function(e,r,i,n){function t(e){var r=e.target.files;r=angular.isDefined(i.multiple)?Array.prototype.slice.apply(r):r[0],n.$setViewValue(r,e)}if("file"===i.type&&angular.isDefined(n)){if(r.on("change",t),e.$on("$destroy",function(){r.off("change",t)}),i.maxsize){var a=parseInt(i.maxsize);n.$validators.maxsize=function(e,r){var i=e||r;angular.isArray(i)||(i=[i]);for(var n=i.length-1;n>=0;n--)if(i[n]&&i[n].size&&i[n].size>a)return!1;return!0}}if(i.accept){var u=i.accept.split(",");n.$validators.accept=function(e,r){var i=e||r;angular.isArray(i)||(i=[i]);for(var n=i.length-1;n>=0;n--)if(i[n]&&-1===u.indexOf(i[n].type))return!1;return!0}}}}}}angular.module("ngInputTypeFile",[]).directive("input",e)}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW5wdXQtdHlwZS1maWxlLmpzIl0sIm5hbWVzIjpbImlucHV0VHlwZUZpbGVEaXJlY3RpdmUiLCJyZXN0cmljdCIsInJlcXVpcmUiLCJsaW5rIiwic2NvcGUiLCJlbGVtZW50IiwiYXR0cnMiLCJuZ01vZGVsIiwidXBkYXRlTW9kZWxXaXRoRmlsZSIsImV2ZW50IiwiZmlsZXMiLCJ0YXJnZXQiLCJhbmd1bGFyIiwiaXNEZWZpbmVkIiwibXVsdGlwbGUiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiYXBwbHkiLCIkc2V0Vmlld1ZhbHVlIiwidHlwZSIsIm9uIiwiJG9uIiwib2ZmIiwibWF4c2l6ZSIsInBhcnNlSW50IiwiJHZhbGlkYXRvcnMiLCJtb2RlbFZhbHVlIiwidmlld1ZhbHVlIiwidmFsdWUiLCJpc0FycmF5IiwiaSIsImxlbmd0aCIsInNpemUiLCJhY2NlcHQiLCJzcGxpdCIsImluZGV4T2YiLCJtb2R1bGUiLCJkaXJlY3RpdmUiXSwibWFwcGluZ3MiOiJDQUFBLFdBQ0EsWUFvQkEsU0FBU0EsS0FDUixPQUNDQyxTQUFVLElBQ1ZDLFFBQVMsV0FDVEMsS0FBTSxTQUFVQyxFQUFPQyxFQUFTQyxFQUFPQyxHQTBDdEMsUUFBU0MsR0FBcUJDLEdBQzdCLEdBQUlDLEdBQVFELEVBQU1FLE9BQU9ELEtBSXhCQSxHQUhJRSxRQUFRQyxVQUFVUCxFQUFNUSxVQUdwQkMsTUFBTUMsVUFBVUMsTUFBTUMsTUFBTVIsR0FGNUJBLEVBQU0sR0FJZkgsRUFBUVksY0FBY1QsRUFBT0QsR0FoRDlCLEdBQW1CLFNBQWZILEVBQU1jLE1BQW9CUixRQUFRQyxVQUFVTixHQUFoRCxDQVNBLEdBTEFGLEVBQVFnQixHQUFHLFNBQVViLEdBQ3JCSixFQUFNa0IsSUFBSSxXQUFZLFdBQ3JCakIsRUFBUWtCLElBQUksU0FBVWYsS0FHbkJGLEVBQU1rQixRQUFTLENBQ2xCLEdBQUlBLEdBQVVDLFNBQVNuQixFQUFNa0IsUUFDN0JqQixHQUFRbUIsWUFBWUYsUUFBVSxTQUFTRyxFQUFZQyxHQUNsRCxHQUFJQyxHQUFRRixHQUFjQyxDQUNyQmhCLFNBQVFrQixRQUFRRCxLQUNwQkEsR0FBU0EsR0FFVixLQUFLLEdBQUlFLEdBQUlGLEVBQU1HLE9BQVMsRUFBR0QsR0FBSyxFQUFHQSxJQUN0QyxHQUFJRixFQUFNRSxJQUFNRixFQUFNRSxHQUFHRSxNQUFRSixFQUFNRSxHQUFHRSxLQUFPVCxFQUNoRCxPQUFPLENBR1QsUUFBTyxHQUlULEdBQUlsQixFQUFNNEIsT0FBUSxDQUNqQixHQUFJQSxHQUFTNUIsRUFBTTRCLE9BQU9DLE1BQU0sSUFDaEM1QixHQUFRbUIsWUFBWVEsT0FBUyxTQUFTUCxFQUFZQyxHQUNqRCxHQUFJQyxHQUFRRixHQUFjQyxDQUNyQmhCLFNBQVFrQixRQUFRRCxLQUNwQkEsR0FBU0EsR0FFVixLQUFLLEdBQUlFLEdBQUlGLEVBQU1HLE9BQVMsRUFBR0QsR0FBSyxFQUFHQSxJQUN0QyxHQUFJRixFQUFNRSxJQUF3QyxLQUFsQ0csRUFBT0UsUUFBUVAsRUFBTUUsR0FBR1gsTUFDdkMsT0FBTyxDQUdULFFBQU8sT0E1RFpSLFFBQVF5QixPQUFPLHNCQWdCZEMsVUFBVSxRQUFTdEMiLCJmaWxlIjoiY29tcG9uZW50cy9pbnB1dC10eXBlLWZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnbmdJbnB1dFR5cGVGaWxlJywgW10pXG5cbi8vIFdoZW4gcmVxdWlyZWQsIHRoaXMgbW9kdWxlIHdpbGwgYXV0b21hdGljYWxseSBoYW5kbGVcbi8vIGBuZy1tb2RlbGAgaW4gZmlsZSBpbnB1dHMuXG4vL1xuLy8gVXNhZ2U6XG4vL1xuLy8gICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmctbW9kZWw9XCJteU1vZGVsXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIG11bHRpcGxlIG1heHNpemU9XCIxMDAwMDBcIj5cbi8vXG4vLyBPcHRpb25zOlxuLy8gLSBgbXVsdGlwbGVgIChvcHRpb25hbCkgaWYgc3BlY2lmaWVkLCB0aGUgbmctbW9kZWwgd2lsbCBiZSBhbiBhcnJheSBvZiB0aGUgc2VsZWN0ZWQgZmlsZXNcbi8vICAgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgYSBzaW5nbGUgZmlsZTtcbi8vIC0gYGFjY2VwdGAgKG9wdGlvbmFsKSBpZiBzcGVjaWZpZWQsIGFuIGFuZ3VsYXIgYGFjY2VwdGAgdmFsaWRhdG9yIHdpbGwgYmUgYWRkZWQgdG8gY2hlY2sgXG4vLyAgIGZvciBmaWxlcycgbWltZSB0eXBlXG4vLyAtIGBtYXhzaXplYCAob3B0aW9uYWwpIGlmIHNwZWNpZmllZCwgYW4gYW5ndWxhciBgbWF4c2l6ZWAgdmFsaWRhdG9yIHdpbGwgYmUgYWRkZWQgdG8gY2hlY2tcbi8vICAgZm9yIGZpbGVzJyBzaXplXG4uZGlyZWN0aXZlKCdpbnB1dCcsIGlucHV0VHlwZUZpbGVEaXJlY3RpdmUpO1xuXG5mdW5jdGlvbiBpbnB1dFR5cGVGaWxlRGlyZWN0aXZlICgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcXVpcmU6ICc/bmdNb2RlbCcsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgbmdNb2RlbCkge1xuXHRcdFx0aWYgKGF0dHJzLnR5cGUgIT09ICdmaWxlJyB8fCAhYW5ndWxhci5pc0RlZmluZWQobmdNb2RlbCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtZW50Lm9uKCdjaGFuZ2UnLCB1cGRhdGVNb2RlbFdpdGhGaWxlKTtcblx0XHRcdHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGVsZW1lbnQub2ZmKCdjaGFuZ2UnLCB1cGRhdGVNb2RlbFdpdGhGaWxlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoYXR0cnMubWF4c2l6ZSkge1xuXHRcdFx0XHR2YXIgbWF4c2l6ZSA9IHBhcnNlSW50KGF0dHJzLm1heHNpemUpO1xuXHRcdFx0XHRuZ01vZGVsLiR2YWxpZGF0b3JzLm1heHNpemUgPSBmdW5jdGlvbihtb2RlbFZhbHVlLCB2aWV3VmFsdWUpIHtcblx0XHRcdFx0XHR2YXIgdmFsdWUgPSBtb2RlbFZhbHVlIHx8IHZpZXdWYWx1ZTtcblx0XHRcdFx0XHRpZiAoIWFuZ3VsYXIuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHZhbHVlID0gW3ZhbHVlXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IHZhbHVlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdFx0XHRpZiAodmFsdWVbaV0gJiYgdmFsdWVbaV0uc2l6ZSAmJiB2YWx1ZVtpXS5zaXplID4gbWF4c2l6ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYXR0cnMuYWNjZXB0KSB7XG5cdFx0XHRcdHZhciBhY2NlcHQgPSBhdHRycy5hY2NlcHQuc3BsaXQoJywnKTtcblx0XHRcdFx0bmdNb2RlbC4kdmFsaWRhdG9ycy5hY2NlcHQgPSBmdW5jdGlvbihtb2RlbFZhbHVlLCB2aWV3VmFsdWUpIHtcblx0XHRcdFx0XHR2YXIgdmFsdWUgPSBtb2RlbFZhbHVlIHx8IHZpZXdWYWx1ZTtcblx0XHRcdFx0XHRpZiAoIWFuZ3VsYXIuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHZhbHVlID0gW3ZhbHVlXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IHZhbHVlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdFx0XHRpZiAodmFsdWVbaV0gJiYgYWNjZXB0LmluZGV4T2YodmFsdWVbaV0udHlwZSkgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIHVwZGF0ZU1vZGVsV2l0aEZpbGUgKGV2ZW50KSB7XG5cdFx0XHRcdHZhciBmaWxlcyA9IGV2ZW50LnRhcmdldC5maWxlcztcblx0XHRcdFx0aWYgKCFhbmd1bGFyLmlzRGVmaW5lZChhdHRycy5tdWx0aXBsZSkpIHtcblx0XHRcdFx0XHRmaWxlcyA9IGZpbGVzWzBdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZpbGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGZpbGVzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZ01vZGVsLiRzZXRWaWV3VmFsdWUoZmlsZXMsIGV2ZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbn0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
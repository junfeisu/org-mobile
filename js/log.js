var id=getCookies('id','; ','=');
var org_name = getCookies('comName', '; ', '=');
$('.mui-title').html(org_name);

var app=angular.module('myApp',[]);
app.controller('myController',function($scope,myService){

});

app.factory('myService',function($http){
	return {
		var rootPath='http>//community.new.ncuhome.cn';
		request:function(callback,path,para){
			var promise=$http({
				method:"GET",
				path:rootPath+path,
				data:para,
				contentType:'application/json'
			});
			promise.success(callback);
			promise.error(function(err){
				console.log(err);
			})
		}
	}
});

app.directive('preDirective',function(myService,$rootScope){
	
})
var app=angular.module('myApp',[]);

app.factory('myService',function($http){
	return{
		request:function(callback,path,type,para){
			var rootPath='http://community.new.ncuhome.cn';
			promise=$http({
				url:rootPath+path,
				data:para,
				method:type,
				contentType:'application/json'
			});
			promise.success(callback);
			promise.error(function(error){
				alert(error);
			})
		}
	}
})
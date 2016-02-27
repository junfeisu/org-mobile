//设置cookie
function setCookies(name,value,iDay){
 	var oDate=new Date();
	oDate.setDate(oDate.getDate()+iDay);
	document.cookie=name+'='+value+';expires='+iDay+"path=/";
}

//获取cookie
function getCookies(name,split1,split2){
	var arr=document.cookie.split(split1);
	for(var i=0;i<arr.length;i++){
		var arr1=arr[i].split(split2);
		if(arr1[0]==name)
		{
		  return arr1[1];
		}
	}
	return '';
}

//删除cookie
function removeCookies(name){
	setCookies(name,value,-1);
}

//封装ajax
function jsonAjax(url,type,param,callback){
	$.ajax({
	url:"http://community.new.ncuhome.cn/"+url,
	type:type,
	data:param,
	contentType:"application/json",
	dataType:"json",
	success:callback,
    })
}

//angular
var app=angular.module('myApp',[]);

app.factory('myService',function($http){
	var rootPath='http://community.new.ncuhome.cn';
	return{
		request:function(callback,way,path,para){
			promise=$http({
				url:rootPath+path,
				method:way,
				data:para,
				contentType:'application/json',
				dataType:'json'
			});
			promise.success(callback);
			promise.error(function(err){
				console.log(err)
			})
		}
	}
})
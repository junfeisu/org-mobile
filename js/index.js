var app=angular.module('myApp',[]);

//总控制器
app.controller('myController',function($scope,mySerice,$document){
	mySerice.request(function(data){
		init(data,$scope);
	},'GET','/community/allcommunity',{contentType:'application/json'},'');
	$scope.whole=true;
	$scope.first=false;
	$scope.second=false;
	$scope.login=false;

	$scope.wholeShow=function(){
		$scope.whole=true;
		$scope.first=false;
		$scope.second=false;
	}

	$scope.firstShow=function(){
		$scope.whole=false;
		$scope.first=true;
		$scope.second=false;
	}

	$scope.secondShow=function(){
		$scope.whole=false;
		$scope.first=false;
		$scope.second=true;
	}

	$document.on('click',function(event){
		$scope.login=$scope.login?false:true;
		// return false;
	})

	$scope.search=function(){
		mySerice.request(function(data){
			$('.mui-table-view-cell').hide();
			init(data,$scope);
		},'GET','/community/communitysearch?search='+$scope.searchValue,{contentType:'application/json'},'');
	}
});

//请求服务
app.factory('mySerice',function($http){
	var rootUrl='http://community.new.ncuhome.cn'
	return {
		request:function(callback,way,path,head,para){
			var promise=$http({
				url:rootUrl+path,
				method:way,
				data:para,
				header:head
			});
			promise.success(callback);
			promise.error(function(err){
				console.log(err);
			})
		}
	}
});

//社团入口
app.directive('listDirective',function(){
	return {
		link:function(scope,ele,attrs){
			ele.on('click',function(){
				setCookies('logosrc', attrs.logosrc, 1);
			    setCookies('id', attrs.index, 1);
			    setCookies('comName', attrs.name, 1);
			})
		}
	}
});


//初始化函数
function init(data,obj){
	var data=eval(data);
	if(data.communities.length==0){
		return '';
	}else{
		var firstArr=[],secondArr=[];
		for(var i=0;i<data.communities.length;i++){
			data.communities[i].CommunityLogo='http://community.new.ncuhome.cn'+data.communities[i].CommunityLogo
			if(data.communities[i].Catagory==1){
				var x=i;
				firstArr.push(data.communities[x]);
			}else if(data.communities[i].Catagory==2){
				var z=i;
				secondArr.push(data.communities[z]);
			}
		}
		obj.alls=data.communities;
		obj.firsts=firstArr;
		obj.seconds=secondArr
	}
	if(data.student.IsLogin==false){
		obj.loginHtml='登录'
	}else{
		obj.loginHtml=data.student.NickName;
	}
	setCookies('studentid',data.student.StudentId,1);
	setCookies('userlogo',data.student.HeadPic,1);
	setCookies('islogin',data.student.IsLogin,1);
	setCookies('nickname', data.student.NickName,1);
}
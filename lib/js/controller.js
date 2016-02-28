// 首页
app.controller('indexController',function($scope,myService,$localStorage,$document){
	myService.request(function(data){
		init(data,$scope);
	},'/community/allcommunity','GET','');
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

	$('.button-icon').click(function(event){
		var event=event||ev;
		if(window.cancelBubble){
			console.log('1');
			event.cancelBubble=true;
		}else{
			console.log('2');
			event.stopPropagation()
		};
		$scope.$apply(function(){
			console.log('4');
			$scope.login=!$scope.login;
		})
	})

	$document.on('click',function(){
		$scope.$apply(function(){
			$scope.login=false;
		})
	})

	$scope.search=function(){
		myService.request(function(data){
			$('.mui-table-view-cell').hide();
			init(data,$scope);
		},'/community/communitysearch?search='+$scope.searchValue,'GET','');
	}
})

//资料页
app.controller('dataCtrl',function($scope,myService,$localStrorage){

})

//资料页
app.controller('dataCtrl',function($scope,myService,$localStrorage){
	
})

//资料页
app.controller('dataCtrl',function($scope,myService,$localStrorage){
	
})

//资料页
app.controller('dataCtrl',function($scope,myService,$localStrorage){
	
})

//资料页
app.controller('dataCtrl',function($scope,myService,$localStrorage){
	
})

//资料页
app.controller('dataCtrl',function($scope,myService,$localStrorage){
	
})
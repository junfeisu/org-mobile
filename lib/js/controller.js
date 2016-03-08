// 首页
app.controller('indexController',function($scope,myService,$document){
	myService.request(function(data){
		init(data,$scope);
	},'/community/allcommunity','GET','');
	$scope.whole=true;
	$scope.first=false;
	$scope.second=false;
	$scope.login=false;

	$scope.wholeShow=function(event){
		$scope.whole=true;
		$scope.first=false;
		$scope.second=false;
		$('.mui-control-item').removeClass('active');
		event.currentTarget.classList.add('active');
	}

	$scope.firstShow=function(event){
		$scope.whole=false;
		$scope.first=true;
		$scope.second=false;
		$('.mui-control-item').removeClass('active');
		event.currentTarget.classList.add('active');
	}

	$scope.secondShow=function(event){
		$scope.whole=false;
		$scope.first=false;
		$scope.second=true;
		$('.mui-control-item').removeClass('active');
		event.currentTarget.classList.add('active');
	}

	$('.button-icon').click(function(event){
		var event=event||ev;
		if(window.cancelBubble){
			event.cancelBubble=true;
		}else{
			event.stopPropagation()
		};
		$scope.$apply(function(){
			$scope.login=!$scope.login;
		})
	})

	$('.article').click(function(event){
		var event=event||ev;
		if(window.cancelBubble){
			event.cancelBubble=true;
		}else{
			event.stopPropagation()
		};
	})

	$document.on('click',function(){
		$scope.$apply(function(){
			$scope.login=false;
		})
	})

	$scope.search=function(){
		myService.request(function(data){
			$('.mui-table-view-cell').hide();
			$scope.searchValue='';
			init(data,$scope);
		},'/community/communitysearch?search='+$scope.searchValue,'GET','');
	}
})

//资料页和联系方式页
app.controller('dataCtrl',function($scope,myService){
	myService.request(function(data){
		loadInfo(data,$scope);
	},'/community/details/'+localStorage.getItem('id'),'POST','')
})

//活动页和资讯页
app.controller('newsCtrl',function($scope,myService){
	myService.request(function(data){
		loadNews(data,$scope)
	},'/community/activity/'+localStorage.id,'GET','')
})

//加入页
app.controller('joinCtrl',function($scope,myService){
	myService.request(function(data){
		loadCom(data,$scope);
	},'/community/joinus/'+localStorage.getItem('id'),'GET','')
})

//日志页
app.controller('logCtrl',function($scope,myService){
	myService.request(function(data){
		loadLog(data,$scope);
	},'/community/log/'+localStorage.id,'POST','')
})

//侃侃而谈页
app.controller('talkCtrl',function($scope,myService){
	myService.request(function(data){
		loadTalk(data,$scope);
	},'/community/message/'+localStorage.id,'GET','');
})

//提问页
app.controller('askCtrl',function($scope,myService){
    myService.request(function (data) {
        loadQuestion(data, $scope);
    }, '/community/message/' + localStorage.id, 'GET', '');
})

//成员页
app.controller('membCtrl',function($scope,myService){
	myService.request(function(data){
		loadPic(data,$scope)
	},'/community/picshow/'+localStorage.id,'GET','')
})


app.controller('talkController',function($scope,myService){
	var Cookie={
		id:getCookies('id','; ','='),
		studentId:getCookies('studentid','; ','='),
		nickName:getCookies('nickname','; ','='),
		userLogo:getCookies('userlogo','; ','='),
		logoSrc:getCookies('logosrc','; ','=')
	}
	myService.request(function(data){
		init(data,$scope);
	},'GET','/community/message/'+Cookie.id,'');
	// 当渲染到最后一条回复时添加回复的按钮
	$scope.addAnswer=function(){
		$('<a href="#reply" answer-directive class="entr">回复</a>').appendTo($('.mui-content-padded').children().children().last().children().last());
		$('.mui-content-padded').children().children().last().children().last().addClass('reply');
	};
	$('.reply').delegate('a','click',function(){
		alert('13');
		setCookies('messageid',$(this).parent().parent().parent().attr('messageid'),1)
	})

	$scope.ask=function(){
		var ques = JSON.stringify({
            MessageContent: $scope.ques,
            StudentId: Cookie.studentId,
            NickName: Cookie.nickName,
            HeadPic: Cookie.userLogo
        });
		myService.request(function(data){
			postQues(data);
		},'POST','/community/Question/'+Cookie.id,ques)
	}

	$scope.answer=function(){
		var MessageId=getCookies('messageid','; ','=');
		var answ = JSON.stringify({
	        MessageContent: $scope.answ,
	        StudentId: Cookie.studentId,
	        NickName: Cookie.nickName,
	        HeadPic: Cookie.userLogo
	    })
		myService.request(function(data){
			postQues(data);
		},'POST','/community/reply'+MessageId,answ)
	}
})

function init(data,obj){
	var repl=new Array();
	var mes=new Array();
	var isQuesNull;
	isQuesNull=data.messages.length===0?true:false;
	if(isQuesNull==false){
		for(var i=0;i<data.messages.length;i++){
			mes.push(data.messages[i]);
			// 把这段对话的问题加进回复的数组使之一起渲染出来
			data.messages[i].Replies.unshift({
				'Content':data.messages[i].MessageContent,
				'HeadPic':data.messages[i].HeadPic,
				'UserName':data.messages[i].NickName
			})
			for(var j=0;j<data.messages[i].Replies.length;j++){
				repl.push(data.messages[i].Replies[j])
			}
		}
		obj.mesgs=mes;
		obj.repls=repl;
	}else{
		var all=document.querySelector('.all');
		all.innerHTML='<p class="null">暂无问题信息</p>';
	}
}

function postQues(data){
	data.message==true?location.href="my-ask.html":alert(data.message);
}

//社团入口
app.directive('listDirective',function(){
	return {
		link:function(scope,ele,attrs){
			ele.on('click',function(){
				localStorage.setItem('logosrc', attrs.logosrc);
			    localStorage.setItem('id', attrs.index);
			    localStorage.setItem('comName', attrs.name);
			})
		}
	}
});

//加入我们
app.directive('joinDirective',function(myService){
	return {
		link:function(scope,ele,attrs){
			ele.on('click',function(){
				var info=JSON.stringify({
	              		DepartmentId:$('.tags').find("input:radio[name='YPBM']:checked").attr('departmentid'),
						Name:$('.namebox').val(),
	              		Gender:$('input:radio[name="XB"]:checked').val(),
	              		StudentId:$('.IDbox').val(),
	              		Class:$('.ZYclassbox').val(),
	              		QQ:$('.QQbox').val(),
	              		Tel:$('.phonebox').val(),
	              		Introduction:$('.aboutbox').val()
				});
				myService.request(function(data){
					alert(data.message);
				},'/community/joinus/'+localStorage.getItem('id'),'POST',info)
			})
		}
	}
})

// 侃侃而谈（入口）
app.directive('onFinishRender',function($timeout){
	return {
		link:function(scope,ele,attrs){
				if(scope.$last==true){
					$timeout(function(){
						scope.$emit('addEntr')
					})
				}
		}
	}
})

// 侃侃而谈（提问）
app.directive('askDirective',function(myService){
	return {
		link:function(scope,ele,attrs){
			ele.on('click',function(){
				var ques = JSON.stringify({
			        MessageContent: $('#textarea').val(),
			        StudentId: localStorage.studentId,
			        NickName: localStorage.nickName,
			        HeadPic: localStorage.userLogo
			    });
				myService.request(function(data){
					postQues(data);
				},'/community/Question/'+localStorage.getItem('id'),'POST',ques)
			})
		}
	}
})

// 侃侃而谈（回答）
app.directive('answerDirective',function(myService){
	return {
		link:function(scope,ele,attrs){
			ele.on('click',function(){
				var answ = JSON.stringify({
			        MessageContent: $('#textarea1').val(),
			        StudentId: localStorage.studentId,
			        NickName: localStorage.nickName,
			        HeadPic: localStorage.userLogo
			    })
				myService.request(function(data){
					postQues(data);
				},'/community/reply'+localStorage.getItem('MessageId'),'POST',answ)
			})
		}
	}
})

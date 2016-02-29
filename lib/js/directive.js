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
				console.log(info);
				myService.request(function(data){
					alert(data.message);
				},'/community/joinus/'+localStorage.getItem('id'),'POST',info)
			})
		}
	}
})
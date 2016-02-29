//初始化函数
function init(data,obj){
	var data=eval(data);
	if(data.communities.length==0){
		return '';
	}else{
		var firstArr=[],secondArr=[];
		for(var i=0;i<data.communities.length;i++){
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
	localStorage.setItem('studentid',data.student.StudentId);
	localStorage.setItem('userlogo',data.student.HeadPic);
	localStorage.setItem('islogin',data.student.IsLogin);
	localStorage.setItem('nickname', data.student.NickName);
}

// 介绍和联系方式
function loadInfo(data,obj){
	var data=eval(data);
	var info={
		logosrc:localStorage.getItem('logosrc'),
		intr:data.community.CommunityIntroduction==null?'该社团暂无简介':data.community.CommunityIntroduction,
		cats:[
			{
				'value':data.community.Head==null?'联系人：暂无该信息':'联系人：'+data.community.Head
			},
			{
				'value':data.community.CommunityTel==null?'电话：暂无该信息':'电话：'+data.community.CommunityTel
			},
			{
				'value':data.community.CommunityQQ==null?'社团QQ：暂无该信息':'社团QQ：'+data.community.CommunityQQ
			},
			{
				'value':data.community.CommunityWeixin==null?'微信：暂无该信息':'微信：'+data.community.CommunityWeixin
			},
			{
				'value':data.community.CommunityWeibo==null?'微博：暂无该信息':'微博：'+data.community.CommunityWeibo
			}
		]
	}
	obj.inner=info;
}

//加入页
function loadCom(data,obj){
	var data=eval(data);
	var department=[];
	department=data;
	console.log(department);
	obj.depas=department;
}
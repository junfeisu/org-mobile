//主页
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

// 活动页
function loadNews(data,obj){
	var data=eval(data);
	var news=data.activities;
	obj.news=news;
}

// 日志页
function loadLog(data,obj){
	var data=eval(data);
	var log=data.Logs;
	obj.logs=log
}

//成员页
function loadPic(data,obj){
	var data=eval(data);
	if(data.Pictures.length==0){
		$('.mui-content').html('该社团暂未添加任何成员照片')
	}else{
		var pic=data.allMembers;
		obj.pics=pic;
	}
}

// 侃侃而谈
function loadTalk(data,obj){
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

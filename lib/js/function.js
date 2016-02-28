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
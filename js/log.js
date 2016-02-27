var id=getCookies('id','; ','=');
var org_name = getCookies('comName', '; ', '=');
$('.mui-title').html(org_name);

app.controller('myController',function($scope,myService){
	myService.request(function(data){
		for(var i=0;i<data.Logs.length;i++){
			data.Logs[i].IndexPic='http://community.new.ncuhome.cn'+data.Logs[i].IndexPic
		}
		$scope.logs=data.Logs
	},'POST','/community/log/'+id,'')
});

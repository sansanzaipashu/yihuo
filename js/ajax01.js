/*
 type:get/post
 url:资源路径（接口地址）
 data:前端给后台的数据{key:value1,key2:value2}=>key1=value1&key2=value2
 cb:回调函数，前端接收的数据之后的处理函数
 * */

/*//此种方式，参数位置不能改变，不够灵活
function ajax(type,url,data,cb){
	//对传过来数据进行处理
	var str = "";
	for(var i in data){
		str += i + "=" +data[i] + "&";
		//最后一个数据的$去掉
		str = str.replace(/&$/,"");//利用正则替换成空
	}
	
	//创建Ajax对象
	//处理兼容性
	if(window.XMLHttpRequest){
		var xhr=new XMLHttpRequest();
		//现代浏览器创建ajax对象
	}else{
		var xhr=new ActiveXObject("Microsoft.XMLHTTP");
		//IE6创建Ajax对象
	}
	
	//判断type类型
	if(type.toUpperCase()==="GET"){
		//保证后台人员无论大写或小写都能获取到
		if(str==""){//不需要前端传数据时
			xhr.open("GET",url,true);
		}else{
			xhr.open("GET",url+"?"+str,true);
		}
		xhr.send();
	}
	if(type.toUpperCase()==="POST"){
		xhr.open("POST",url,true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(str);
	}
	
	//监听状态变化
	xhr.onreadystatechange=function(){
		//当 readyState 等于 4 且状态为 200 时，表示响应已就绪：
		if(xhr.readyState==4){//4: 请求已完成，且响应已就绪
			if(xhr.states==200){//200: "OK"
				var data=xhr.responseText;
				cd(data);
			}
		}
	}
}*/

//传对象，比较灵活
function ajax(obj){
	//对传过来数据进行处理
	var str = "";
	for(var i in obj.data){
		str += i + "=" +obj.data[i] + "&";
		
	}
	//最后一个数据的$去掉
	str = str.replace(/&$/,"");//利用正则替换成空
	
	//创建Ajax对象
	//处理兼容性
	if(window.XMLHttpRequest){
		var xhr=new XMLHttpRequest();
		//现代浏览器创建ajax对象
	}else{
		var xhr=new ActiveXObject("Microsoft.XMLHTTP");
		//IE6创建Ajax对象
	}
	
	//判断type类型
	if(obj.type.toUpperCase()==="GET"){
		//保证后台人员无论大写或小写都能获取到
		if(str==""){//不需要前端传数据时
			xhr.open("GET",obj.url,true);
		}else{
			xhr.open("GET",obj.url+"?"+str,true);
		}
		xhr.send();
	}
	if(obj.type.toUpperCase()==="POST"){
		xhr.open("POST",obj.url,true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(str);
	}
	
	//监听状态变化
	xhr.onreadystatechange=function(){
		//当 readyState 等于 4 且状态为 200 时，表示响应已就绪：
		if(xhr.readyState==4){//4: 请求已完成，且响应已就绪
			if(xhr.status==200){//200: "OK"
				var data=xhr.responseText;
				obj.cb(data);
			}
		}
	}
}
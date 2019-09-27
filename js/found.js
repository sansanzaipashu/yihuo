$(function(){
	//菜单点击
	$(".content-list li").click(function(){
		$(this).find("a").addClass("a-dianji").end().siblings().find("a").removeClass("a-dianji")
	})
	//点击关注
	$(".pei-btn").click(function(){
		$(this).addClass("pei-btn-b").siblings().removeClass("pei-btn-b");
	})
//	$("body").css("background","pink")
})

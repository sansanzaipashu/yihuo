$(window).load(function() {
	             $('#full_feature').swipeslider();
	        })

$(function(){
	$(".t_list li").mouseover(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		var index=$(this).index();
		var $li=$(".bigbox li").eq(index);
		$li.addClass("show").siblings().removeClass("show");
	})
	$(".guanzhu").click(function(){
		$(this).css({"background":"#EEC14F","color":"#fff"}).text("已关注").click(function(){
//			$(this).css({"border":"solid 1px #EEC14F","color":"#EEC14F","background":"#fff"}).text("+关注")
		})
	})
	
	
	$.ajax({
		
		dataType:"json",
		success:function(data){
			console.log(data);
		}
	})
})

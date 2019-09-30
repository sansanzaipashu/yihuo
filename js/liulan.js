
$(function(){
	$(".tab li").mouseover(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		var index=$(this).index();
		var $li=$(".neirong li").eq(index);
		$li.addClass("show").siblings().removeClass("show");
	})
})
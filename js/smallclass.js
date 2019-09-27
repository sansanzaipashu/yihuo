$(function(){
	$(".icon-dayuhao").click(function(){
		location.href="project.html"
	});
	console.log($(".nav_ul li a"))
	$(".nav_ul li").click(function(){
		console.log($(this).siblings())
		$(this).find("a").addClass("nav_li").end().siblings().find("a").removeClass("nav_li");
		
	});
})

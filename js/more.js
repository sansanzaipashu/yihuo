function foo(){
	var divDisp = document.getElementById("two").style.display;
	if(divDisp == "block"){
		document.getElementById("soutxt").style.display = "none";
	}else{
		document.getElementById("soutxt").style.display = "block";
		document.getElementById("one").style.display = "none";
		document.getElementById("wen").style.display = "none";
	}
}
$(function(){
     $(".nav-2>li").mouseover(function(){
     $(this).addClass("active").siblings().removeClass("active");
     var index = $(this).index();
     var $li = $(".content>li").eq(index);
     $li.addClass("show").siblings().removeClass("show");
        })
})

$(function(){
	$("#nav-1>span").click(function(){
		window.history.go(-1);
	})
})

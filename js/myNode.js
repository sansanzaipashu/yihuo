$(function(){
	$(".icon-dayuhao").click(function(){
		location.href="../index.html"
	})
	$(".btn").click(function(){
		$(".content-fenlei p").hide();
		txt=$("<input type='text'>")
		$(".content-fenlei ul").append($("<li>"));
		$(".content-fenlei li:last").append(txt);
		$(".content-fenlei li input").focus(function(){
			$(this).css("border","1px solid gray")
		});
		$(".content-fenlei li input").blur(function(){
			$(this).css("border",0)
		})
		
//		$(".content-fenlei li:last input").blur(function(){
//			value=$(".content-fenlei li:last input").val();
//			console.log(value);
//			$(".content-fenlei li:last input").replaceWith($("<p>"));
//			$(".content-fenlei li:last p").html(value);
//		})
//		for(let i=0;i<$(".content-fenlei li").length;i++){
//			$(".content-fenlei li").eq(i).find("input").blur(function(){
//				console.log(i)
//			value=$(this).find("input").val();
//			console.log(value);
//			$(".content-fenlei li").eq(i).find("input").replaceWith($("<p>"));
//			$(".content-fenlei li").eq(i).find("p").html(value);
//		})
//		}
		
		
	})
	
})

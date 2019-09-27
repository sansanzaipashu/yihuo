$(function(){
	$(".icon-dayuhao").click(function(){
		location.href="../index.html"
	})
	$(".btn").click(function(){
		$(".content-fenlei p").hide();
		txt=$("<input type='text'>")
		$(".content-fenlei ul").append($("<li>"));
		$(".content-fenlei li:last").append(txt);
		$(".content-fenlei li:last input").focus();
		
		$(".content-fenlei li:last input").blur(function(){
			value=$(".content-fenlei li:last input").val();
			console.log(value);
			$(".content-fenlei li:last input").replaceWith($("<p>"));
			$(".content-fenlei li:last p").html(value);
		})
		
	})
	
})

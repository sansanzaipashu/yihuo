$(function(){
	$("#list li").click(function(){
		
	$(this).find("a").addClass("first").end().siblings().find("a").removeClass("first");
	});
	
	$(".zonghe span").click(function(){
		$(this).addClass("zh").siblings().removeClass("zh");});
	
	
		newAll();
		
	function newAll(){
			var url = "https://www.fastmock.site/mock/9a7e854fb134a595aa0eb664e6de6550/api/home_all";
			$.ajax({
			url:url,
			dataType: "json",
			success:function(data) {
				var $content = $(".list");
				$.map(data,function(value,index){
						console.log(value);
					addnews($content,value);
				
				})
			}
		})
		}
		
		function addnews(index,value){
			var $item = "";
			for(let i =0;i<value.length;i++){
				$item = $(""+`
				<li>
				<div class="zuo">
				<img src="${value[i].imgsrc}" >
			</div>
			<div class="you">
				<p class="p1">${value[i].titl}</p>
				<p class="p2"><span>${value[i].keyword}</span><span>静物</span><span>花卉</span></p>
				<p class="p3"><em>导师：${value[i].tutor}</em><span>${value[i].bought}人已购</span></p>
			</div>
			</li>
				`);
				 index.append($item);
				
			}
		}
		
	
})
$(function(){
	Extension();
	function Extension(){
		var url = "https://www.fastmock.site/mock/9a7e854fb134a595aa0eb664e6de6550/api/home_all";
		$.ajax({
			url:url,
			dataType:"json",
			success:function(data){
				var $ul = $("#list");
				 $.map(data,function(value){
                    createExtension($ul,value);
              });
			}
		})
	}
	function createExtension(dom,value){
		console.log(value);
		var itm = "";
		for(let i = 0;i<value.length;i++){
			itm = 
			`<li>
                <div class="li_wrap" id="li_wrap">
                    <div class="wrap_img" id="wrap_img">
                        <img src="${value[i].image}" alt="">
                    </div>
                    <div class="wrap_con" id="wrap_con">
                        <div class="title" id="title">${value[i].titl}</div>
                        <div class="label" id="lable">
                            <span>${value[i].keyword[0]}</span>
                            <span>${value[i].keyword[1]}</span>
                        </div>
                        <div class="tutor" id="tutor">
                            <div>导师:<span>${value[i].tutor}</span></div>
                            <div class="shop"><span>${value[i].bought}</span>人已购</div>
                        </div>
                    </div>
                </div>
            </li>`;
            dom.append(itm);
		}
	}
});

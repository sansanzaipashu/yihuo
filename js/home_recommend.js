//轮播图的图片
//推荐的新闻
$(function(){
    newsRecommend();
     function newsRecommend (){
        var url = "https://www.fastmock.site/mock/9a7e854fb134a595aa0eb664e6de6550/api/recommend";
        $.ajax({
            url: url,
            dataType: "json",
            success: function (data) {
                //遍历数据，创建每一个推荐信息列表
                var $recomm_news = $(".list");
                // $.each(data,function(index,value){
                //     console.log(value);
                //     for(let i = 0;i<value.length;i++){
                //         var $item = createNewsreomm(index,value);
                //         $recomm_news.append($item);
                //     }
                    
                    
                // })
                $.map(data,function(value,index){
                    // console.log(index);
                    // console.log(index);
                    // console.log(value);
                    createNewsreomm($recomm_news,value);
                    // $recomm_news.append($item);
                })
            }
        });
     }


     //创建每一天信息
     function createNewsreomm(index,value){
        // console.log(index[0]);
        // console.log(value[0].title);
        var $item = "";
        for(let i = 0;i<value.length;i++){
            $item = $(""+`
         
            <div class="recomm-news">
                <div class="news-title">
                    <div>
                        <span></span>
                        <b>${value[i].title}</b>
                    </div>
                </div>
                <div class="news-content">
                    <div class="n-c-top">
                        <div>
                            <span><a href="#">${value[i].keyword}</a></span>
                            <p><a href="#">${value[i].more}</a></p>
                        </div>
                        <span><a href="#">进入专栏  ></a></span>
                    </div>
                    <div class="n-c-bom">
                        <div class="video-play">
                            <span class="iconfont icon-bofang"></span>
                            <video src="#">   
                            </video>
                        </div>
                        <div class="video-content">
                            <p><a href="#">${value[i].newstitle}</a></p>
                            <p><a href="#">导师：${value[i].tutor}</a></p>
                            <p><a href="#">已有${value[i].people}人听过</a></p>
                            <p><a href="#">时长${value[i].time}</a></p>
                        </div>
                    </div>
                </div>
            </div>
         
         `);
         index.append($item);
        }
         
     }
    
}) 
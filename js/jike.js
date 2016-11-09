$(function() {
    //nav 导航菜单
    show(".professional-school", ".profess-submenu");
    show(".vip", ".vip-submenu");
    show(".jke-community", ".sq-submenu");
    function show(obj1, obj2) {
        $(obj1).hover(function() {
            $(obj2).show();
            show(obj2, obj2);
        }, function() {
            $(obj2).hide();
        });
    }
    //search 按钮
    $(".search-icon").on("click",function(){
    	$(".search-box").addClass("scale");
    });
    //关闭search
    $(".close").on("click",function(){
    	$(this).parent().removeClass('scale')
    });
    //gotop 按钮
    $(window).scroll(function(){
    	$scrollTop = $(this). scrollTop();
    	if ($scrollTop > 0) {
    		$(".gotop").show(100);
    	}else{
    		$(".gotop").hide(100);
    	}
    });
    //点击回到页头
    $(".gotop").on("click",function(){
    	$('body,html').animate({scrollTop:0},500);
    });
    //使用Tab键回到顶部
    $(document).keypress(function(event) {
    	var keynum =event.keycode?event.keyCode : event.which;
    	if (keynum==9){
    		$('body,html').animate({scrollTop:0},0);
    	}
    });

    //切换浏览模式
    $(".icon-kuai").on("click",function(){
        console.log(1);
        if ($(".mode1").css("display")==="block") {
            return;
        }else{
            $(".mode1").css("display","block").siblings().css("display","none");
        }
    });
    $(".icon-list").on("click",function(){
        if ($(".mode2").css("display")==="block") {
            return;
        }else{
            $(".mode2").css("display","block").siblings().css("display","none");
        }
    });
    
});
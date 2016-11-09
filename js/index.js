requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'jquery.min',
        switcher:'../app/switcher',
        sp:'../app/split-page',
        gotop:'../app/gotop'
    }
});
requirejs(['jquery','switcher','sp','gotop'],function ($,switcher,sp,gotop) {
    switcher({
        parent:$('.switch-btn'),
        target:$('#mode'),
        class:['mode1','mode2']
    });
    sp({
        perPageNum: 18,
        totalNum: 1000,
        showPage:5
    });
    gotop({
        target:$('#gotop'),
        showPosition: 0,
        speed: 500

    })
    //search 按钮
    $(".search-icon").on("click",function(){
        $(".search-box").addClass("scale");
    });
    //关闭search
    $(".close").on("click",function(){
        $(this).parent().removeClass('scale')
    });
});
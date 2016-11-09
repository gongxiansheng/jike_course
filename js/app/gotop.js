define(['jquery'],function($){

	/**
	 *
	 *回到顶部插件
	 *@param {obj} options[分页属性]
	 * options参数详情：
	 * speed:回到顶部速度， 默认为0；
	 * showPosition:滚动多少图标显示，默认100
	 * target:事件对象 jquery element
	 * 
	**/ 
	return function(options){
		var opt = {};
		opt.speed = options.speed || 0;
		opt.showPosition = options.showPosition || 100;
		var obj = options.target;
		if (opt.showPosition) {
			obj.css('display','block');
		}else{
			obj.hide();
		}
		$(window).scroll(function() {
			if ($(window).scrollTop() >= opt.showPosition) {
				obj.css('display','block');
			}else{
				obj.hide();
			}
		});
		obj.on("click",function(){
			if (opt.speed === 0) {
				$('body,html').scrollTop(0);
			}else{
				$('body,html').animate({scrollTop:0},opt.speed);
			}
    	});
	}
})
define(['jquery'],function($) {
	
	/**
	 *
	 *新闻陈列方式
	 *@param {obj} options[分页属性]
	 * options参数详情：
	 * parent:事件对象；
	 * class:[],对应方式的类名
	 * target:需要改变的对象 jquery element
	 * 
	**/ 
	return function(options){
		var opt = {};
		opt.parent = options.parent || $('body');
		var $switch =  opt.parent;
		$switch.each(function(index,el){
			$(this).on("click",function(){
				options.class.forEach(function(el,index){
					options.target.removeClass(el);
				});
				options.target.addClass(options.class[index]);
			});
		});
	}
});
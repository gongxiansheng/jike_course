define(['jquery'],function($) {
	
	/**
	 *
	 *分页插件
	 *@param {obj} options[分页属性]
	 * options参数详情：
	 * perPageNum:每页的数据量， 默认为10；
	 * totalNum:总的数据量，必填
	 * showPage:显示的页数，默认为6
	 * 
	**/ 
	return function(options){
		var opt = {};
		opt.parent = options.parent || $('body');
		opt.perPageNum=options.perPageNum||10;
		opt.showPage=options.showPage || 6;
		if (opt.showPage>7) {
			opt.showPage=7;
		}
		var sp = $("#split-page");
		sp.html('<div data-page="home"><a href="#">首页</a></div>'+
                            '<div data-page="prev"><a href="#">上一页</a></div>'+
                            '<div data-page="next"><a href="#">下一页</a></div>'+
                            '<div data-page="end"><a href="#">末页</a></div>'+
                            '<div data-page="total"> 共 <span>90</span> 页 </div>'+
                            '<div data-page="direct"> 当前 <input type="text" value="1" name=""> 页 <button>确定</button></div>');
		var $ul = $('<ul></ul>');
		$ul.attr('data-page','page');
		for (var i = 1; i <=opt.showPage; i++) {
			$ul.append('<li><a href="#">'+i+'</a></li>');
		}
		$ul.append('<li>...</li>');
		sp.find('[data-page="prev"]').after($ul);
	}
})
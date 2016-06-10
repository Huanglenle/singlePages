$(function(){

	//轮播图焦点按钮定位
	var adHeight = $(".adImg").height();
	$("#adLoop").height(adHeight);
	$(window).resize(function() {
		var adHeight = $(".adImg").height();
		$("#adLoop").height(adHeight);
	});
	
	//轮播图
	var btns = $("#adLoop .btn");
	var imgs =$("#ad .adImg");

	var i= 0;
	var timer = setInterval(autoplay,3000);

	function autoplay() {
		i++;
		if(i == 3){
			i = 0;
		}
		imgs.eq(i).fadeIn(300).siblings().fadeOut(300);
		btns.eq(i).addClass('selected').siblings().removeClass('selected');
	}
});
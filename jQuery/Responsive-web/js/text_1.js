$(function(){
	var button = $("#button"),
		list = $("#list");
//像素小于640px时，顶部导航
  	button.on("click",function(){
  		if(button.is(".menu")){
  			list.css("display","block");
  			button.removeClass("menu");
  			button.addClass("close");
  		}else{
  			list.css("display","none");
  			button.removeClass("close");
  			button.addClass("menu");
  		};
  	});

//轮播图
	var imgs = $(".ads");
	var btns = $("#ad_buttons span");
	// console.log(btns.length);

//焦点轮播
	btns.each(function(index) {
		var btNode = $(this);
		btNode.mouseover(function() {
			btNode.addClass("checked").siblings().removeClass("checked");
            var index = btNode.index();
            // console.log(index);
            imgs.eq(index).fadeIn(300).siblings().fadeOut(30);
		});
	});

//自动轮播
	var i = 0;
	var timer = setInterval(autoplay,3000);

	//核心向右运动函数
	function autoplay(){
		i++;
		if(i == 3){
			i = 0;
		};
		imgs.eq(i).fadeIn(300).siblings().fadeOut(30);
		btns.eq(i).addClass("checked").siblings().removeClass("checked");
	}

	//鼠标经过，停止轮播
	$("#ad").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoplay,3000);
	})

//左右按钮轮播
	var prev = $("#prev"),
	    next = $("#next");
	prev.click(function() {
		i--;
		if(i == -1){
			i = 2;
		};
		imgs.eq(i).fadeIn(300).siblings().fadeOut(30);
		btns.eq(i).addClass("checked").siblings().removeClass("checked");
	});

	next.click(function(){
		autoplay();
	});

});
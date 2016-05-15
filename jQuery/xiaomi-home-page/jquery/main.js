$(function(){

//商品搜索
	var $hide_div = $(".hide_div");
 $(".hide_click").hover(function(){
 	$hide_div.slideDown(700);
 },function(){
 	$hide_div.slideUp(700);
 });

 $("#search").hover(function(){
 	$("#search input,#search button").addClass("search");
 	$("#search button").css("border-left","none");
 },function(){
 	$("#search input,#search button").removeClass("search");
 });

$("#search input").focus(function(){
	$("#search_div1,#search_div2").css("display","none");
 	$("#search input,#search button").addClass("click_me");
 	$("#search_result").css("display","block");
 }).blur(function(){
	$("#search_div1,#search_div2").css("display","block");
 	$("#search input,#search button").removeClass("click_me");
	$("#search_result").css("display","none");
 	 });


 //导航标签切换
  $("#logo_box nav ul li").each(function(index){
  	var liNode = $(this);
    var ind = index;
  	liNode.hover(function(){
  		timeroutid = setTimeout(function(){
  			$("#logo_nav_content .selected").removeClass("selected");
	    	$("#logo_nav_content .logo_nav_content").eq(ind).addClass("selected");
  		},300);  	
    });
    $("#hor_nav").mouseleave(function(){
       $("#logo_nav_content .selected").removeClass("selected");  
    })  
  })
  
 //侧边导航
  $("#second_nav nav ul li").each(function(index){
  	var liNode = $(this);
  	liNode.hover(function(){
  		liNode.addClass("selected");
  		$("#second_nav_content .lists").eq(index).addClass("lists_selected").siblings().removeClass("lists_selected");
  	},function(){
  		$("#second_nav .selected").removeClass("selected");
  	});
  	$("#sidebar").mouseleave(function(){
        $("#second_nav_content .lists_selected").removeClass("lists_selected");
  	});
  });

//轮播图
//初始定义
var adNode = $("#ad_imgs li"),
    pagesNode = $("#pages li");

adNode.eq(0).show().siblings().hide();
pagesNode.eq(0).addClass("selected");

//手动焦点
    pagesNode.each(function(index){
    	var liNode = $(this); 
    	liNode.mouseover(function(){
    		liNode.addClass("selected").siblings().removeClass("selected");
    		var index = liNode.index();
    		// alert(index);
    		adNode.eq(index).fadeIn(300).siblings().fadeOut(30);
    	})

    });
 
 //点击左右按钮播放
       $("#ad_loop_btn .prev").click(function(){
            	i--;
                if(i == -1){
                	i = 4;
                }
            	adNode.eq(i).fadeIn(300).siblings().fadeOut(300);
            	pagesNode.eq(i).addClass("selected").siblings().removeClass("selected");     
       });
       $("#ad_loop_btn .next").click(function(){
            autoplay();
       });

//自动轮播
    var i = 0;
    var timer = setInterval(autoplay,3000);
    //核心向右运动函数
    function autoplay(){
    	i++;
        if(i == 5){
        	i = 0
        }
    	adNode.eq(i).fadeIn(300).siblings().fadeOut(300);
    	pagesNode.eq(i).addClass("selected").siblings().removeClass("selected");
    }

    $("#ad_loop,#ad_loop_btn").hover(function(){
    	clearInterval(timer);
    },function(){
    	// alert("111");
    	timer = setInterval(autoplay,3000);
    });

//小米明星单品

   $("#star_next,#star_prev").click(function(){
   	 auto();
   });


//自动轮播
   var timer2 = setInterval(auto,4000),
       a = 0;
    
   function auto(){
   	  $("#star_right .selected").removeClass("selected").siblings().addClass("selected");
    if(a == 0){
   	  $("#star_content").animate({"left":"-1225px"},1000);
   	  a = 1;
   	}else{
      $("#star_content").animate({"left":"0px"},1000);
      a = 0;
   	}
   }

  //鼠标经过，停止自动轮播
  
   $("#star").hover(function(){
   	   clearInterval(timer2);
   },function(){
       timer2 = setInterval(auto,4000);
   });


//鼠标滑过 上移

 $(".container li,#classify .father").hover(function(){
 	var liMe = $(this);
 	liMe.animate({"marginTop":"-5px"},200);
 	liMe.addClass("hover_me").siblings().removeClass("hover_me");
 	
 },function(){
 	$(this).animate({"marginTop":"0px"},200);
 	$(".container .hover_me").removeClass("hover_me");
 });

//鼠标滑过，橘色方块上移

$(".things .right li").each(function(){
    $("li").on({
       mouseenter:function(){
          $(this).children(".absolut").css("height","94px")
    }, mouseleave:function(){
          $(this).children(".absolut").css("height","0px")
   }
    });
})


 //标签切换
   $("#groups .header li").hover(function(index){
       $(this).addClass("selected").siblings().removeClass("selected");
       var index = $(this).index();
       $("#groups .things div").eq(index).addClass("right").siblings().removeClass("right");

   });


//four_box轮播

  $("#thiss .things .father").each(function(){
     $(this).on({
      mouseenter:function(){
         $(this).find(".btn_t").css({"display":"block"});
         $(this).addClass("hit");
         autoplay_t();
     },mouseleave:function(){
         $(this).find(".btn_t").css({"display":"none"});
         $(this).removeClass("hit");
     }

     })
 })



function autoplay_t(){
//four_box 小轮播
    var con_t = $(".hit .container_t li");
    var box_s = $(".hit .box_t li span");
//焦点轮播
    box_s.click(function(){
       var index = $(this).parent().index();
        $(".hit .box_t li .chosed").removeClass("chosed");
        $(this).addClass("chosed");

        $(".hit .container_t .selected").removeClass("selected");
        con_t.eq(index).addClass("selected");
    });

//按钮轮播
    var  a = 0;
    
    //核心函数
    function  four_auto(){
      $(".hit .box_t li .chosed").removeClass("chosed");
        $(".hit .box_t li").eq(a).children("span").addClass("chosed");
        
        $(".hit .container_t .selected").removeClass("selected");
        con_t.eq(a).addClass("selected");
    }

    //下一个
    $(".hit .next_t").click(function(){
        a++;

        if( a == 4){
          a = 0;
        }
        four_auto();
    });

    //上一个
    $(".hit .prev_t").click(function(){
         a--;
         if(a == -1){
           a = 3;
         }
         four_auto();
    });
}

 });


window.onload=function(){
    var form = document.getElementsByTagName("form"),
	    fieldset = document.getElementsByTagName("fieldset"),
	    modifyValue = document.getElementsByClassName("modifyValue"),
	    boxs = document.getElementsByClassName("box");
	    nick = document.getElementById("nick"),
	    pwd = document.getElementById("pwd"),
	    pwd_message = document.getElementById("pwd_message"),
	    pwd_again = document.getElementById("pwd_again"),
	    pwd_again_message = document.getElementById("pwd_again_message"),
	    sex_1 = document.getElementById("sex_1"),
	    sex_2 = document.getElementById("sex_2"),
	    mes = document.getElementsByClassName("message");       // console.log(me);

    // 去除文本输入框默认值     
	    	for(var i = 0 ; i < modifyValue.length; i++){
			    modifyValue[i].value ="";
	    	};

    //输入框输入状态
            function ipt_keydown(whichBox){
			    whichBox.onkeydown = function(){
    		        this.style.border = "1px solid #569dde";
		            this.style.borderRadius = "8px";
			    	this.style.backgroundColor = "#f3f9fc";
			    	// this.className="modifyValue ipt-writing";
			    };
		    }
            
    //输入框失焦状态
		    function ipt_blur(whichBox){
    		        whichBox.style.backgroundColor = "#fff";
	    			if(whichBox.value.length == 0){
	    		       whichBox.style.border = "1px solid #c82e1a";
	    		       whichBox.style.radius = "8px";
    		        }else{
    		           whichBox.style.border = "1px solid #569dde";
	    		       whichBox.style.radius = "8px";
    		        }
            }; 

    //nick_box 昵称不为空
    	    ipt_keydown(nick);   	
	    	nick.onfocus = function(){
	            this.style.borderRadius = "8px";
		        mes[0].innerHTML = "<p>请输入昵称</p>";
	    	};	
	    	nick.onblur = function(){
    			if(nick.value.length == 0){
    		       mes[0].innerHTML = "<p class='ipt_click'>昵称不可以为空</p>";	
		        }else{
    		       mes[0].innerHTML = "<p class='okay'></p>";	  	
		        }
			    ipt_blur(this);
	    	};
  


    //pwd 1、6-16个字符 2、不能为9位以下纯数字 3、不能包含空格	        
    		ipt_keydown(pwd);
	    	pwd.onfocus = function(){
		       pwd_message.style.display = "block";
	    	};
	    	pwd.onblur = function(){
	    		ipt_blur(this);	   
	    	}

	    	//全局单子节除外，即汉字的长度
	    	function getLength(str){
	    		return str.replace(/[^\x00-xff]/g,"xx").length;
	    	}

	    	// 非法字符
	    	// var re_1 = /[^\w\u4e00-\u9fa5]/g; 
	    	
	    	pwd.onkeyup = function(){
	    		var pwd_message = document.getElementById("pwd_message");
	            var pwd_lis = pwd_message.childNodes;
	    		var pwd_length = getLength(this.value);

            // 1、6-16个字符
                console.log(pwd_length); 
	    		if(pwd_length > 16 || pwd_length < 6){
	    			pwd_lis[1].className = "no";
	    		}else if(pwd_length < 17 && pwd_length > 5){
	    			pwd_lis[1].className = "yes";
	    		}
	    	
	    	//2、不能为9位以下纯数字
	    	    if(/^\d{0,9}$/.test(pwd.value)){
	    			pwd_lis[3].className = "no";    	    	
	    	    }else{
	    			pwd_lis[3].className = "yes";    	    	   	    	
	    	    }
                
            //3、不能包含空格
                if(/\s/g.test(pwd.value)){
                	pwd_lis[5].className = "no";
                }else{
                	pwd_lis[5].className = "yes";
                }
                	console.log(pwd_lis[5]);
                
	    	}	    			  

    //pwd_again 与pwd一致
    		ipt_keydown(pwd_again);
    		pwd_again.onfocus = function(){
	            mes[2].innerHTML = "<p>请再次输入密码</p>"
    		};
    		pwd_again.onblur = function(){
    			ipt_blur(this);
                if(pwd_again.value.length == 0){
                	mes[2].innerHTML = "<p class='ipt_click'>请再次输入密码</p>"
                }else if( pwd_again.value == pwd.value){
                	mes[2].innerHTML = "<p class='okay'></p>"
                }else {            
                	mes[2].innerHTML = "<p class='fault'>密码不一致</p>"

                }
    		};
    
    //sex_box 
            function sex_checked (one,another){
            	one.className = "checked sex";
           		another.className = "sex";
            }
            sex_2.onclick = function(){
           		sex_checked(sex_2,sex_1);
            }
            sex_1.onclick = function(){
	            sex_checked(sex_1,sex_2);
            }

    //select_box

		    var birth_divs = document.getElementById("birthday").getElementsByTagName("div"),
		        birth_a = [],
		        birth_ul = [];
		    for(var j = 0; j < birth_divs.length; j++){
		    	    birth_a[j]= birth_divs[j].getElementsByTagName("a"),
		    	    birth_ul[j] = birth_divs[j].getElementsByTagName("ul");
		    }

        	for(var a = 0; a < birth_a.length; a++){
        		// console.log("1");
        		birth_a[a].id = a;
        		// console.log("2");

    			// birth_a[a].onclick = function(){
	      //   		for(var b = 0; b < birth_a.length; b++){
	      //   			birth_ul[b].style.display = "none";
	      //   		};
	      //   		birth_ul[this.id].style.display = "block";
       //  		};

	            (function(arg){         
	                birth_a[a].onclick = function() {         
	                   alert(arg);     
	                };     
	            })(a);//调用时参数
            			            	
            	}
          
	

                
            

};
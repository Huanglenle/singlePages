
//需要鼠标点击来触发事件，因此不需要共享onload事件
function showPic(whichpic) {
  if (!document.getElementById("placeholder")) return true;                                      ;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  if (!document.getElementById("description")) return false;
  if (whichpic.getAttribute("title")) {
    var text = whichpic.getAttribute("title");
    
  } else {
    var text = "";
  }
  var description = document.getElementById("description");
  if (description.firstChild.nodeType == 3) {
    description.firstChild.nodeValue = text;
  }
  return false;
}

//遍历imagegallery元素中的所有链接，并判断showPic函数是否执行成功
function prepareGallery() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;
  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  for ( var i=0; i < links.length; i++) {
    links[i].onclick = function() {
      return showPic(this);
	}
   
  }
  
}


//共享onload事件，使函数在网页加载完毕之后立即执行。
 function addLoadEvent(func)
 {
	 var oldonload=window.onload;//将事件处理函数的值存入变量oldonload
	 if(typeof window.onload!='function')//判断是否已经有函数绑定了window.onload这个处理函数
	 {
	 window.onload=func; //如果在这个处理函数上还没有绑定任何函数，像平时一样添加新函数
	 }
	 else
	 {                         //如果在这个处理函数上已经绑定了其他函数，把新函数追加到现有指令的末尾
		 window.onload=function() //创建匿名函数来容纳oldonload（）和func()
		    { 
			 oldonload();       //脱离这个函数之后的形式为：window.onload=oldonload;
			 func();           //window.onload=func;
			 }
	 }
 }
addLoadEvent(prepareGallery);//共享onload

function insertAfter(news,target)
{
	var parent=target.parentNode;
	if(parent==target)
	{
      target.appendChild(news,target);		
	}
	else{
		parent.insertBefore(news,target.nextSibling);
		}
}
//将结构和行为彻底的分开，将显示大图和描述从html文件中删除，并写入js中
function preparePlaceholder(){
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;
	var placeholder=document.createElement("img");
	placeholder.setAttribute("src","hello.jpg");
	placeholder.setAttribute("alt","Hello");
	placeholder.setAttribute("width","561");
	placeholder.setAttribute("height","344");
	placeholder.setAttribute("id","placeholder");
	var para=document.createElement("p");
	para.setAttribute("id","description");
	var txt=document.createTextNode("Choose an image.");
	para.appendChild(txt);
	document.body.appendChild(placeholder);
	document.body.appendChild(para);
	var gallery=document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(para,placeholder);
	}
	
addLoadEvent(preparePlaceholder);//共享onlad事件

window.onload = function(){
//像素小于640px时，顶部导航
	var button = document.getElementById("button"),
		list = document.getElementById("list");
	
	button.onclick = function(){
		// console.log("1");
		if(button.getAttribute("class") == "menu"){
			list.style.display = "block";
			button.className = "close";
		}else{
			list.style.display = "none";
			button.className = "menu";
		}
	}

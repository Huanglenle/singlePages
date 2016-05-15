
//��Ҫ������������¼�����˲���Ҫ����onload�¼�
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

//����imagegalleryԪ���е��������ӣ����ж�showPic�����Ƿ�ִ�гɹ�
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


//����onload�¼���ʹ��������ҳ�������֮������ִ�С�
 function addLoadEvent(func)
 {
	 var oldonload=window.onload;//���¼���������ֵ�������oldonload
	 if(typeof window.onload!='function')//�ж��Ƿ��Ѿ��к�������window.onload���������
	 {
	 window.onload=func; //���������������ϻ�û�а��κκ�������ƽʱһ������º���
	 }
	 else
	 {                         //�����������������Ѿ������������������º���׷�ӵ�����ָ���ĩβ
		 window.onload=function() //������������������oldonload������func()
		    { 
			 oldonload();       //�����������֮�����ʽΪ��window.onload=oldonload;
			 func();           //window.onload=func;
			 }
	 }
 }
addLoadEvent(prepareGallery);//����onload

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
//���ṹ����Ϊ���׵ķֿ�������ʾ��ͼ��������html�ļ���ɾ������д��js��
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
	
addLoadEvent(preparePlaceholder);//����onlad�¼�

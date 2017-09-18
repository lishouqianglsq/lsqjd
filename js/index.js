var close=document.getElementById("close");
var topbanner=document.getElementById("topbanner");
close.onclick=function(){
	topbanner.style.display="none";
}
var song=document.getElementById("song");
var city=document.getElementById("city");
song.onmouseenter=function(){
	city.className="site-nav-city cityshow";
}
song.onmouseleave=function(){
	city.className="site-nav-city";
}
city.onmouseenter=function(){
	city.className="site-nav-city cityshow";
}
city.onmouseleave=function(){
	city.className="site-nav-city";
}
var img=document.getElementById("img");
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var five=document.getElementById("five");
var six=document.getElementById("six");
var arr=document.getElementsByTagName("li");
one.onclick=function(){
	img.src="img/slider.jpg";
//	one.style.background="#e3e3e3";
	one.style.background="#C81623";
	two.style.background="#3E3E3E";
	three.style.background="#3E3E3E";
	four.style.background="#3E3E3E";
	five.style.background="#3E3E3E";
	six.style.background="#3E3E3E";
}
two.onclick=function(){
//	two.style.background="deepskyblue";
	img.src="img/22.jpg";
	one.style.background="#3E3E3E";
	two.style.background="#C81623";
	three.style.background="#3E3E3E";
	four.style.background="#3E3E3E";
	five.style.background="#3E3E3E";
	six.style.background="#3E3E3E";
}
three.onclick=function(){
	img.src="img/33.jpg";
	one.style.background="#3E3E3E";
	two.style.background="#3E3E3E";
	three.style.background="#C81623";
	four.style.background="#3E3E3E";
	five.style.background="#3E3E3E";
	six.style.background="#3E3E3E";
}
four.onclick=function(){
	img.src="img/44.jpg";
	one.style.background="#3E3E3E";
	two.style.background="#3E3E3E";
	three.style.background="#3E3E3E";
	four.style.background="#C81623";
	five.style.background="#3E3E3E";
	six.style.background="#3E3E3E";
}
five.onclick=function(){
	img.src="img/55.jpg";
	one.style.background="#3E3E3E";
	two.style.background="#3E3E3E";
	three.style.background="#3E3E3E";
	four.style.background="#3E3E3E";
	five.style.background="#C81623";
	six.style.background="#3E3E3E";
}
six.onclick=function(){
	img.src="img/66.jpg";
	one.style.background="#3E3E3E";
	two.style.background="#3E3E3E";
	three.style.background="#3E3E3E";
	four.style.background="#3E3E3E";
	five.style.background="#3E3E3E";
	six.style.background="#C81623";
}
var denglu=document.getElementById("denglu");
var guanbi=document.getElementById("guanbi");
var login=document.getElementById("login");
denglu.onclick=function(){
	login.style.display="block";
}
guanbi.onclick=function(){
	login.style.display="none";
}

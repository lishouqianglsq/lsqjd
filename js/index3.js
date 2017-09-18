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
one.onclick=function(){
	img.src="img/slider.jpg";
}
two.onclick=function(){
	img.src="img/22.jpg";
}
three.onclick=function(){
	img.src="img/33.jpg";
}
four.onclick=function(){
	img.src="img/44.jpg";
}
five.onclick=function(){
	img.src="img/55.jpg";
}
six.onclick=function(){
	img.src="img/66.jpg";
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

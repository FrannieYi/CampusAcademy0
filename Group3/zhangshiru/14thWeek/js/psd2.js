window.onload=function(){
	var banner=document.getElementsByClassName('banner');
	var banner_img=banner[0].getElementsByTagName('img');
	var timer=null;
	var index=0;
	var li_index=banner[0].getElementsByTagName('li');
	for(var i=0;i<li_index.length;i++){
		li_index[i].index=i;
	}
	for(var i=0;i<li_index.length;i++){
		li_index[i].onclick=function(){
			clearInterval(timer);
			index=this.index;
			for(var j=0;j<li_index.length;j++){
				banner_img[j].style.display="none";
				li_index[j].className="";
			}
			banner_img[index].style.display="block";
			li_index[index].className="current";
			timer=setInterval(lunbo,2500);
		}
	}
	
	timer=setInterval(lunbo,2500);
	function lunbo(){
		for(var j=0;j<banner_img.length;j++){
			banner_img[j].style.display="none";
			li_index[j].className="";
		}
		index++;
		if(index>1){
			index=0;
		}
		banner_img[index].style.display="block";
		li_index[index].className="current";
	}
	//以上部分是轮播
	//以下部分是回到顶部
	var back_top=document.getElementById('back-top');
	var timer2=null;//回到顶部动画计时器
	var timer3=null;//透明度动画计时器
	var Opacity=0;
	back_top.onclick=function(){
		timer2=setInterval(function(){
			var osTop=document.body.scrollTop || document.documentElement.scrollTop;
			var speed=Math.floor(-osTop/5);
			console.log(osTop);
			document.body.scrollTop = document.documentElement.scrollTop= osTop+speed;
			if (osTop==0) {
				clearInterval(timer2);
			}
		},50)
	}
	window.onscroll=function(){
		var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
		if(scrollTop>0){
			arrowShow(100);
		}else{
			arrowShow(0);
		}
	}
	function arrowShow(Taget){
		var backarrow=document.getElementById('back-top');
		clearInterval(timer3);
		timer3=setInterval(function(){
			var speed=0;
			if(Taget>Opacity){
				speed=10;
			}else{
				speed=-10;
			}
			if(Opacity==Taget){
				clearInterval(timer3);
			}else{
				Opacity+=speed;
				backarrow.style.opacity=Opacity;
			}
		},50)
	}
}


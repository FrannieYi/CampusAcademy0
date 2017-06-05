var mynew;
function newsss(mynew)
{
	if(mynew==1)
	{
		document.getElementById('news0').src="pic/o1.png";
		document.getElementById('news1').src="pic/o0.png";
		document.getElementById('news2').src="pic/o0.png";
		document.getElementById('news3').src="pic/o0.png";
		
		document.getElementById('newss').src="pic/news1.png";
	}
	else if(mynew==2)
	{
		document.getElementById('news0').src="pic/o0.png";
		document.getElementById('news1').src="pic/o1.png";
		document.getElementById('news2').src="pic/o0.png";
		document.getElementById('news3').src="pic/o0.png";
		
		document.getElementById('newss').src="pic/news0.png";
	}
	else if(mynew==3)
	{
		document.getElementById('news0').src="pic/o0.png";
		document.getElementById('news1').src="pic/o0.png";
		document.getElementById('news2').src="pic/o1.png";
		document.getElementById('news3').src="pic/o0.png";
		
		document.getElementById('newss').src="pic/news1.png";
	}
	else if(mynew==4)
	{
		document.getElementById('news0').src="pic/o0.png";
		document.getElementById('news1').src="pic/o0.png";
		document.getElementById('news2').src="pic/o0.png";
		document.getElementById('news3').src="pic/o1.png";
		
		document.getElementById('newss').src="pic/news0.png";
	}
	else{alert("error:304");}
}

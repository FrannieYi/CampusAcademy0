var arisepic;

function arised(arisepic)
{
	if(arisepic=='Enpic1'){
	document.getElementById(arisepic).style.backgroundImage="url(pic/koinonia10.png)";
	document.getElementById('transport1').style.opacity=1;
	document.getElementById('transport2').style.opacity=1;
	}
	else if(arisepic=='Enpic2'){
	document.getElementById(arisepic).style.backgroundImage="url(pic/koinonia10.png)";
	document.getElementById('transport3').style.opacity=1;
	document.getElementById('transport4').style.opacity=1;
	}
	else if(arisepic=='Enpic3'){
	document.getElementById(arisepic).style.backgroundImage="url(pic/koinonia10.png)";
	document.getElementById('transport5').style.opacity=1;
	document.getElementById('transport6').style.opacity=1;
	}
	else if(arisepic=='Enpic4'){
	document.getElementById(arisepic).style.backgroundImage="url(pic/koinonia10.png)";
	document.getElementById('transport7').style.opacity=1;
	document.getElementById('transport8').style.opacity=1;
	}
}


function leave(arisepic)
{
	if(arisepic=='Enpic1'){
	document.getElementById(arisepic).style.backgroundImage="url(pic/koinonia1.png)";
	document.getElementById('transport1').style.opacity=0;
	document.getElementById('transport2').style.opacity=0;
	}
	else if(arisepic=='Enpic2'){
	document.getElementById(arisepic).style.backgroundImage="url(pic/koinonia2.png)";
	document.getElementById('transport3').style.opacity=0;
	document.getElementById('transport4').style.opacity=0;
	}
	else if(arisepic=='Enpic3'){
	document.getElementById(arisepic).style.backgroundImage="url(pic/koinonia3.png)";
	document.getElementById('transport5').style.opacity=0;
	document.getElementById('transport6').style.opacity=0;
	}
	else if(arisepic=='Enpic4'){
	document.getElementById(arisepic).style.backgroundImage="url(pic/koinonia4.png)";
	document.getElementById('transport7').style.opacity=0;
	document.getElementById('transport8').style.opacity=0;
	}
}
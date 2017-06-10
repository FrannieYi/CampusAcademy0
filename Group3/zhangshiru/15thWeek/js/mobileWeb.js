window.onload=function(){
	var saoma=document.getElementById('saoma');
	var more_list=document.getElementsByClassName('more-hov')[0];
	var erwei_code=document.getElementsByClassName('Qr-code')[0];
	saoma.addEventListener('touchstart',function(){
		more_list.style.display='none';
		erwei_code.style.display='block';

	},false);
	saoma.addEventListener('mouseout',function(){
		var erwei_code=document.getElementsByClassName('Qr-code')[0];
		erwei_code.style.display='none';
	},false);

	var more=document.getElementById('more-list');
	more.addEventListener('touchstart',function(){
		erwei_code.style.display='none';
		more_list.style.display='block';
	},false);
	more.addEventListener('mouseout',function(){
		more_list.style.display='none';
	},false);
}
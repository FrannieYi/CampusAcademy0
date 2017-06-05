function changeschool()
{
	if(document.getElementById('schoolselect').style.display=="inline")
	{
		document.getElementById('schoolselect').style.display="none";
	}
	else{document.getElementById('schoolselect').style.display="inline";}
	
	
}
var school=0;

function schooladjust(school)
{
		document.getElementById('wechongyou').style.border="1px solid #FFF";
		document.getElementById('wechongda').style.border="1px solid #FFF";
		document.getElementById('wechongshi').style.border="1px solid #FFF";
		document.getElementById('wechuanmei').style.border="1px solid #FFF";
		document.getElementById('wexinan').style.border="1px solid #FFF";
		document.getElementById('wechongli').style.border="1px solid #FFF";
	if(school==0){
		document.getElementById('wechongyou').style.border="1px solid #0000FF";
		document.getElementById('myschool').value="重庆邮电大学";
		document.getElementById('schoolselect').style.display="none";}
	else if(school==1){
		document.getElementById('wechongda').style.border="1px solid #0000FF";
		document.getElementById('myschool').value="重庆大学";
		document.getElementById('schoolselect').style.display="none";}
	else if(school==2){
		document.getElementById('wechongshi').style.border="1px solid #0000FF";
		document.getElementById('myschool').value="重庆师范大学";
		document.getElementById('schoolselect').style.display="none";}
	else if(school==3){
		document.getElementById('wechuanmei').style.border="1px solid #0000FF";
		document.getElementById('myschool').value="四川美术学院";
		document.getElementById('schoolselect').style.display="none";}
	else if(school==4){
		document.getElementById('wexinan').style.border="1px solid #0000FF";
		document.getElementById('myschool').value="西南大学";
		document.getElementById('schoolselect').style.display="none";}
	else if(school==5){
		document.getElementById('wechongli').style.border="1px solid #0000FF";
		document.getElementById('myschool').value="重庆理工大学";
		document.getElementById('schoolselect').style.display="none";}
	else{alert("error:901");}
}

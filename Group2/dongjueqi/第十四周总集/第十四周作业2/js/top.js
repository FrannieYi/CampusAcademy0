var topid;
function Appear(topid)
{
	if(topid==1){
		document.getElementById('friends').style.display="inline";
		document.getElementById('introduce').style.display="inline";
		document.getElementById('life').style.display="inline";
		document.getElementById('share').style.display="inline";
		document.getElementById('download').style.display="inline";
		document.getElementById('ifriends').value="我是新朋友∨";
		document.getElementById('friends').style.opacity=1;
		document.getElementById('ifriends').style.color="#779fd1";}
	else if(topid==2){
		document.getElementById('friends').style.display="inline";
		document.getElementById('introduce').style.display="inline";
		document.getElementById('life').style.display="inline";
		document.getElementById('share').style.display="inline";
		document.getElementById('download').style.display="inline";
		document.getElementById('iintroduce').value="教会介绍∨";
		document.getElementById('introduce').style.opacity=1;
		document.getElementById('iintroduce').style.color="#779fd1";}
	else if(topid==3){
		document.getElementById('friends').style.display="inline";
		document.getElementById('introduce').style.display="inline";
		document.getElementById('life').style.display="inline";
		document.getElementById('share').style.display="inline";
		document.getElementById('download').style.display="inline";
		document.getElementById('ilife').value="团契生活∨";
		document.getElementById('life').style.opacity=1;
		document.getElementById('ilife').style.color="#779fd1";}
	else if(topid==4){
		document.getElementById('friends').style.display="inline";
		document.getElementById('introduce').style.display="inline";
		document.getElementById('life').style.display="inline";
		document.getElementById('share').style.display="inline";
		document.getElementById('download').style.display="inline";
		document.getElementById('ishare').value="见证分享∨";
		document.getElementById('share').style.opacity=1;
		document.getElementById('ishare').style.color="#779fd1";}
	else if(topid==5){
		document.getElementById('friends').style.display="inline";
		document.getElementById('introduce').style.display="inline";
		document.getElementById('life').style.display="inline";
		document.getElementById('share').style.display="inline";
		document.getElementById('download').style.display="inline";
		document.getElementById('idownload').value="资源下载∨";
		document.getElementById('download').style.opacity=1;
		document.getElementById('idownload').style.color="#779fd1";}
}

function hiddens(topid)
{

		document.getElementById('friends').style.display="none";
		document.getElementById('introduce').style.display="none";
		document.getElementById('life').style.display="none";
		document.getElementById('share').style.display="none";
		document.getElementById('download').style.display="none";
		document.getElementById('ifriends').value="我是新朋友∧";
		document.getElementById('friends').style.opacity=0;
		document.getElementById('iintroduce').value="教会介绍∧";
		document.getElementById('introduce').style.opacity=0;
		document.getElementById('ilife').value="团契生活∧";
		document.getElementById('life').style.opacity=0;
		document.getElementById('ishare').value="见证分享∧";
		document.getElementById('share').style.opacity=0;
		document.getElementById('idownload').value="资源下载∧";
		document.getElementById('download').style.opacity=0;
		
		document.getElementById('ifriends').style.color="#727272";
		document.getElementById('iintroduce').style.color="#727272";
		document.getElementById('ilife').style.color="#727272";
		document.getElementById('ishare').style.color="#727272";
		document.getElementById('idownload').style.color="#727272";
}


function Appearselect(topid)
{
	if(topid==1){
		document.getElementById('friends1').value=">我爱你";
		document.getElementById('introduce1').value=">教会历史";
		document.getElementById('life1').value=">悄悄表白下";
		document.getElementById('share1').value=">哎，好累";
		document.getElementById('download1').value=">きそめのむぬ";}
	else if(topid==2){
		document.getElementById('friends2').value=">你不能拒绝";
		document.getElementById('introduce2').value=">神职人员";
		document.getElementById('life2').value=">我爱你";
		document.getElementById('share2').value=">大型网友见面";
		document.getElementById('download2').value=">ひやもへ";}
	else if(topid==3){
		document.getElementById('friends3').value=">拒绝的人是猪";
		document.getElementById('life3').value=">阿狸";
		document.getElementById('share3').value=">玩王者荣耀吗";
		document.getElementById('download3').value=">ノチぬのてつ";}
}
function hiddensselect(topid)
{
		document.getElementById('friends1').value="  我爱你";
		document.getElementById('friends2').value="  你不能拒绝";
		document.getElementById('friends3').value="  拒绝的人是猪";
		document.getElementById('introduce1').value="  教会历史";
		document.getElementById('introduce2').value="  神职人员";
		document.getElementById('life1').value="  悄悄表白下";
		document.getElementById('life2').value="  我爱你";
		document.getElementById('life3').value="  阿狸";
		document.getElementById('share1').value="  哎，好累";
		document.getElementById('share2').value="  大型网友见面";
		document.getElementById('share3').value="  玩王者荣耀吗";
		document.getElementById('download1').value="  きそめのむぬ";
		document.getElementById('download2').value="  ひやもへ";
		document.getElementById('download3').value="  ノチぬのてつ";
}

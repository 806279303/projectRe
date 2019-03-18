window.onload=function(){
	var aLoginFail = document.getElementById('login_fail');
	var aA = document.getElementById('a');
	var aInput = document.getElementsByTagName('input');
	var oName = aInput[0].value;
	var pwg = aInput[1].value;


	function log_pop(){
		if (oName==""||pwg=="") {
			aLoginFail.style.display = "block";
		}

		setTimeout(function(){
			aLoginFail.style.display = "none";
		},3000);

		return false;
	}
	aA.onclick=log_pop;
}
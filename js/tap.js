//  用户名验证
 function checkUser(){
	var user = document.logForm.username.value;
	var us=document.getElementById('us');
	var str1=document.getElementById('str1');
		if( user.length<6){
			us.innerHTML='用户名不得少于6个字符';
			str1.style.backgroundPosition='3px -3px';
			str1.style.display='inline-block';
			us.style.color='red';
			us.style.marginTop='-11px';
			return false;
		}else if(user.length >20){
			us.innerHTML='用户名不得多于20个字符';
			str1.style.backgroundPosition='3px -3px';
			str1.style.display='inline-block';
			us.style.color='red';
			us.style.marginTop='-11px';
			return false;
		}else if(!isNaN(user)) {
			us.innerHTML='用户名不能全为数字！';
			str1.style.backgroundPosition='3px -3px';
			str1.style.display='inline-block';
			us.style.color='red';
			us.style.marginTop='-11px';
			return false;
		}
	}
// 密码验证：
function checkPass(){
	var pwd = document.logForm.pwd.value;
	var pa = document.getElementById('pa');
	var str2 = document.getElementById('str2');
	if(pwd.length <8){
		pa.innerHTML='密码不得小于8位！';
		str2.style.backgroundPosition='3px -3px';
		str2.style.display='inline-block';
		pa.style.color='red';
		pa.style.marginTop='-11px';
		return false;
	}else if(pwd.length >20){
		str2.style.backgroundPosition='3px -3px';
		str2.style.display='inline-block';
		pa.setCustomValidityL='密码不得小于8位！';
		pa.style.color='red';
		pa.style.marginTop='-11px';
		return false;
	}
	else if(!isNaN(pwd)){
		str2.style.backgroundPosition='3px -3px';
		str2.style.display='inline-block';
			pa.innerHTML='密码太弱：试试数字、字母混合！';
			pa.style.color='red';
			pa.style.marginTop='-11px';
            return false;
		}
}
// 密码再次验证
function checkRepass(){
	var pwd = document.logForm.pwd.value;
	var repa = document.getElementById('repa');
	var repwd = document.logForm.repwd.value;
	var str3 = document.getElementById('str3');
	if(repwd != pwd){
		str3.style.backgroundPosition='3px -3px';
		str3.style.display='inline-block';
		repa.innerHTML='两次密码不一致！';
		repa.style.color='red';
		repa.style.marginTop='-11px';
        return false;
	}else{
		str3.style.backgroundPosition='3px 30px';
		str3.style.display='inline-block';
		repa.innerHTML='输入正确！'; 
		repa.style.color="green";
		repa.style.marginTop='-11px';
		return true;
	}
}
// 手机验证：
function checkPhone(){
    var phone =document.logForm.phone.value;
    var tel = document.getElementById('tel');
    var str4=document.getElementById('str4');
      if(phone.match(/^1[3|4|5|7|8]\d{9}$/)==null){
      	str4.style.backgroundPosition='3px -3px';
        str4.style.display='inline-block';
        tel.innerHTML='手机号码格式错误！';
		tel.style.color='red';
		tel.style.marginTop='1px';
        return false;
    }else{
        str4.style.backgroundPosition='3px 30px';
        str4.style.display='inline-block';
        tel.innerHTML='输入正确！';
		tel.style.color='green';
		tel.style.marginTop='1px';
        return true;
    }
}
function checkForm(){
	return checkUser() && checkPass() && checkRepass() && checkPhone();
}
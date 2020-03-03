function success(data){
	var obj = JSON.parse(data);
	if(obj.ok == 'fail'){
		document.getElementById("alert").innerHTML = obj.alert;
	}
	if(obj.ok == 'update'){
		document.getElementById("alert").innerHTML = obj.alert;
		document.getElementById("token").hidden = true;
		document.getElementById("but").value = "Back";
	}
	if(obj.ok == 'getid'){
		document.getElementById("alert").innerHTML = obj.alert;
		document.getElementById("token").hidden = true;
		document.getElementById("id").hidden = false;
	}
	if(obj.ok == 'getverify'){
		document.getElementById("alert").innerHTML = obj.alert;
		document.getElementById("token").hidden = true;
		document.getElementById("id").hidden = true;
		document.getElementById("verify").hidden = false;
		document.getElementById("code").value = obj.code;
	}
	if(obj.ok == 'finish'){
		document.getElementById("alert").innerHTML = obj.alert;
		document.getElementById("token").hidden = true;
		document.getElementById("id").hidden = true;
		document.getElementById("verify").hidden = true;
		document.getElementById("but").value = "Back";
	}
}
function sale() {
	if (document.getElementById("token").hidden == false){
		type = 'check';
	}else if(document.getElementById("id").hidden == false){
		type = 'getcode';
	}else if(document.getElementById("verify").hidden == false){
		type = 'checkverify';
	}else if(document.getElementById("but").value == "Back"){
		location.reload();
	}
	var e = {
		msg: type, 
		code: document.getElementById("code").value, 
		id: document.getElementById("id").value, 
		verify: document.getElementById("verify").value, 
		token: document.getElementById("token").value
	};
	$.ajax({
		type: "POST",
		url: "make.php",
		data: e,
		success : function(data,status){success(data);},
		error : function(data,status){document.getElementById("alert").innerHTML = "<div class=\"alert success\"><span class=\"closebtn\">&times</span>  <strong>Updating..</strong> Please Try Again later</div>";}
	});
}

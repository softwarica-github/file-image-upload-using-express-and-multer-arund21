$(document).ready(function(){
	$('#regisform').submit(function(e){
		e.preventDefault();
		// console.log($('#usrphoto')[0].files[0]);
		var myformdata = {
			username:$('#username').val(),
			email:$('#email').val(),
			password:$('#password').val(),
			userphoto : $('#usrphoto')[0].files[0]
		}
// console.log(myformdata['username'])
//javascript own object which take all data of form photo too
var formdata = new FormData();
//appending normally
// formdata.append("username", $('#username').val());		
// formdata.append("email", $('#email').val());		
// formdata.append("emailpassword", $('#emailpassword').val());		

//appeding via loop

for (key in myformdata){
	console.log(key)
	console.log(myformdata[key])
}
for (key in myformdata){
	formdata.append(key, myFORMdata[key]);
}





$.ajax(
{
	url : 'http://localhost:3000/admin/registration',
	// type:'POST',
	data: formdata,
	contentType : false,
	processDate : false,
	//because multiple apped type is done i,e, email username photos
	dataType:'json',
	statusCode:
	{
		200:function();
		console.log("200");
	}

	success : function(result,status){

	},
	error : function(jqXHR,status){

	}
})		

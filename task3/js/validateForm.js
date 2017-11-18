var form=document.forms[0];
var inputName=form.querySelector('#name');
var inputEmail=form.querySelector('#email');
var inputPassword=form.querySelector('#password');
var inputImg=form.querySelector('#img');




function isEmpty(elementForm){

	var inputValue=elementForm.value.trim()==''?false:true;
	
	return inputValue;


}


function validatePattern(elementForm, pattern){

	var nameReg=/^[\w\sа-яА-Я]+$/i;
	var emailReg=/^[-_\w\d]+@[-_\w\d]+\.[a-z]{2,6}$/i;
	var passwdReg=/^[\wа-яА-Я]+$/i;

	var elemValue=elementForm.value.toString();
	var result=elemValue.search(pattern)!==-1?true:false;

	return result;

}





form.addEventListener('submit', function(e){
	e.preventDefault();
   

	/*var ajaxReq=new XMLHttpRequest();

	ajaxReq.open('GET','php/index.php', true);
	//ajaxReq.setRequestHeader("Content-type", "application/json");
	
    ajaxReq.send(null);
	
	
	ajaxReq.onreadystatechange=function(){
		if (ajaxReq.readyState==4 && ajaxReq.status==200) {

		  var response = ajaxReq.responseType;
		  console.log(ajaxReq);
		  console.log(ajaxReq.responseText);
	    }
	

	};*/
	
	
});




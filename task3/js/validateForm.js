var form=document.forms[0];
var inputName=form.querySelector('#name');
var inputEmail=form.querySelector('#email');
var inputPassword=form.querySelector('#password');
var inputImg=form.querySelector('#img');

/**
 * Функция хранит объект с примерами регулярных выражений
 * @return {object} [Объект с рег. выражениями]
 */
function regexObj(){
	var regex={
		'email':/^[-_\w\d]+@[-_\w\d]+\.[a-z]{2,6}$/i,
		'name':/^[a-zA-Z\sа-яА-Я]+$/i,
		'password':/^[\wа-яА-Я]+$/i,
	}

	
	return regex;
}



function getImgExt(){
	var extension=['jpeg', 'png', 'gif'];
		
	return extension;
}



/*

  Функция проверки на пустоту

  elementForm конкретный элемент поля input
 
  return true||false
 */
function isEmpty(elementForm){

	var inputValue=elementForm.value.trim()==''?false:true;
	
	return inputValue;


}

/**
 * Проверяет на соответствие паттерну
 * @param  {[object]} elementForm [объект поля формы]
 * @param  {[RegEx]} pattern     [объект регулярного выраения]
 * @return {[boolean]}             [true||false]
 */
function validatePattern(elementForm, pattern){

	

	var elemValue=elementForm.value.toString();
	var result=elemValue.search(pattern)!==-1?true:false;

	return result;

}

/**
 * Функция валидации расширения файла 
 * перед отправкой на сервер
 * @param  {[object]} inputElemFile [поле формы с файлом]
 * @return {[boolean]}               [true||false]
 */
function validateImgExt(inputElemFile){
	var listExt=getImgExt();

	

	if (inputElemFile.files[0]!==undefined) {
		console.log(inputElemFile.files[0].type);

		for (var i = 0; i < listExt.length; i++) {
		    listExt[i]
	    };

	};

	

	return false;

}


/**
 * Функция валидации всех полей формы
 * @return {[boolean]} [true||false]
 */
function validateInputVal(){
	var inputList=document.querySelectorAll('.input input:not([class="submit"])');
	var regexList=regexObj();
	console.log(inputList);

	

	var validateRes=true;
	for (var i = 0; i < inputList.length; i++) {
         

		if(inputList[i].id=='img') {
			validateImgExt(inputList[i]);

			continue;
		}


		var spanNext=inputList[i].nextElementSibling;
	    var regex=regexList[inputList[i].id];
	    var res=validatePattern(inputList[i], regex)&&isEmpty(inputList[i]);
	    validateRes=validateRes&&res;
	    if(!res){
	    	spanNext.innerHTML='error';

	    }
	};

    return validateRes;
}



form.addEventListener('submit', function(e){
	e.preventDefault();
	var myReg=regexObj();


	
   
   validateInputVal();
   console.log( validateInputVal())

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




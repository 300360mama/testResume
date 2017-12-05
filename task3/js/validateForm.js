window.onload = function () {

  var form = document.querySelector('#registrationForm');
  var inputName = form.querySelector('#name');
  var inputEmail = form.querySelector('#email');
  var inputPassword = form.querySelector('#password');
  var inputImg = form.querySelector('#img');
  var inputList = document.querySelectorAll('.input input');
  console.log(document.querySelectorAll('.input input'));






  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var dataList = new FormData();

    for (var key in inputList) {
      if (inputList[key].id === 'img') {
        dataList.append('img', inputImg.files[0]);
        continue;
      }
      dataList.append(inputList[key].id, inputList[key].value);
    }


    if (validateInputVal()) {
      var ajaxReq = new XMLHttpRequest();

      ajaxReq.onerror = function () {
        console.log('error');
      }
      console.log(ajaxReq);

      ajaxReq.open('post', 'php/index.php');

      ajaxReq.onreadystatechange = function () {

        if (ajaxReq.readyState === 4 && ajaxReq.status === 200) {
          console.log(ajaxReq.responseText);
        } else {

        }
      };
      ajaxReq.send(dataList);
    }
  });
};


/**
 * Функция переводит первую букву строки в верхний регистр
 * @param  {string} str [Строка, которую нужно преобразовать]
 * @return {string}     [Результирующая строка]
 */
function getStrToUpper (str) {

  var firstLetter = str[0].toUpperCase();
  var subStr = str.substring(1);
  var sufix = 'err';
  var strRes = sufix + firstLetter + subStr;

  return strRes;
}

/**
 * Функция хранит объект с примерами регулярных выражений
 * @return {object} [Объект с рег. выражениями]
 */
function regexObj () {
  var regex = {
    'email': /^[-_\w\d]+@[-_\w\d]+\.[a-z]{2,6}$/i,
    'name': /^[a-zA-Z\sа-яА-Я]+$/i,
    'password': /^[0-9а-яА-Я]+$/i
  }
  return regex;
}



function getImgExt () {
  var extension = ['png', 'gif', 'jpeg'];

  return extension;
}


/*

  Функция проверки на пустоту

  elementForm конкретный элемент поля input

  return true||false
 */
function isEmpty (elementForm) {

  var inputValue = elementForm.value.trim() === '' ? false : true;

  return inputValue;
}

/**
 * Проверяет на соответствие паттерну
 * @param  {[object]} elementForm [объект поля формы]
 * @param  {[RegEx]} pattern     [объект регулярного выраения]
 * @return {[boolean]}             [true||false]
 */
function validatePattern (elementForm, pattern) {

  var elemValue = elementForm.value.toString();
  var result = elemValue.search(pattern) !== -1 ? true : false;

  return result;
}

/**
 * Функция валидации расширения файла
 * перед отправкой на сервер
 * @param  {[object]} inputElemFile [поле формы с файлом]
 * @return {[boolean]}               [true||false]
 */
function validateImgExt (inputElemFile) {

  var listExt = getImgExt();

  if (inputElemFile.files[0] === undefined) return true;

  var typeFile = inputElemFile.files[0].type;
  var ext = typeFile.split('/')[1];

  for (var i = 0; i < listExt.length; i++) {
    if (listExt[i] === ext) return true;
  };
  return false;
}


/**
 * Функция валидации всех полей формы
 * @return {[boolean]} [true||false]
 */
function validateInputVal () {
  var inputList = document.querySelectorAll('.input input:not([class="submit"])');
  var regexList = regexObj();
  var validateRes = true;
  var langNow = langSelect();
  var langError = language(langNow)['errText'];


  for (var i = 0; i < inputList.length; i++) {
    var spanNext = inputList[i].nextElementSibling;
    spanNext.innerHTML = '';
    var errName = getStrToUpper(inputList[i].id);
    var error = langError[errName];
    var regex = regexList[inputList[i].id];

    if (inputList[i].id === 'img') {
      if (!validateImgExt(inputList[i])) {
        spanNext.innerHTML = error;
      }

      validateRes = validateImgExt(inputList[i]) && validateRes;
      continue;
    }

    var res = validatePattern(inputList[i], regex) && isEmpty(inputList[i]);
    validateRes = validateRes && res;

    if (!res) {
      spanNext.innerHTML = error;
    }
  };

  return validateRes;
}

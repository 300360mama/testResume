window.onload = function () {
  var languageList = document.querySelectorAll('.language>a');
  addEventLang(languageList);
};

/*
 Хранит список обьектов со значениями полей для формы.
 Различные языки

 lang - Язык для которого нужно выбрать данные.

 return объект с конкретными параметрами языка
 */
function language(lang) {

  var langList = {
    'ru': {
      'titleForm': 'Заполните форму',

      'labelText': {
        'labelName': 'Ваше имя',
        'labelPassword': 'Ваш пароль',
        'labelEmail': 'Ваш email',
        'labelFile': 'Загрузите картинку'
      },

      'inputText': {
        'placeholderName': 'Иван Иванов',
        'placeholderEmail': 'mail.mail.com',
        'placeholderPassword': '1pdSdfS',
        'placeholderSubmit': 'Отправить'
      },

      'errText': {
        'errName': 'Имя должно содержать только буквы',
        'errEmail': 'Введите email в правильном формате',
        'errPassword': 'Пароль должен содержать только цыфры и буквы',
        'errImg': 'Выберите картинку в формате jpeg, png или gif'

      }

    },

    'en': {
      'titleForm': 'Fill the form',

      'labelText': {
        'labelName': 'Your Name',
        'labelEmail': 'Email',
        'labelPassword': 'Password',
        'labelFile': 'Select Image'

      },

      'inputText': {
        'placeholderName': 'John Johnsenn',
        'placeholderEmail': 'mail.mail.com',
        'placeholderPassword': '1pdSdfS',
        'placeholderSubmit': 'Submit'

      },

      'errText': {
        'errName': 'name',
        'errEmail': 'email',
        'errPassword': 'passwd',
        'errImg': 'img must be have format jpeg, gif or png'
      }



    }
  }

  var lang = langList[lang] !== undefined ? langList[lang] : langList.en;

  return lang;
}

/*
  Функция меняет текстовое наполнение в зависимости от языка

  lang язык формы

 */

function langChange(lang) {

  var titleForm = document.querySelector('.titleForm>span');
  var langDate = language(lang);
  var titleText = langDate['titleForm'];
  titleForm.innerHTML = titleText;

  var submitVal = document.querySelector('.submit');
  var submitText = langDate['inputText']['placeholderSubmit'];
  submitVal.setAttribute('value', submitText);
  var listText = language(lang);


  var inputList = document.querySelectorAll('.input');

  for (var i = 0; i < inputList.length; i++) {

    if (inputList[i].classList.contains('inputName')) {
      changeText(inputList[i], listText, 'Name');

    } else if (inputList[i].classList.contains('inputEmail')) {
      changeText(inputList[i], listText, 'Email');


    } else if (inputList[i].classList.contains('inputPassword')) {
      changeText(inputList[i], listText, 'Password');


    } else if (inputList[i].classList.contains('inputFile')) {
      changeText(inputList[i], listText, 'File');

    }


  };

}


/*

  Функция меняющая текст конкретной секции формы

  listElem объект со списком элементов конкретной секции
  listText объект с текстовым наполнением для конкретного языка

  elem меняемый элемент
 */
function changeText(listElem, listText, elem) {


  var labelText = listElem.children[0];
  var inputText = listElem.children[1];
  var errText = listElem.children[2];
  var fileText = listElem.children[3];
  var submitText = listElem.children[4];


  var elemLabelName = 'label' + elem;
  var elemInputName = 'placeholder' + elem;
  var elemErrName = 'err' + elem;


  labelText.innerHTML = listText['labelText'][elemLabelName];
  inputText.setAttribute('placeholder', listText['inputText'][elemInputName]);
  elemErrName.innerHTML = listText['errText'][elemErrName];


}
/*

  Выбирает активный язык
  return выбранный язык
*/
function langSelect() {
  var language = document.querySelector('.language>a.active');
  if (language.id !== null || language.id !== undefined) {
    return language.id;
  };

  return 'ru';
}

/*
  Смена активного языка при клике

  elemLIst список ссылок на все языки
 */
function addEventLang(elemList) {


  for (var i = 0; i < elemList.length; i++) {


    elemList[i].addEventListener('click', function(e) {
      e.preventDefault();

      for (var i = 0; i < elemList.length; i++) {
        elemList[i].classList.remove('active');

      }

      this.className = 'active';
      langChange(langSelect());


    });

  };

}

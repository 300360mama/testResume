<?php
ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL);

class Validate{


  private static $pattern = [
    'email'=>'/^[-_\w\d]+@[-_\w\d]+\.[a-z]{2,6}$/',
    'name'=>'^[a-zA-Z\sа-яА-Я]+$/',
    'password'=>'^[0-9а-яА-Я]+$'

  ];

  private static $nameInput = [
    'email',
    'name',
    'password'

  ];

  public function __construct(){}

  private function getPattern(string $name){
    return self::$pattern[$name];
  }

  private function validatePattern($str, $regex){
    if (preg_match($regex, (string)$str)===1) {

      return true;
    }

    return false;

  }

  public function getInputVal(){
    $input=[];
    foreach ($_POST as $nameInp => $valueInp) {
      if (in_array($nameInp, self::$nameInput)) {
        $input[$nameInp]=$valueInp;
      }
    }
    return $input;
  }

  private function getImg(){

  }

  public function validate(array $listInput){
    $res=true;
    foreach ($listInput as $name => $value) {
      $res=$res && empty($value) && $this->validatePattern($value, $this->getPattern($name));

    }

    return $res;
  }

  public function validateExtension($file){


  }


}


$validate = new Validate();
$inputValue = $validate->getInputVal();
print_r($inputValue);

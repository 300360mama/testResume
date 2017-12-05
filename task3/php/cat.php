<?php
ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL);
class Animal{
  protected $name;
  private $lastName;
  public function __construct($name){
    $this->name=$name;


  }

  public function getName(){
    return $this->name;
  }

}

class Cat extends Animal{

  public function meow(){
    return "Cat {$this->name} is saying meow";
  }
}

$cat = new Cat('garfield');
var_dump($cat->getName () === 'garfield' );

$cat2=new Cat('ddd');
var_dump($cat2->getName () === 'garfield' );
var_dump($cat->meow () === 'Cat garfield is saying meow' );

var buttonMenu=document.querySelector('header .button-menu');
var leftNav=document.querySelector('ul.left-nav');
var header=document.querySelector('body header');
var content=document.querySelector('body .content');


buttonMenu.addEventListener('click', function(){

  if(!leftNav.style.display||leftNav.style.display=='none'){
  	leftNav.style.display='flex';
   header.style.marginLeft = '30%';
   header.style.width='100vw';
   header.style.overflowX = 'hidden';

   content.style.marginLeft = '30%';
   content.style.width='100vw';
   content.style.overflowX = 'hidden';


  }else{
  	leftNav.style.display='none';


   
   header.style.marginLeft = '0';
   header.style.width='100%';
   header.style.overflowX = 'auto';

   content.style.marginLeft = '0';
   content.style.width='100%';
   content.style.overflowX = 'auto';

  }
   

});

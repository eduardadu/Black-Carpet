
$( document ).ready(function() {
  var seta = document.querySelector('#setafora');
  var bar = document.querySelectorAll('.sidebar');
  var barUp = document.querySelectorAll('.centerbar');
  var slideOut=false;
  //  var slideIn=false;


//---------------------------------------------------------------SIDEBAR IN AND OUT
  seta.addEventListener("click", function(){

  //  var ws = document.querySelectorAll('.sidebar').offsetWidth;

    if(slideOut==false){
      for(var i=0; i<bar.length;i++){
        bar[i].classList.add('move');
        bar[i].style.minWidth=  "200px";
      }
      barUp[0].classList.add('moveUP');

      document.querySelector('#setafora').style.transform = 'rotate(180deg)';
      //document.querySelector('#setafora').style.right = '20%';
      document.querySelector('#setafora').classList.add('setaleft');
    }else{
      for(var i=0; i<bar.length;i++){
            bar[i].classList.remove('move');
            bar[i].style.minWidth=  "0px";

      }
      barUp[0].classList.remove('moveUP');
      document.querySelector('#setafora').style.transform = 'rotate(0deg)';
      //document.querySelector('#setafora').style.right = '2em';
      document.querySelector('#setafora').classList.remove('setaleft');
    }
    slideOut=!slideOut;

});
//----------------------------------------------------------------------------------ABOUT container

var titulo= document.querySelector('#titulo');
var about= document.querySelector('#aboutlittle');

  titulo.addEventListener("mouseover", function(){
    about.style.height="3rem";
  });


  titulo.addEventListener("mouseout", function(){
    about.style.height="0rem";
  });

  about.addEventListener("mouseover", function(){
    about.style.height="3rem";
  });


  about.addEventListener("mouseout", function(){
    about.style.height="0rem";
  });
});

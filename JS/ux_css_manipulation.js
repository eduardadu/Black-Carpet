
$( document ).ready(function() {
  var seta = document.querySelector('#setafora');
  var bar = document.querySelectorAll('.sidebar');
  var barUp = document.querySelectorAll('.centerbar');
  var slideOut=false;
  //  var slideIn=false;


//---------------------------------------------------------------SIDEBAR IN AND OUT
  seta.addEventListener("click", function(){

    if(slideOut==false){
      for(var i=0; i<bar.length;i++){

      //  bar[i].style.left="auto";
      //  bar[i].style.right="0%";
        bar[i].classList.add('move');
        bar[i].style.minWidth=  "200px";
      }
      barUp[0].classList.add('moveUP');
    //  document.querySelector('#search_container').style.marginRight=  "2 rem";
      document.querySelector('#setafora').style.transform = 'rotate(180deg)';

    }else{
      //  document.querySelector('#search_container').style.marginRight=  "0 rem";
      for(var i=0; i<bar.length;i++){
            bar[i].classList.remove('move');
            bar[i].style.minWidth=  "0px";

      }
      barUp[0].classList.remove('moveUP');
      document.querySelector('#setafora').style.transform = 'rotate(0deg)';
    }
    slideOut=!slideOut;
  });

//----------------------------------------------------------------------------------

});


$( document ).ready(function() {
  var seta = document.querySelector('#setafora');
  var bar = document.querySelectorAll('.sidebar');
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
        document.querySelector('#search_container').style.marginRight=  "2 rem";
        document.querySelector('#setafora').style.transform = 'rotate(180deg)';
      }
    }else{
      for(var i=0; i<bar.length;i++){
            document.querySelector('#search_container').style.marginRight=  "0 rem";
            bar[i].classList.remove('move');
            bar[i].style.minWidth=  "0px";
            document.querySelector('#setafora').style.transform = 'rotate(0deg)';

      }
    }
    slideOut=!slideOut;
  });

//----------------------------------------------------------------------------------

});

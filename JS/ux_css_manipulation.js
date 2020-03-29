
$( document ).ready(function() {
  var seta = document.querySelector('#setafora');
  var bar = document.querySelectorAll('.sidebar');
  var slideOut=false;
  //  var slideIn=false;


//---------------------------------------------------------------SIDEBAR IN AND OUT
  seta.addEventListener("click", function(){
    var width = document.body.clientWidth;
    if(slideOut==false){
      for(var i=0; i<bar.length;i++){
        bar[i].style.left="auto";
        bar[i].style.right="0px";
        bar[i].classList.add('aniSlidebar');
      }
    }else{
      for(var i=0; i<bar.length;i++){
        bar[i].style.left='"' + width + '"';
        bar[i].style.right="auto";
      }
    }
    slideOut=!slideOut;
  });

//----------------------------------------------------------------------------------

});

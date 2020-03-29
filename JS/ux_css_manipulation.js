
$( document ).ready(function() {
  var seta = document.querySelector('#setafora');
  var bar = document.querySelectorAll('.sidebar');

  seta.addEventListener("click", function(){
    for(var i=0; i<bar.length;i++){
      bar[i].style.left="auto";
      bar[i].style.right="0px";
      bar[i].addClass('aniSlidebar');
    }
  });
});

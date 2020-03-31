      var estatico=false;
      var modalOn=false;

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
      document.querySelector('.tab_container').style.bottom="0px";
    }else{
      for(var i=0; i<bar.length;i++){
        bar[i].classList.remove('move');
        bar[i].style.minWidth=  "0px";

      }
      barUp[0].classList.remove('moveUP');
      document.querySelector('#setafora').style.transform = 'rotate(0deg)';
      //document.querySelector('#setafora').style.right = '2em';
      document.querySelector('#setafora').classList.remove('setaleft');
      document.querySelector('.tab_container').style.bottom="-60px";
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

//---------------------------------------------------------------------------------------CLICK ABOUT, MODAL
var aboutCont= document.querySelector('#about_container');
var uiCont= document.querySelector('#ui_container');
var sCont= document.querySelector('#sigma-container');

  about.addEventListener('click', function(){ //incluir o clique na caixa com info

    aboutCont.style.display="flex";
    uiCont.style.visibility="hidden";
    sCont.style.display="none";
    document.querySelector('.tab_container').style.bottom="0px";
    document.querySelector('.tab_container').style.visibility="hidden";
    modalOn=true;
  });

  titulo.addEventListener('click', function(){ //para incluir o clique no titulo
    uiCont.style.visibility="hidden";
    aboutCont.style.display="flex";
    sCont.style.display="none";
    document.querySelector('.tab_container').style.visibility="hidden";
    modalOn=true;
  });



var closeAbout= document.querySelector('#closeA'); //para fechar

  closeAbout.addEventListener('click', function(){
    aboutCont.style.display="none";
    uiCont.style.visibility="visible";
    sCont.style.display="block";
    document.querySelector('.tab_container').style.visibility="visible";
  });



//---------------------------------------------------------------------------------------TABS
var tabs= document.querySelectorAll('.tab');
tabs[0].style.opacity="0.3";
tabs[2].style.opacity="0.3";

      tabs[0].addEventListener('click', function(){
         for(var j=0; j<tabs.length; j++){
             tabs[j].style.opacity="0.3";
         }
         tabs[0].style.opacity="1";

         for(var i=0; i<bar.length;i++){
               bar[i].classList.remove('move');
               bar[i].style.minWidth=  "0px";
         }
         barUp[0].classList.remove('moveUP');
         document.querySelector('#setafora').style.transform = 'rotate(0deg)';
         document.querySelector('#setafora').classList.remove('setaleft');
         document.querySelector('#setafora').style.display="none";
         document.querySelector('.tab_container').style.bottom="0px";
         estatico==true;
      });

      tabs[1].addEventListener('click', function(){
         for(var j=0; j<tabs.length; j++){
             tabs[j].style.opacity="0.3";

         }
         tabs[1].style.opacity="1";
         for(var i=0; i<bar.length;i++){
               bar[i].classList.remove('move');
               bar[i].style.minWidth=  "0px";
         }
         barUp[0].classList.remove('moveUP');
         document.querySelector('#setafora').style.transform = 'rotate(0deg)';
         document.querySelector('#setafora').classList.remove('setaleft');
         document.querySelector('#setafora').style.display="block";
         document.querySelector('.tab_container').style.bottom="0px";
         estatico=false;
      });

      tabs[2].addEventListener('click', function(){
         for(var j=0; j<tabs.length; j++){
             tabs[j].style.opacity="0.3";

         }
         tabs[2].style.opacity="1";

         for(var i=0; i<bar.length;i++){
               bar[i].classList.remove('move');
               bar[i].style.minWidth=  "0px";
         }
         barUp[0].classList.remove('moveUP');
         document.querySelector('#setafora').style.transform = 'rotate(0deg)';
         document.querySelector('#setafora').classList.remove('setaleft');
         document.querySelector('#setafora').style.display="none";
         document.querySelector('.tab_container').style.bottom="0px";
         estatico=true;
      });



});

//---------------------------------------------------ANIMAÇAO FICHA DO ATOR
function OpenCloseActor(i){
  if(estatico==false){
    if(i==false){
      document.querySelector('#actor_info').style.visibility="visible";
      document.querySelector('#actor_info').style.left="100px";
    }else{
      document.querySelector('#actor_info').style.visibility="hidden";
      document.querySelector('#actor_info').style.left="-200px";
    }
  }

};



  //----------------------------------------------------------LEGENDA

  var imgLeg= document.querySelectorAll("#aboutlegendas img");
  var temp;
    function slideShow(){
      temp=0;
      if(modalOn==true){
         setTimeout(function(){
           imgLeg[1].style.visibility="visible";
         }, (2000*1));
         setTimeout(function(){
           imgLeg[2].style.visibility="visible";
         }, (2000*2));
         setTimeout(function(){
           imgLeg[3].style.visibility="visible";
         }, (2000*3));

      setTimeout(function(){
         for( var j=1; j<4;j++){
           imgLeg[j].style.visibility="hidden";
         }
       }, 8000);
     }
     modelOn=true;
   };

slideShow;
  window.setInterval(slideShow, 10000);

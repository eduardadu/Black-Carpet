var checkLoadTime = 5;
var iniLoadCheck;
$(document).ready(function() {
  iniLoadCheck = setInterval(checkLoading, 2000);


});

function checkLoading() {
  checkLoadTime--;
  if(checkLoadTime < 0) {
    console.log("loaded");
    clearInterval(iniLoadCheck);
    clearLoadScreen();
  }
}


function clearLoadScreen() {
  document.getElementById("loadScreen").style.pointerEvents = "none";
  document.getElementById("loadScreen").style.opacity = 0;
  document.getElementById("sigma-static-container").style.display = "none";
}

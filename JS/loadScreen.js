var checkLoadTime = 0;
var iniLoadCheck;
var loadAnimation;
var getLine;
var counter;
var colors = ["rgba(80, 191, 171)", "rgba(191, 43, 48)", "rgba(223, 213, 236)"];

$(document).ready(function() {
  counter = 0;
  getLine = document.getElementById("Loadline");
  iniLoadCheck = setInterval(checkLoading, 2000);
  loadAnimation = setInterval(triggerAnimation, 1000);
});

function checkLoading() {
  checkLoadTime--;
  if(checkLoadTime < 0) {
    clearInterval(iniLoadCheck);
    clearLoadScreen();
    clearInterval(loadAnimation);
  }
}

function clearLoadScreen() {
  console.log("LOADED");
  document.getElementById("loadScreen").style.pointerEvents = "none";
  document.getElementById("loadScreen").style.opacity = 0;
  document.getElementById("sigma-static-blackHole-container").style.opacity = "0";
  document.getElementById("sigma-static-bigData-container").style.opacity = "0";
}

function triggerAnimation() {
  if(getLine.style.width == "30rem") {
    getLine.style.width = "1rem";
    getLine.style.backgroundColor = "#FFFFFF";
  } else {
    getLine.style.width = "30rem";
    getLine.style.backgroundColor = "#FF3940";
  }
}

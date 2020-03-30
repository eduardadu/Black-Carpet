$( document ).ready(function() {
  $("#change2BH").click(function() {
    changeChangeScreens("black hole");
  });

  $("#change2BigData").click(function() {
    changeChangeScreens("big data");
  });

  $("#change2Dynamic").click(function() {
    changeChangeScreens("dynamic");
  });
});

function changeChangeScreens(whereTo) {
  var bH = document.getElementById("sigma-static-blackHole-container");
  var bD = document.getElementById("sigma-static-bigData-container");
  var dyn = document.getElementById("sigma-container");

  if(whereTo == "black hole") {
    bH.style.opacity = "1";
    bD.style.opacity = "0";
    dyn.style.opacity = "0";
    dyn.style.pointerEvents = "none";
    staticS_blackHole.refresh();
    document.querySelector('#actor_info').style.display="none";
  } else if(whereTo == "big data") {
    bH.style.opacity = "0";
    bD.style.opacity = "1";
    dyn.style.opacity = "0";
    dyn.style.pointerEvents = "none";
    staticS_big.refresh();
    resetHighlights("mindAtts")
    document.querySelector('#actor_info').style.display="none";
  } else if(whereTo == "dynamic") {
    resetHighlights("mindAtts");
    parentNode = null;
    s.refresh();
    bH.style.opacity = "0";
    bD.style.opacity = "0";
    dyn.style.opacity = "1";
    dyn.style.pointerEvents = "all";
  }
}

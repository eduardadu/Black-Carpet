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
    // bH.style.display = "block";
    // bD.style.display = "none";
    // dyn.style.display = "none";
    bH.style.opacity = "1";
    bD.style.opacity = "0";
    dyn.style.opacity = "0";
    dyn.style.pointerEvents = "none";
    staticS_blackHole.refresh();
  } else if(whereTo == "big data") {
    // bH.style.display = "none";
    // bD.style.display = "block";
    // dyn.style.display = "none";
    bH.style.opacity = "0";
    bD.style.opacity = "1";
    dyn.style.opacity = "0";
    dyn.style.pointerEvents = "none";
    staticS_big.refresh();
  } else if(whereTo == "dynamic") {
    // bH.style.display = "none";
    // bD.style.display = "none";
    // dyn.style.display = "block";
    bH.style.opacity = "0";
    bD.style.opacity = "0";
    dyn.style.opacity = "1";
    dyn.style.pointerEvents = "all";
  }
}

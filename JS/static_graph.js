var staticS;

$(document).ready(function() {
  //document.getElementById("sigma-static-container").style.display = "none";
  staticS = new sigma(
    {
      renderer: {
        container: document.getElementById('sigma-static-container'),
        type: 'canvas',
        camera: "cam2"
      },
      settings: {
        labelColor: 'node',
        minEdgeSize: 0.05,
        maxEdgeSize: 0.5,
        minNodeSize: 1,
        maxNodeSize: 5,
        defaultEdgeType: 'arrow',
        batchEdgesDrawing: true,
        webglEdgesBatchSize: 200,
      }
    }
  );
  createStaticGaph();
//BUTTON PARA MUDAR  $("#change2static").click(function() {
  //   console.log("coisas");
  //   switchGraphs();
  // });
  var coods  = {x:150, y:-100, ratio:1, angle:0};
  staticS.cameras.cam2.goTo(coods);
  staticS.refresh();
});

function createStaticGaph() {
  $.getJSON( "data/data-bigdata.json", function( data2 ) {
    applyCorrectColors(data2);
    resizeEdges(data2);
    staticS.graph.read(data2);
    staticS.refresh();
  });
}
//
//
//
// function switchGraphs() {
//   var dynamicContainer = document.getElementById("sigma-container");
//   var staticContainer = document.getElementById("sigma-static-container");
//
//   if(staticContainer.style.display == "none") {
//     dynamicContainer.style.display = "none";
//     staticContainer.style.display = "block";
//     staticS.refresh();
//   } else {
//
//   }
// }

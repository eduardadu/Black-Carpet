var staticS_blackHole;

$(document).ready(function() {
  staticS_blackHole = new sigma(
    {
      renderer: {
        container: document.getElementById('sigma-static-blackHole-container'),
        type: 'canvas',
        camera: "cam2"
      },
      settings: {
        labelColor: 'node',
        minEdgeSize: 0.01,
        maxEdgeSize: 0.5,
        minNodeSize: 1,
        maxNodeSize: 5,
        defaultEdgeType: 'arrow',
        batchEdgesDrawing: true,
        canvasEdgesBatchSize: 40
      }
    }
  );
  createStaticGaph("data-blackhole", staticS_blackHole);
  var coods  = {x:-50.59095175703213, y:-35.59095175703213, ratio:0.8876382730444773, angle:0};
  staticS_blackHole.cameras.cam2.goTo(coods);
  staticS_blackHole.refresh();
});

function createStaticGaph(jsonName, sInstance) {
  $.getJSON( "data/"+jsonName+".json", function( data2 ) {
    applyCorrectColors(data2);
    resizeEdges(data2);
    sInstance.graph.read(data2);
    sInstance.refresh();
  });
}

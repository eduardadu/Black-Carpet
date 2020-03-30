var staticS_big;

$(document).ready(function() {
  staticS_big = new sigma(
    {
      renderer: {
        container: document.getElementById('sigma-static-bigData-container'),
        type: 'canvas',
        camera: "cam2"
      },
      settings: {
        labelColor: 'node',
        minEdgeSize: 0.01,
        maxEdgeSize: 0.9,
        minNodeSize: 1,
        maxNodeSize: 5,
        defaultEdgeType: 'arrow',
        batchEdgesDrawing: true,
        canvasEdgesBatchSize: 40
      }
    }
  );
  createStaticGaph("data-biggerdata", staticS_big);
  var coods  = {x:0, y:0, ratio:0.65, angle:0};
  staticS_big.cameras.cam2.goTo(coods);
  staticS_big.refresh();
});

function createStaticGaph(jsonName, sInstance) {
  $.getJSON( "data/"+jsonName+".json", function( data2 ) {
    applyCorrectColors(data2);
    resizeEdges(data2);
    sInstance.graph.read(data2);
    sInstance.refresh();
  });
}

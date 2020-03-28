var s;
var actorNames = [];

$( document ).ready(function() {
  s = new sigma(
    {
      renderer: {
        container: document.getElementById('sigma-container'),
        type: 'webgl',
        camera: "cam1"
      },
      settings: {
        labelColor: 'node',
        minEdgeSize: 0.01,
        maxEdgeSize: 0.05,
        minNodeSize: 2,
        maxNodeSize: 10
        //defaultEdgeType: "thickLine",
        //defaultNodeType: "fast"
      }
    }
  );
  createGaph();
});

//Lê o JSON
function createGaph() {
  var items = [];
  $.getJSON( "data/data.json", function( data ) {
    saveNames(data.nodes);
    s.graph.read(data);
    s.refresh();
  });
}

function saveNames(theNames) {
  for(let i = 0; i < theNames.length; i++) {
      actorNames.push(theNames[i].label);
  }
}

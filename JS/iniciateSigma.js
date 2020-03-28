var s;
var actorNames = [];

$( document ).ready(function() {
  s = new sigma(
    {
      renderer: {
        container: document.getElementById('sigma-container'),
        type: 'canvas',
        camera: "cam1"
      },
      settings: {
        labelColor: 'node',
        minEdgeSize: 0.11;,
        maxEdgeSize: 0.5,
        minNodeSize: 0.1,
        maxNodeSize: 1,
        defaultEdgeType: "arrow"
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

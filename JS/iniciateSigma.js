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
<<<<<<< HEAD
        minEdgeSize: 0.01,
        maxEdgeSize: 0.05,
        minNodeSize: 2,
        maxNodeSize: 10,
        eventsEnabled: true,

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
    applyCorrectColors(data);
    s.graph.read(data);
    s.refresh();


    s.bind(' clickNode', function(e) {
      console.log(e.type, e.data.node.label, e.data.captor);
      
    });

  });

}

function saveNames(theNames) {
  for(let i = 0; i < theNames.length; i++) {
      actorNames.push(theNames[i].label);
  }
}

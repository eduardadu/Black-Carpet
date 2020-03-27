var s;

$( document ).ready(function() {
  s = new sigma(
    {
      renderer: {
        container: document.getElementById('sigma-container'),
        type: 'canvas'
      },
      settings: {
        labelColor: 'node',
        minEdgeSize: 0.1,
        maxEdgeSize: 2,
        minNodeSize: 5,
        maxNodeSize: 5,
        defaultEdgeType: "arrow"
      }
    }
  );
  createGaph();
  s.refresh();
});

//Lê o JSON
function createGaph() {
  var items = [];
  $.getJSON( "data/data.json", function( data ) {
    s.graph.read(data);
    s.refresh();
  });
}

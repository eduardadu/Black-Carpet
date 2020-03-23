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
    styleEdges();
  });
}


function styleEdges() {
  var getEdges = s.graph.edges();

  //Clica por todas as edges
  $.each(getEdges, function(key, value) {
    console.log(value.attributes);
    var atts = getSortedKeys(value.attributes);
    console.log(atts);
  });



  getEdges[0].color = "rgb(0, 255, 255)";
  s.refresh();
}


function getSortedKeys(obj) {
    var keys = keys = Object.values(obj);
    return keys.sort(function(a,b){return obj[b]-obj[a]});
}

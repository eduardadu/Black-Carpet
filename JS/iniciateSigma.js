var s;
var actorNames = [];
var edgeSelectedSizeInc = 3;


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
        maxEdgeSize: 0.9,
        minNodeSize: 0.1,
        maxNodeSize: 1.5,
        defaultEdgeType: 'thickLine',
        defaultNodeType: 'fast'
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
    resizeEdges(data);
    s.graph.read(data);
    s.refresh();

    s.bind(' clickNode', function(e) {
      resetHighlights();
      displayActorInfo(e.data.node);
      hightlightNode_range(e.data.node, 1);
    });

  });

}

function saveNames(theNames) {
  for(let i = 0; i < theNames.length; i++) {
    actorNames.push(theNames[i].label);
  }
}

function applyCorrectColors(data) {
  data.edges.forEach((item, i) => {
    changeEdgeColor(item);
  });

  data.nodes.forEach((item, i) => {
    changeNodeColor(item);
  });
}

function resizeEdges(data) {
  data.edges.forEach((item, i) => {
    item.size = parseInt(item.attributes.weigth);
  });
}

sigma.classes.graph.addMethod('adjacentEdges', function(id) {
  if (typeof id !== 'string')
  throw 'adjacentEdges: the node id must be a string.';
  var a = this.allNeighborsIndex[id],
  eid,
  target,
  edges = [];
  for(target in a) {
    for(eid in a[target]) {
      edges.push(a[target][eid]);
    }
  }
  return edges;
});

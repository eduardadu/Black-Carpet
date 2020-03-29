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
        minEdgeSize: 0.001,
        maxEdgeSize: 0.1,
        minNodeSize: 0.5,
        maxNodeSize: 4,
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
    s.graph.read(data);
    s.refresh();
  });

}

function saveNames(theNames) {
  for(let i = 0; i < theNames.length; i++) {
    actorNames.push(theNames[i].label);
  }
}

function applyCorrectColors(data) {

  data.edges.forEach((item, i) => {
    var sId = item.source;
    var sGender = data.nodes[sId].attributes.gender;
    if(sGender == 0) {
      item.color = no_gender_color;
    } else if(sGender == 1) {
      item.color = female_color;
    } else if(sGender == 2) {
      item.color = male_color;
    }
    //item.color = edgeColor;
  });

  data.nodes.forEach((item, i) => {
    var gender = item.attributes.gender;
    if(gender == 0) {
      item.color = no_gender_color;
    } else if(gender == 1) {
      item.color = female_color;
    } else if(gender == 2) {
      item.color = male_color;
    }

  });


}

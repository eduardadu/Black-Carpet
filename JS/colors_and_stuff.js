//Cores globais
var hightedColor = "rgb(255, 0, 0)";

var female_color = "rgb(255, 0, 255)";
var male_color = "rgb(0, 0, 255)";
var no_gender_color = "rgb(255, 255, 0)";



function hightlightNode(id) {
  var ed = s.graph.edges();
  for(let i=0; i<ed.length; i++) {
    if(ed[i].source == id || ed[i].target == id) {
      ed[i].color = hightedColor;
    } else {
      removeEdgeHighlight(ed[i]);
    }
  }

  s.refresh();
}

function removeNodeHighlight(node) {
  //get gender
}


function removeEdgeHighlight(node) {
  //get gender
}

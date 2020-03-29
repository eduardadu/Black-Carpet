//Cores globais
var deSelected = "rgb(20, 20, 20)";
var edgeColor = "rgb(200, 200, 200)"
var female_color = "rgb(98, 233, 208)";
var male_color = "rgb(255, 57, 64)";
var no_gender_color = "rgb(223, 213, 236)";


var sColors = [];
function hightlightNode(node) {
  sColors = [];
  var ed = s.graph.edges();
  for(let i=0; i<ed.length; i++) {
    sColors.push(ed[i].color);
    if(!(ed[i].source == node.id || ed[i].target == node.id)) {
      ed[i].color = deSelected;
    } else {
      //removeEdgeHighlight(ed[i], node);
    }
  }
  s.refresh();
}

function removeNodeHighlight(node) {
  var ed = s.graph.edges();
  for(let i=0; i<ed.length; i++) {
    if(!(ed[i].source == node.id && ed[i].target == node.id)) {
      ed[i].color = sColors[i];
    }
  }
  s.refresh();
}

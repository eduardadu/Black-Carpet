//Cores globais
var deSelected = "rgb(0, 0, 0)";
var edgeColor = "rgb(200, 200, 200)"

//Edges
var female_color =    "rgb(21, 209, 174)"                      //"rgb(80, 191, 171)";
var male_color = "rgb(191, 43, 48)";
var no_gender_color = "rgb(200, 190, 212)"; //          "rgb(223, 213, 236)";

//Nodes
var node_no_gender_color = "rgb(176, 157, 201)";     //"rgb(188, 167, 215)";
var node_female_color =    "rgb(66, 207, 181)";             //"rgb(98, 233, 208)";
var node_male_color = "rgb(255, 57, 64)";

function changeNodeColor(node) {
  var gender = node.attributes.gender;
  if(gender == 0) {
    node.color = node_no_gender_color;
  } else if(gender == 1) {
    node.color = node_female_color;
  } else if(gender == 2) {
    node.color = node_male_color;
  }
}

function changeEdgeColor(edge) {
  var ref = edge.attributes.genders.split("-");
  var c_1 = "rgb(0,0,0)";
  var c_2 = "rgb(0,0,0)";
  switch(parseInt(ref[0])) {
    case 2:
    c_1 = male_color;
    break;
    case 1:
    c_1 = female_color;
    break;
    case 0:
    c_1 = no_gender_color;
    break;
  }
 switch(parseInt(ref[1])) {
    case 2:
    c_2 = male_color;
    break;
    case 1:
    c_2 = female_color;
    break;
    case 0:
    c_2 = no_gender_color;
    break;
  }
//  edge.color = blend_colors(c_1, c_2);
  if(c_1!= c_2){          //added for testing and printing purppos
    edge.color ="rgb(180,180,180)";
  }else{
    edge.color=c_1;
  }
}


function blend_colors(color1, color2){
  var c1 = color1.slice(4, color1.length-1).split(",");
  var c2 = color2.slice(4, color2.length-1).split(",");
  return "rgb("+Math.floor((parseInt(c1[0]) + parseInt(c2[0]))/2)+","+Math.floor((parseInt(c1[1]) + parseInt(c2[1]))/2)+","+Math.floor((parseInt(c1[2]) + parseInt(c2[2]))/2)+")";
}

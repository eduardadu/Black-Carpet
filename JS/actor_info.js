var parentNode;
var lastRangeNode;
var currRange;
var childNodesIds = [];

function displayActorInfo(node) {
  parentNode = node;
  document.getElementById("actor_degree").value = 1;
  document.getElementById("degree_val").innerText = 1;
  var img = document.querySelector("#actorimg");
  img.src = "";
  var name = document.getElementById("actor_name");
  var link = document.getElementById("actor_link");
  var img_path = node.attributes.photo;
  if(img_path != "character" && img_path != null) {
    img.src = "https://image.tmdb.org/t/p/w1280"+img_path;
  } else {
    //PLACE HOLDER
  }
  name.innerText = node.label;
  link.href = "https://www.themoviedb.org/person/"+node.attributes.tmdb_id;
}

$( document ).ready(function() {
  $("#actor_degree").change(function() {
    var range = $("#actor_degree").val();
    document.getElementById("degree_val").innerText = range;
    hightlightNode_range(parentNode, range);
  });

  $("#actor_info_cancel").click(function() {
    resetHighlights("mindAtts");
    parentNode = null;
    OpenCloseActor(true);

    s.refresh();
  });
});


function hightlightNode_range(node, range) {
  if(node != null) {
    currRange = 0;
    childNodesIds = [];
    childNodesIds.push(node.id);
    targets = [];
    targets.push(node.id);

    //  darken Edges
    s.graph.edges().forEach((item, i) => {
      item.color = deSelected;
      item.size = parseInt(item.attributes.weigth);
    });

    //  Brightnen parentNode
    changeNodeColor(node);
    node.color = blend_colors(node.color, "rgb(255, 255, 255)");

    while(currRange < range) {
      var l = targets.length;
      var il = childNodesIds.length;
      for(let u=0; u<l; u++) {
        if(childNodesIds[u] != null) {
          s.graph.adjacentEdges(childNodesIds[u]).forEach((item, i) => {
            if(u == 0 && edgeCatTest(item)) { //Aqui podem haver conexões com generos diferentes
              if(u < il) {
                if(currRange > 0) {
                  if(!childNodesIds.includes(item.source)) {
                    childNodesIds.push(item.source);
                  }
                  if(!childNodesIds.includes(item.target)) {
                    childNodesIds.push(item.target);
                  }
                } else {
                }
              }
              if(!targets.includes(item.target)) {
                targets.push(item.target);
              }
              if(!targets.includes(item.source)) {
                targets.push(item.source);
              }
            } else if(edgeGenderTest(item) && edgeCatTest(item)) { //Aqui não podem haver conexões com generos diferentes
              if(u < il) {
                if(currRange > 0) {
                  if(!childNodesIds.includes(item.source)) {
                    childNodesIds.push(item.source);
                  }
                  if(!childNodesIds.includes(item.target)) {
                    childNodesIds.push(item.target);
                  }
                }
              }
              if(!targets.includes(item.target)) {
                targets.push(item.target);
              }
              if(!targets.includes(item.source)) {
                targets.push(item.source);
              }
            }
          });
        }
      }
      currRange++;
    }

    //Darken Nodes
    var getGenders = getSelectedGenders();
    s.graph.nodes().forEach((item, i) => {
      if(item.id != node.id) {
        changeNodeColor(item);
        item.color = blend_colors(item.color, deSelected);
        if(targets.includes(item.id)){
          if(getGenders.includes(parseInt(item.attributes.gender).toString())) {
            changeNodeColor(item);
          }
        }
      }
      if(childNodesIds.includes(item.id)) {
        hNode(item.id, item);
      }

    });
    s.refresh();
  }
}

function hNode(nid, node) {
  s.graph.adjacentEdges(nid).forEach((item, i) => {
    item.size = parseInt(item.attributes.weigth) * edgeSelectedSizeInc;
    var cat = getSelectedGenres();
    var genders = getSelectedGenders();
    let sumVisibleEdges = 0;
    //Categorias
    for(let u = 0; u < cat.length; u++) {
      if(item.attributes[cat[u]] != null) {
        sumVisibleEdges += parseInt(item.attributes[cat[u]]);
      }
    }

    if(sumVisibleEdges > 0) {
      //Generos
      var g = item.attributes.genders.split("-");
      if(parentNode.id == item.source || parentNode.id == item.target) {
        var diff_g = parseInt(g[0]);
        if(diff_g == parentNode.attributes.gender) {
          diff_g = parseInt(g[1]);
        }
        if(genders.includes(diff_g.toString())) {
          changeEdgeColor(item);
        } else {
          item.color = deSelected;
        }
      } else {
        if(genders.includes(g[0]) && genders.includes(g[1])) {
          changeEdgeColor(item);
        } else {
          item.color = deSelected;
        }
      }
    } else {
      item.color = deSelected;
    }
  });
}

function resetHighlights(state) {
  if(state == "mindAtts") {
    var genders = getSelectedGenders();
    var cat = getSelectedGenres();
    //Edges
    s.graph.edges().forEach((item, i) => {
      let sumVisibleEdges = 0;
      //Categorias
      for(let u = 0; u < cat.length; u++) {
        if(item.attributes[cat[u]] != null) {
          sumVisibleEdges += parseInt(item.attributes[cat[u]]);
        }
      }
      //Generos
      var g = item.attributes.genders.split("-");
      if(genders.includes(g[0]) && genders.includes(g[1]) && sumVisibleEdges > 0 ) {
        changeEdgeColor(item);
        item.size = parseInt(item.attributes.weigth);
      } else {
        item.color = deSelected;
      }
    });
    //Nodes
    s.graph.nodes().forEach((item, i) => {
      changeNodeColor(item);
      if(!genders.includes(parseInt(item.attributes.gender).toString())) {
        item.color = blend_colors(item.color, deSelected);
      }
    });
  } else {
    s.graph.edges().forEach((item, i) => {
      changeEdgeColor(item);
      item.size = parseInt(item.attributes.weigth);
    });
    s.graph.nodes().forEach((item, i) => {
      changeNodeColor(item);
    });
  }
}


function edgeGenderTest(ed) {
  var g = ed.attributes.genders.split("-");
  var genders = getSelectedGenders();
  if(genders.includes(g[0]) && genders.includes(g[1])) {
    return true;

  } else {
    return false;
  }
}


function edgeCatTest(ed) {
  var cat = getSelectedGenres();
  let sumVisibleEdges = 0;
  //Categorias
  for(let u = 0; u < cat.length; u++) {
    if(ed.attributes[cat[u]] != null) {
      sumVisibleEdges += parseInt(ed.attributes[cat[u]]);
    }
  }
  if(sumVisibleEdges > 0) {
    return true;
  } else {
    return false;
  }
}


function displayInfo(i){
  genero= i;
  if(genero==0.0){
    document.querySelector('#imgcolor').style.backgroundColor = shadeColor(document.getElementById("notCell").value, -50); //roxo
  }else if(genero==2.0){
    document.querySelector('#imgcolor').style.backgroundColor = shadeColor(document.getElementById("maleCell").value, -50);//vermelho
  }else{
    document.querySelector('#imgcolor').style.backgroundColor = shadeColor(document.getElementById("femaleCell").value, -50); //verde
  }
  OpenCloseActor(false);
}




function shadeColor(color, percent) {
    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;
    G = (G<255)?G:255;
    B = (B<255)?B:255;

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}

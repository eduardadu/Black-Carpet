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
    resetHighlights();
    parentNode = null;
    document.querySelector('#actor_info').style.display="none";
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
    //darken Edges
    s.graph.edges().forEach((item, i) => {
      item.color = deSelected;
      item.size = parseInt(item.attributes.weigth);
    });

    //Brightnen parentNode
    changeNodeColor(node);
    node.color = blend_colors(node.color, "rgb(255, 255, 255)");

    while(currRange < range) {
      var l = targets.length;
      var il = childNodesIds.length;
      for(let u=0; u<l; u++) {
        s.graph.adjacentEdges(childNodesIds[u]).forEach((item, i) => {
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
        });
      }
      currRange++;
    }
    //Darken Nodes
    s.graph.nodes().forEach((item, i) => {
      if(item.id != node.id) {
        changeNodeColor(item);
      }
      if(childNodesIds.includes(item.id)) {
        hNode(item.id);
      }
      if(!targets.includes(item.id)){
        changeNodeColor(item);
        item.color = blend_colors(item.color, deSelected);
      }
    });
    s.refresh();
  }
}

function hNode(nid) {
  s.graph.adjacentEdges(nid).forEach((item, i) => {
    item.size = parseInt(item.attributes.weigth) * edgeSelectedSizeInc;
    changeEdgeColor(item);
  });
}

function resetHighlights() {
  console.log("reseted");
  s.graph.edges().forEach((item, i) => {
    changeEdgeColor(item);
    item.size = parseInt(item.attributes.weigth);
  });

  s.graph.nodes().forEach((item, i) => {
    changeNodeColor(item);
  });
  //s.refresh();

}


function displayInfo(i){
  genero= i;
  console.log(genero);
  if(genero==0.0){
    document.querySelector('#imgcolor').style.backgroundColor="#191024"; //roxo
  }else if(genero==2.0){
    document.querySelector('#imgcolor').style.backgroundColor="#701A1D"; //vermelho
  }else{
    document.querySelector('#imgcolor').style.backgroundColor="#1A423A"; //verde
  }
  document.querySelector('#actor_info').style.display="flex";

}

$( document ).ready(function() {
  $("#genre_selector").change(function() {
    updateAllStylings();
  });
  $("#genre_hide_all").click(function() {
    $('.genre_box').each(function(i, obj) {
      obj.checked = false;
    });
    updateAllStylings();
  });
  $("#genre_show_all").click(function() {
    $('.genre_box').each(function(i, obj) {
      obj.checked = true;
    });
    updateAllStylings();
  });
  $("#gender_selector").change(function() {
    updateAllStylings();
  });
});

function getSelectedGenres() {
  var boxes = document.querySelector("#genre_selector").children;
  var selected = [];
  for(let i=0; i<boxes.length; i++) {
    if(boxes[i].className == "genre_box" && boxes[i].checked) {
      selected.push(boxes[i].value);
    }
  }
  return selected;
}

function getSelectedGenders() {
  var boxes = document.querySelector("#gender_selector").children;
  var selected = [];
  for(let i=0; i<boxes.length; i++) {
    if(boxes[i].className == "gender_box" && boxes[i].checked) {
      selected.push(boxes[i].value);
    }
  }
  return selected;
}

function updateAllStylings() {
  if(parentNode != null) {
    hightlightNode_range(parentNode, $("#actor_degree").val());
  } else {
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
  }
  s.refresh();
}



//Funções velho só porque sou um hoarder
// function updateGenreStyling() {
//   if(parentNode != null) {
//     hightlightNode_range(parentNode, $("#actor_degree").val());
//   } else {
//     var selected = getSelectedGenres();
//     s.graph.edges().forEach((item, i) => {
//       if(selected.length == 0) {
//         item.color = deSelected;
//       } else {
//         let sumVisibleEdges = 0;
//         for(let u = 0; u < selected.length; u++) {
//           if(item.attributes[selected[u]] != null) {
//             sumVisibleEdges += parseInt(item.attributes[selected[u]]);
//           }
//           if(sumVisibleEdges == 0 ) {
//             item.color = deSelected;
//           } else {
//             changeEdgeColor(item);
//           }
//         }
//       }
//     });
//   }
//   s.refresh();
// }
//
// function updateGenderStyling() {
//   var selected = getSelectedGenders();
//   console.log("to");
//   s.graph.nodes().forEach((item, i) => {
//     if(!selected.includes(parseInt(item.attributes.gender).toString())) {
//       changeNodeColor(item);
//       item.color = blend_colors(item.color, deSelected);
//     } else {
//       changeNodeColor(item);
//     }
//   });
//   s.graph.edges().forEach((item, i) => {
//     var g = item.attributes.genders.split("-");
//     if(!(selected.includes(g[0]) && selected.includes(g[1]))) {
//       item.color = deSelected;
//     } else {
//       changeEdgeColor(item);
//     }
//   });
//   s.refresh();
// }
//

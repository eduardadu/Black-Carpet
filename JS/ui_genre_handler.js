
$( document ).ready(function() {
  $("#genre_selector").change(function() {
    console.log("yo what the fuck");
    var boxes = document.querySelector("#genre_selector").children;
    var selected = [];
    for(let i=0; i<boxes.length; i++) {
      if(boxes[i].className == "genre_box" && boxes[i].checked) {
        selected.push(boxes[i].value);
      }
    }
    s.graph.edges().forEach((item, i) => {
      if(selected.length == 0) {
        item.color = deSelected;
      } else {
        let sumVisibleEdges = 0;
        for(let u = 0; u < selected.length; u++) {
          if(item.attributes[selected[u]] != null) {
            sumVisibleEdges += parseInt(item.attributes[selected[u]]);
          }
          if(sumVisibleEdges == 0 ) {
            item.color = deSelected;
          } else {
            changeEdgeColor(item);
          }
        }
      }
    });
    s.refresh();
  });
});

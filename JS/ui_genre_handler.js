var hiddenEdges = [];

$( document ).ready(function() {
  $("#genre_apply").click(function() {
    var boxes = document.querySelector("#genre_selector").children;
    var selected = [];
    for(let i=0; i<boxes.length; i++) {
      if(boxes[i].className == "genre_box" && boxes[i].checked) {
        selected.push(boxes[i].id);
      }
    }

    if(selected.length > 0) {
      var getEdges = s.graph.edges();
      //Verificar se há alguma edge escondida para adicionar
      //Aqui o ciclo tem de correr ao contrário por causa do .pop (que altera os index's)
      for(let j = hiddenEdges.length - 1; j >= 0 ; j--) {
        var hidden = hiddenEdges[j];
        let sumHiddenEdges = 0;

        for(let u = 0; u < selected.length; u++) {
          if(hidden.attributes[selected[u]] != null) {
            sumHiddenEdges += parseInt(hidden.attributes[selected[u]]);
          }
        }

        if(sumHiddenEdges > 0 ) {
          //Adicionar edge de volta
          hiddenEdges.pop(hidden);
          s.graph.addEdge(hidden);
        }
      }

      //Remover edges
      for(let j = 0; j < getEdges.length; j++) {
        var currentEdge = getEdges[j];
        let sumVisibleEdges = 0;

        for(let u = 0; u < selected.length; u++) {
          if(currentEdge.attributes[selected[u]] != null) {
            sumVisibleEdges += parseInt(currentEdge.attributes[selected[u]]);
          }
        }

        if(sumVisibleEdges <= 0 ) {
          //Remove edge
          hiddenEdges.push(currentEdge);
          
          s.graph.dropEdge(currentEdge.id);
        }
      }
      s.refresh();
    }
  });
});

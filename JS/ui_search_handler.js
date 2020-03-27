var highlightedNode = null;

$( document ).ready(function() {
  var guess = "€";
  var suggestion = document.getElementById("suggestion");
  var typed = document.getElementById("typed");

  //Bloquear o submit do form
  $("#search_actor").submit(function(e){
    e.preventDefault();
    var searchTerm = $("#search_bar").val();
    goToNode(guess);
  });

  //Update na search bar
  $("#search_bar").keyup(function() {
    var searchQ = $("#search_bar").val();
    typed.innerText = searchQ;
    if(searchQ.length > 1) {
      if(!guess.includes(searchQ.toLowerCase()) || searchQ.toLowerCase() != guess.substring(0, searchQ.length -1)) {
        guess = getSuggestion(searchQ.toLowerCase());
      }
      suggestion.innerText = guess.substring(searchQ.length);
    } else {
      suggestion.innerText = "";
    }
  });
});

//Encontrar sugestão
function getSuggestion(query) {
  for(let i=0; i<actorNames.length; i++) {
    var name = actorNames[i];
    if(name.toLowerCase().includes(query)){
      if(query == name.toLowerCase().substring(0, query.length)) {
        return name;
      }
    }
  }
  return "";
}

function goToNode(actorN) {
  console.log("Searching "+actorN);
  
  if(highlightedNode != null) {
    removeNodeHighlight(highlightedNode);
  }

  for(let i=0; i<s.graph.nodes().length; i++) {
    if(s.graph.nodes()[i].label === actorN) {
      highlightedNode = s.graph.nodes()[i];
    }
  }
  highlightedNode.color = hightedColor;
  var coods  = {x:highlightedNode['read_camcam1:x'], y:highlightedNode['read_camcam1:y'], ratio:0.1, angle:1};
  s.cameras.cam1.goTo(coods);
  hightlightNode(highlightedNode.id);
}
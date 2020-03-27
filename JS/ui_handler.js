$( document ).ready(function() {
  $("#genre_selector :input").change(function() {
    var boxes = document.querySelector("#genre_selector").children;
    var selected = [];
    for(let i=0; i<boxes.length; i++) {
      if(boxes[i].tagName == "INPUT" && boxes[i].checked) {
        selected.push(boxes[i].id);
      }
    }
    console.log(selected);

    //user o selected para mostar apenas as edges que contêm as genres lá dentro
    //esconder nodes que ficam sem edges?

  });
});

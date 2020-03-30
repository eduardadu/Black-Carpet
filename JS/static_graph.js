// var staticS;
//
// $(document).ready(function() {
//   //document.getElementById("sigma-static-container").style.display = "none";
//   staticS = new sigma(
//     {
//       renderer: {
//         container: document.getElementById('sigma-static-container'),
//         type: 'webgl',
//         camera: "cam2"
//       },
//       settings: {
//         labelColor: 'node',
//         minEdgeSize: 0.01,
//         maxEdgeSize: 0.9,
//         minNodeSize: 2,
//         maxNodeSize: 10,
//         batchEdgesDrawing: true,
//         webglEdgesBatchSize: 200,
//         defaultEdgeType: 'fast',
//         defaultNodeType: 'fast'
//       }
//     }
//   );
//   createStaticGaph();
// //BUTTON PARA MUDAR  $("#change2static").click(function() {
//   //   console.log("coisas");
//   //   switchGraphs();
//   // });
// });
//
// function createStaticGaph() {
//   $.getJSON( "data/data-big.json", function( data2 ) {
//     //applyCorrectColors(data2);
//     //resizeEdges(data2);
//     staticS.graph.read(data2);
//     staticS.refresh();
//   });
// }
//
//
//
// function switchGraphs() {
//   var dynamicContainer = document.getElementById("sigma-container");
//   var staticContainer = document.getElementById("sigma-static-container");
//
//   if(staticContainer.style.display == "none") {
//     dynamicContainer.style.display = "none";
//     staticContainer.style.display = "block";
//     staticS.refresh();
//   } else {
//
//   }
// }

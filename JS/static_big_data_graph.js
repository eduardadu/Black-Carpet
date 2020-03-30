// var staticS_big;
//
// $(document).ready(function() {
//   staticS_big = new sigma(
//     {
//       renderer: {
//         container: document.getElementById('sigma-static-bigData-container'),
//         type: 'canvas',
//         camera: "cam2"
//       },
//       settings: {
//         labelColor: 'node',
//         minEdgeSize: 0.1,
//         maxEdgeSize: 0.7,
//         minNodeSize: 1,
//         maxNodeSize: 5,
//         defaultEdgeType: 'arrow',
//         batchEdgesDrawing: true,
//         webglEdgesBatchSize: 200,
//       }
//     }
//   );
//   createStaticGaph("data-bigdata", staticS_big);
//   var coods  = {x:150, y:-100, ratio:1, angle:0};
//   staticS_big.cameras.cam2.goTo(coods);
//   staticS_big.refresh();
// });
//
// function createStaticGaph(jsonName, sInstance) {
//   $.getJSON( "data/"+jsonName+".json", function( data2 ) {
//     applyCorrectColors(data2);
//     resizeEdges(data2);
//     sInstance.graph.read(data2);
//     sInstance.refresh();
//   });
// }

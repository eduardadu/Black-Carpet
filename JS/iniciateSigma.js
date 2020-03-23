var s = new sigma(
  {
    renderer: {
      container: document.getElementById('sigma-container'),
      type: 'canvas'
    },
    settings: {
      labelColor: 'node',
      minEdgeSize: 0.1,
      maxEdgeSize: 2,
      minNodeSize: 5,
      maxNodeSize: 5,
    }
  }
);


var graph = {
  nodes: [
    { id: "n0", label: "node 1", x: 0, y: 0, size: 3, color: '#00BCD4' },
    { id: "n1", label: "node 2", x: 3, y: 1, size: 2, color: '#00BCD4' },
    { id: "n2", label: "node 3", x: 1, y: 3, size: 1, color: '#00BCD4' },
    { id: "n3", label: "node 4", x: 6, y: 0, size: 3, color: '#00BCD4' },
    { id: "n4", label: "node 5", x: 5, y: 1, size: 2, color: '#00BCD4' },
    { id: "n5", label: "node 6", x: 4, y: 3, size: 1, color: '#00BCD4' }
  ],
  edges: [
    { id: "e0", source: "n0", target: "n1",  color: '#545454', type:'line'},
    { id: "e1", source: "n1", target: "n2", color: '#545454', type:'line'},
    { id: "e2", source: "n1", target: "n3", color: '#545454', type:'line'},
    { id: "e3", source: "n1", target: "n4", color: '#545454', type:'line'},
    { id: "e4", source: "n2", target: "n0", color: '#545454', type:'line'},
    { id: "e5", source: "n2", target: "n3", color: '#545454', type:'line'},
    { id: "e6", source: "n3", target: "n2",  color: '#545454', type:'line'},
    { id: "e7", source: "n4", target: "n5", color: '#545454', type:'line'},
    { id: "e8", source: "n4", target: "n3", color: '#545454', type:'line'},
    { id: "e9", source: "n5", target: "n0", color: '#545454', type:'line'}


  ]
}


s.graph.read(graph);
s.refresh();

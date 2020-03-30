;(function() {
  'use strict';

  sigma.utils.pkg('sigma.canvas.edges');

  /**
  * This edge renderer will display edges as arrows going from the source node
  *
  * @param  {object}                   edge         The edge object.
  * @param  {object}                   source node  The edge source node.
  * @param  {object}                   target node  The edge target node.
  * @param  {CanvasRenderingContext2D} context      The canvas context.
  * @param  {configurable}             settings     The settings function.
  */
  sigma.canvas.edges.arrow = function(edge, source, target, context, settings) {
    var color = edge.color,
    prefix = settings('prefix') || '',
    size = edge[prefix + 'size'] || 1,
    edgeColor = settings('edgeColor'),
    defaultNodeColor = settings('defaultNodeColor'),
    defaultEdgeColor = settings('defaultEdgeColor'),
    sX = source[prefix + 'x'],
    sY = source[prefix + 'y'],
    tX = target[prefix + 'x'],
    tY = target[prefix + 'y'];

    if (!color)
    switch (edgeColor) {
      case 'source':
      color = source.color || defaultNodeColor;
      break;
      case 'target':
      color = target.color || defaultNodeColor;
      break;
      default:
      color = defaultEdgeColor;
      break;
    }


    context.strokeStyle = color;
    context.lineWidth = size;
    context.strokeStyle = color;
    context.lineWidth = size;
    context.strokeStyle = color;
    context.lineWidth = size;

    context.beginPath();
    context.moveTo(
      source[prefix + 'x'],
      source[prefix + 'y']
    );
    context.lineTo(
      target[prefix + 'x'],
      target[prefix + 'y']
    );
    context.stroke();
  };
})();

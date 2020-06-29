function loop_size(node) {
  var nodesVisited = []
  var nodeAt = node;
  var i = 0;
  while (nodesVisited.indexOf(nodeAt) === -1) {
    nodesVisited.push(nodeAt);
    nodeAt = nodeAt.next;
    i++;
  }
  return i - nodesVisited.indexOf(nodeAt);
}
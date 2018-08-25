const graph = {
    A: {B: 4, C: 2},
    B: {C: 3, D: 2, E: 3},
    C: {B: 1, D: 4, E: 5},
    D: {},
    E: {D: 1},
  };

  const unVisited = {A: true, B: true, C: true, D: true, E: true };
  const shortest = { A: 0, B: Infinity, C: Infinity, D: Infinity, E: Infinity};
  const dijkstra = node => {
      if (unVisited[node]) {
        delete unVisited[node]
        const root = graph[node];
        let shortestEdgeNode;
        Object.keys(root).forEach( key => {
            shortestEdgeNode = shortestEdgeNode || key;
            shortestEdgeNode = root[key] < root[shortestEdgeNode] ? key : shortestEdgeNode;
            const distance = shortest[node] + root[key];
            shortest[key] = (shortest[key] > distance) ? distance : shortest[key];
        });
        const nextNode = shortestEdgeNode && unVisited[shortestEdgeNode] ? shortestEdgeNode : Object.keys(unVisited)[0];
        nextNode && dijkstra(nextNode);
      }
  }
  dijkstra('A')
  console.log(shortest);

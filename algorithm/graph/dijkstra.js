const minDistance = (distance, sortestPathSet) => {
  let min = Number.MAX_VALUE;
  let index = -1;

  for (let i = 0; i < distance.length; i++) {
    if (!sortestPathSet[i] && distance[i] <= min) {
      min = distance[i];
      index = i;
    }
  }

  return index;
};

const printSortestPath = (distance, vertex, src) => {
  console.log(`Sortest path from ${src} to ${distance[vertex]}`);
};

const dijkstra = (graph, src) => {
  const V = graph.length;

  const distance = new Array(V);
  const sortestPathSet = new Array(V);

  // set initial value of distance is always infinity
  for (let i = 0; i < V; i++) {
    distance[i] = Number.MAX_VALUE;
    sortestPathSet[i] = false;
  }

  // distance from srouce to source is always 0
  distance[src] = 0;

  // we have v-1 vertex but we do not need to find the distance from last vertex,
  //   because there is no vertex after last vertex, for that we iterate from i = 0 to i < v-1
  for (let i = 0; i < V - 1; i++) {
    // find minimum distance between travarse vertex to adjacent vertex and take this vertex to travarse
    const u = minDistance(distance, sortestPathSet);

    // travarse this vertex
    sortestPathSet[u] = true;

    for (let v = 0; v < V; v++) {
      if (
        !sortestPathSet[v] &&
        graph[u][v] !== 0 &&
        distance[u] !== Number.MAX_VALUE &&
        distance[u] + graph[u][v] < distance[v]
      ) {
        distance[v] = distance[u] + graph[u][v];
      }
    }
  }

  printSortestPath(distance, 8, 0);
};

// How to write graph in adjacency matrix format?
// Adjacency Matrix is a 2D array of size V x V
// where V is the number of vertices in a graph.
// Let the 2D array be adj[][], a slot adj[i][j] = 1 indicates that there is an edge from vertex i to vertex j.
let graph = [
  [0, 4, 0, 0, 0, 0, 0, 8, 0],
  [4, 0, 8, 0, 0, 0, 0, 11, 0],
  [0, 8, 0, 7, 0, 4, 0, 0, 2],
  [0, 0, 7, 0, 9, 14, 0, 0, 0],
  [0, 0, 0, 9, 0, 10, 0, 0, 0],
  [0, 0, 4, 14, 10, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 1, 6],
  [8, 11, 0, 0, 0, 0, 1, 0, 7],
  [0, 0, 2, 0, 0, 0, 6, 7, 0],
];
dijkstra(graph, 0);

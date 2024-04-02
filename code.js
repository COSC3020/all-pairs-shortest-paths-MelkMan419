function allPairsShortestPaths(graph) {
    let dist = [];
    for (let i = 0; i < graph[0].length; i++) {
        dist[i] = [];
        for (let j = 0; j < graph[0].length; j++) {
            dist[i][j] = Infinity;
        }
        dist[i][i] = 0;
    }
    for (let i = 0; i < graph[1].length; i++) {
        let edge = graph[1][i];
        let [u,v,weight] = edge;
        dist[u][v] = weight;
    }
    for (let k = 0; k < graph[0].length; k++) {
        for (let i = 0; i < graph[0].length; i++) {
            for (let j = 0; j < graph[0].length; j++) {
                dist[i][j] = Math.min(dist[i][j],dist[i][k] + dist[k][j]);
            }
        }
    }
    return dist;
}

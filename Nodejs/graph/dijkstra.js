// https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm

function minimumDistance(distanceVector, visited) {
    const numVertices = distanceVector.length;
    let minWeight = Number.MAX_VALUE;
    let minIndex = -1;

    for (let i = 0; i < numVertices; i++) {
        if(!visited[i] && distanceVector[i] < minWeight) {
            minWeight = distanceVector[i];
            minIndex = i;
        }
    }

    return minIndex;
}

function dijkstra(adjacencyMatrix, nodeSource) {
    const numVertices = adjacencyMatrix.length;
    const distanceVector = new Array(numVertices).fill(Number.MAX_VALUE);
    const pathVector = new Array(numVertices).fill(-1);
    const visited = new Array(numVertices).fill(false);

    distanceVector[nodeSource] = 0;

    for (let i = 0; i < (numVertices - 1); i++) { // all verticies of the Graph
        const minIndex = minimumDistance(distanceVector, visited);

        visited[minIndex] = true;
        
        for(let j = 0; j < numVertices; j++) {
            const weight = adjacencyMatrix[minIndex][j];

            const tempWeight = distanceVector[minIndex] + weight;

            const minCondition =
                weight !== 0 && // edge between minIndex and j.
                !visited[j] && // j isn't visited
                distanceVector[minIndex] !== Number.MAX_VALUE && // There is not a path
                tempWeight < distanceVector[j]; // the accumulated distance is smaller.


            if (minCondition) {
                distanceVector[j] = tempWeight;
                pathVector[j] = minIndex;
            }
        }
    }

    return [distanceVector, pathVector];
}

function path(pathVector, nodeSource, nodeDestiny) {
    const numVertices = pathVector.length;
    const sequence = [];
    let i = 0;
    let curNode = nodeDestiny;  

    while (curNode !== nodeSource && i < numVertices) {
        sequence.push(curNode);
        curNode = pathVector[curNode];
        i++
    }

    if (curNode === nodeSource) {
        sequence.push(curNode);
    }

    return sequence.reverse();
}

module.exports = {
    dijkstra,
    path,
};

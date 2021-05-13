const { dijkstra, path } = require('./dijkstra');

function main() {
    const NODE_SOURCE = 0;
    const NODE_DESTINY = 4;

    const adjacencyMatrix = [
        //     0, 1, 2, 3, 4,  5,  6, 7,  8
        /*0*/ [0, 4, 0, 0,  0, 0,  0, 8,  0],
        /*1*/ [4, 0, 8, 0,  0, 0,  0, 11, 0],
        /*2*/ [0, 8, 0, 7,  0, 0,  0, 0,  2],
        /*3*/ [0, 0, 7, 0,  9, 14, 0, 0,  0],
        /*4*/ [0, 0, 0, 9,  0, 10, 0, 0,  0],
        /*5*/ [0, 0, 4, 14, 10, 0, 0, 0,  0],
        /*6*/ [0, 0, 0, 0,  0,  2, 0, 1,  6],
        /*7*/ [8, 11,0, 0,  0,  0, 1, 0,  7],
        /*8*/ [0, 0, 2, 0,  0,  0, 6, 7,  0],
    ];
    
    const [distanceVector, pathVector] = dijkstra(adjacencyMatrix, NODE_SOURCE);

    console.log(distanceVector, pathVector);

    console.log(distanceVector[NODE_DESTINY], path(pathVector, NODE_SOURCE, NODE_DESTINY).join('->'));
}

main();

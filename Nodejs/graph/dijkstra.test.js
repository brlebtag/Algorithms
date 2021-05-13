// https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/

const { dijkstra, path } = require('./dijkstra');

const ADJACENCY_MATRIX = [
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

const NODE_ORIGIN = 0;

describe('dijkstra', () => {
    describe('.dijkstra()', () => {
        it('should return distance 14 when destiny node is 8', () => {
            const [distanceVector, pathVector] = dijkstra(ADJACENCY_MATRIX, NODE_ORIGIN);
            const NODE_DESTINY = 8;
            expect(distanceVector[NODE_DESTINY]).toBe(14);
        });

        it('should return distance 19 when destiny node is 3', () => {
            const [distanceVector, pathVector] = dijkstra(ADJACENCY_MATRIX, NODE_ORIGIN);
            const NODE_DESTINY = 3;
            expect(distanceVector[NODE_DESTINY]).toBe(19);
        });

        it('should return distance 21 when destiny node is 4', () => {
            const [distanceVector, pathVector] = dijkstra(ADJACENCY_MATRIX, NODE_ORIGIN);
            const NODE_DESTINY = 4;
            expect(distanceVector[NODE_DESTINY]).toBe(21);
        });
    });
    
    describe('.path()', () => {
        it('should return \'0->1->2->8\' when destiny node is 8', () => {
            const [distanceVector, pathVector] = dijkstra(ADJACENCY_MATRIX, NODE_ORIGIN);
            const NODE_DESTINY = 8;
            expect(path(pathVector, NODE_ORIGIN, NODE_DESTINY).join('->')).toBe('0->1->2->8');
        });

        it('should return \'0->1->2->3\' when destiny node is 3', () => {
            const [distanceVector, pathVector] = dijkstra(ADJACENCY_MATRIX, NODE_ORIGIN);
            const NODE_DESTINY = 3;
            expect(path(pathVector, NODE_ORIGIN, NODE_DESTINY).join('->')).toBe('0->1->2->3');
        });

        it('should return distance \'0->7->6->5->4\' when destiny node is 4', () => {
            const [distanceVector, pathVector] = dijkstra(ADJACENCY_MATRIX, NODE_ORIGIN);
            const NODE_DESTINY = 4;
            expect(path(pathVector, NODE_ORIGIN, NODE_DESTINY).join('->')).toBe('0->7->6->5->4');
        });
    });
});
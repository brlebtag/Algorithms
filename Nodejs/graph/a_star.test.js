const {
    aStar,
    path,
    moveToNextLowest,
    clockwise8Neighbors,
    clockwise4Neighbors,
    Node,
    euclidianDistance,
    manhattanDistance,
    diagonalDistance,
} = require('./a_star.js');

//   0123456789
// 0[ x        ]
// 1[  X       ]
// 2[  X  X    ]
// 3[    X     ]
// 4[          ]
// 5[ X    X   ]
// 6[  X       ]
// 7[    X     ]
// 8[     X X  ]
// 9[     X X  ]
//

function pair(node) {
    return [node.x, node.y];
}

const Grid = new Array(10);

for(let i = 0; i < 10; i++) {
    Grid[i] = new Array(10);

    for(let j = 0; j < 10; j++) {
        Grid[i][j] = new Node(i, j);
    }
}

Grid[1][0].obstacle = true;
Grid[2][1].obstacle = true;
Grid[2][2].obstacle = true;
Grid[5][2].obstacle = true;
Grid[4][3].obstacle = true;
Grid[1][5].obstacle = true;
Grid[6][5].obstacle = true;
Grid[2][6].obstacle = true;
Grid[4][7].obstacle = true;
Grid[5][8].obstacle = true;
Grid[7][8].obstacle = true;
Grid[5][9].obstacle = true;
Grid[7][9].obstacle = true;

describe('a_star', () => {
    describe('clockwise4Neighbors', () => {
        it('should return 2 nodes when asking for the neighbors of left-top-corner node', () => {
            const sourceNode = Grid[0][0];
            const neighbors = clockwise4Neighbors(sourceNode, Grid);
            expect(neighbors.length).toBe(2);
            expect(pair(neighbors[0])).toEqual([1, 0]);
            expect(pair(neighbors[1])).toEqual([0, 1]);
        });

        it('should return 2 nodes when asking for the neighbors of right-top-corner node', () => {
            const sourceNode = Grid[9][0];
            const neighbors = clockwise4Neighbors(sourceNode, Grid);
            expect(neighbors.length).toBe(2);
            expect(pair(neighbors[0])).toEqual([9, 1]);
            expect(pair(neighbors[1])).toEqual([8, 0]);
        });

        it('should return 2 nodes when asking for the neighbors of right-bottom-corner node', () => {
            const sourceNode = Grid[9][9];
            const neighbors = clockwise4Neighbors(sourceNode, Grid);
            expect(neighbors.length).toBe(2);
            expect(pair(neighbors[0])).toEqual([9, 8]);
            expect(pair(neighbors[1])).toEqual([8, 9]);
        });

        it('should return 2 nodes when asking for the neighbors of left-bottom-corner node', () => {
            const sourceNode = Grid[0][9];
            const neighbors = clockwise4Neighbors(sourceNode, Grid);
            expect(neighbors.length).toBe(2);
            expect(pair(neighbors[0])).toEqual([0, 8]);
            expect(pair(neighbors[1])).toEqual([1, 9]);
        });

        it('should return 4 nodes when asking for the neighbors of middle node', () => {
            const sourceNode = Grid[5][5];
            const neighbors = clockwise4Neighbors(sourceNode, Grid);
            expect(neighbors.length).toBe(4);
            expect(pair(neighbors[0])).toEqual([5, 4]);
            expect(pair(neighbors[1])).toEqual([6, 5]);
            expect(pair(neighbors[2])).toEqual([5, 6]);
            expect(pair(neighbors[3])).toEqual([4, 5]);
        });
    });

    describe('clockwise8Neighbors', () => {
        it('should return 3 nodes when asking for the neighbors of left-top-corner node', () => {
            const sourceNode = Grid[0][0];
            const neighbors = clockwise8Neighbors(sourceNode, Grid);
            expect(neighbors.length).toBe(3);
            expect(pair(neighbors[0])).toEqual([1, 0]);
            expect(pair(neighbors[1])).toEqual([1, 1]);
            expect(pair(neighbors[2])).toEqual([0, 1]);
        });

        it('should return 3 nodes when asking for the neighbors of right-top-corner node', () => {
            const sourceNode = Grid[9][0];
            const neighbors = clockwise8Neighbors(sourceNode, Grid);
            expect(neighbors.length).toBe(3);
            expect(pair(neighbors[0])).toEqual([9, 1]);
            expect(pair(neighbors[1])).toEqual([8, 1]);
            expect(pair(neighbors[2])).toEqual([8, 0]);
        });

        it('should return 3 nodes when asking for the neighbors of right-bottom-corner node', () => {
            const sourceNode = Grid[9][9];
            const neighbors = clockwise8Neighbors(sourceNode, Grid);
            expect(neighbors.length).toBe(3);
            expect(pair(neighbors[0])).toEqual([9, 8]);
            expect(pair(neighbors[1])).toEqual([8, 9]);
            expect(pair(neighbors[2])).toEqual([8, 8]);
        });

        it('should return 3 nodes when asking for the neighbors of left-bottom-corner node', () => {
            const sourceNode = Grid[0][9];
            const neighbors = clockwise8Neighbors(sourceNode, Grid);
            expect(neighbors.length).toBe(3);
            expect(pair(neighbors[0])).toEqual([0, 8]);
            expect(pair(neighbors[1])).toEqual([1, 8]);
            expect(pair(neighbors[2])).toEqual([1, 9]);
        });

        it('should return 8 nodes when asking for the neighbors of middle node', () => {
            const sourceNode = Grid[5][5];
            const neighbors = clockwise8Neighbors(sourceNode, Grid);
            expect(neighbors.length).toBe(8);
            expect(pair(neighbors[0])).toEqual([5, 4]);
            expect(pair(neighbors[1])).toEqual([6, 4]);
            expect(pair(neighbors[2])).toEqual([6, 5]);
            expect(pair(neighbors[3])).toEqual([6, 6]);
            expect(pair(neighbors[4])).toEqual([5, 6]);
            expect(pair(neighbors[5])).toEqual([4, 6]);
            expect(pair(neighbors[6])).toEqual([4, 5]);
            expect(pair(neighbors[7])).toEqual([4, 4]);
        });
    });

    describe('euclidianDistance', () => {
        it('should return square root of 8 from the euclidian distance of (0,0) to (2,2)', () => {
            expect(euclidianDistance(Grid[0][0], Grid[2][2])).toBe(Math.sqrt(8));
        });
    });

    describe('manhattanDistance', () => {
        it('should return 4 from the manhattan distance of (0,0) to (2,2)', () => {
            expect(manhattanDistance(Grid[0][0], Grid[2][2])).toBe(4);
        });
    });

    describe('manhattanDistance', () => {
        it('should return 2 from the manhattan distance of (0,0) to (2,2)', () => {
            expect(diagonalDistance(Grid[0][0], Grid[2][2])).toBe(2);
        });
    });
});